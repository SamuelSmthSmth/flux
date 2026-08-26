import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useBriefcase } from "../briefcase-context";
import { fmt, mdToTex } from "../lib/markdown";
import { splitMarkSchemeSteps } from "../lib/msSteps";
import type { BriefcaseItem } from "../briefcase-context";
import type { CoverStyle } from "./BriefcaseDrawer";

interface WorksheetViewProps {
  style: CoverStyle;
  includeAnswers: boolean;
  onClose: () => void;
}

/** A4 at 96dpi (210×297mm) — fixed so screen and print always match. */
export const A4_W = 794;
export const A4_H = 1123;

function escapeTex(s: string): string {
  return s.replace(/([&%$#_{}])/g, "\\$1");
}

function questionMarkValue(markdown?: string): number {
  const value = markdown?.match(/\(Total\s+(\d+)\s+marks?\)/i)?.[1];
  return value ? Number(value) : 0;
}

/** Assembles a LaTeX document from the briefcase contents. */
function buildTex(items: BriefcaseItem[], includeAnswers: boolean): string {
  const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const lines: string[] = [
    "% Flux practice paper — generated from the briefcase",
    "\\documentclass[11pt,a4paper]{article}",
    "\\usepackage[margin=2cm]{geometry}",
    "\\usepackage{amsmath,amssymb}",
    "\\usepackage{parskip}",
    "\\begin{document}",
    "\\begin{center}",
    "{\\LARGE\\bfseries Flux Practice Paper}\\\\\\[0.6em]",
    `\\normalsize ${escapeTex(date)} \\quad ${items.length} ${items.length === 1 ? "question" : "questions"}`,
    "\\end{center}",
    "\\vspace{1em}",
    "",
  ];

  items.forEach((item, idx) => {
    lines.push(`\\section*{Question ${idx + 1}}`);
    lines.push(`\\textit{${escapeTex(item.title)}}\\\\\\`);
    lines.push("");
    lines.push(mdToTex(item.problem_markdown));
    lines.push("\\vspace{3em}");
    lines.push("");
  });

  if (includeAnswers) {
    lines.push("\\newpage");
    lines.push("\\section*{Mark Schemes}");
    lines.push("");
    items.forEach((item, idx) => {
      lines.push(`\\subsection*{Question ${idx + 1}}`);
      lines.push(mdToTex(item.mark_scheme_markdown) || "Not available.");
      lines.push("");
    });
  }

  lines.push("\\end{document}");
  return lines.join("\n");
}

function downloadTex(items: BriefcaseItem[], includeAnswers: boolean) {
  const blob = new Blob([buildTex(items, includeAnswers)], { type: "application/x-tex" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "flux-practice-paper.tex";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function Markdown({ children }: { children?: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {fmt(children)}
    </ReactMarkdown>
  );
}

/* ────────────────────────────────────────────────────────────────
   Problem parsing: split a question's markdown into its parts so we
   can right-align each part's marks like a real exam paper.
   Handles the archive's bold markers (** (a) **) and plain (a)
   markers, ignoring anything inside $…$ / $$…$$ math.
   ──────────────────────────────────────────────────────────────── */

interface QuestionPart {
  label: string;   // "(a)"
  body: string;    // markdown content
  marks: number | null;
}

/** Hides inline/display math so parens inside equations never match as part labels. */
function hideMath(text: string): { clean: string; restore: (s: string) => string } {
  const spans: string[] = [];
  const clean = text
    .replace(/\$\$[\s\S]*?\$\$/g, m => { spans.push(m); return `\uE000${spans.length - 1}\uE001`; })
    .replace(/\$[^$\n]+\$/g, m => { spans.push(m); return `\uE000${spans.length - 1}\uE001`; });
  const restore = (s: string) => s.replace(/\uE000(\d+)\uE001/g, (_, i) => spans[Number(i)] ?? "");
  return { clean, restore };
}

function parseQuestionParts(problem?: string): QuestionPart[] {
  const text = (problem ?? "").trim();
  if (!text) return [];
  const { clean, restore } = hideMath(text);

  const find = (re: RegExp): { label: string; start: number }[] => {
    const out: { label: string; start: number }[] = [];
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(clean)) !== null) out.push({ label: m[1], start: m.index });
    return out;
  };

  // Prefer the archive's bold markers; only fall back to plain text when the
  // bold form isn't used at all (e.g. hand-written test papers).
  const boldChunks = find(/\*\*\(([a-zA-Z]+)\)\*\*/g);
  const chunks = boldChunks.length >= 2 ? boldChunks : find(/\(([a-z]|[ivx]{1,3})\)/g);

  if (chunks.length === 0) return [{ label: "", body: text, marks: null }];

  const parts: QuestionPart[] = [];
  const intro = clean.slice(0, chunks[0].start).trim();
  if (intro) parts.push({ label: "", body: restore(intro), marks: null });

  chunks.forEach((chunk, i) => {
    const end = i + 1 < chunks.length ? chunks[i + 1].start : clean.length;
    let body = clean.slice(chunk.start, end);
    // Drop a trailing "(Total N marks)" marker.
    body = body.replace(/\*{0,2}\(Total\s+\d+\s+marks?\)\*{0,2}\s*$/i, "");
    // The per-part mark is the LAST "(N)" in the chunk — the archive often
    // prints it right after the part, before the next part's lead-in text.
    const markRe = /\*{0,2}\((\d+)\)\*{0,2}/g;
    let markMatch: RegExpExecArray | null = null;
    let mm: RegExpExecArray | null;
    while ((mm = markRe.exec(body)) !== null) markMatch = mm;
    const marks = markMatch ? Number(markMatch[1]) : null;
    if (markMatch) body = body.slice(0, markMatch.index) + body.slice(markMatch.index + markMatch[0].length);
    // Strip the leading part label (bold or plain).
    body = body.replace(/\*{0,2}\([a-zA-Z]+\)\*{0,2}/, "").trim();
    parts.push({ label: `(${chunk.label})`, body: restore(body), marks });
  });
  return parts;
}

/* ────────────────────────────────────────────────────────────────
   Figures — the archive's questions reference "**Figure N** _(desc)_",
   so we render a proper framed figure box in their place.
   ──────────────────────────────────────────────────────────────── */

type Segment =
  | { type: "md"; text: string }
  | { type: "figure"; number: string; description: string };

function splitFigures(text: string): Segment[] {
  const re = /\*\*Figure\s+(\d+)\*\*\s*_\(([\s\S]*?)\)\.?_/g;
  const out: Segment[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ type: "md", text: text.slice(last, m.index) });
    out.push({ type: "figure", number: m[1], description: m[2].trim() });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ type: "md", text: text.slice(last) });
  return out.length > 0 ? out : [{ type: "md", text }];
}

function FigureAwareMarkdown({ children }: { children?: string }) {
  const segments = useMemo(() => splitFigures(fmt(children)), [children]);
  if (segments.length === 1 && segments[0].type === "md") return <Markdown>{children}</Markdown>;
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "figure" ? (
          <figure key={i} className="official-figure">
            <div className="official-figure-area"><span>{seg.description}</span></div>
            <figcaption>Figure {seg.number}</figcaption>
          </figure>
        ) : (
          <div key={i}><Markdown>{seg.text}</Markdown></div>
        )
      )}
    </>
  );
}

