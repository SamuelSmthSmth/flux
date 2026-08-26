# 🔄 PDF → Markdown Conversion Pipeline (the "better method")

Replaces the manual OCR / copy-paste-into-Gemini workflow with a scriptable pipeline.
Same output format the existing `upload_full_paper.py` already consumes.

```
compiled PDF ──► split_papers.py ──► per-paper PDF ──► convert_paper.py (Gemini API)
                                                          │
                                                          ▼
                                            converted/Edexcel_A-Level_2019_P1.md
                                                          │
                                          validate_paper.py (auto checks)
                                                          │
                                                          ▼
                                     review in Obsidian → upload_full_paper.py → Firestore
```

## 🖥️ The GUI (easiest path — use this)

```bash
python3 gui.py          # opens http://127.0.0.1:8790 in your browser
```

Zero-dependency local web app covering the whole flow on one page:
pick the 3 PDFs (auto-detect maps `que`/`rms`/`pef` filenames), set board/sub-board/
year/paper, Convert (streams Gemini logs), review the normalized markdown, then
**Export to Firestore** (auto-finds `serviceAccountKey.json`, uploads `--only` that file).
See `PROJECT.md` §8 for details.

## Why this is better than the old way

- **Batch + repeatable** — one command per paper instead of manual prompting
- **Gemini API with a strict format prompt + few-shot example** — the prompt is versioned
  in `prompt.py`, so improvements persist instead of living in a chat
- **Auto-validation** catches artifacts (Code snippet, `$$$`, missing mark schemes,
  broken LaTeX, off-taxonomy topics) *before* human review — you only review the flagged bits
- **Zero new dependencies** — Python stdlib + poppler-utils (already installed)

## Setup (once)

1. Get a free Gemini API key: https://aistudio.google.com/apikey
2. `export GEMINI_API_KEY=<your key>` (or put it in a `.env` / shell profile)

## Workflow

### 1. Split a compiled PDF into per-paper PDFs

```bash
python3 split_papers.py ~/Documents/"A Level Examination Content"/Mathematics/"Past Papers"/"9MA0-01-and-9MA0-02-A-level-Maths-Pure-Papers-compiled-PDF-all-to-2025.pdf" --out splits --dry-run
```

Detects title pages automatically (Pearson Edexcel + paper code) and prints the manifest.
Drop `--dry-run` to actually write the per-paper PDFs.

### 2. Convert one paper

```bash
python3 convert_paper.py splits/9MA0-01_2019.pdf --board Edexcel --subboard A-Level --year 2019 --paper P1
```

If you have the paper, mark scheme and examiner report as **separate PDFs**, pass them
in that order — each is sent to Gemini labelled so the right section is built from the
right PDF:

```bash
python3 convert_paper.py paper.pdf ms.pdf er.pdf --board Edexcel --subboard AEA --year 2010 --paper P1
```

- `--board`/`--subboard` must match what the app queries (`Edexcel` + `A-Level` for
  standard papers, `Edexcel` + `AEA` for AEA, etc.)
- Model default `gemini-3.6-flash` (free tier). Try `--model gemini-3.1-pro-preview` if quality lags.
- Output: `converted/Edexcel_A-Level_2019_P1.md`

### The prompt's few-shot example is `PAPER_TEMPLATE.md` (project root)

`build_system_prompt()` embeds the template file as the output-format example, so the
model always sees the exact structure — frontmatter, bold parts with marks, italic
figure descriptions, mark-scheme steps. The template also shows where ```tikz diagram
blocks go (right after the figure description), but the model NEVER writes them: rule 5
forbids fenced blocks, and the diagrams are added by a human after conversion.

### Known gotchas (already handled in the script)
- `gemini-2.5-flash` is retired for new API keys — the 3.x family is current.
- 3.x flash is a **thinking model**: a small `maxOutputTokens` budget gets burned on
  internal reasoning, truncating output (`finishReason: MAX_TOKENS` at ~300 visible tokens).
  The script sets `maxOutputTokens: 65536` — do not lower it.

### 3. Normalize + validate

The model transcribes content well but often invents its own section structure
(`## Part 1: Question Paper`, plain `### Question N` headers, a transcribed
cover page, no frontmatter). `normalize_converted.py` reshapes that into the
required structure — bold `### **Question N**` / `### **Mark Scheme N**` /
`### **Examiner Report N**` headers and strips the cover noise:

```bash
python3 normalize_converted.py converted/       # safe to run twice
python3 validate_paper.py converted/
```

The validator fails loudly on structural errors; it warns on soft issues
(missing frontmatter is fine — the uploader's `classify()` assigns topics).

### 4. Review in Obsidian

Output files land in the same format as the existing bank — copy them into
`Flux/Papers/Edexcel/` and review only what the validator flagged (or anything that
looks off). This is the same review loop you already had, minus the bulk work.

### 5. Upload

The `flux` markdown files go into `~/Documents/firebase stuff/data/flux/` and run
`upload_full_paper.py` as before (it needs `serviceAccountKey.json` in that folder).
To upload a single reviewed paper:

```bash
cd "~/Documents/firebase stuff"
python3 upload_full_paper.py --only Edexcel_A-Level_2023_P1.md
```

## Pilot plan

1. Split the June 2026 AS Pure PDF (`8MA0-01 AS Pure Mathematics – June 2026 (pdf).pdf`,
   44 pages — single paper, small, safe to test on).
2. Convert + validate it.
3. **You grade the output** against the source PDF. If it's good → scale to the compiled
   files. If not → tweak `prompt.py` and re-run (that's the point of versioned prompts).

## Iterating on quality

- Bad math transcription → tighten Rule 2, add examples of tricky LaTeX
- Wrong topics → check the taxonomy in `all_topics_database.json`; add subtopics
- Too verbose/too terse mark schemes → adjust Rule 4 and the few-shot example
- Figures lost → check Rule 3/7 (we deliberately use placeholders; drawing is out of scope)

## Costs

- Flash free tier: ~250K input tokens/day — roughly 10–20 papers/day free
- Pro tier is a few cents per paper — fine for catching up on 1,230 pages of Pure
