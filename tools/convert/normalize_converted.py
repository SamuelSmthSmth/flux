#!/usr/bin/env python3
"""Normalize a raw Gemini conversion into the required paper structure.

The model reliably transcribes content but often invents its own section
structure (e.g. "## Part 1: Question Paper" / "## Part 2: Mark Scheme" /
"## Part 3: Examiner Report" with plain `### Question N` headers, no
frontmatter, and a transcribed cover page). This script reshapes that into
the format the validator, uploader and site expect:

  - strips everything before the first question (cover-page noise)
  - Part 1 headers  `### Question N`   ->  `### **Question N**`
  - Part 2 headers  `### Question N`   ->  `### **Mark Scheme N**`
  - Part 3 headers  `### Question N`   ->  `### **Examiner Report N**`
  - drops the `## Part N:` section markers

Frontmatter (topic/subtopic) is intentionally NOT injected here: the
uploader's classify() assigns topics automatically, and the validator treats
missing frontmatter as a warning.

Usage:
    python3 normalize_converted.py converted/Edexcel_A-Level_2023_P1.md
    python3 normalize_converted.py converted/            (all .md in a dir)
"""
import argparse
import os
import re
import sys

Q_RE = re.compile(r"^(#{3,4})\s*\**Question\s+(\d+)\b")
PART_RE = re.compile(
    r"^##\s+Part\s*(\d+)\s*[:：\-–—]?\s*(.*)$", re.IGNORECASE
)
# ![Figure N: alt text](url) placeholders -> **Figure N** _(alt text)_
IMG_RE = re.compile(r"!\[(Figure\s+\d+):?\s*([^\]]*)\]\([^)]*\)", re.IGNORECASE)


def clean_line(line: str) -> str:
    """Strip trailing whitespace and turn fake image placeholders into the
    italic figure-description format."""
    line = IMG_RE.sub(r"**\1** _(\2)_", line).strip()
    return line


def split_sections(lines):
    """Find (start, kind) for each `## Part N:` section. kind: q|ms|er|None."""
    sections = []
    for i, line in enumerate(lines):
        m = PART_RE.match(line.strip())
        if not m:
            continue
        n = int(m.group(1))
        title = m.group(2)
        low = title.lower()
        if any(k in low for k in ("question", "paper")):
            kind = "q"
        elif any(k in low for k in ("mark", "scheme")):
            kind = "ms"
        elif any(k in low for k in ("examiner", "report", "feedback")):
            kind = "er"
        else:
            kind = None
        sections.append((i, n, kind))
    return sections


def normalize(text: str) -> str:
    lines = text.split("\n")
    sections = split_sections(lines)

    if sections:
        # First question header anywhere — everything before it (cover page,
        # instructions) is noise and gets stripped. Trimming to the first
        # question header (not the first Part marker) keeps this idempotent.
        first_q = next(
            (i for i, l in enumerate(lines) if Q_RE.match(l.strip())),
            None,
        )
        if first_q is None:
            return text  # nothing recognizable — leave as-is
        lines = lines[first_q:]
        # Re-locate section starts in the trimmed slice.
        sections = split_sections(lines)
        # Map section kind -> header prefix.
        kind_prefix = {"q": "### **Question ", "ms": "### **Mark Scheme ", "er": "### **Examiner Report "}
        active_kind = "q"
        out = []
        si = 0
        for i, line in enumerate(lines):
            skip = False
            # A new section begins here — drop the `## Part N:` marker line.
            while si < len(sections) and i == sections[si][0]:
                if sections[si][2]:
                    active_kind = sections[si][2]
                si += 1
                skip = True
            if skip:
                continue
            m = Q_RE.match(line.strip())
            if m and active_kind in kind_prefix:
                out.append(f"{kind_prefix[active_kind]}{m.group(2)}**")
                continue
            out.append(clean_line(line))
        return "\n".join(out).strip() + "\n"

    # No `## Part N:` markers — assume the whole document is questions only.
    first_q = next((i for i, l in enumerate(lines) if Q_RE.match(l.strip())), None)
    if first_q is None:
        return text
    out = []
    for line in lines[first_q:]:
        m = Q_RE.match(line.strip())
        if m:
            out.append(f"### **Question {m.group(2)}**")
        else:
            out.append(clean_line(line))
    return "\n".join(out).strip() + "\n"


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("paths", nargs="+", help="converted .md file(s) or a directory")
    args = ap.parse_args()

    files = []
    for p in args.paths:
        if os.path.isdir(p):
            files.extend(sorted(os.path.join(p, f) for f in os.listdir(p) if f.endswith(".md")))
        else:
            files.append(p)

    for path in files:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        normalized = normalize(text)
        if normalized == text:
            print(f"= {os.path.basename(path)}  (no change)")
            continue
        with open(path, "w", encoding="utf-8") as f:
            f.write(normalized)
        print(f"✓ normalized {os.path.basename(path)}")


if __name__ == "__main__":
    main()
