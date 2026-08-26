import os
import re
import json
import argparse
import firebase_admin
from firebase_admin import credentials, firestore

# --- CONFIGURATION (overridable via CLI) ---
DEFAULT_MARKDOWN_DIR = "./data/flux"
DEFAULT_TOPICS_FILE = "all_topics_database.json"
DEFAULT_SERVICE_ACCOUNT = "serviceAccountKey.json"

_db = None
_topics_cache = None


def get_db(service_account_path=DEFAULT_SERVICE_ACCOUNT):
    """Lazily initialise the Firestore client (one cert, one app)."""
    global _db
    if _db is None:
        cred = credentials.Certificate(service_account_path)
        firebase_admin.initialize_app(cred)
        _db = firestore.client()
    return _db


def load_topics(topics_file=DEFAULT_TOPICS_FILE) -> dict:
    """Lazily load the topic taxonomy used by the classify() fallback."""
    global _topics_cache
    if _topics_cache is None:
        with open(topics_file, 'r') as f:
            _topics_cache = json.load(f)
    return _topics_cache.get("topics", {})

# --- CLASSIFICATION LOGIC ---
OVERRIDE_MAP = {
    # 2010
    ("Edexcel", "AEA", "2010", "P1", "1"): ("Exponentials and Logarithms", "Laws of logarithms"),
    ("Edexcel", "AEA", "2010", "P1", "2"): ("Sequences and Series", "Arithmetic series"),
    ("Edexcel", "AEA", "2010", "P1", "3"): ("Differentiation", "Implicit differentiation"),
    ("Edexcel", "AEA", "2010", "P1", "4"): ("Vectors", "Scalar product"),
    ("Edexcel", "AEA", "2010", "P1", "5"): ("Integration", "Integration by substitution"),
    ("Edexcel", "AEA", "2010", "P1", "6"): ("Differentiation", "Stationary points"),
    ("Edexcel", "AEA", "2010", "P1", "7"): ("Trigonometric Identities and Equations", "Trigonometric identities"),

    # 2011
    ("Edexcel", "AEA", "2011", "P1", "1"): ("Trigonometric Identities and Equations", "Simple trigonometric equations"),
    ("Edexcel", "AEA", "2011", "P1", "2"): ("Integration", "Definite integrals"),
    ("Edexcel", "AEA", "2011", "P1", "3"): ("Sequences and Series", "Geometric series"),
    ("Edexcel", "AEA", "2011", "P1", "4"): ("Parametric Equations", "Parametric equations"),
    ("Edexcel", "AEA", "2011", "P1", "5"): ("Differentiation", "Gradients, tangents and normal"),

    # 2012
    ("Edexcel", "AEA", "2012", "P1", "1"): ("Functions and Graphs", "Composite functions"),
    ("Edexcel", "AEA", "2012", "P1", "2"): ("Trigonometric Identities and Equations", "Trigonometric identities"),
    ("Edexcel", "AEA", "2012", "P1", "3"): ("Trigonometric Identities and Equations", "Simple trigonometric equations"),
    ("Edexcel", "AEA", "2012", "P1", "4"): ("Vectors", "Solving geometric problems"),
    ("Edexcel", "AEA", "2012", "P1", "5"): ("Exponentials and Logarithms", "Logarithms"),
    ("Edexcel", "AEA", "2012", "P1", "6"): ("Integration", "Areas under curves"),
    ("Edexcel", "AEA", "2012", "P1", "7"): ("Differentiation", "Stationary points"),

    # 2013
    ("Edexcel", "AEA", "2013", "P1", "1"): ("Binomial Expansion", "The binomial expansion"),
    ("Edexcel", "AEA", "2013", "P1", "2"): ("Trigonometric Identities and Equations", "Simple trigonometric equations"),
    ("Edexcel", "AEA", "2013", "P1", "3"): ("Vectors", "Points of intersection"),
    ("Edexcel", "AEA", "2013", "P1", "4"): ("Sequences and Series", "Recurrence relations"),
    ("Edexcel", "AEA", "2013", "P1", "5"): ("Integration", "Integration by parts"),
    ("Edexcel", "AEA", "2013", "P1", "6"): ("Algebraic Methods", "Mathematical proof"),
    ("Edexcel", "AEA", "2013", "P1", "7"): ("Differentiation", "Gradients, tangents and normal"),

    # 2014
    ("Edexcel", "AEA", "2014", "P1", "1"): ("Functions and Graphs", "Inverse functions"),
    ("Edexcel", "AEA", "2014", "P1", "2"): ("Trigonometric Identities and Equations", "Harder trigonometric equations"),
    ("Edexcel", "AEA", "2014", "P1", "3"): ("Graphs and Transformations", "Transforming functions"),
    ("Edexcel", "AEA", "2014", "P1", "4"): ("Binomial Expansion", "The binomial expansion"),
    ("Edexcel", "AEA", "2014", "P1", "5"): ("Vectors", "Solving geometric problems"),
    ("Edexcel", "AEA", "2014", "P1", "6"): ("Integration", "Integration by substitution"),
    ("Edexcel", "AEA", "2014", "P1", "7"): ("Integration", "Areas under curves"),

    # 2015
    ("Edexcel", "AEA", "2015", "P1", "1"): ("Functions and Graphs", "The modulus function"),
    ("Edexcel", "AEA", "2015", "P1", "2"): ("Algebraic Methods", "The factor theorem"),
    ("Edexcel", "AEA", "2015", "P1", "3"): ("Trigonometric Identities and Equations", "Harder trigonometric equations"),
    ("Edexcel", "AEA", "2015", "P1", "4"): ("Binomial Expansion", "Expanding (a + bx)^n"),
    ("Edexcel", "AEA", "2015", "P1", "5"): ("Integration", "Areas under curves"),
    ("Edexcel", "AEA", "2015", "P1", "6"): ("Vectors", "Points of intersection"),
    ("Edexcel", "AEA", "2015", "P1", "7"): ("Integration", "Integration by substitution"),
}

