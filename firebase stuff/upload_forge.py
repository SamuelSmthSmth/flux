import os
import frontmatter
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

DIRECTORY = './data/forge'
COLLECTION_NAME = 'forge'

def parse_markdown(content):
    sections = {
        'Question': '',
        'The Solution': '',
        'Discussion': ''
    }
    
    current_section = None
    lines = content.split('\n')
    
    for line in lines:
        if line.startswith('### Question') or line.strip() == 'Question':
            current_section = 'Question'
        elif line.startswith('### The Solution') or line.strip() == 'The Solution':
            current_section = 'The Solution'
        elif line.startswith('### Discussion') or line.strip() == 'Discussion':
            current_section = 'Discussion'
        elif line.startswith('### '):
            current_section = None
        else:
            if current_section:
                sections[current_section] += line + '\n'
                
    # Strip whitespace
    for k in sections:
        sections[k] = sections[k].strip()
        
    return {
        'question': sections['Question'],
        'solution': sections['The Solution'],
        'the_solution': sections['The Solution'],
        'discussion': sections['Discussion']
    }

def main():
    if not os.path.exists(DIRECTORY):
        print(f"Directory {DIRECTORY} does not exist. Please create it and add your markdown files.")
        return
        
    for filename in os.listdir(DIRECTORY):
        if not filename.endswith('.md'):
            continue
            
        filepath = os.path.join(DIRECTORY, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
            
        metadata = post.metadata
        doc_id = metadata.get('id')
        if not doc_id:
            print(f"Skipping {filename}: No 'id' found in frontmatter.")
            continue
            
        parsed_sections = parse_markdown(post.content)
        
        # Build document data combining metadata and content
        doc_data = {
            'title': metadata.get('title', ''),
            'carousel_category': metadata.get('carousel_category', ''),
            **parsed_sections
        }
        
        # Upload to Firestore
        print(f"Uploading document '{doc_id}' to collection '{COLLECTION_NAME}'...")
        db.collection(COLLECTION_NAME).document(doc_id).set(doc_data, merge=True)
        
    print("Finished uploading forge!")

if __name__ == '__main__':
    main()
