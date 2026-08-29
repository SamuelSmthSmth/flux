#!/usr/bin/env python3
"""Convert all Edexcel compiled question-paper PDFs to markdown via the Gemini API.

Handles:
  - splitting compiled PDFs into per-paper slices (gs)
  - attaching the matching examiner-report PDF when one exists for (code, year)
  - quota-aware model rotation (per-model daily limits)
  - resume: skips (code, year) already converted
  - multi-pass looping so it keeps working after daily quotas reset

Usage:
    python3 papers/convert_edexcel.py            # run everything, forever-ish
    python3 papers/convert_edexcel.py --once     # single pass, then exit
"""
import argparse
import base64
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tools" / "convert"))

from convert_paper import load_env, load_topics  # noqa: E402
from split_papers import extract_pages, detect_papers  # noqa: E402

load_env()

OUT_BASE = ROOT / "papers" / "markdown" / "Edexcel"
TMP = ROOT / "papers" / ".edexcel_tmp"
TMP.mkdir(parents=True, exist_ok=True)

# Model order: put the lite models first — the big flash/models share a small RPD
# quota that's exhausted today, while each lite model has its own TPM budget we can
# rotate across to fit under the per-minute cap.
MODELS = [
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-flash-lite-latest",
    "gemini-3.5-flash",
    "gemini-3.6-flash",
    "gemini-3.1-pro-preview",
]

CODE_MAP = {
    "9MA0-01": ("A-Level", "P1"), "9MA0-02": ("A-Level", "P2"),
    "9MA0-31": ("A-Level", "S1"), "9MA0-32": ("A-Level", "M1"),
    "8MA0-01": ("A-Level", "P1-AS"), "8MA0-21": ("A-Level", "S1-AS"),
    "8MA0-22": ("A-Level", "M1-AS"),
    "9FM0-01": ("A-Level", "CP1"), "9FM0-02": ("A-Level", "CP2"),
    "9FM0-3A": ("A-Level", "FP1"), "9FM0-3B": ("A-Level", "FS1"),
    "9FM0-3C": ("A-Level", "FM1"), "9FM0-3D": ("A-Level", "FD1"),
    "9FM0-4A": ("A-Level", "FP2"), "9FM0-4B": ("A-Level", "FS2"),
    "9FM0-4C": ("A-Level", "FM2"), "9FM0-4D": ("A-Level", "FD2"),
    "8FM0-01": ("A-Level", "CP1-AS"), "8FM0-21": ("A-Level", "FP1-AS"),
    "8FM0-22": ("A-Level", "FP2-AS"), "8FM0-23": ("A-Level", "FS1-AS"),
    "8FM0-24": ("A-Level", "FS2-AS"), "8FM0-25": ("A-Level", "FM1-AS"),
    "8FM0-26": ("A-Level", "FM2-AS"), "8FM0-27": ("A-Level", "FD1-AS"),
    "8FM0-28": ("A-Level", "FD2-AS"),
}

COMPILED = [
    *sorted((ROOT / "papers" / "Edexcel" / "Mathematics").glob("*.pdf")),
    *sorted((ROOT / "papers" / "Edexcel" / "Further Mathematics").glob("*.pdf")),
]
COMPILED = [p for p in COMPILED if "compiled" in p.name.lower()]


def norm_code(c: str) -> str:
    return c.upper().replace("_", "-")


CODE_RE = re.compile(r"(9MA0|8MA0|9FM0|8FM0)[-_]?(\d{1,2})", re.IGNORECASE)


def er_map() -> dict:
    """(code, year) -> path for every examiner-report PDF found."""
    out = {}
    for base in (ROOT / "papers" / "Edexcel" / "Mathematics", ROOT / "papers" / "Edexcel" / "Further Mathematics"):
        for p in base.glob("*.pdf"):
            n = p.name.lower()
            if "examiner" not in n and "pef" not in n:
                continue
            m = CODE_RE.search(n)
            if not m:
                continue
            code = norm_code(f"{m.group(1)}-{m.group(2)}")
            year = None
            if "pef" in n:
                dm = re.search(r"pef[-_]?(\d{4})", n)
                if dm:
                    year = int(dm.group(1))
            else:
                for y in (2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026):
                    if str(y) in n:
                        year = y
                        break
                if year is None:
                    for s, y in (("oct 20", 2020), ("oct 21", 2021), ("june 22", 2022)):
                        if s in n:
                            year = y
                            break
            if year:
                out[(code, year)] = p
    return out


