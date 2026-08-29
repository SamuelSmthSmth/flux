import os
import glob
from pathlib import Path

# We can import classify from progress_report if it's in the same directory, 
# but let's just do it directly so we can run from anywhere
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
try:
    from progress_report import classify
except ImportError:
    # Fallback if we can't import
    import re
    CODE_RE = re.compile(r"(9MA0|8MA0|9FM0|8FM0|9MP0|8MP0)[\s_-]?(\d{1,2})", re.IGNORECASE)
    YEAR_RE = re.compile(r"\b(19|20)\d{2}\b")
    def classify(name: str) -> dict:
        low = name.lower()
        out = {"type": "Other"}
        if "mark scheme" in low: out["type"] = "MS"
        elif "examiner" in low or "pef" in low: out["type"] = "ER"
        elif "worked" in low or "answers" in low or "_wa" in low: out["type"] = "Worked"
        elif "insert" in low: out["type"] = "Insert"
        elif "compiled" in low: out["type"] = "Compiled"
        elif "skills" in low: out["type"] = "Skills"
        elif "specimen" in low or "spec" in low and "specimen" in low: out["type"] = "Spec"
        elif "getting started" in low or "guide" in low: out["type"] = "Guide"
        elif "subject report" in low or "report" in low: out["type"] = "Report"
        else:
            out["type"] = "QP"
            if "-ms" in low or "_ms" in low or ".ms" in low: out["type"] = "MS"
            elif "-er" in low or "_er" in low: out["type"] = "ER"
        return out

ROOT = Path(__file__).resolve().parent.parent
PAPERS = ROOT / "papers"
MARKDOWN = PAPERS / "markdown"

def main():
    board_qps = {}
    # Count distinct Question Papers by board
    for pdf in PAPERS.glob("*/*.pdf"):
        board = pdf.parent.name
        if board == "markdown":
            continue
            
        cls = classify(pdf.name)
        if cls["type"] == "QP":
            board_qps[board] = board_qps.get(board, 0) + 1

    # For AEA, some papers don't have "QP" or "paper" explicitly in the name but are QPs.
    # The classify logic defaults to QP if not MS/ER/etc. Let's see what it gives.

    board_mds = {}
    for md in MARKDOWN.rglob("*.md"):
        try:
            board = md.relative_to(MARKDOWN).parts[0]
            if board.startswith("."): # ignore hidden like .edexcel_tmp
                continue
            board_mds[board] = board_mds.get(board, 0) + 1
        except ValueError:
            pass

    print("Progress Report (Markdown vs Question Papers needed):")
    print("-" * 60)
    for board in sorted(set(board_qps.keys()) | set(board_mds.keys())):
        needed = board_qps.get(board, 0)
        done = board_mds.get(board, 0)
        remaining = max(0, needed - done)
        print(f"{board:<10} | {done:>3} completed | {remaining:>3} remaining (Total target: {needed:>3})")
        
    print("-" * 60)

if __name__ == "__main__":
    main()