def classify(text, board=None, subBoard=None, year=None, paper=None, q_num=None):
    if board and subBoard and year and paper and q_num:
        key = (board, subBoard, str(year), paper, str(q_num))
        if key in OVERRIDE_MAP:
            return OVERRIDE_MAP[key]

    text_lower = text.lower()

    # Heuristic matchers
    # Sequences & Series
    if any(k in text_lower for k in ["sequence", "recurrence relation", "\\sum_{", "arithmetic series", "geometric series"]):
        if "arithmetic" in text_lower:
            return "Sequences and Series", "Arithmetic series"
        if "geometric" in text_lower:
            return "Sequences and Series", "Geometric series"
        if "sum to infinity" in text_lower or "infinity" in text_lower:
            return "Sequences and Series", "Sum to infinity"
        return "Sequences and Series", "Arithmetic sequences"

    # Integration
    if any(k in text_lower for k in ["\\int", "integrate", "integrating", "integral", "trapezium rule", "area of the shaded region", "area of r"]):
        if "substitution" in text_lower:
            return "Integration", "Integration by substitution"
        if "parts" in text_lower:
            return "Integration", "Integration by parts"
        if "trapezium" in text_lower:
            return "Integration", "The trapezium rule"
        if "definite" in text_lower or "limits" in text_lower or "\\int_{" in text_lower:
            return "Integration", "Definite integrals"
        return "Integration", "Areas under curves"

    # Differentiation
    if any(k in text_lower for k in ["differentiate", "derivative", "dy/dx", "gradient", "tangent", "normal", "turning point", "stationary point", "maximum", "minimum"]):
        if "normal" in text_lower or "tangent" in text_lower:
            return "Differentiation", "Gradients, tangents and normal"
        if "stationary" in text_lower or "turning" in text_lower or "maximum" in text_lower or "minimum" in text_lower:
            return "Differentiation", "Stationary points"
        if "implicit" in text_lower:
            return "Differentiation", "Implicit differentiation"
        return "Differentiation", "Finding the derivative"

    # Vectors
    if any(k in text_lower for k in ["vector", "\\mathbf", "\\vec", "position vector", "lines intersect"]):
        if "scalar product" in text_lower or "dot product" in text_lower or "angle between" in text_lower:
            return "Vectors", "Scalar product"
        if "intersect" in text_lower:
            return "Vectors", "Points of intersection"
        return "Vectors", "Vectors in 3D"

    # Trigonometric Identities & Equations
    if any(k in text_lower for k in ["sin", "cos", "tan", "sec", "cosec", "cot", "\\sin", "\\cos", "\\tan", "\\theta"]):
        if "identity" in text_lower or "identities" in text_lower:
            return "Trigonometric Identities and Equations", "Trigonometric identities"
        return "Trigonometric Identities and Equations", "Simple trigonometric equations"

    # Binomial Expansion
    if "binomial" in text_lower or "expansion" in text_lower or "expand" in text_lower:
        return "Binomial Expansion", "The binomial expansion"

    # Circles
    if "circle" in text_lower:
        return "Circles", "Equation of a circle"

    # Functions
    if "function" in text_lower or "f(x)" in text_lower or "gf(" in text_lower or "fg(" in text_lower:
        if "inverse" in text_lower or "f^{-1}" in text_lower:
            return "Functions and Graphs", "Inverse functions"
        return "Functions and Graphs", "Composite functions"

    # Default fallback to original behavior
    topics = load_topics()
    for topic, subtopics in topics.items():
        for subtopic in subtopics:
            if len(subtopic) > 4 and subtopic.lower() in text_lower:
                return topic, subtopic

    return "Algebraic Expressions", "Factorising"