def build_request(api_key: str, model: str, system_prompt: str, pdf_parts: list[dict]):
    parts: list[dict] = [{"text": "Convert the attached exam paper PDFs to markdown now. The PDFs are labelled in order: 1) question paper, 2) examiner report (if present). Build the question sections from the question paper and the examiner-report section from the examiner report."}]
    for i, p in enumerate(pdf_parts, 1):
        parts.append({"text": f"PDF {i} — {p['label']}:"})
        parts.append({"inline_data": {"mime_type": "application/pdf", "data": p["b64"]}})
    body = {
        "systemInstruction": {"parts": [{"text": system_prompt}]},
        "contents": [{"parts": parts}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 65536},
    }
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    return url, json.dumps(body).encode()


def api_keys() -> list[str]:
    keys = []
    for i in range(1, 20):
        v = os.environ.get(f"GEMINI_API_KEY_{i}", "").strip()
        if v and v not in keys:
            keys.append(v)
    if os.environ.get("GEMINI_API_KEY"):
        k = os.environ["GEMINI_API_KEY"].strip()
        if k not in keys:
            keys.append(k)
    return keys


def api_key(which: int) -> str:
    """Return the Nth key (1-based). Pins a runner to a single key."""
    v = os.environ.get("GEMINI_API_KEY" if which == 1 else f"GEMINI_API_KEY_{which}", "").strip()
    return v


def call(model: str, system_prompt: str, pdf_parts: list[dict], api_key: str) -> str | None:
    url, data = build_request(api_key, model, system_prompt, pdf_parts)
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=420) as resp:
            result = json.load(resp)
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        if e.code == 429 and "quota" in body.lower():
            return "QUOTA"
        if e.code == 401:
            return "AUTH"
        if e.code in (429, 500, 502, 503, 504):
            return "RETRY"
        return "AUTH"
    except (urllib.error.URLError, TimeoutError, OSError):
        return "RETRY"
    try:
        cand = result["candidates"][0]
        parts = cand.get("content", {}).get("parts") or []
        text = "".join(p.get("text", "") for p in parts)
        if not text:
            return "EMPTY"
        return text.strip()
    except (KeyError, IndexError):
        return "EMPTY"