/* ────────────────────────────────────────────────────────────────
   Barcode — a deterministic Code-128-style SVG derived from the
   paper code, so every paper gets its own (scannable-looking) code.
   ──────────────────────────────────────────────────────────────── */

function Barcode({ code }: { code: string }) {
  const bars = useMemo(() => {
    let seed = 2166136261;
    for (let i = 0; i < code.length; i++) seed = ((seed ^ code.charCodeAt(i)) * 16777619) >>> 0;
    const out: { x: number; w: number; h: number }[] = [];
    let x = 0;
    for (let i = 0; i < 24; i++) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      const w = 1 + (seed % 3);
      const h = 0.55 + ((seed >>> 8) % 40) / 100;
      out.push({ x, w, h });
      x += w + 1;
    }
    return out;
  }, [code]);
  return (
    <svg className="official-barcode" width="150" height="44" viewBox="0 0 150 44" aria-hidden="true">
      {bars.map((b, i) => <rect key={i} x={b.x} y={0} width={b.w} height={44 * b.h} fill="#111" />)}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Cover page — a single fixed A4 page: candidate info, watermark,
   marks grid, boxed instructions, and the footer (barcode / code)
   anchored to the bottom with white space above it.
   ──────────────────────────────────────────────────────────────── */

function OfficialCover({ date, items, totalMarks, paperCode }: { date: string; items: BriefcaseItem[]; totalMarks: number; paperCode: string }) {
  return (
    <section className="official-page official-cover-page" style={{ width: A4_W, height: A4_H }}>
      <div className="official-watermark">MOCK<br />EXAMINATION</div>
      <div className="official-cover-inner">
        <div className="official-top-rule" />
        <div className="official-header-brand">
          <span>Flux Examinations</span>
          <span>Advanced Mathematics</span>
        </div>

        <div className="candidate-box">
          <p>Please check the examination details below before entering your candidate information</p>
          <div className="candidate-name-row"><span>Candidate surname</span><span>Other names</span></div>
          <div className="candidate-number-row">
            <span>Centre Number <b /><b /><b /><b /><b /></span>
            <span>Candidate Number <b /><b /><b /><b /><b /></span>
          </div>
          <div className="candidate-signature-row"><span>Signature</span></div>
        </div>

        <h1 className="official-board">Flux Advanced Mathematics</h1>
        <div className="official-date-box">{date}</div>
        <div className="official-paper-row">
          <span>Afternoon (Time: 2 hours)</span>
          <span className="official-reference"><small>Paper<br />reference</small><strong>{paperCode}</strong></span>
        </div>
        <div className="official-title-box">
          <strong>Advanced Extension Award<br />Mathematics</strong>
          <span className="official-code">PRACTICE<br />PAPER</span>
        </div>
        <div className="official-requirements">
          <div><strong>You must have:</strong><br />Mathematical Formulae and Statistical Tables</div>
          <div><strong>Total Marks</strong><br /><b>{totalMarks || "—"}</b></div>
        </div>
        <div className="official-marks-grid">
          <span className="official-marks-grid-label">Question marks</span>
          {items.map((item, i) => (
            <span key={item.id} className="official-marks-grid-cell">Q{i + 1} · {questionMarkValue(item.problem_markdown) || "–"}</span>
          ))}
        </div>

        <OfficialInstructions count={items.length} totalMarks={totalMarks} />
      </div>

      <div className="official-cover-footer">
        <span className="official-footer-left">{paperCode}<br />©2026 Flux Education Ltd.<br />5/1/1/1/</span>
        <Barcode code={paperCode} />
        <span className="official-footer-right"><strong>Turn over ▶</strong><span className="official-flux-logo">Flux</span></span>
      </div>
    </section>
  );
}

function OfficialInstructions({ count, totalMarks }: { count: number; totalMarks: number }) {
  return (
    <div className="official-instructions">
      <h2>Information for candidates</h2>
      <ul>
        <li>Use <strong>black</strong> ink or ball-point pen.</li>
        <li><strong>Fill in the boxes</strong> at the top of this page with your name, centre number and candidate number.</li>
        <li>Answer <strong>all</strong> questions.</li>
        <li>Answer the questions in the spaces provided — there may be more space than you need.</li>
        <li><strong>Calculators may not be used.</strong></li>
        <li>You must <strong>show all your working.</strong></li>
      </ul>
      <p className="official-instructions-sub">The total mark for this paper is <strong>{totalMarks || "not specified"}</strong> · {count} {count === 1 ? "question" : "questions"} · the marks for each question are shown in brackets. Read each question carefully, try to answer every question, and check your answers if you have time at the end.</p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Question pages — every page is a fixed A4 sheet. The question's
   parts are measured and packed: short questions get one page with
   ruled lines filling the space left; long questions flow across
   pages (exactly like a real paper), with working space after.
   ──────────────────────────────────────────────────────────────── */

const Q_LINE = 27;      // target ruled-line pitch (px)
const MIN_LINES = 8;    // below this the question earns a continuation page
const PAGE_PAD = 44;    // .official-page vertical padding
const CONTENT_MT = 22;  // .official-question-content margin-top
const RULED_MT = 14;    // .official-ruled-space margin-top

interface QPage {
  partIdx: number[];   // indices into `parts` rendered on this page
  lines: number;       // ruled lines on this page (0 = full text page)
  first: boolean;      // page 1 (shows the question number / paper code)
}

function OfficialQuestion({ item, number, paperCode, last, sources }: {
  item: BriefcaseItem; number: number; paperCode: string; last: boolean; sources: string;
}) {
  const parts = useMemo(() => parseQuestionParts(item.problem_markdown), [item.problem_markdown]);
  const total = questionMarkValue(item.problem_markdown);
  const measurerRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<QPage[] | null>(null);

  useLayoutEffect(() => {
    const el = measurerRef.current;
    if (!el) return;
    const topline = el.querySelector<HTMLElement>(".official-question-topline");
    const footer = el.querySelector<HTMLElement>(".official-question-footer");
    if (!topline || !footer) return;

    const measure = () => {
      const partEls = [...el.querySelectorAll<HTMLElement>(".official-qpart")];
      const heights = partEls.map(p => p.offsetHeight);
      const topH = topline.offsetHeight;
      const footH = footer.offsetHeight;
      const GAP = 12;
      const SAFETY = 14; // absorb width/rounding drift so text pages never clip
      const textRoom = A4_H - PAGE_PAD * 2 - topH - CONTENT_MT - footH - RULED_MT - SAFETY;
      const contAvail = A4_H - PAGE_PAD * 2 - topH - 20 - footH;
      const contLines = Math.max(1, Math.floor(contAvail / Q_LINE));
      const totalParts = heights.reduce((a, b) => a + b, 0) + GAP * Math.max(0, heights.length - 1);
      const lines1 = Math.floor((textRoom - totalParts) / Q_LINE);
      const plan: QPage[] = [];

      if (lines1 >= 0) {
        // Everything fits on page 1 — lines fill the rest.
        plan.push({ partIdx: parts.map((_, i) => i), lines: lines1, first: true });
        if (lines1 < MIN_LINES) plan.push({ partIdx: [], lines: contLines, first: false });
      } else {
        // The problem text is taller than one page — flow the parts across
        // pages like a real paper, then add working space after.
        let room = textRoom;
        let first = true;
        let cur: number[] = [];
        let used = 0;
        parts.forEach((_, i) => {
          const h = heights[i] ?? 40;
          if (used > 0 && used + GAP + h > room) {
            plan.push({ partIdx: cur, lines: 0, first });
            cur = [];
            used = 0;
            first = false;
            room = textRoom;
          }
          cur.push(i);
          used += GAP + h;
        });
        if (cur.length > 0 || plan.length === 0) {
          const lastLines = Math.floor((room - used) / Q_LINE);
          plan.push({ partIdx: cur, lines: Math.max(0, lastLines), first });
          if (lastLines < MIN_LINES) plan.push({ partIdx: [], lines: contLines, first: false });
        }
      }
      setPages(plan);
    };
    measure();
    let cancelled = false;
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    return () => { cancelled = true; };
  }, [parts]);

  const renderPart = (part: QuestionPart, key: number) => (
    <div className="official-part" key={key}>
      {part.body && (
        <div className="official-part-body">
          {part.label && <strong className="official-part-label">{part.label}</strong>}{" "}
          <FigureAwareMarkdown>{part.body}</FigureAwareMarkdown>
        </div>
      )}
      {part.marks != null && <span className="official-part-marks">({part.marks})</span>}
    </div>
  );

  const endBlock = (
    <div className="official-end-block">
      <div className="official-end-rule"><span>END OF QUESTIONS</span></div>
      <p className="official-grade-strip">Illustrative grade boundaries — A* ≥ 90% · A ≥ 80% · B ≥ 70% · C ≥ 60% · D ≥ 50%</p>
      {sources && <p className="official-sources-line">Compiled from: {sources}</p>}
    </div>
  );

  const plan = pages ?? [];

  return (
    <>
      {/* Hidden measurer — same content width as a real page. Rendered
          unconditionally so the packing effect always has DOM to measure. */}
      <div
        ref={measurerRef}
        aria-hidden="true"
        style={{ position: "absolute", left: -9999, top: 0, width: A4_W - PAGE_PAD * 2 - 53, textAlign: "justify", visibility: "hidden", pointerEvents: "none" }}
      >
        <div className="official-question-topline" />
        <div className="official-question-footer"><span className="official-total-marks">(Total for Question {number} is {total} marks)</span></div>
        {parts.map((part, i) => (
          <div key={i} className="official-qpart">
            {part.label && <strong className="official-part-label">{part.label}</strong>}{" "}
            <FigureAwareMarkdown>{part.body}</FigureAwareMarkdown>
          </div>
        ))}
      </div>

      {plan.map((pg, pi) => {
        const finalPage = pi === plan.length - 1;
        return (
          <section
            key={pi}
            className="official-page official-question-page"
            style={{ width: A4_W, height: A4_H }}
          >
            <div className="official-question-topline">
              <span>Flux Advanced Mathematics</span>
              <span>{pg.first ? paperCode : `Question ${number} continued`}</span>
            </div>
            <div className="official-question-content">
              {pg.partIdx.length > 0 && (
                <div className="official-problem">
                  {pg.first && (
                    <div className="official-problem-head">
                      <span className="official-problem-num">{number}.</span>
                    </div>
                  )}
                  {pg.partIdx.map((pidx, j) => renderPart(parts[pidx], j))}
                </div>
              )}
              {pg.lines > 0 && (
                <div className="official-ruled-space">
                  {Array.from({ length: pg.lines }, (_, i) => <span key={i} />)}
                </div>
              )}
              {finalPage && last && endBlock}
            </div>
            <div className="official-question-footer">
              <span className="official-footer-code">{paperCode} 5/1/1/1/</span>
              <span className="official-page-number">{number}</span>
              {finalPage
                ? (total > 0 && <span className="official-total-marks">(Total for Question {number} is {total} marks)</span>)
                : <span className="official-turn-over">Turn over ▶</span>}
            </div>
          </section>
        );
      })}
    </>
  );
}

/* ────────────────────────────────────────────────────────────────
   Mark scheme — dark ink, each question packed onto fixed A4 pages
   that never spill. Steps are measured and greedy-packed so every
   page fits exactly.
   ──────────────────────────────────────────────────────────────── */

interface MsPage { q: number; first: boolean; steps: string[]; }

function OfficialMarkScheme({ items, paperCode }: { items: BriefcaseItem[]; paperCode: string }) {
  const stepGroups = useMemo(
    () => items.map(item => splitMarkSchemeSteps(item.mark_scheme_markdown)),
    [items],
  );
  const measurerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<MsPage[]>([]);

  useLayoutEffect(() => {
    const el = measurerRef.current;
    if (!el) return;

    const measure = () => {
      const stepEls = [...el.querySelectorAll<HTMLElement>(".official-ms-step")];
      const titleEls = [...el.querySelectorAll<HTMLElement>(".official-ms-title")];
      const topH = el.querySelector<HTMLElement>(".official-question-topline")?.offsetHeight ?? 30;
      const footH = 24;
      const GAP = 14;
      const firstRoom = (t: number) => A4_H - PAGE_PAD * 2 - topH - t - footH - 8;
      const contRoom = A4_H - PAGE_PAD * 2 - topH - footH - 8;

      const pages: MsPage[] = [];
      let stepIdx = 0;
      stepGroups.forEach((group, gi) => {
        const titleH = titleEls[gi]?.offsetHeight ?? 34;
        const qPages: MsPage[] = [];
        let current: string[] = [];
        let used = 0;
        let first = true;
        group.forEach(step => {
          const h = stepEls[stepIdx++]?.offsetHeight ?? 60;
          const room = first ? firstRoom(titleH) : contRoom;
          if (used > 0 && used + GAP + h > room) {
            qPages.push({ q: gi + 1, first, steps: current });
            current = [];
            used = 0;
            first = false;
          }
          current.push(step);
          used += GAP + h;
        });
        if (current.length > 0 || qPages.length === 0) {
          qPages.push({ q: gi + 1, first, steps: current });
        }
        pages.push(...qPages);
      });
      setLayout(pages);
    };
    measure();
    let cancelled = false;
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    return () => { cancelled = true; };
  }, [stepGroups]);

  return (
    <>
      {/* Hidden measurer — same width as a real page, laid out so step
          heights can be measured before the pages are packed. */}
      <div
        ref={measurerRef}
        aria-hidden="true"
        style={{ position: "absolute", left: -9999, top: 0, width: A4_W - PAGE_PAD * 2 - 8, visibility: "hidden", pointerEvents: "none" }}
      >
        <div className="official-question-topline" />
        {stepGroups.map((group, gi) => (
          <div key={gi}>
            <h3 className="official-ms-title">Question {gi + 1} — Mark Scheme</h3>
            {group.map((s, si) => (
              <div key={si} className="official-ms-step"><Markdown>{s}</Markdown></div>
            ))}
          </div>
        ))}
      </div>

      {layout.map((pg, i) => (
        <section key={i} className="official-page official-ms-page" style={{ width: A4_W, height: A4_H }}>
          <div className="official-question-topline">
            <span>Flux Advanced Mathematics</span>
            <span>{pg.first ? `Mark Scheme — Question ${pg.q}` : `Question ${pg.q} continued`}</span>
          </div>
          <div className="official-ms-body">
            {pg.first && <h3 className="official-ms-title">Question {pg.q} — Mark Scheme</h3>}
            {pg.steps.length === 0
              ? <p className="official-ms-step">Not available.</p>
              : pg.steps.map((step, j) => (
                <div key={j} className="official-ms-step"><Markdown>{step}</Markdown></div>
              ))}
          </div>
          <div className="official-question-footer">
            <span className="official-footer-code">{paperCode} 5/1/1/1/</span>
            <span className="official-page-number">{pg.q}</span>
            <span className="official-ms-tag">Mark Scheme</span>
          </div>
        </section>
      ))}
    </>
  );
}

/* ────────────────────────────────────────────────────────────────
   Main view
   ──────────────────────────────────────────────────────────────── */

export function WorksheetView({ style, includeAnswers, onClose }: WorksheetViewProps) {
  const { items } = useBriefcase();
  const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const paperCode = `FLX/${String(items.length).padStart(2, "0")}`;
  const sources = [...new Set(items.map(i => i.title).filter(Boolean))].join(", ").slice(0, 96);

  useEffect(() => {
    document.documentElement.classList.add("ws-open");
    return () => document.documentElement.classList.remove("ws-open");
  }, []);

  // Scale the fixed-A4 sheets to fit the viewport width (1:1 when it fits).
  useEffect(() => {
    const apply = () => {
      const zoom = Math.min(1, window.innerWidth / A4_W);
      document.documentElement.style.setProperty("--paper-zoom", zoom.toFixed(4));
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const ecoSources = [...new Set(items.map(i => i.title.split(" ").slice(0, 3).join(" ")))].filter(Boolean);

  if (items.length === 0) {
    return (
      <div className="worksheet-screen">
        <div className="worksheet-empty">
          <span className="briefcase-empty-icon">[ ]</span>
          <p>The briefcase is empty — add a question first.</p>
          <button className="ms-reveal-btn" onClick={onClose} type="button">Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="worksheet-screen">
      <div className="worksheet-toolbar">
        <button className="worksheet-back" onClick={onClose} type="button">← Back</button>
        <span className="worksheet-meta">
          {items.length} {items.length === 1 ? "question" : "questions"} · {date}
        </span>
        <div className="worksheet-toolbar-actions">
          <button className="worksheet-tex-btn" onClick={() => downloadTex(items, includeAnswers)} type="button">
            Download .tex
          </button>
          <button className="worksheet-print-btn" onClick={() => window.print()} type="button">
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className={`worksheet-print ${style === "eco" ? "worksheet-eco" : "worksheet-official"}`}>
        {style === "eco" ? (
          <>
            <section className="ws-cover">
              <div className="ws-cover-brand">FLUX</div>
              <h1 className="ws-cover-title">Practice Worksheet</h1>
              <p className="ws-cover-sub">Questions collected from the Flux archive</p>
              <div className="ws-cover-rule" />
              <div className="ws-cover-meta">
                <div className="ws-cover-meta-item"><span>Date</span><strong>{date}</strong></div>
                <div className="ws-cover-meta-item"><span>Questions</span><strong>{items.length}</strong></div>
                <div className="ws-cover-meta-item"><span>Sources</span><strong>{ecoSources.length ? ecoSources.join(" · ") : "Flux archive"}</strong></div>
              </div>
              <p className="ws-cover-foot">Time: 1 hour · Total: {items.length} questions</p>
            </section>
            {items.map((item, idx) => (
              <section key={item.id} className="ws-question">
                <div className="ws-q-head"><span className="ws-q-num">Question {idx + 1}</span><span className="ws-q-src">{item.title}</span></div>
                {item.topic && <div className="ws-q-topic">{item.topic}{item.subtopic ? ` · ${item.subtopic}` : ""}</div>}
                <div className="ws-q-body"><Markdown>{item.problem_markdown}</Markdown></div>
                <div className="ws-q-space" />
              </section>
            ))}
          </>
        ) : (
          <>
            <OfficialCover
              date={date}
              items={items}
              paperCode={paperCode}
              totalMarks={items.reduce((sum, item) => sum + questionMarkValue(item.problem_markdown), 0)}
            />
            {items.map((item, idx) => (
              <OfficialQuestion
                key={item.id}
                item={item}
                number={idx + 1}
                paperCode={paperCode}
                last={idx === items.length - 1}
                sources={sources}
              />
            ))}
          </>
        )}

        {includeAnswers && (
          style === "official"
            ? <OfficialMarkScheme items={items} paperCode={paperCode} />
            : (
              <section className="ws-answers">
                <div className="ws-answers-divider"><span>Mark Schemes</span></div>
                {items.map((item, idx) => (
                  <div key={item.id} className="ws-answer">
                    <h3 className="ws-answer-title">Question {idx + 1} — Mark Scheme</h3>
                    <div className="ws-answer-body"><Markdown>{item.mark_scheme_markdown}</Markdown></div>
                  </div>
                ))}
              </section>
            )
        )}
      </div>
    </div>
  );
}
