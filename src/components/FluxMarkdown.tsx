import { useMemo, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { fmt } from "../lib/markdown";
import { TikzPre, TikZDiagram } from "./TikZDiagram";

/** Shared markdown renderer — KaTeX math + ```tikz code blocks, used by
 *  every surface (browse cards, detail panes, the printed paper, the eco
 *  worksheet). */
export function FluxMarkdown({ children }: { children?: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={{ pre: TikzPre }}
    >
      {fmt(children)}
    </ReactMarkdown>
  );
}

/* ────────────────────────────────────────────────────────────────
   Figures — the archive's questions reference "**Figure N** _(desc)_",
   optionally followed by a ```tikz code block. The rendered result is
   the diagram on top and the "Figure N — description" caption just
   below it (the description doubles as alt-text/fallback until TikZ
   exists for that figure).
   ──────────────────────────────────────────────────────────────── */

type Segment =
  | { type: "md"; text: string }
  | { type: "figure"; number: string; description: string };

/** Splits text at "**Figure N** _(description)_" markers. The description is
 *  found by paren-counting so nested parens (e.g. "(0, p)", $…$ math) don't
 *  truncate it. */
function splitFigures(text: string): Segment[] {
  const out: Segment[] = [];
  const n = text.length;
  let last = 0;
  const markerRe = /\*\*Figure\s+(\d+)\*\*/g;
  let m: RegExpExecArray | null;
  while ((m = markerRe.exec(text)) !== null) {
    // Skip whitespace after the marker, then require the italic `_(`.
    let j = m.index + m[0].length;
    while (j < n && /\s/.test(text[j])) j++;
    if (text[j] !== "_" || text[j + 1] !== "(") continue;
    // Paren-count from the opening `(` to find the italic's closing paren.
    let depth = 0;
    let k = j + 1;
    let close = -1;
    while (k < n) {
      const c = text[k];
      if (c === "(") depth++;
      else if (c === ")") {
        depth--;
        if (depth === 0) { close = k; break; }
      }
      k++;
    }
    if (close < 0) continue;
    // After the closing paren: optional "." then the italic underscore.
    let t = close + 1;
    while (t < n && text[t] === ".") t++;
    if (text[t] !== "_") continue;
    const descEnd = t + 1;
    if (m.index > last) out.push({ type: "md", text: text.slice(last, m.index) });
    out.push({ type: "figure", number: m[1], description: text.slice(j + 2, close).trim() });
    last = descEnd;
    markerRe.lastIndex = descEnd;
  }
  if (last < n) out.push({ type: "md", text: text.slice(last) });
  return out.length > 0 ? out : [{ type: "md", text }];
}

/** Finds the first fenced ```tikz block in `text` and returns it (minus the
 *  fences) plus the text with the block removed. */
function extractTikz(text: string): { code: string; rest: string } | null {
  const m = text.match(/```[ \t]*tikz[ \t]*\n[\s\S]*?```/);
  if (!m) return null;
  const code = m[0].replace(/```[ \t]*tikz[ \t]*\n/, "").replace(/```$/, "").trim();
  const rest = text.slice(0, m.index ?? 0) + text.slice((m.index ?? 0) + m[0].length);
  return { code, rest };
}

function FigureBlock({ number, description, tikz, boxed }: {
  number: string; description: string; tikz?: string; boxed: boolean;
}) {
  if (tikz) {
    // Diagram on top, "Figure N — description" caption below.
    return (
      <figure className="flux-figure">
        <TikZDiagram code={tikz} />
        <figcaption>
          <FluxMarkdown>{`**Figure ${number}** _(${description})_`}</FluxMarkdown>
        </figcaption>
      </figure>
    );
  }
  if (boxed) {
    // Paper placeholder — a framed box until a real diagram exists.
    return (
      <figure className="official-figure">
        <div className="official-figure-area"><span>{description}</span></div>
        <figcaption>Figure {number}</figcaption>
      </figure>
    );
  }
  // Browse fallback — the description as text (math still renders).
  return <FluxMarkdown>{`**Figure ${number}** _(${description})_`}</FluxMarkdown>;
}

/** Markdown that renders figures properly:
 *  - a `**Figure N** _(desc)_` marker immediately followed (in the same
 *    segment) by a ```tikz block becomes the diagram with the description
 *    as its caption below;
 *  - without TikZ, `boxed` renders the paper's framed placeholder box,
 *    otherwise the description renders as plain text. */
export function FigureAwareMarkdown({ children, boxed = false }: { children?: string; boxed?: boolean }) {
  const segments = useMemo(() => splitFigures(fmt(children)), [children]);
  if (segments.length === 1 && segments[0].type === "md") return <FluxMarkdown>{children}</FluxMarkdown>;

  const segs = segments.slice(); // working copy (we strip paired tikz blocks)
  const nodes: ReactNode[] = [];
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    if (seg.type === "figure") {
      let tikz: string | undefined;
      const next = segs[i + 1];
      if (next && next.type === "md") {
        const found = extractTikz(next.text);
        if (found) {
          tikz = found.code;
          const rest = found.rest.trim();
          if (rest) {
            segs[i + 1] = { type: "md", text: rest };
          } else {
            i++; // skip the emptied segment
          }
        }
      }
      nodes.push(<FigureBlock key={i} number={seg.number} description={seg.description} tikz={tikz} boxed={boxed} />);
    } else {
      nodes.push(
        <div key={i}>
          <FluxMarkdown>{seg.text}</FluxMarkdown>
        </div>
      );
    }
  }
  return <>{nodes}</>;
}
