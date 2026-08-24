#!/usr/bin/env python3
"""Split a compiled multi-paper PDF into individual per-paper PDFs.

Uses poppler-utils (pdftotext) + ghostscript (gs) — no Python packages needed.

Title pages are detected by text: "Pearson Edexcel" + a paper reference code
(9MA0/01, 8MA0/21, 9FM0/02, ...) or "Paper Reference".

Usage:
    python3 split_papers.py <compiled.pdf> [--out DIR] [--dry-run]

Outputs: DIR/<code>_<year>.pdf  (e.g. 9MA0-01_2018.pdf) and prints a manifest.
"""
import argparse
import os
import re
import subprocess
import sys

CODE_RE = re.compile(r"\b(9MA0|8MA0|9FM0|8FM0|9MP0|8MP0)/(\d{2})\b")
YEAR_RE = re.compile(r"\b(?:19|20)\d{2}\b")


def extract_pages(pdf_path: str) -> list[str]:
    """Return a list of page texts (one entry per page)."""
    out = subprocess.run(
        ["pdftotext", pdf_path, "-"], capture_output=True, text=True, check=True
    ).stdout
    pages = out.split("\f")
    # pdftotext ends each page with a form feed; drop trailing empty chunk
    if pages and pages[-1].strip() == "":
        pages.pop()
    return pages


def is_title_page(text: str) -> bool:
    t = text.lower()
    if "pearson edexcel" not in t and "pearson edexcel ltd" not in t:
        return False
    if "paper reference" in t:
        return True
    return bool(CODE_RE.search(text))


def detect_papers(pages: list[str]) -> list[dict]:
    """Find title pages, then derive per-paper page ranges and metadata."""
    title_idx = [i for i, p in enumerate(pages) if is_title_page(p)]
    if not title_idx:
        return []

    papers = []
    for n, start in enumerate(title_idx):
        end = title_idx[n + 1] - 1 if n + 1 < len(title_idx) else len(pages) - 1
        text = pages[start]

        code_m = CODE_RE.search(text)
        code = f"{code_m.group(1)}-{code_m.group(2)}" if code_m else "paper"

        years = [y for y in YEAR_RE.findall(text) if 1990 <= int(y) <= 2035]
        year = years[-1] if years else "unknown"

        papers.append({"code": code, "year": year, "start": start + 1, "end": end + 1})
    return papers


def split(pdf_path: str, out_dir: str, dry_run: bool) -> None:
    os.makedirs(out_dir, exist_ok=True)
    print(f"Reading {pdf_path} ...")
    pages = extract_pages(pdf_path)
    print(f"  {len(pages)} pages")

    papers = detect_papers(pages)
    if not papers:
        print("  ✗ No title pages detected. Check the PDF contents.")
        sys.exit(1)

    print(f"  Detected {len(papers)} papers:\n")
    for p in papers:
        print(f"    {p['code']:10s} {p['year']}  pages {p['start']}-{p['end']}")

    if dry_run:
        return

    for p in papers:
        out_name = f"{p['code']}_{p['year']}.pdf"
        out_path = os.path.join(out_dir, out_name)
        subprocess.run(
            [
                "gs", "-sDEVICE=pdfwrite", "-dNOPAUSE", "-dBATCH", "-dQUIET",
                f"-dFirstPage={p['start']}", f"-dLastPage={p['end']}",
                "-o", out_path, pdf_path,
            ],
            check=True,
        )
        print(f"  ✓ {out_name}")

    print(f"\nDone → {out_dir}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("pdf", help="compiled multi-paper PDF")
    ap.add_argument("--out", default="splits", help="output directory")
    ap.add_argument("--dry-run", action="store_true", help="only list detected papers")
    args = ap.parse_args()
    split(args.pdf, args.out, args.dry_run)
