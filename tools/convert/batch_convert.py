#!/usr/bin/env python3
"""Batch-convert compiled exam PDFs to misty markdown.

Detects papers (split_papers), converts each via the Gemini API (convert_paper),
skips already-converted files (resume), and sleeps between calls to respect
rate limits.

Usage:
    python3 batch_convert.py <compiled1.pdf> [compiled2.pdf ...] [--out converted] [--dry-run]

Paper code -> (subboard, paper label) mapping. Edit CODE_MAP to suit the app's
data model (the app queries board + subBoard; "paper" is a free-form label).
Collisions (two codes producing the same filename) are reported, not silently
overwritten.

Note: AS papers (8MA0/8FM0) can collide with A-level (9MA0/9FM0) on year+paper —
see COLLISION_OVERRIDES for disambiguation, or convert levels separately.
"""
import argparse
import base64
import json
import os
import sys
import time

from split_papers import extract_pages, detect_papers
from convert_paper import load_env, load_topics, build_system_prompt, call_gemini

CODE_MAP = {
    # A-level Mathematics (2017+ spec)
    "9MA0-01": ("A-Level", "P1"),
    "9MA0-02": ("A-Level", "P2"),
    "9MA0-31": ("A-Level", "S1"),
    "9MA0-32": ("A-Level", "M1"),
    # AS Mathematics
    "8MA0-01": ("A-Level", "P1"),
    "8MA0-21": ("A-Level", "S1"),
    "8MA0-22": ("A-Level", "M1"),
    # A-level Further Mathematics
    "9FM0-01": ("A-Level", "CP1"),
    "9FM0-02": ("A-Level", "CP2"),
    "9FM0-3A": ("A-Level", "FP1"),
    "9FM0-3B": ("A-Level", "FS1"),
    "9FM0-3C": ("A-Level", "FM1"),
    "9FM0-3D": ("A-Level", "FD1"),
    "9FM0-4A": ("A-Level", "FP2"),
    "9FM0-4B": ("A-Level", "FS2"),
    "9FM0-4C": ("A-Level", "FM2"),
    "9FM0-4D": ("A-Level", "FD2"),
    # AS Further Mathematics
    "8FM0-01": ("A-Level", "CP1"),
    "8FM0-21": ("A-Level", "FP1"),
    "8FM0-22": ("A-Level", "FP2"),
    "8FM0-23": ("A-Level", "FS1"),
    "8FM0-24": ("A-Level", "FS2"),
    "8FM0-25": ("A-Level", "FM1"),
    "8FM0-26": ("A-Level", "FM2"),
    "8FM0-27": ("A-Level", "FD1"),
    "8FM0-28": ("A-Level", "FD2"),
}

# Codes that would collide on output filename (AS vs A-level): map code -> (subboard, paper)
COLLISION_OVERRIDES = {
    "8MA0-01": ("A-Level", "P1-AS"),
    "8MA0-21": ("A-Level", "S1-AS"),
    "8MA0-22": ("A-Level", "M1-AS"),
    "8FM0-01": ("A-Level", "CP1-AS"),
    "8FM0-21": ("A-Level", "FP1-AS"),
    "8FM0-22": ("A-Level", "FP2-AS"),
    "8FM0-23": ("A-Level", "FS1-AS"),
    "8FM0-24": ("A-Level", "FS2-AS"),
    "8FM0-25": ("A-Level", "FM1-AS"),
    "8FM0-26": ("A-Level", "FM2-AS"),
    "8FM0-27": ("A-Level", "FD1-AS"),
    "8FM0-28": ("A-Level", "FD2-AS"),
}

SLEEP_BETWEEN = 8  # seconds between API calls (rate-limit courtesy)


def output_name(code: str, year: str) -> str:
    sub, paper = COLLISION_OVERRIDES.get(code, CODE_MAP.get(code, ("A-Level", paper_from_code(code))))
    return f"Edexcel_{sub}_{year}_{paper}.md"


