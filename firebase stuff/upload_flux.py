import os
import re
import json
import firebase_admin
from firebase_admin import credentials, firestore

# --- CONFIGURATION ---
# Path to your folder containing the individual question .md files
MARKDOWN_DIR = "./data/flux"
SERVICE_ACCOUNT_PATH = "serviceAccountKey.json"

# Initialize Firebase
cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()

def parse_markdown_file(file_path, filename):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()

    topic = "General"
    subtopic = "General"

    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            text = parts[2].strip()
            for line in frontmatter.split("\n"):
                if line.startswith("topic:"):
                    topic = line.replace("topic:", "").strip().strip("\"'")
                elif line.startswith("subtopic:"):
                    subtopic = line.replace("subtopic:", "").strip().strip("\"'")

    # Parse metadata from the filename (assuming convention: BOARD_SUBBOARD_YEAR_PAPER_Q#.md)
    # Example: Edexcel_AEA_2008_P1_Q3.md
    name_parts = filename.replace('.md', '').split('_')
    
    board = name_parts[0] if len(name_parts) > 0 else "Edexcel"
    subBoard = name_parts[1] if len(name_parts) > 1 else "AEA"
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
    
    return f"{board}_{subBoard}_{year}_{paper}_Q{q_num}", payload

def upload_to_firestore():
    if not os.path.exists(MARKDOWN_DIR):
        print(f"Directory {MARKDOWN_DIR} does not exist. Please create it and add your markdown files.")
        return
    print(f"🚀 Starting bulk upload to Firestore master collection 'flux' from '{MARKDOWN_DIR}'...\n")
    
    for filename in os.listdir(MARKDOWN_DIR):
        if not filename.endswith('.md'):
            continue
            
        if '_Q' not in filename:
            print(f"Skipping full paper file: {filename}")
            continue
            
        file_path = os.path.join(MARKDOWN_DIR, filename)
        doc_id, data = parse_markdown_file(file_path, filename)
        
        # This pushes directly to the single 'flux' collection using a clean doc ID
        print(f"📦 Uploading Document: {doc_id}")
        db.collection("flux").document(doc_id).set(data)

    print("\n🎉 Bulk upload completely finished! Check your Firebase Console.")

if __name__ == "__main__":
    upload_to_firestore()