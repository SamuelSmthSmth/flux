import os
import re
import json
import firebase_admin
from firebase_admin import credentials, firestore

# --- CONFIGURATION ---
# Path to your folder containing the individual question .md files
MARKDOWN_DIR = "."
SERVICE_ACCOUNT_PATH = "serviceAccountKey.json"

# Initialize Firebase
cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()

def parse_markdown_file(file_path, filename):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Parse metadata from the filename (assuming convention: BOARD_SUBJECT_YEAR_PAPER_Q#.md)
    # Example: AEA_Maths_2008_P1_Q3.md
    name_parts = filename.replace('.md', '').split('_')
    
    board = name_parts[0] if len(name_parts) > 0 else "AEA"
    subject = name_parts[1] if len(name_parts) > 1 else "Mathematics"
    year = name_parts[2] if len(name_parts) > 2 else "2008"
    paper = name_parts[3] if len(name_parts) > 3 else "P1"
    q_num = name_parts[4].replace('Q', '') if len(name_parts) > 4 else "1"

    # Use Regex to isolate the blocks based on your ### headers
    question_match = re.search(r'###\s*\**Question.*?\**\n(.*?)(?=###\s*\**Mark Scheme|$)', text, re.DOTALL)
    ms_match = re.search(r'###\s*\**Mark Scheme.*?\**\n(.*?)(?=###\s*\**Examiner Report|$)', text, re.DOTALL)
    er_match = re.search(r'###\s*\**Examiner Report.*?\**\n(.*)', text, re.DOTALL)

    problem_md = question_match.group(1).strip() if question_match else ""
    ms_md = ms_match.group(1).strip() if ms_match else ""
    er_md = er_match.group(1).strip() if er_match else ""

    # Build the final Firestore Payload
    payload = {
        "subject": "Mathematics",
        "board": board,
        "year": year,
        "paper": paper,
        "difficulty": "Advanced" if board in ["AEA", "STEP", "TMUA"] else "Standard",
        "question_number": q_num,
        "topic": "Trigonometry",  # Defaulting for now, can be updated dynamically
        "subtopic": "",
        "problem_markdown": problem_md,
        "mark_scheme_markdown": ms_md,
        "examiner_report_markdown": er_md
    }
    
    return f"{board}_{year}_{paper}_Q{q_num}", payload

def upload_to_firestore():
    print("🚀 Starting bulk upload to Firestore master collection 'questions'...\n")
    
    for filename in os.listdir(MARKDOWN_DIR):
        if not filename.endswith('.md'):
            continue
            
        file_path = os.path.join(MARKDOWN_DIR, filename)
        doc_id, data = parse_markdown_file(file_path, filename)
        
        # This pushes directly to the single 'questions' collection using a clean doc ID
        print(f"📦 Uploading Document: {doc_id}")
        db.collection("questions").document(doc_id).set(data)

    print("\n🎉 Bulk upload completely finished! Check your Firebase Console.")

if __name__ == "__main__":
    upload_to_firestore()