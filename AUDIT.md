# 🔍 Misty Audit — 2026-08-24

## Verdict

**The app is alive and builds cleanly.** The blocker for a public relaunch is **data,
not code**: the A-Level question bank lives in Firestore (`misty-6c232`), and we can't
verify it still exists (rules deny unauthenticated reads).

## What works

- `npm install` ✅ (after fix, see below) and `npm run build` ✅ (~510ms, Vite 8)
- Stack: React 19 + TypeScript + Vite + Tailwind 4 + Firebase/Firestore + KaTeX/react-markdown
- Three polished modes: **Flux** (A-Level question finder with topic tree + twin-pane
  mark-scheme workspace), **Fields** (proof library), **Forge** (competition problems)
- Vercel Analytics already wired in

## Fix made

- **Removed `react-latex-next` from package.json** — it was never imported anywhere in
  `src/`, yet its peer-dep (React ≤18) broke `npm install`. Removing it gives a clean
  install with no `--legacy-peer-deps` hack. (Committed locally? No — pending commit.)

## Update 2 (2026-08-24, evening) — operator confirmed + real pipeline found

- **Firestore data confirmed alive** (operator checked console): `flux` + `sys_config/metadata_index` exist.
- **Real pipeline found in `~/Documents/firebase stuff`** — now backed up into this repo
  (`firebase stuff/`, 86 files, secrets excluded):
  - `data/flux_backup/` — 61 converted AEA papers (the full AEA set)
  - `data/flux/` — 6 files (partial working copy)
  - `data/fields/` (6 proofs), `data/forge/` (5 competition files)
  - `upload_full_paper.py` + per-collection upload scripts + `all_topics_database.json`
    (topic taxonomy) + metadata/fix scripts
  - `serviceAccountKey.json` deliberately **not** copied (secret — lives in Documents only)
- **Product gap (important):** only **AEA papers** were converted to markdown. The Edexcel
  A-Level content exists as **compiled PDFs** (`~/Documents/A Level Examination Content/`:
  Mathematics + Further Mathematics, past papers to 2025, examiners reports, mocks, specs)
  but was never converted to the markdown bank. The Flux UI will show "No questions
  available for this board yet" for Edexcel until that conversion happens.

## Update 3 (2026-08-24, late) — conversion pipeline built

Built `tools/convert/` — the "better method" replacing manual OCR/Gemini copy-paste:

- `split_papers.py` — compiled PDF → per-paper PDFs (title-page detection via pdftotext,
  extraction via gs). Verified on the 1230-page Pure compilation: 28 papers detected with
  correct years and page ranges. Works.
- `convert_paper.py` — paper PDF → markdown via Gemini API (stdlib only, no packages;
  inline PDF upload, retries, versioned system prompt in `prompt.py` with few-shot example
  + taxonomy-constrained topic classification). Untested live — needs `GEMINI_API_KEY`.
- `validate_paper.py` — structural + artifact checks (question/ms pairing, frontmatter
  against taxonomy, balanced $, forbidden junk). Validated against the 61-file gold-standard
  bank: caught 5 genuine artifacts → it works.
- `README.md` — full workflow: split → convert → validate → Obsidian review → upload.

Note on formats: old `data/flux` per-paper files have NO frontmatter (topics came from the
OVERRIDE_MAP in `upload_full_paper.py`). The converter's inline frontmatter is strictly
better — the uploader reads it first and only falls back to classify().

## Update 4 (2026-08-24, night) — pipeline verified end-to-end

- **Firestore public read confirmed** (HTTP 200 on `sys_config/metadata_index`) — the
  live site at misty.sous.systems loads data. Rules are working.
- **Live pilot PASSED structurally**: June 2026 AS Pure → 722-line markdown, 14 questions
  + 14 mark schemes, validator 0 errors. Awaiting operator's content grade.
- **Key stored in `projects/misty/.env`** (gitignored). Model default `gemini-3.6-flash`;
  thinking models need `maxOutputTokens: 65536` or output truncates (~328 tokens).
- **`batch_convert.py`** added — auto-detect + convert whole compiled PDFs, resume-safe,
  rate-limit sleep, collision warnings. Dry-run on the 1230-page Pure file plans 28 papers.
- **Content inventory** (compiled, all to 2025): Maths = 7 files (AS+A-level pure/stats/
  mech); FM = 14 files (8 AS + 8 A-level). Old-spec papers (9MA0-03) detected inside
  some compilations — curate before converting.

## Go-live steps (confirmed data)

1. **Rules:** paste `firestore.rules` into Firebase console → Firestore Database → Rules → Publish.
2. **Deploy:** import the repo on Vercel (static build, zero config) → misty.sous.systems or
   similar. `@vercel/analytics` is already wired.
3. **Launch angle (honest):** "Every AEA maths paper (2010–2025) searchable by topic with
   markschemes" — AEA is complete; Edexcel labeled as "coming soon".

## Data situation (the critical part)

| Data | Location | Status |
|------|----------|--------|
| A-Level Edexcel/AQA/OCR/STEP/TMUA questions (the "every question" bank) | Firestore `flux` collection | ⚠️ unverifiable — rules deny public reads. **Must check Firebase console.** |
| Topic tree / metadata index | Firestore `sys_config/metadata_index` | ⚠️ same — must check |
| 950 generated competition problems (Calculus, origin "generated", full LaTeX solutions) | `database.json` (in repo) | ✅ safe locally — this is Forge content |
| Sample AEA 2024 paper (Q1–7, markdown) | `firebase stuff/` (in repo) | ✅ safe |
| Upload pipeline (markdown → Firestore) | `firebase stuff/upload.py`, `upload_m+fm.py` | ✅ present; needs `serviceAccountKey.json` (gitignored) |

**Risk:** if the Firebase project expired/was deleted, the A-Level bank may be lost —
unless the original source markdown folder (that `upload.py` parses) still exists
somewhere on the operator's machine. That would be the recovery path.

## Revival path (once data is confirmed)

1. **Confirm Firebase project** `misty-6c232` still exists with `flux` + `sys_config/metadata_index`
   (operator: Firebase console → Firestore Database).
2. **Fix Firestore rules** for public read (the app was built for unauthenticated reads —
   no auth flow exists in the code), or add auth if we want user accounts for freemium later.
3. **Deploy** via Vercel (repo already has `@vercel/analytics`; static build, zero config).
4. If Firestore is gone: recover from the source markdown folder → re-run upload scripts;
   or relaunch with `database.json` (Forge) + the 7 AEA questions as a minimal demo first.

## Optional improvements (later)

- Bundle is 920KB — code-split the three modes (Flux/Fields/Forge) with `React.lazy`
- `database.json` schema differs from the `flux` doc schema — unify if Forge goes live
- Add OG tags + meta description for shareability (currently bare)
- Licensing check before monetizing question content (AQA/Edexcel copyright — flagged
  in `shared/specs/misty-revival-brief.md`)

## Files worth knowing

- `src/App.tsx` (962 lines) — Flux mode, Firestore queries, workspace UI
- `src/components/Dashboard.tsx` (824 lines) — Fields + Forge modes, GeoGebra integration
- `problem_compiler.jl` + `prestige_compiler.py` — the Julia/Python question generators
- `database.json` — 950 generated problems (Forge bank)