def slice_pdf(pdf: Path, start: int, end: int, out: Path):
    subprocess.run(
        ["gs", "-sDEVICE=pdfwrite", "-dNOPAUSE", "-dBATCH", "-dQUIET",
         f"-dFirstPage={start}", f"-dLastPage={end}", "-o", str(out), str(pdf)],
        check=True,
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--once", action="store_true")
    ap.add_argument("--key", type=int, default=0,
                    help="pin to a single key index (1-based); 0 = try all keys")
    ap.add_argument("--workers", type=int, default=1,
                    help="total number of parallel runners sharing the job space")
    args = ap.parse_args()
    PIN = args.key if args.key else 0
    TOTAL_WORKERS = args.workers if args.workers > 0 else 1

    system_prompt = None
    try:
        topics = load_topics()
        from prompt import build_system_prompt
        system_prompt = build_system_prompt(topics)
    except Exception as e:
        print(f"WARN prompt build failed: {e}", flush=True)

    ers = er_map()
    log = OUT_BASE / "batch.log"

    dead_until = {m: 0.0 for m in MODELS}

    while True:
        jobs = []  # (code, year, sub, paper, qp_path, first_page, last_page, er_path)
        seen = set()
        for pdf in COMPILED:
            try:
                pages = extract_pages(str(pdf))
            except Exception as e:
                print(f"skip {pdf.name}: {e}", flush=True)
                continue
            for p in detect_papers(pages):
                code = norm_code(p["code"])
                if p["year"] == "unknown":
                    continue
                year = int(p["year"])
                if code not in CODE_MAP:
                    continue
                if (code, year) in seen:
                    continue
                seen.add((code, year))
                sub, paper = CODE_MAP[code]
                out_dir = OUT_BASE / ("Mathematics" if "9MA0" in code or "8MA0" in code else "Further Mathematics") / "api-batch-2026-08-28"
                out_path = out_dir / f"Edexcel_{sub}_{year}_{paper}.md"
                if out_path.exists():
                    continue
                jobs.append((code, year, sub, paper, pdf, p["start"], p["end"], ers.get((code, year))))

        if not jobs:
            print(f"{time.ctime()} all jobs done or none found", flush=True)
            break

        if PIN:
            jobs = [j for j in jobs if hash(j[2] + j[3] + str(j[1])) % TOTAL_WORKERS == (PIN - 1)]

        done = 0
        for code, year, sub, paper, qp_pdf, first_page, last_page, er_pdf in jobs:
            out_dir = OUT_BASE / ("Mathematics" if "9MA0" in code or "8MA0" in code else "Further Mathematics") / "api-batch-2026-08-28"
            out_path = out_dir / f"Edexcel_{sub}_{year}_{paper}.md"
            if out_path.exists():
                continue
            # Slice this specific paper's pages out of the compiled PDF so we send
            # only that paper (small enough for the lite models' context window)
            # instead of the whole multi-paper compendium (~250k input tokens).
            slice_path = TMP / f"{code}_{year}_{first_page}-{last_page}.pdf"
            if not slice_path.exists():
                slice_pdf(qp_pdf, first_page, last_page, slice_path)
            now = time.time()
            live = [m for m in MODELS if dead_until.get(m, 0) <= now]
            if not live:
                print(f"{time.ctime()} all models quota-blocked; sleeping 600s", flush=True)
                time.sleep(600)
                continue
            parts = [{"label": "QUESTION PAPER", "b64": base64.b64encode(slice_path.read_bytes()).decode()}]
            if er_pdf:
                parts.append({"label": "EXAMINER REPORT", "b64": base64.b64encode(er_pdf.read_bytes()).decode()})

            result = None
            used = None
            if PIN:
                kk = [api_key(PIN)]
            else:
                kk = api_keys()
            for model in live:
                if dead_until.get(model, 0) > time.time():
                    continue
                for k in kk:
                    status = call(model, system_prompt, parts, k)
                    if status == "AUTH":
                        continue  # bad key, try next
                    if status == "QUOTA":
                        print(f"{time.ctime()} {code} {year} {model}: quota -> cooldown 3600s", flush=True)
                        dead_until[model] = time.time() + 3600
                        break
                    if status in ("RETRY", "ERR", "EMPTY"):
                        break
                    result = status
                    used = k[:8] + "..."
                    print(f"{time.ctime()} {code} {year} {paper} via {model} key={used} ({len(parts)} pdfs)", flush=True)
                    break
                if result is not None:
                    break

            if result is None:
                print(f"{time.ctime()} {code} {year}: no model available this pass", flush=True)
                continue

            if result.startswith("```"):
                result = result.split("\n", 1)[1]
                if result.endswith("```"):
                    result = result[:-3]
            if len(result) < 500:
                print(f"{time.ctime()} {code} {year}: short output ({len(result)}c), skipped write", flush=True)
                continue
            out_dir.mkdir(parents=True, exist_ok=True)
            out_path.write_text(result + "\n", encoding="utf-8")
            with open(log, "a", encoding="utf-8") as f:
                f.write(f"{time.ctime()} OK {code} {year} {paper} {er_pdf.name if er_pdf else '-'} {len(result)}c\n")
            done += 1
            # Each big exam PDF eats ~250k input tokens and TPM is per-project and
            # per-minute, so pace requests to let the budget roll over between them.
            time.sleep(65)

        if args.once:
            break
        print(f"{time.ctime()} pass finished ({done} converted); sleeping 60s before rescan", flush=True)
        time.sleep(60)


if __name__ == "__main__":
    main()
