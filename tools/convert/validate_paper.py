#!/usr/bin/env python3
"""Validate converted paper markdown before human review / upload.

Checks per file:
  - frontmatter blocks (topic + subtopic) before every question
  - every ### Question N has a matching ### Mark Scheme N
  - topic/subtopic exist in the taxonomy (all_topics_database.json)
  - balanced $ / $$ math delimiters
  - forbidden OCR/AI artifacts

Usage:
    python3 validate_paper.py <file.md> [more.md ...]
    python3 validate_paper.py converted/            (all .md in a dir)

Exit code: 0 = clean or warnings only, 1 = errors found.
"""
import argparse
import json
import os
import re
import sys

TOPICS_FILE = os.path.join(os.path.dirname(__file__), "..", "..", "firebase stuff", "all_topics_database.json")

FORBIDDEN = [
    "Code snippet",
    "Graphing calculator input",
    "$$$",
    "TODO",
    "FIXME",
    "OCR",
    "i.imgur.com",  # fake image placeholders instead of **Figure N** _(desc)_
    "example.png",
]

# Only ```tikz fences are allowed (they become TikZ diagrams); any other
# triple-backtick block is an OCR/AI artifact.
FENCE_RE = re.compile(r"^```(tikz)?\s*$")


Q_RE = re.compile(r"^###\s*\**Question\s+(\d+)", re.IGNORECASE)
MS_RE = re.compile(r"^###\s*\**Mark Scheme(?:\s+(\d+))?", re.IGNORECASE)
ER_RE = re.compile(r"^###\s*\**Examiner Report(?:\s+(\d+))?", re.IGNORECASE)
FM_RE = re.compile(r"^---\s*$")


def load_taxonomy() -> dict:
    with open(TOPICS_FILE, encoding="utf-8") as f:
        return json.load(f).get("topics", {})


def validate_file(path: str, taxonomy: dict) -> tuple[list[str], list[str]]:
    errors, warnings = [], []
    with open(path, encoding="utf-8") as f:
        lines = f.read().split("\n")

    q_nums = []
    ms_nums = []
    er_nums = []
    fm_topics = []  # (topic, subtopic) from frontmatter blocks
    pending_fm = None
    current_q = None
    fence_open = False

    i = 0
    while i < len(lines):
        line = lines[i]
        if FM_RE.match(line.strip()):
            j = i + 1
            fm = {}
            while j < len(lines) and not FM_RE.match(lines[j].strip()):
                m = re.match(r'^\s*(topic|subtopic):\s*["\']?(.*?)["\']?\s*$', lines[j])
                if m:
                    fm[m.group(1)] = m.group(2).strip()
                j += 1
            if fm:
                pending_fm = (fm.get("topic"), fm.get("subtopic"))
            i = j + 1  # skip past the closing ---
            continue

        if m := Q_RE.match(line):
            current_q = m.group(1)
            q_nums.append(current_q)
            if pending_fm:
                fm_topics.append(pending_fm)
                pending_fm = None
            else:
                # Optional: the uploader's classify() assigns topic/subtopic
                # automatically when frontmatter is absent.
                warnings.append(f"line {i+1}: Question {current_q} has no frontmatter topic block — uploader will classify it")
        elif m := MS_RE.match(line):
            ms_nums.append(m.group(1) or current_q)
        elif m := ER_RE.match(line):
            er_nums.append(m.group(1) or current_q)

        for bad in FORBIDDEN:
            if bad in line:
                errors.append(f"line {i+1}: forbidden artifact '{bad}'")

        # tikz fence check — a fence must be ```tikz, and they must balance
        if "```" in line:
            fm = FENCE_RE.match(line.strip())
            if not fm:
                errors.append(f"line {i+1}: invalid fence '{line.strip()[:20]}' — only ```tikz fences are allowed")
            elif fm.group(1) == "tikz":
                if fence_open:
                    errors.append(f"line {i+1}: unclosed ```tikz fence")
                fence_open = True
            else:  # closing fence (bare ```)
                if not fence_open:
                    errors.append(f"line {i+1}: closing ``` with no open ```tikz fence")
                fence_open = False

        # math delimiter check (per line, ignoring $$...$$ which contains 4 $ chars in pairs)
        dollar_count = line.count("$")
        if dollar_count % 2 != 0:
            errors.append(f"line {i+1}: odd number of $ delimiters ({dollar_count})")
        i += 1

    if fence_open:
        errors.append("unclosed ```tikz fence at end of file")

    if not q_nums:
        errors.append("no ### Question headers found")

    if set(q_nums) != set(ms_nums):
        missing = set(q_nums) - set(ms_nums)
        extra = set(ms_nums) - set(q_nums)
        if missing:
            errors.append(f"questions missing mark schemes: {sorted(missing)}")
        if extra:
            errors.append(f"mark schemes without questions: {sorted(extra)}")

    # validate frontmatter topics against taxonomy
    for topic, subtopic in fm_topics:
        if topic not in taxonomy:
            errors.append(f"unknown topic in frontmatter: '{topic}'")
        elif subtopic and subtopic not in taxonomy[topic] and subtopic != "":
            warnings.append(f"unknown subtopic '{subtopic}' for topic '{topic}' (allowed: {taxonomy[topic][:6]})")

    return errors, warnings


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("paths", nargs="+", help="markdown file(s) or directory")
    args = ap.parse_args()

    files = []
    for p in args.paths:
        if os.path.isdir(p):
            files.extend(sorted(os.path.join(p, f) for f in os.listdir(p) if f.endswith(".md")))
        else:
            files.append(p)

    taxonomy = load_taxonomy()
    total_errors = 0
    for path in files:
        errors, warnings = validate_file(path, taxonomy)
        status = "✗" if errors else ("⚠" if warnings else "✓")
        print(f"{status} {os.path.basename(path)}  ({len(errors)} errors, {len(warnings)} warnings)")
        for e in errors[:10]:
            print(f"    ERR  {e}")
        for w in warnings[:5]:
            print(f"    warn {w}")
        if len(errors) > 10:
            print(f"    ... and {len(errors) - 10} more errors")
        total_errors += len(errors)

    print(f"\n{'FAIL' if total_errors else 'PASS'} — {total_errors} total errors across {len(files)} file(s)")
    sys.exit(1 if total_errors else 0)


if __name__ == "__main__":
    main()
