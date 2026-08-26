# Flux

A searchable question bank for advanced mathematics. Filter thousands of A-Level and extension past-paper questions by topic, exam board, and tier — every question comes with its official mark scheme and the examiners' report.

## Stack

- **React 19 + TypeScript + Vite** — the app shell and UI
- **Tailwind CSS 4** (via `@tailwindcss/vite`) + `tw-animate-css` + the `shadcn` base preset (`shadcn/tailwind.css`)
- **Cloud Firestore (Firebase)** — question bank + topic taxonomy (`sys_config/metadata_index`)
- **KaTeX + react-markdown** — questions, mark schemes, and examiner reports render as math-enabled markdown
- **@vercel/analytics** — traffic analytics

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # typecheck (tsc -b) + production build
npm run lint     # eslint
npm run preview  # preview the production build
```

## How it works

The app is a three-step flow:

1. **Pick your tier** — Standard (Edexcel, OCR, MEI A-Level) or Advanced (AEA, MAT, MadAsMaths).
2. **Choose a topic** — a topic tree loaded from Firestore, searchable and drillable into subtopics.
3. **Find questions** — up to 10 matching questions per query (cached in `localStorage`), each with Mark Scheme and Examiner Report panes.

Questions live in the `flux` Firestore collection. Docs carry `board`, `subBoard`, `topic`, `subtopic`, plus `problem_markdown`, `mark_scheme_markdown`, and `examiner_report_markdown`.

## Content pipeline

- `firebase stuff/` — upload scripts and the paper data: `all_topics_database.json` (topic taxonomy), `data/flux_backup` (converted AEA papers), plus fields/forge backups from the earlier "Misty" era.
- `tools/convert/` — the paper→markdown conversion pipeline (PDF → markdown with question/topic metadata).

> Note: `serviceAccountKey.json` is deliberately **not** committed — it lives outside the repo.

## Documentation

- **`PROJECT.md`** — the full architecture + pipeline docs: data model, rendering (TikZ, figures, mark-scheme reveal), the A4 paper generator, the Gemini conversion pipeline, the GUI, gotchas, and the planned per-board topic lists. **Read this before touching the pipeline.**
- **`PAPER_TEMPLATE.md`** — the markdown format for new papers (embedded in the Gemini prompt, enforced by the validator).

## Design

The look is a deliberately playful "vibe-coded storybook" take on a study tool: Sora display headings, Nunito body, Caveat handwritten annotations, a green→blue accent gradient in both light and dark mode, and a floating layer of math symbols drifting behind the UI. All colors flow through CSS variables (`:root` / `[data-theme="dark"]`), and every animation respects `prefers-reduced-motion`.

There are also two dormant theme modes in `src/index.css` (Notebook and XP) that can be enabled by setting `data-vibe` on the root element — currently unused.

The design guidance comes from the `web-design` skill in `.agents/skills/` (see `skills-lock.json`).
