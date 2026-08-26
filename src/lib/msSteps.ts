/**
 * Splits a mark scheme markdown string into incremental-reveal steps.
 *
 * The AEA mark schemes are structured with `**Step N: ...**` labels inside
 * `#### **Part (X)**` sections, so we split at each step marker and make sure
 * every `Part (X)` header travels with the step it describes.
 */

const STEP_SPLIT = /(?=\*\*Step\s+\d+[:\s])/;
const STEP_RE = /\*\*Step\s+\d+/;

export function splitMarkSchemeSteps(md: string | undefined | null): string[] {
  const text = (md ?? "").trim();
  if (!text) return [];

  let chunks = text
    .split(STEP_SPLIT)
    .map(c => c.trim())
    .filter(Boolean);

  // No `**Step N:` markers — fall back to Part sections, then to one chunk.
  if (chunks.length < 2) {
    chunks = text
      .split(/(?=####\s*\**Part\b)/)
      .map(c => c.trim())
      .filter(Boolean);
  }
  if (chunks.length < 2) return [text];

  // A lone leading `#### **Part (X)**` header belongs to the first step.
  if (!STEP_RE.test(chunks[0])) {
    chunks[1] = chunks[0] + "\n\n" + chunks[1];
    chunks.shift();
  }

  // A `Part (X)` header left dangling at the tail of a step chunk describes
  // the NEXT step — move it forward so each reveal stays self-contained.
  for (let i = 0; i < chunks.length - 1; i++) {
    const tail = chunks[i].match(/\n(####\s*\**Part\b[^\n]*)\s*$/);
    if (tail) {
      chunks[i] = chunks[i].slice(0, tail.index).trim();
      chunks[i + 1] = tail[1] + "\n\n" + chunks[i + 1];
    }
  }

  return chunks;
}

/** Extracts the `N` from a chunk's `**Step N:**` label (which may be
 *  preceded by a merged `#### **Part (X)**` header). */
export function stepNumber(chunk: string): string | null {
  return chunk.match(/\*\*Step\s+(\d+)[:\s]/)?.[1] ?? null;
}