def paper_from_code(code: str) -> str:
    # fallback: derive from last token, e.g. 9MA0-01 -> P1
    return "P" + code.split("-")[-1].lstrip("0") or "0"


def main():
    load_env()
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("pdfs", nargs="+")
    ap.add_argument("--out", default="converted")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--model", default="gemini-3.6-flash")
    args = ap.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key and not args.dry_run:
        sys.exit("GEMINI_API_KEY not set (check projects/misty/.env)")

    topics = load_topics()
    system_prompt = build_system_prompt(topics)

    plan = []  # (pdf, start, end, out_path, sub, year, paper)
    for pdf in args.pdfs:
        print(f"--- {os.path.basename(pdf)} ---")
        pages = extract_pages(pdf)
        for p in detect_papers(pages):
            code, year = p["code"], str(p["year"])
            if code == "paper" or year == "unknown":
                print(f"  ⚠ skip {code} {year} pages {p['start']}-{p['end']} (unparseable)")
                continue
            if code not in CODE_MAP and code not in COLLISION_OVERRIDES:
                print(f"  ⚠ skip {code} {year} — no CODE_MAP entry (add one or it's not target spec)")
                continue
            sub, paper = COLLISION_OVERRIDES.get(code, CODE_MAP[code])
            out_path = os.path.join(args.out, f"Edexcel_{sub}_{year}_{paper}.md")
            plan.append((pdf, p["start"], p["end"], out_path, sub, year, paper))
            print(f"  ✓ {code} {year} pages {p['start']}-{p['end']} → {os.path.basename(out_path)}")

    if not plan:
        sys.exit("nothing to convert")

    os.makedirs(args.out, exist_ok=True)
    if args.dry_run:
        print(f"\nDRY RUN — {len(plan)} papers would be converted.")
        return

    # collision check
    seen = {}
    for _, _, _, out_path, *_ in plan:
        seen[os.path.basename(out_path)] = seen.get(os.path.basename(out_path), 0) + 1
    dupes = [k for k, v in seen.items() if v > 1]
    if dupes:
        print(f"⚠ COLLISION: {dupes} would overwrite each other — use COLLISION_OVERRIDES")

    done = skipped = 0
    for n, (pdf, start, end, out_path, sub, year, paper) in enumerate(plan, 1):
        if os.path.exists(out_path):
            print(f"[{n}/{len(plan)}] skip (exists) {os.path.basename(out_path)}")
            skipped += 1
            continue
        print(f"[{n}/{len(plan)}] converting {sub} {year} ({paper}) pages {start}-{end} ...", flush=True)
        import subprocess as _sp
        slice_path = os.path.join(args.out, f"_slice_{n}.pdf")
        _sp.run(
            ["gs", "-sDEVICE=pdfwrite", "-dNOPAUSE", "-dBATCH", "-dQUIET",
             f"-dFirstPage={start}", f"-dLastPage={end}", "-o", slice_path, pdf],
            check=True,
        )
        with open(slice_path, "rb") as f:
            pdf_b64 = base64.b64encode(f.read()).decode()
        os.remove(slice_path)
        try:
            text, usage, _ = call_gemini(api_key, args.model, system_prompt, pdf_b64)
            if len(text) < 500:
                print(f"  ⚠ short output ({len(text)} chars) — skipping write; re-run to retry")
                continue
            text = text.strip()
            if text.startswith("```"):
                text = text.split("\n", 1)[1]
                if text.endswith("```"):
                    text = text[:-3]
            with open(out_path, "w", encoding="utf-8") as f:
                f.write(text.strip() + "\n")
            print(f"  ✓ {os.path.basename(out_path)} ({usage.get('candidatesTokenCount', '?')} tokens, {usage.get('finishReason', '?')})")
            done += 1
        except SystemExit as e:
            print(f"  ✗ failed: {e}")
        time.sleep(SLEEP_BETWEEN)

    print(f"\nDone: {done} converted, {skipped} skipped, {len(plan) - done - skipped} failed. Re-run to resume.")


if __name__ == "__main__":
    main()
