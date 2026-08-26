/**
 * Shared markdown helpers.
 */

/** Upgrades `$$...$$` blocks to true display math (newline-delimited), which
 *  the react-markdown + rehype-katex pipeline renders more reliably. */
export function fmt(t: string | undefined | null): string {
  return !t ? "" : t.replace(/\$\$(.*?)\$\$/gs, (_, p) => `\n$$\n${p.trim()}\n$$\n`);
}

/** Light markdown → LaTeX conversion for the .tex export. Math (`$...$`,
 *  `$$...$$`) is already LaTeX so it passes through untouched; only markdown
 *  chrome (bold, headers, bullets) gets translated. Best-effort by design. */
export function mdToTex(s: string | undefined | null): string {
  return (s ?? "")
    .replace(/\*\*(.+?)\*\*/g, "\\textbf{$1}")
    .replace(/^####\s*\**(.*?)\**\s*$/gm, "\\subsection*{$1}")
    .replace(/^###\s*\**(.*?)\**\s*$/gm, "\\section*{$1}")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}