# --- CLEANING LOGIC ---
snippet_pattern = re.compile(
    r'(?:Code\s+snippet|Graphing\s+calculator\s+input:?)\s*\n*\s*(?:```|\$\$\$)\s*.*?\s*(?:```|\$\$\$)',
    re.DOTALL | re.IGNORECASE
)

def promote_display_math(text):
    """Automatically upgrades complex inline math ($...$) to display math ($$...$$)."""
    # Rule 1: Standalone $ ... $ on its own line
    text = re.sub(r'^\s*\$(?!\$)([^$]+)(?<!\$)\$(?!\$)\s*$', r'$$\1$$', text, flags=re.MULTILINE)
    
    # Rule 2: Promote inline math containing tall operators or very long equations
    def replacer(match):
        inner = match.group(1)
        tall_ops = [r'\int', r'\sum', r'\lim', r'\prod', r'\displaystyle', r'\begin{']
        if any(op in inner for op in tall_ops):
            return f"$${inner}$$"
            
        trig_ops = [r'\sin', r'\cos', r'\tan', r'\csc', r'\sec', r'\cot']
        has_trig = any(op in inner for op in trig_ops)
        has_eq = '=' in inner
        
        # If it's quite long and contains an equals sign or trig functions, it probably looks better as block math
        if len(inner) > 60 and (has_eq or has_trig):
            return f"$${inner}$$"
            
        return match.group(0)

    pattern = r'(?<!\$)\$(?!\$)([^$]+)(?<!\$)\$(?!\$)'
    text = re.sub(pattern, replacer, text)
    
    return text

def clean_text(content):
    new_content, _ = snippet_pattern.subn('', content)
    # Promote complex inline math to display math
    new_content = promote_display_math(new_content)
    # Also clean up any triple empty lines left after removal
    new_content = re.sub(r'\n{3,}', '\n\n', new_content)
    return new_content.strip()

