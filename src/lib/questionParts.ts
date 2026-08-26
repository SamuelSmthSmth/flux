/**
 * Shared question parsing: split a question's markdown into its parts so we
 * can render each part's label inline and right-align its marks like a real
 * exam paper — used by both the printed paper and the browse UI.
 *
 * Handles the archive's bold markers (** (a) **) and plain (a) markers,
 * ignoring anything inside $…$ / $$…$$ math or fenced ```tikz blocks.
 */

export interface QuestionPart {
  label: string;   // "(a)"
  body: string;    // markdown content
  marks: number | null;
}

/** Hides inline/display math and fenced ```tikz blocks so parens inside
 *  equations or diagram code never match as part labels or marks. */
function hideMath(text: string): { clean: string; restore: (s: string) => string } {
  const spans: string[] = [];
  const clean = text
    .replace(/```[a-zA-Z0-9_+-]*[\s\S]*?```/g, m => { spans.push(m); return `\uE000${spans.length - 1}\uE001`; })
    .replace(/\$\$[\s\S]*?\$\$/g, m => { spans.push(m); return `\uE000${spans.length - 1}\uE001`; })
    .replace(/\$[^$\n]+\$/g, m => { spans.push(m); return `\uE000${spans.length - 1}\uE001`; });
  const restore = (s: string) => s.replace(/\uE000(\d+)\uE001/g, (_, i) => spans[Number(i)] ?? "");
  return { clean, restore };
}

/** Extracts the "(Total N marks)" value from a question's markdown. */
export function extractTotalMarks(md?: string): number | null {
  const m = (md ?? "").match(/\*{0,2}\(Total\s+(\d+)\s+marks?\)\*{0,2}/i);
  return m ? Number(m[1]) : null;
}

export function parseQuestionParts(problem?: string): QuestionPart[] {
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

  if (chunks.length === 0) {
    // No part labels — the whole question is one part. Pull a trailing "(N)"
    // as its marks (after dropping the "(Total N marks)" line first).
    let body = clean;
    let marks: number | null = null;
    const withoutTotal = body.replace(/\*{0,2}\(Total\s+\d+\s+marks?\)\*{0,2}\s*$/i, "").trim();
    const mm = withoutTotal.match(/\*{0,2}\((\d+)\)\*{0,2}\s*$/);
    if (mm) {
      marks = Number(mm[1]);
      body = withoutTotal.slice(0, mm.index ?? 0) + withoutTotal.slice((mm.index ?? 0) + mm[0].length);
    }
    return [{ label: "", body: restore(body), marks }];
  }

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
