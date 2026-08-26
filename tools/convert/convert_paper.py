#!/usr/bin/env python3
"""Convert a single exam paper PDF to the Misty markdown format via the Gemini API.

Python stdlib only (urllib) — no packages to install.
Requires a Gemini API key in the GEMINI_API_KEY environment variable or in
projects/misty/.env (gitignored). Get a free key at https://aistudio.google.com/apikey

Usage:
    python3 convert_paper.py paper.pdf --board Edexcel --subboard A-Level --year 2019 --paper P1
    python3 convert_paper.py paper.pdf ms.pdf er.pdf --board Edexcel --subboard AEA --year 2010 --paper P1

Pass the PDFs in order: question paper first, then mark scheme, then examiner
report (if you have one). Each is sent to Gemini labelled, so the right
section is built from the right PDF.

Output: <board>_<subboard>_<year>_<paper>.md in --out (default: converted/)

Model default: gemini-3.6-flash (free tier). Override with --model.
"""
import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request

from prompt import build_system_prompt

API_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
TOPICS_FILE = os.path.join(os.path.dirname(__file__), "..", "..", "firebase stuff", "all_topics_database.json")
MAX_INLINE_BYTES = 19 * 1024 * 1024  # API inline-data limit


def load_topics() -> dict:
    with open(TOPICS_FILE, encoding="utf-8") as f:
        db = json.load(f)
    return db.get("topics", {})


def load_env():
    """Load KEY=VALUE lines from the repo-root .env (gitignored) if present."""
    env_path = os.path.join(os.path.dirname(__file__), "..", "..", ".env")
    if not os.path.exists(env_path):
        return
    with open(env_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


PDF_LABELS = ["QUESTION PAPER", "MARK SCHEME", "EXAMINER REPORT"]


def build_request_body(system_prompt: str, pdf_parts: list[dict]) -> dict:
    """pdf_parts: [{"label": ..., "b64": ...}, ...] — each PDF is sent as its
    own inline part, labelled so the model builds the right section from it."""
    parts: list[dict] = [
        {"text": "Convert the attached exam paper PDFs to markdown now. The PDFs are labelled in order: 1) question paper, 2) mark scheme, 3) examiner report (if present). Build each section from its own PDF."}
    ]
    for i, p in enumerate(pdf_parts, 1):
        parts.append({"text": f"PDF {i} — {p['label']}:"})
        parts.append({"inline_data": {"mime_type": "application/pdf", "data": p["b64"]}})
    return {
        "systemInstruction": {"parts": [{"text": system_prompt}]},
        "contents": [{"parts": parts}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 65536},
    }


def call_gemini(api_key: str, model: str, system_prompt: str, pdf_parts: list[dict], max_retries: int = 4):
    url = API_URL.format(model=model) + "?key=" + api_key
    body = build_request_body(system_prompt, pdf_parts)
    data = json.dumps(body).encode()

    for attempt in range(max_retries):
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=420) as resp:
                result = json.load(resp)
            cand = result["candidates"][0]
            parts = cand.get("content", {}).get("parts")
            if not parts:
                # Safety-blocked or malformed candidate — retry once, then bail
                if attempt < max_retries - 1:
                    wait = 2 ** (attempt + 1)
                    print(f"  ⏳ empty candidate (finish={cand.get('finishReason')}) — retrying in {wait}s ...")
                    time.sleep(wait)
                    continue
                raise SystemExit(f"Empty candidate (finishReason={cand.get('finishReason')}) — check the raw response.")
            text = "".join(p.get("text", "") for p in parts)
            usage = result.get("usageMetadata", {})
            usage["finishReason"] = cand.get("finishReason")
            usage["thoughts"] = usage.get("thoughtsTokenCount")
            return text, usage, result
        except urllib.error.HTTPError as e:
            err_body = e.read().decode(errors="replace")[:500]
            if e.code in (429, 500, 502, 503, 504):
                wait = 2 ** (attempt + 1)
                print(f"  ⏳ {e.code} — retrying in {wait}s ...")
                time.sleep(wait)
                continue
            raise SystemExit(f"API error {e.code}: {err_body}")
        except (urllib.error.URLError, TimeoutError, OSError) as e:
            # Network hiccup or slow model (3 PDFs is a big request) — retry
            if attempt < max_retries - 1:
                wait = 2 ** (attempt + 1)
                print(f"  ⏳ network error ({e.__class__.__name__}) — retrying in {wait}s ...")
                time.sleep(wait)
                continue
            raise SystemExit(f"Network error after {max_retries} attempts: {e}")
    raise SystemExit("Failed after retries.")


def main():
    load_env()
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("pdfs", nargs="+", help="question paper PDF, then mark scheme PDF, then examiner report PDF (optional)")
    ap.add_argument("--board", required=True, help="e.g. Edexcel")
    ap.add_argument("--subboard", required=True, help="e.g. A-Level, AEA, IAL, MEI")
    ap.add_argument("--year", required=True)
    ap.add_argument("--paper", required=True, help="e.g. P1, P2")
    ap.add_argument("--out", default="converted")
    ap.add_argument("--model", default="gemini-3.6-flash")
    ap.add_argument("--dry-run", action="store_true", help="print the prompt and exit")
    args = ap.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key and not args.dry_run:
        sys.exit("GEMINI_API_KEY not set. Get a free key at https://aistudio.google.com/apikey")

    total = 0
    for path in args.pdfs:
        size = os.path.getsize(path)
        total += size
        if size > MAX_INLINE_BYTES:
            sys.exit(f"PDF too large for inline upload ({size/1e6:.1f}MB > 19MB). Split it first.")
    if total > MAX_INLINE_BYTES:
        sys.exit(f"Combined PDFs too large for one request ({total/1e6:.1f}MB > 19MB). Split it first.")

    topics = load_topics()
    system_prompt = build_system_prompt(topics)

    if args.dry_run:
        print(system_prompt)
        return

    pdf_parts: list[dict] = []
    labels = PDF_LABELS[:len(args.pdfs)]
    for path, label in zip(args.pdfs, labels):
        print(f"Reading {path} ...")
        with open(path, "rb") as f:
            pdf_parts.append({"label": label, "b64": base64.b64encode(f.read()).decode()})

    print(f"Calling {args.model} ...")
    text, usage, result = call_gemini(api_key, args.model, system_prompt, pdf_parts)
    print(
        f"  tokens: in={usage.get('promptTokenCount', '?')} out={usage.get('candidatesTokenCount', '?')} "
        f"finish={usage.get('finishReason', '?')}"
    )

    if len(text) < 500:
        with open("last_response.json", "w", encoding="utf-8") as f:
            json.dump(result, f, indent=1)
        print("  ⚠ SHORT OUTPUT — raw response dumped to last_response.json for debugging")

    # Strip code fences Gemini sometimes wraps output in
    if text.startswith("```"):
        text = text.strip()
        text = text.split("\n", 1)[1]
        if text.endswith("```"):
            text = text[:-3]

    os.makedirs(args.out, exist_ok=True)
    out_name = f"{args.board}_{args.subboard}_{args.year}_{args.paper}.md"
    out_path = os.path.join(args.out, out_name)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"✓ {out_path}")


if __name__ == "__main__":
    main()
