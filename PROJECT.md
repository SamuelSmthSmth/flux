# Flux — Project Documentation

Everything we've built and decided, so we can always come back and remember.
Companion to `README.md` (setup) and `PAPER_TEMPLATE.md` (markdown format for new papers).

**Project:** Flux — a past-paper question bank for A-Level maths (Edexcel AEA and A-Level),
with question search, per-topic browsing, and a paper/worksheet generator ("the briefcase")
that assembles printable A4 past papers.

**Stack:** React + TypeScript + Vite + Tailwind (shadcn/ui), Firebase (Firestore) for data,
KaTeX for maths, remark/rehype for markdown, TikZJax (WebAssembly TeX) for diagrams,
Python tooling for the Gemini-driven paper conversion + upload pipeline.

---

## 1. Repository layout

```
./
├── src/                          # React app (Vite)
│   ├── App.tsx                   # router: /home, /topics, /results, /paper
│   ├── main.tsx                  # entry point
│   ├── index.css                 # global styles incl. all A4 paper/print CSS
│   ├── pages/
│   │   ├── FluxPage.tsx          # home + topic browser + search results + detail pane
│   │   └── PaperPage.tsx         # renders the assembled paper / worksheet
│   ├── components/
│   │   ├── FluxMarkdown.tsx      # shared markdown renderer (KaTeX + GFM tables + TikZ)
│   │   ├── QuestionParts.tsx     # browse-card part renderer (inline letters, right marks)
│   │   ├── TikZDiagram.tsx       # renders ```tikz fenced blocks via TikZJax
│   │   ├── WorksheetView.tsx     # the paper/worksheet page-packer (A4)
│   │   ├── BriefcaseDrawer.tsx   # slide-out "briefcase" of selected questions
│   │   └── … (shadcn/ui primitives)
│   ├── lib/
│   │   ├── questionParts.ts      # part parser + per-part mark extraction
│   │   ├── markdown.ts           # KaTeX/markdown plumbing
│   │   ├── msSteps.ts            # mark-scheme step splitting (incremental reveal)
│   │   └── briefcase-context.ts  # global selected-question state (localStorage)
├── public/tikzjax/               # self-hosted TikZJax runtime (~7.7 MB, no CDN)
├── firebase stuff/
│   ├── data/flux/*.md            # source-of-truth full papers (one file per paper)
│   ├── upload_full_paper.py      # parses a full-paper .md → batched Firestore upload
│   ├── upload_flux.py / upload_forge.py / apply_metadata.py / …  # older uploaders
│   └── all_topics_database.json  # topic → subtopics taxonomy
├── tools/convert/                # Gemini conversion pipeline (see §7)
│   ├── gui.py                    # ★ local web GUI for the whole pipeline (see §8)
│   ├── convert_paper.py          # PDFs → Gemini → markdown
│   ├── prompt.py                 # system prompt (embeds PAPER_TEMPLATE.md)
│   ├── normalize_converted.py    # reshapes Gemini's output into the required structure
│   ├── validate_paper.py         # lint for the markdown format
│   ├── split_papers.py           # splits a multi-paper compiled PDF
│   └── converted/*.md            # Gemini conversions (Edexcel_A-Level_YYYY_PN.md)
├── PAPER_TEMPLATE.md             # the format spec / few-shot example (project root)
├── test_files/                   # scratch space for pipeline tests (gitignored)
└── .env                          # GEMINI_API_KEY (gitignored)
```

---

## 2. Routing & data model

### Routes (BrowserRouter in `App.tsx`)
| Route | Page | Notes |
|---|---|---|
| `/` | → `/home` | redirect |
| `/home` | FluxPage | landing / choose board + sub-board (standard vs advanced tiers) |
| `/topics` | FluxPage | topic browser; `?board=&subBoard=` |
| `/results` | FluxPage | search results; `?board=&subBoard=&topic=&subtopic=` |
| `/paper` | PaperPage | the assembled paper/worksheet from the briefcase |

URL params are the source of truth for searches: selecting a board commits to the URL
**only when you continue past the board screen** (a deliberate choice — board selection
itself doesn't rewrite the URL). Refreshing `/results?…` re-runs the search and caches it.

### Firestore
- **`flux` collection** — one doc per question, id `{Board}_{SubBoard}_{Year}_{Paper}_Q{n}`:
  ```json
  {
    "board": "Edexcel", "subBoard": "AEA", "year": "2010", "paper": "P1",
    "question_number": "3",
    "topic": "Integration", "subtopic": "Integration by substitution",
    "problem_markdown": "…", "mark_scheme_markdown": "…", "examiner_report_markdown": "…"
  }
  ```
- **`sys_config/metadata_index`** — one doc, holds:
  - `topics`: the global `topic → [subtopics]` taxonomy (read at boot by the app)
  - `activeFilters`: **per-board** topic lists (`{board: {topic: [subtopics]}}`) — the
    app already reads `metadata.activeFilters[board]` when present, falling back to the
    global `topics`. **Not yet populated** — see §10 (planned work).

**Search** runs `where(topic == …)` (+ board/subBoard/subtopic) with `limit(10)` and caches
results in localStorage per board/subBoard/topic/subtopic combo. This per-question doc
shape is deliberate: Firestore can't slice arrays, so keeping questions as individual docs
is what makes server-side filtered search + pagination possible (see §10 for the reasoning).

---

## 3. Rendering pipeline (frontend)

Everything funnels through **`FluxMarkdown.tsx`** (browse cards, detail pane, mark scheme,
paper questions, eco worksheet, examiner report — all surfaces):

- **Maths** — KaTeX via `remark-math` + `rehype-katex`.
- **Tables** — `remark-gfm` (added for Edexcel mark-scheme tables); styled in `index.css`.
- **TikZ diagrams** — ```tikz fenced blocks render via `TikZDiagram` (see §4).
- **Figures** — a `**Figure N** _(description)_` line followed by a ```tikz block is
  paired by `FigureAwareMarkdown`: the diagram renders **above**, the italic description
  becomes the caption **below** (e.g. "Figure 1 (A sketch of the curve y=(x−1.6)²+0.1…)").
  The description doubles as the alt text / fallback while TikZ loads or fails.

### Question parts (`src/lib/questionParts.ts`)
The part splitter finds `(a)`, `(b)`, `(i)`, `(ii)`… markers **outside** maths and TikZ
blocks (both are shielded first). Each part renders its letter inline with the text and
its marks **right-aligned** `(2)`, `(4)`…, with `(Total N marks)` pinned bottom-right —
matching the printed paper (see §5). Reused by browse cards (`QuestionParts.tsx`) and the
paper (`WorksheetView.tsx`).

### Mark scheme reveal
`splitMarkSchemeSteps` (`src/lib/msSteps.ts`) splits on `**Step N:**` markers. The detail
pane shows `revealedSteps` at a time with a "Reveal Next Step" / "Reveal All" button, and
**closing the mark scheme resets back to step 1** (deliberate — so re-opening always starts
from the top). The reveal animation slides smoothly.

---

## 4. TikZ diagrams — how it works and the two gotchas

**Runtime:** `@rod2ik/tikzjax` (the maintained fork of `tikzjax`; the original was
unpublished from npm). Assets are vendored into `public/tikzjax/` and loaded by a
`<script>` in `index.html` — zero CDN dependency. TikZJax watches for
`<script type="text/tikz">` blocks, compiles them with real TeX (WebAssembly), and replaces
them with inline SVG.

**`TikZDiagram` component** mounts the script imperatively and never lets React render
children into the div TikZJax touches.

> **Gotcha 1 (critical):** TikZJax mutates the DOM (replaces our script node with SVG).
> If React also owns those nodes, its later delete-commit throws
> `NotFoundError: …removeChild` and unmounts the **whole app** (blank page). Fix: the
> diagram div is React-childless — all DOM work is imperative, so React never owns anything
> TikZJax touches. Any future integration must respect this.

> **Gotcha 2 (deployment):** Vite's dev server and some hosts serve `.gz` files with
> `Content-Encoding: gzip`; TikZJax gunzips again → double-compression breaks it. Fix: the
> vendored assets were renamed off `.gz` (`core.dump.dat`, `tex.wasm` kept) and the worker's
> two filename strings patched — works in dev and production. Don't "clean up" the `.dat`
> rename.

**Ink colour:** TikZJax dark-mode-adapts diagram strokes (white on dark themes) — but
papers are white. CSS forces black ink inside paper/worksheet sheets; the browse UI keeps
the adaptive colours for dark cards.

**Perf:** first diagram on a page takes a few seconds (2.7 MB TeX core + compile; cached
afterwards). In the paper, diagrams render inside a capped band so the A4 page-packer stays
exact; production may want re-measurement after render for tighter packing.

**Authoring:** put `**Figure N** _(description)_` and the ```tikz block in the **same part**.
Keep TikZ pure TeX (`\begin{tikzpicture}` … `\end{tikzpicture}`). Descriptions stay in the
markdown (not in the TikZ) — they're the caption, the alt text, and the fallback.

---

## 5. Paper & worksheet generator ("the briefcase")

**Flow:** every question card has a "add to paper" toggle → `briefcase-context.ts` keeps the
selected question ids (persisted in localStorage) → the **BriefcaseDrawer** (shadcn Sheet
from the right) lists them, allows reorder/remove → **Export** opens a dialog with two
print styles:

| Style | Look |
|---|---|
| **Eco Print** | plain white worksheet — one question per page, ruled answer space |
| **Full Color** | realistic past-paper look — cover page, headers/footers, green accents (the old "Full Color" card was replaced with this) |

The exported document renders in `/paper` via **`WorksheetView.tsx`**, which:

- **Packs content into exact A4 pages** (1123 px @ 96dpi) using a hidden measurer;
  a question that overflows gets extra ruled pages — never cramped overflow.
- **Real-paper rules** (matching how exam papers actually look):
  - Every page same size (A4), same margins/layout; only the *content length* varies.
  - Cover page fits **one** A4 page: title, candidate box, instructions, barcode, "FLUX"
    wordmark, whitespace in the right places (built with absolute positioning, not flow).
  - Question pages omit source/topic info (an ordinary paper doesn't say where it's from),
    and omit the "DO NOT WRITE IN THIS AREA" text.
  - Question text at 11–12pt; marks fixed to the right of the question; part letters inline.
  - Blank/ruled answer pages: header says "Question 7" top-right; the **final** page of a
    question shows "(Total N marks)" bottom-right + "Turn over" / "End of question" as apt.
  - Mark scheme pages use black/dark-grey ink only (no light greys).
- Prints identically regardless of screen size (fixed A4 geometry + `@media print` CSS).

> **Print gotcha:** browsers add a blank page after each print page (A4 rounding). Workaround
  currently: "Print odd pages only". (Follow-up idea: tighten `@page` size / zoom to kill
  the blanks.)

---

## 6. The markdown format — `PAPER_TEMPLATE.md`

The one file to hand to anyone (or any model) writing future papers. Structure:

```markdown
---
topic: Graphs and Transformations
subtopic: Cubic graphs
---
### **Question 1**
**Figure 1** _(italic description — becomes the caption)_

```tikz
% TikZ code — renders as the diagram above the caption
```

**(a)** Part text with $math$ **(2 marks)**
**(b)** More text **(7 marks)**
**(i)** Roman sub-part **(2 marks)**
**(ii)** Another sub-part **(5 marks)**

**(Total 9 marks)**

#### **Part (a)**
**Step 1:** …
- **[M1]** method annotation
- **[A1]** answer annotation

#### **Part (b)**
**Step 2:** …

#### **Examiner Report**
Prose commentary in the examiners' voice.

### **Question 2**
…
```

Conventions: bold `### **Question N**` / `### **Mark Scheme N**` / `### **Examiner Report N**`
headers (the uploader keys **everything** off these), YAML frontmatter (`topic`/`subtopic`)
before the question, marks in bold parens per part, `(Total N marks)` line, `**Step N:**`
labels for incremental reveal, `**[M1]**`/`**[A1]**` annotations, `**Figure N** _(desc)_`
+ ```tikz for diagrams. The validator enforces it (see below).

---

## 7. The conversion pipeline — `tools/convert/`

```
PDFs ──convert_paper.py──▶ converted/*.md ──normalize_converted.py──▶ ──validate_paper.py──▶ ✓ ──upload_full_paper.py──▶ Firestore
```

### `convert_paper.py` — Gemini conversion
- `python3 convert_paper.py paper.pdf ms.pdf er.pdf --board Edexcel --subboard A-Level --year 2023 --paper P1`
- PDFs are sent **labelled in order** (1: question paper, 2: mark scheme, 3: examiner
  report — ER optional) so Gemini builds each section from the right file.
- Reads `GEMINI_API_KEY` from env or `.env` (repo root, gitignored). Default model
  `gemini-3.6-flash` (free tier); `--model` to override. Retries on network timeouts and
  flaky empty candidates; read timeout 7 min.
- Output: `converted/{Board}_{SubBoard}_{Year}_{Paper}.md`.

### `prompt.py` — the system prompt
- **Embeds `PAPER_TEMPLATE.md` as the few-shot example** (placed *before* the 200-line
  taxonomy so the model actually sees it) + the topic taxonomy + strict rules.
- Rules include: copy the template's **structure only**, never its content; bold headers;
  frontmatter before each question; never emit fenced blocks of any kind (TikZ is added
  afterwards by a human; the model writes only the `**Figure N** _(description)_` line);
  never invent image URLs.

### `normalize_converted.py` — the reality check
Gemini reliably transcribes content but **ignores the structure** (it invented
`## Part 1/2/3` sections, plain `### Question N`, no mark-scheme headers, a transcribed
cover page, fake `![](i.imgur.com/…)` placeholders). This script reshapes the output:
strips cover noise, rewrites headers to `### **Question N**` / `### **Mark Scheme N**` /
`### **Examiner Report N**`, converts imgur placeholders to `**Figure N** _(alt)_`, strips
trailing whitespace. **Idempotent** — safe to run twice.

### `validate_paper.py` — the lint
Checks: question headers, `(Total N marks)` present, part markers valid, figure/tikz
fences **balanced** (allows only ```tikz; rejects anything else, e.g. ```python), forbids
`i.imgur.com`/`example.png` artifacts, frontmatter presence (missing frontmatter is a
**warning**, not an error — the uploader auto-classifies topics anyway).

### Known model weaknesses
- Faked figure placeholders (imgur links) — caught by validator, fixed by normalizer.
- Two questions in one doc can leak through if the source is ambiguous (e.g. the
  "2011 P1 Q2" archive doc is actually two merged questions — data issue, not renderer).

---

## 8. The GUI — `tools/convert/gui.py` ★

Zero-dependency local web app (Python stdlib `http.server` only — tkinter isn't installed
on this machine, and a browser tab is less friction anyway):

```
python3 tools/convert/gui.py            # auto-opens http://127.0.0.1:8790
python3 tools/convert/gui.py --port 9000 --no-browser
```

One page, five steps:
1. **Paper details** — board / sub-board / year / paper (these become the Firestore tags).
2. **Source PDFs** — a built-in folder picker (Browse… per slot) with **⚡ Auto-detect**
   which assigns PDFs by filename keywords: `que|qp|question|paper` → question paper,
   `ms|rms|markscheme` → mark scheme, `er|pef|examiner|feedback` → examiner report.
3. **Convert with Gemini** — runs convert → normalize → validate, streaming live logs;
   previews the final markdown with Copy / Download.
4. **Export to Firestore** — copies the reviewed file into `firebase stuff/data/flux/`
   (matching filename), then runs the uploader `--only` on it. Service-account key path
   is auto-detected (`firebase stuff/serviceAccountKey.json` first).

Jobs run in background threads; the page polls `/api/job` for progress. The server binds
**127.0.0.1 only** — nothing exposed to the network.

**Sandbox note:** backgrounded processes die when the Freebuff shell exits, so the GUI is
meant to be run in your own terminal (it stays up there).

---

## 9. Upload pipeline — `firebase stuff/upload_full_paper.py`

- Walks `data/flux/*.md` (skips `_Q` split files); metadata from the filename
  (`Edexcel_AEA_2010_P1.md` → board/subBoard/year/paper).
- Parses `### Question N` / `### Mark Scheme N` / `### Examiner Report N` + YAML frontmatter
  (`topic:`/`subtopic:`); falls back to heuristic `classify()` (with an `OVERRIDE_MAP` for
  known AEA papers) when frontmatter is missing.
- **Writes one Firestore `batch` per paper** (one atomic commit instead of one round-trip
  per question) — the real efficiency win for bulk uploads.
- CLI flags (added for the GUI): `--only FILE`, `--markdown-dir`, `--topics`,
  `--service-account`. Firebase init is now lazy so `--help`/syntax checks work without
  credentials. Needs `firebase-admin` + a service-account key JSON.

Full add-a-paper workflow (see §10 of this doc for the checklist version):

```
python3 tools/convert/convert_paper.py <paper>.pdf <ms>.pdf [<er>.pdf] --board … --subboard … --year … --paper …
python3 tools/convert/normalize_converted.py converted/<Board>_<Sub>_<Year>_<Paper>.md
python3 tools/convert/validate_paper.py converted/<…>.md
# human review: add TikZ diagrams, verify maths (Q6/Q15 are the demanding ones)
cp converted/<…>.md "firebase stuff/data/flux/"
cd "firebase stuff" && python3 upload_full_paper.py --only <…>.md
```

---

## 10. Planned work & decisions

### ★ Per-board topic/subtopic lists (agreed design, not yet implemented)
**Problem:** AEA questions never touch further-maths topics, yet the topic sidebar lists
the full global taxonomy — students can pick topics that don't exist for their board.

**Design (what we'll build):**
1. **Generator script** (`firebase stuff/build_active_filters.py`): reads **every doc in the
   `flux` collection** (REST or admin SDK), collects
   `{board: {subBoard: {topic: [subtopics…]}}}` from the tags actually used, and writes it
   into `sys_config/metadata_index.activeFilters`.
2. **App fix (one line):** in `FluxPage.tsx` `filteredTopics`, change
   `metadata.activeFilters[exam.board] ?? {}` → `metadata.activeFilters[exam.board]?.[exam.subBoard] ?? {}`
   (the nested shape — `activeFilters[board]` currently renders sub-board names as topics,
   which is exactly the trap the failed-turn note flagged).
3. Optionally store per-topic question counts so the sidebar can show real counts.

Why keep per-question docs rather than storing papers as arrays: Firestore can't slice
arrays, so per-question docs are what make `where(topic==…)` + `limit(10)` search possible;
arrays would force fetching whole papers client-side and hit the 1 MiB doc ceiling. Arrays
are already used where they're right: whole-paper markdown source files and the taxonomy.

### Other tracked items
- **Bulk conversion:** AEA papers redone with diagrams; then A-Level papers. Template +
  validator + normalizer + GUI are ready; only authoring (TikZ by hand) remains.
- **Examiner reports:** kept in the question finder, **never printed** (the paper/worksheet
  exporters only use question + mark scheme). Deleting them later = one small block in
  `FluxPage`.
- **Print blank-page issue** — see §5; candidate fix: tune `@page` size/zoom.
- **Data quirks:** 2011 P1 Q2 (two merged questions); mark-scheme table rendering needs
  `remark-gfm` (already added).
- **Future:** the figure description stays in markdown (decision made); TikZ-above-caption
  pairing is final; diagram band in papers may need post-render re-measurement.

---

## 11. Gotchas & troubleshooting (quick reference)

| Symptom | Cause / fix |
|---|---|
| Blank app after adding TikZ | TikZJax mutates DOM React owns → keep `TikZDiagram` div React-childless |
| Diagrams white/invisible on paper | TikZJax dark-mode adaptation → CSS forces black ink in paper sheets |
| TikZJax fails to load core in deploy | `.gz` double-compression → assets renamed `.dat`, worker patched; don't revert |
| Extra blank page when printing | Browser A4 rounding → print odd pages only (see §5) |
| `ModuleNotFoundError: firebase_admin` | uploader needs its env; GUI shows the subprocess error |
| Conversion times out | read timeout 7 min + retries built in; big 3-PDF jobs are slow by design |
| Model ignores format | run `normalize_converted.py`, then `validate_paper.py`; do not hand-edit before normalizing |
| `--help` fails on uploader without firebase_admin | known; syntax is fine, deps are the user's env |

**Secrets:** `GEMINI_API_KEY` lives in `.env` (gitignored). Firestore is public-read
(that's how the app queries it without auth); writes go through the service account —
**keep `serviceAccountKey.json` out of git**.