# --- MAIN PARSING PIPELINE ---
def process_full_papers(only=None, markdown_dir=DEFAULT_MARKDOWN_DIR,
                        topics_file=DEFAULT_TOPICS_FILE,
                        service_account=DEFAULT_SERVICE_ACCOUNT):
    if not os.path.exists(markdown_dir):
        print(f"Directory {markdown_dir} does not exist.")
        return

    db = get_db(service_account)
    load_topics(topics_file)

    print(f"🚀 Scanning '{markdown_dir}' for full papers (ignoring split _Q files)...\n")

    filenames = sorted(os.listdir(markdown_dir))
    if only:
        only_name = os.path.basename(only)
        if os.path.isabs(only):
            filenames = [f for f in filenames if f == only_name]
        else:
            filenames = [f for f in filenames if f == only]
        if not filenames:
            print(f"⚠️ --only '{only}' matched nothing in {markdown_dir} (expected a filename like Edexcel_A-Level_2023_P1.md).")
            return

    for filename in filenames:
        if not filename.endswith('.md'):
            continue
            
        # Ignore files that already have _Q in them (i.e. already split)
        if '_Q' in filename:
            continue
            
        file_path = os.path.join(markdown_dir, filename)
        print(f"\n📄 Processing Full Paper: {filename}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            text = f.read()
            
        # Extract metadata from the filename (e.g. AEA_Maths_2015_P1.md)
        name_parts = filename.replace('.md', '').split('_')
        board = name_parts[0] if len(name_parts) > 0 else "Edexcel"
        subBoard = name_parts[1] if len(name_parts) > 1 else "AEA"
        year = name_parts[2] if len(name_parts) > 2 else "2015"
        paper = name_parts[3] if len(name_parts) > 3 else "P1"

        # Parse the document line by line to support manual frontmatter
        questions_data = {}
        current_q = None
        current_type = None
        
        pending_topic = None
        pending_subtopic = None
        
        lines = text.split('\n')
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check for frontmatter
            if line.strip() == "---":
                j = i + 1
                fm_content = []
                closed = False
                while j < len(lines):
                    if lines[j].strip() == "---":
                        closed = True
                        break
                    fm_content.append(lines[j])
                    j += 1
                
                if closed:
                    new_topic, new_subtopic = None, None
                    for fm_line in fm_content:
                        fm_stripped = fm_line.strip()
                        if fm_stripped.startswith("topic:"):
                            new_topic = fm_stripped.replace("topic:", "").strip().strip("\"'")
                        elif fm_stripped.startswith("subtopic:"):
                            new_subtopic = fm_stripped.replace("subtopic:", "").strip().strip("\"'")
                    
                    if new_topic and new_subtopic:
                        if current_q and current_type == 'problem_markdown' and not questions_data[current_q]['topic']:
                            questions_data[current_q]['topic'] = new_topic
                            questions_data[current_q]['subtopic'] = new_subtopic
                        else:
                            pending_topic = new_topic
                            pending_subtopic = new_subtopic
                            
                    i = j + 1
                    continue
            
            # Check for headers
            q_match = re.match(r'^###\s*\**Question\s+(\d+)', line, re.IGNORECASE)
            ms_match = re.match(r'^###\s*\**Mark Scheme\s+(\d+)', line, re.IGNORECASE)
            er_match = re.match(r'^###\s*\**Examiner Report\s+(\d+)', line, re.IGNORECASE)
            
            if q_match or ms_match or er_match:
                if q_match:
                    current_q = q_match.group(1)
                    current_type = 'problem_markdown'
                elif ms_match:
                    current_q = ms_match.group(1)
                    current_type = 'mark_scheme_markdown'
                elif er_match:
                    current_q = er_match.group(1)
                    current_type = 'examiner_report_markdown'
                    
                if current_q not in questions_data:
                    questions_data[current_q] = {
                        'problem_markdown': '', 
                        'mark_scheme_markdown': '', 
                        'examiner_report_markdown': '',
                        'topic': None,
                        'subtopic': None
                    }
                    
                if current_type == 'problem_markdown':
                    if pending_topic and pending_subtopic:
                        questions_data[current_q]['topic'] = pending_topic
                        questions_data[current_q]['subtopic'] = pending_subtopic
                    pending_topic = None
                    pending_subtopic = None
                
                i += 1
                continue
                
            # Append content
            if current_q and current_type:
                questions_data[current_q][current_type] += line + '\n'
                
            i += 1

        if not questions_data:
            print(f"⚠️ No questions found in {filename}.")
            continue

        # Upload each found question — batched so a whole paper commits in
        # one round trip (and atomically). Papers are ~10-15 docs, far below
        # the 500-write batch limit.
        batch = db.batch()
        for q_num, data in sorted(questions_data.items(), key=lambda x: int(x[0])):
            doc_id = f"{board}_{subBoard}_{year}_{paper}_Q{q_num}"
            
            problem_md = clean_text(data['problem_markdown'])
            ms_md = clean_text(data['mark_scheme_markdown'])
            er_md = clean_text(data['examiner_report_markdown'])
            
            topic = data.get('topic')
            subtopic = data.get('subtopic')
            
            # Fallback to automatic classification if no manual tags were provided
            if not topic or not subtopic:
                topic, subtopic = classify(problem_md, board, subBoard, year, paper, q_num)
            
            payload = {
                "board": board,
                "subBoard": subBoard,
                "year": year,
                "paper": paper,
                "question_number": q_num,
                "topic": topic,
                "subtopic": subtopic,
                "problem_markdown": problem_md,
                "mark_scheme_markdown": ms_md,
                "examiner_report_markdown": er_md
            }
            
            print(f"📦 Uploading Document: {doc_id} | Topic: {topic} | Subtopic: {subtopic}")
            batch.set(db.collection("flux").document(doc_id), payload)
        batch.commit()
    print("\n🎉 Full paper processing and upload completed!")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--only", help="upload only this single .md file (filename in the markdown dir)")
    ap.add_argument("--markdown-dir", default=DEFAULT_MARKDOWN_DIR, help=f"directory of full-paper .md files (default: {DEFAULT_MARKDOWN_DIR})")
    ap.add_argument("--topics", default=DEFAULT_TOPICS_FILE, help=f"topic taxonomy JSON (default: {DEFAULT_TOPICS_FILE})")
    ap.add_argument("--service-account", default=DEFAULT_SERVICE_ACCOUNT, help=f"Firebase service-account key JSON (default: {DEFAULT_SERVICE_ACCOUNT})")
    args = ap.parse_args()
    process_full_papers(only=args.only, markdown_dir=args.markdown_dir,
                        topics_file=args.topics, service_account=args.service_account)


if __name__ == "__main__":
    main()
