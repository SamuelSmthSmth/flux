#!/usr/bin/env python3
"""
Flux Paper Studio — a local web GUI for the paper conversion + upload pipeline.

Zero dependencies (Python stdlib only). It wraps the existing CLI tools so the
whole workflow lives on one page:

    Convert (Gemini) → Normalize → Validate → Review → Upload to Firestore

Usage:
    python3 tools/convert/gui.py            # opens the browser automatically
    python3 tools/convert/gui.py --port 9000
    python3 tools/convert/gui.py --no-browser

Then just use the page at the printed URL. The browser talks to a server bound
to 127.0.0.1 only — nothing is exposed to the network.

Pipeline scripts used (all in this folder):
    convert_paper.py       sends PDFs to Gemini, writes converted/<Board>_<Sub>_<Year>_<Paper>.md
    normalize_converted.py reshapes the model's output into the required structure
    validate_paper.py      checks the file against the paper rules
    upload_full_paper.py   (in "firebase stuff/") uploads the file to Firestore
"""

import json
import os
import re
import subprocess
import sys
import threading
import time
import webbrowser
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

# ─── Paths (resolved from this file, so cwd never matters) ───────────────────
ROOT = Path(__file__).resolve().parents[2]
CONVERT_DIR = ROOT / "tools" / "convert"
DATA_FLUX = ROOT / "firebase stuff" / "data" / "flux"
TOPICS_FILE = ROOT / "firebase stuff" / "all_topics_database.json"
UPLOADER = ROOT / "firebase stuff" / "upload_full_paper.py"

SERVICE_ACCOUNT_CANDIDATES = [
    ROOT / "firebase stuff" / "serviceAccountKey.json",
    ROOT / "serviceAccountKey.json",
]

ROLE_PATTERNS = [
    ("paper", r"(?:que|qp|question|paper)"),
    ("mark_scheme", r"(?:ms|rms|mark\s*scheme|markscheme)"),
    ("examiner", r"(?:er|pef|examiner|feedback|examiners?\s*report)"),
]

HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Flux Paper Studio</title>
<style>
  :root {
    --bg: #0f1115; --panel: #171a21; --panel2: #1d212b; --border: #2a2f3a;
    --text: #e6e8ee; --muted: #9aa3b2; --accent: #4f9cf9; --green: #3ddc84;
    --red: #ff5c5c; --amber: #ffb454;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font: 14px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; padding: 24px; }
  .wrap { max-width: 1080px; margin: 0 auto; }
  h1 { font-size: 22px; letter-spacing: .3px; }
  .sub { color: var(--muted); margin: 4px 0 20px; }
  .flow { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
  .flow .step { background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 6px 12px; color: var(--muted); font-size: 12px; }
  .flow .step.on { color: var(--accent); border-color: var(--accent); }
  .flow .step.done { color: var(--green); border-color: var(--green); }
  .flow .step.err { color: var(--red); border-color: var(--red); }
  .card { background: var(--panel); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 20px; }
  .card h2 { font-size: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
  .card h2 .tag { background: var(--panel2); border: 1px solid var(--border); color: var(--muted); border-radius: 6px; font-size: 11px; padding: 2px 8px; font-weight: 500; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
  label { display: block; color: var(--muted); font-size: 12px; margin-bottom: 5px; }
  input[type=text], input[type=number] { width: 100%; background: var(--panel2); border: 1px solid var(--border); color: var(--text); border-radius: 8px; padding: 8px 10px; font-size: 13px; }
  input:focus { outline: 2px solid var(--accent); border-color: transparent; }
  .slot { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
  .slot .path { flex: 1; background: var(--panel2); border: 1px solid var(--border); border-radius: 8px; padding: 8px 10px; font-size: 12px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .slot .path.ok { color: var(--green); }
  .slot .role { width: 130px; flex-shrink: 0; font-size: 12px; color: var(--muted); }
  .btn { background: var(--accent); color: #0b0e13; border: none; border-radius: 8px; padding: 9px 16px; font-size: 13px; font-weight: 600; cursor: pointer; }
  .btn:hover { filter: brightness(1.1); }
  .btn:disabled { opacity: .45; cursor: not-allowed; }
  .btn.ghost { background: var(--panel2); color: var(--text); border: 1px solid var(--border); font-weight: 500; }
  .btn.green { background: var(--green); }
  .btn.small { padding: 5px 10px; font-size: 12px; }
  .row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .spacer { flex: 1; }
  .log { background: #0a0c10; border: 1px solid var(--border); border-radius: 8px; padding: 12px; font: 12px/1.55 ui-monospace, "Cascadia Code", Consolas, monospace; height: 260px; overflow-y: auto; white-space: pre-wrap; }
  .log .info { color: var(--muted); }
  .log .ok { color: var(--green); }
  .log .warn { color: var(--amber); }
  .log .bad { color: var(--red); }
  pre.out { background: var(--panel2); border: 1px solid var(--border); border-radius: 8px; padding: 14px; font: 12px/1.55 ui-monospace, Consolas, monospace; max-height: 420px; overflow: auto; white-space: pre-wrap; }
  .meta { color: var(--muted); font-size: 12px; margin-top: 8px; }
  .hidden { display: none; }
  .picker { position: fixed; inset: 0; background: rgba(0,0,0,.6); display: none; align-items: center; justify-content: center; z-index: 50; }
  .picker.open { display: flex; }
  .picker .box { background: var(--panel); border: 1px solid var(--border); border-radius: 12px; width: min(640px, 92vw); max-height: 76vh; display: flex; flex-direction: column; }
  .picker .head { padding: 14px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
  .picker .head .crumb { flex: 1; font-size: 12px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .picker .list { overflow-y: auto; padding: 8px; }
  .picker .item { padding: 7px 10px; border-radius: 7px; cursor: pointer; font-size: 13px; display: flex; gap: 8px; align-items: center; }
  .picker .item:hover { background: var(--panel2); }
  .picker .item.dir { color: var(--accent); }
  .picker .item.pdf { color: var(--text); }
  .picker .item.off { color: var(--muted); opacity: .55; }
  .picker .foot { padding: 10px 16px; border-top: 1px solid var(--border); display: flex; gap: 8px; align-items: center; }
  .note { background: var(--panel2); border: 1px solid var(--border); border-left: 3px solid var(--amber); border-radius: 8px; padding: 10px 12px; font-size: 12.5px; color: var(--muted); margin-top: 12px; }
  .status-pill { display: inline-block; border-radius: 999px; padding: 3px 10px; font-size: 12px; font-weight: 600; }
  .status-pill.idle { background: var(--panel2); color: var(--muted); border: 1px solid var(--border); }
  .status-pill.run { background: rgba(79,156,249,.15); color: var(--accent); border: 1px solid var(--accent); }
  .status-pill.ok { background: rgba(61,220,132,.12); color: var(--green); border: 1px solid var(--green); }
  .status-pill.err { background: rgba(255,92,92,.12); color: var(--red); border: 1px solid var(--red); }
</style>
</head>
<body>
<div class="wrap">
  <h1>🧰 Flux Paper Studio</h1>
  <div class="sub">Local pipeline: Gemini conversion → normalize → validate → review → Firestore. Runs entirely on your machine.</div>

  <div class="flow" id="flow">
    <div class="step" data-step="1">1 · Convert</div>
    <div class="step" data-step="2">2 · Normalize</div>
    <div class="step" data-step="3">3 · Validate</div>
    <div class="step" data-step="4">4 · Review</div>
    <div class="step" data-step="5">5 · Upload</div>
  </div>

  <div class="card">
    <h2><span>1</span> Paper details <span class="tag">used for the Firestore tags &amp; filename</span></h2>
    <div class="grid">
      <div><label>Board</label><input type="text" id="board" value="Edexcel" list="boards"></div>
      <div><label>Sub-board</label><input type="text" id="subboard" value="A-Level" list="subboards"></div>
      <div><label>Year</label><input type="number" id="year" value="2023"></div>
      <div><label>Paper</label><input type="text" id="paper" value="P1"></div>
    </div>
    <datalist id="boards"><option value="Edexcel"><option value="AQA"><option value="OCR"><option value="WJEC"></datalist>
    <datalist id="subboards"><option value="A-Level"><option value="AEA"><option value="IAL"><option value="MEI"><option value="GCSE"></datalist>
  </div>

  <div class="card">
    <h2><span>2</span> Source PDFs <span class="tag">examiner report is optional</span></h2>
    <div class="slot"><span class="role">Question paper</span><span class="path" id="p-paper">—</span><button class="btn small ghost" onclick="pick('paper')">Browse…</button></div>
    <div class="slot"><span class="role">Mark scheme</span><span class="path" id="p-mark_scheme">—</span><button class="btn small ghost" onclick="pick('mark_scheme')">Browse…</button></div>
    <div class="slot"><span class="role">Examiner report</span><span class="path" id="p-examiner">—</span><button class="btn small ghost" onclick="pick('examiner')">Browse…</button></div>
    <div class="row" style="margin-top:12px">
      <button class="btn small ghost" onclick="autoDetect()">⚡ Auto-detect from last folder</button>
      <span class="spacer"></span>
      <button class="btn" id="convertBtn" onclick="startConvert()">▶ Convert with Gemini</button>
      <span class="status-pill idle" id="convertPill">idle</span>
    </div>
    <div class="log hidden" id="convertLog"></div>
    <div class="note hidden" id="convertNote"></div>
  </div>

  <div class="card hidden" id="reviewCard">
    <h2><span>4</span> Review <span class="tag" id="outPathTag"></span></h2>
    <div class="row" style="margin-bottom:10px">
      <span class="status-pill idle" id="validatePill">not validated</span>
      <span class="spacer"></span>
      <button class="btn small ghost" onclick="copyOut()">📋 Copy</button>
      <button class="btn small ghost" onclick="downloadOut()">⬇ Download</button>
    </div>
    <pre class="out" id="out"></pre>
    <div class="row" style="margin-top:14px">
      <div style="flex:1; min-width:260px">
        <label>Service account key JSON <span id="saFound"></span></label>
        <input type="text" id="sa" placeholder="firebase stuff/serviceAccountKey.json">
      </div>
      <div style="align-self:flex-end">
        <button class="btn green" id="uploadBtn" onclick="startUpload()">☁ Export to Firestore</button>
        <span class="status-pill idle" id="uploadPill">idle</span>
      </div>
    </div>
    <div class="log hidden" id="uploadLog"></div>
    <div class="note">Uploading copies the reviewed file into <code>firebase stuff/data/flux/</code> (matching filename), then writes one batched Firestore commit per paper. Missing frontmatter topics are auto-classified by the uploader.</div>
  </div>

  <div class="note">New to the format? Read <code>PAPER_TEMPLATE.md</code> (project root) — it's the few-shot example embedded in the Gemini prompt, and the validator enforces its rules. The full workflow is documented in <code>PROJECT.md</code>.</div>
</div>

<div class="picker" id="picker">
  <div class="box">
    <div class="head">
      <button class="btn small ghost" onclick="pickUp()">⬆ Up</button>
      <span class="crumb" id="crumb">/</span>
      <span class="spacer"></span>
      <button class="btn small" onclick="closePicker()">Close</button>
    </div>
    <div class="list" id="pickerList"></div>
    <div class="foot">
      <span id="pickerHint" style="color:var(--muted);font-size:12px">Click a PDF to assign it to the current slot.</span>
    </div>
  </div>
</div>

<script>
const $ = id => document.getElementById(id);
const ROLE_LABEL = { paper: "Question paper", mark_scheme: "Mark scheme", examiner: "Examiner report" };
let pdfs = { paper: "", mark_scheme: "", examiner: "" };
let curDir = ROOT_DIR;
let targetSlot = "paper";
let outPath = "";
let outName = "";
let polling = null;

function setPath(slot, p) {
  pdfs[slot] = p;
  const el = $("p-" + slot);
  el.textContent = p || "—";
  el.className = "path" + (p ? " ok" : "");
}
function addLog(el, line) {
  const d = document.createElement("div");
  if (line.startsWith("✓") || /success|pass/i.test(line)) d.className = "ok";
  else if (/⚠|warn/i.test(line)) d.className = "warn";
  else if (/✗|error|fail|traceback|exception/i.test(line)) d.className = "bad";
  else d.className = "info";
  d.textContent = line;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}
function setPill(id, text, kind) {
  const el = $(id); el.textContent = text; el.className = "status-pill " + kind;
}
function setStep(n, kind) {
  document.querySelectorAll(".flow .step").forEach(s => {
    s.className = "step" + (parseInt(s.dataset.step) === n ? " " + kind : "");
  });
}

async function api(path, body) {
  const r = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) });
  return r.json();
}

/* ─── Folder picker ─── */
async function pick(slot) {
  targetSlot = slot;
  $("pickerHint").textContent = "Assigning to " + ROLE_LABEL[slot] + " — click a PDF below.";
  $("picker").classList.add("open");
  await listDir(curDir);
}
function closePicker() { $("picker").classList.remove("open"); }
async function pickUp() {
  const r = await api("/api/list", { path: curDir });
  curDir = r.parent || curDir;
  await listDir(curDir);
}
async function listDir(path) {
  const r = await api("/api/list", { path });
  curDir = r.path;
  $("crumb").textContent = r.path;
  const list = $("pickerList"); list.innerHTML = "";
  for (const d of r.dirs) {
    const div = document.createElement("div");
    div.className = "item dir"; div.textContent = "📁 " + d;
    div.onclick = async () => await listDir((curDir === "/" ? "" : curDir) + "/" + d);
    list.appendChild(div);
  }
  for (const f of r.pdfs) {
    const div = document.createElement("div");
    div.className = "item pdf"; div.textContent = "📄 " + f;
    div.onclick = () => { setPath(targetSlot, (curDir === "/" ? "" : curDir) + "/" + f); closePicker(); };
    list.appendChild(div);
  }
  if (!r.dirs.length && !r.pdfs.length) {
    const div = document.createElement("div");
    div.className = "item off"; div.textContent = "(empty folder)";
    list.appendChild(div);
  }
}
async function autoDetect() {
  const r = await api("/api/detect", { dir: curDir });
  if (r.paper) setPath("paper", r.paper);
  if (r.mark_scheme) setPath("mark_scheme", r.mark_scheme);
  if (r.examiner) setPath("examiner", r.examiner);
  if (!r.paper && !r.mark_scheme && !r.examiner) $("convertNote").textContent = "No PDFs matched in " + curDir + " — assign them manually.";
}

/* ─── Convert ─── */
async function startConvert() {
  if (!pdfs.paper || !pdfs.mark_scheme) { alert("Pick a question paper and mark scheme first."); return; }
  const log = $("convertLog"); log.classList.remove("hidden"); log.innerHTML = "";
  $("convertNote").classList.add("hidden");
  setPill("convertPill", "running…", "run"); setStep(1, "on");
  $("convertBtn").disabled = true;
  const job = await api("/api/convert", {
    pdfs, board: $("board").value.trim(), subboard: $("subboard").value.trim(),
    year: $("year").value.trim(), paper: $("paper").value.trim(),
  });
  polling = setInterval(async () => {
    const st = await api("/api/job", { id: job.id });
    const fresh = st.lines.slice(log.dataset.n || 0);
    log.dataset.n = st.lines.length;
    fresh.forEach(l => addLog(log, l));
    if (st.state === "done") {
      clearInterval(polling);
      $("convertBtn").disabled = false;
      setPill("convertPill", "done", "ok"); setStep(4, "done");
      finishConvert(st);
    } else if (st.state === "error") {
      clearInterval(polling);
      $("convertBtn").disabled = false;
      setPill("convertPill", "failed", "err"); setStep(1, "err");
      addLog(log, "✗ " + st.error);
    }
  }, 600);
}
function finishConvert(st) {
  outPath = st.out_path; outName = st.out_name;
  $("out").textContent = st.content;
  $("reviewCard").classList.remove("hidden");
  $("outPathTag").textContent = st.out_name;
  $("validatePill").textContent = "✅ " + st.validation;
  $("validatePill").className = "status-pill ok";
  const sa = $("sa");
  if (!sa.value) sa.value = st.service_account || "";
  $("saFound").textContent = st.service_account ? "(found)" : "(not found — paste the path)";
  $("outPathTag").textContent = st.out_name + " · " + st.char_count + " chars";
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function copyOut() { navigator.clipboard.writeText($("out").textContent); }
function downloadOut() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([$("out").textContent], { type: "text/markdown" }));
  a.download = outName; a.click();
}

/* ─── Upload ─── */
async function startUpload() {
  if (!outPath) { alert("Convert a paper first."); return; }
  const log = $("uploadLog"); log.classList.remove("hidden"); log.innerHTML = "";
  setPill("uploadPill", "uploading…", "run"); setStep(5, "on");
  $("uploadBtn").disabled = true;
  const job = await api("/api/upload", { out_path: outPath, service_account: $("sa").value.trim() });
  const poll = setInterval(async () => {
    const st = await api("/api/job", { id: job.id });
    const fresh = st.lines.slice(log.dataset.n || 0);
    log.dataset.n = st.lines.length;
    fresh.forEach(l => addLog(log, l));
    if (st.state === "done") {
      clearInterval(poll); $("uploadBtn").disabled = false;
      setPill("uploadPill", "uploaded", "ok"); setStep(5, "done");
    } else if (st.state === "error") {
      clearInterval(poll); $("uploadBtn").disabled = false;
      setPill("uploadPill", "failed", "err"); setStep(5, "err");
      addLog(log, "✗ " + st.error);
    }
  }, 600);
}
</script>
</body>
</html>
"""

# ─── Job runner ──────────────────────────────────────────────────────────────
JOBS = {}
JOBS_LOCK = threading.Lock()
_job_counter = 0


def new_job():
    global _job_counter
    with JOBS_LOCK:
        _job_counter += 1
        jid = f"job{_job_counter}"
        JOBS[jid] = {"state": "running", "lines": [], "error": "", "result": None}
    return jid


def job_log(jid, line):
    with JOBS_LOCK:
        JOBS[jid]["lines"].append(line)


def job_done(jid, result=None):
    with JOBS_LOCK:
        JOBS[jid]["state"] = "done"
        JOBS[jid]["result"] = result


def job_fail(jid, error):
    with JOBS_LOCK:
        JOBS[jid]["state"] = "error"
        JOBS[jid]["error"] = error


def run_streaming(jid, argv, cwd, step_name):
    """Run a pipeline step, streaming its stdout/stderr into the job log."""
    job_log(jid, f"\n── {step_name} ──")
    try:
        proc = subprocess.Popen(argv, cwd=str(cwd), stdout=subprocess.PIPE,
                                stderr=subprocess.STDOUT, text=True, bufsize=1)
        for line in proc.stdout:
            job_log(jid, line.rstrip("\n"))
        proc.wait()
        if proc.returncode != 0:
            job_fail(jid, f"{step_name} exited with code {proc.returncode}")
            return False
        return True
    except FileNotFoundError as e:
        job_fail(jid, f"Could not run {' '.join(argv)}: {e}")
        return False


def find_service_account():
    for p in SERVICE_ACCOUNT_CANDIDATES:
        if p.exists():
            return str(p)
    return ""


# ─── Convert job (background thread) ─────────────────────────────────────────
def do_convert(jid, payload):
    pdfs = payload["pdfs"]
    board, subboard = payload["board"], payload["subboard"]
    year, paper = payload["year"], payload["paper"]

    pdf_paths = []
    for role in ("paper", "mark_scheme", "examiner"):
        p = pdfs.get(role)
        if p:
            full = Path(p)
            if not full.exists():
                job_fail(jid, f"{role} PDF not found: {p}")
                return
            pdf_paths.append(str(full))

    argv = [sys.executable, "convert_paper.py", *pdf_paths,
            "--board", board, "--subboard", subboard, "--year", year, "--paper", paper]
    if not run_streaming(jid, argv, CONVERT_DIR, "1 · Gemini conversion"):
        return

    out_name = f"{board}_{subboard}_{year}_{paper}.md"
    out_path = CONVERT_DIR / "converted" / out_name
    if not out_path.exists():
        job_fail(jid, f"Expected output missing: {out_path}")
        return

    if not run_streaming(jid, [sys.executable, "normalize_converted.py", str(out_path)],
                         CONVERT_DIR, "2 · Normalize structure"):
        return
    if not run_streaming(jid, [sys.executable, "validate_paper.py", str(out_path)],
                         CONVERT_DIR, "3 · Validate"):
        return

    content = out_path.read_text(encoding="utf-8")
    validation = "validated"
    with JOBS_LOCK:
        lines = JOBS[jid]["lines"]
    for line in lines[-40:]:
        m = re.search(r"(\d+)\s+errors?", line, re.IGNORECASE)
        if m and "0" not in m.group(1):
            validation = m.group(1) + " errors — fix before uploading"
            break
        if re.search(r"\b0 errors\b", line, re.IGNORECASE):
            validation = "0 errors"
            break
    job_done(jid, {"out_path": str(out_path), "out_name": out_name,
                   "content": content, "validation": validation,
                   "char_count": len(content),
                   "service_account": find_service_account()})


# ─── Upload job (background thread) ──────────────────────────────────────────
def do_upload(jid, payload):
    out_path = Path(payload["out_path"])
    sa = (payload.get("service_account") or find_service_account()).strip()
    if not sa or not Path(sa).exists():
        job_fail(jid, f"Service account key not found at '{sa or '(blank)'}'. "
                      "Download the key JSON from the Firebase console and paste its path.")
        return
    name = out_path.name
    dest = DATA_FLUX / name
    try:
        dest.write_bytes(out_path.read_bytes())
        job_log(jid, f"✓ Copied to {dest}")
    except OSError as e:
        job_fail(jid, f"Could not copy into {DATA_FLUX}: {e}")
        return

    argv = [sys.executable, str(UPLOADER), "--only", name,
            "--markdown-dir", str(DATA_FLUX), "--topics", str(TOPICS_FILE),
            "--service-account", sa]
    if not run_streaming(jid, argv, DATA_FLUX.parent, "5 · Upload to Firestore"):
        return
    job_done(jid)


# ─── HTTP server ─────────────────────────────────────────────────────────────
def guess_role(filename):
    base = Path(filename).stem.lower()
    for role, pat in ROLE_PATTERNS:
        if re.search(pat, base):
            return role
    return None


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def _json(self, obj, code=200):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if urllib.parse.urlparse(self.path).path == "/":
            body = HTML.encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self._json({"error": "not found"}, 404)

    def do_POST(self):
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b"{}"
        try:
            payload = json.loads(raw or b"{}")
        except json.JSONDecodeError:
            payload = {}
        path = urllib.parse.urlparse(self.path).path

        if path == "/api/list":
            p = payload.get("path") or str(ROOT)
            try:
                d = Path(p)
                if not d.is_dir():
                    d = d.parent
                entries = sorted(os.listdir(d))
                dirs = [e for e in entries if (d / e).is_dir() and not e.startswith(".")]
                pdfs_l = sorted(e for e in entries if (d / e).is_file() and e.lower().endswith(".pdf"))
                parent = str(d.parent) if d.parent != d else str(d)
                self._json({"path": str(d), "dirs": dirs, "pdfs": pdfs_l, "parent": parent})
            except OSError as e:
                self._json({"error": str(e)}, 500)

        elif path == "/api/detect":
            d = Path(payload.get("dir") or str(ROOT))
            found = {}
            try:
                files = sorted(os.listdir(d))
            except OSError:
                files = []
            for f in files:
                if not f.lower().endswith(".pdf"):
                    continue
                role = guess_role(f)
                if role and role not in found:
                    found[role] = str(d / f)
            self._json(found)

        elif path == "/api/convert":
            jid = new_job()
            threading.Thread(target=do_convert, args=(jid, payload), daemon=True).start()
            self._json({"id": jid})

        elif path == "/api/upload":
            jid = new_job()
            threading.Thread(target=do_upload, args=(jid, payload), daemon=True).start()
            self._json({"id": jid})

        elif path == "/api/job":
            st = JOBS.get(payload.get("id"), {})
            self._json({"state": st.get("state", "error"), "lines": st.get("lines", []),
                        "error": st.get("error", ""), "result": st.get("result")})
        else:
            self._json({"error": "not found"}, 404)


def main():
    import argparse
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--port", type=int, default=8790)
    ap.add_argument("--no-browser", action="store_true", help="don't auto-open the browser")
    args = ap.parse_args()

    port = args.port
    while port < args.port + 20:
        try:
            server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
            break
        except OSError:
            port += 1
    else:
        print("✗ No free port found around", args.port)
        sys.exit(1)

    url = f"http://127.0.0.1:{port}"
    print("🧰 Flux Paper Studio running at", url, flush=True)
    print("   (Ctrl+C to stop)", flush=True)

    # Inject the repo root into the page so the file picker starts there.
    global HTML
    HTML = HTML.replace("let curDir = ROOT_DIR;", f'let curDir = {json.dumps(str(ROOT))};')

    if not args.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nBye!")


if __name__ == "__main__":
    main()
