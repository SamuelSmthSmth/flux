import os
import re
import frontmatter
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

DIRECTORY = './data/fields'
COLLECTION_NAME = 'fields'

def parse_markdown(content):
    # Extract only the code inside ```geogebra ... ```
    match = re.search(r'```geogebra\s*(.*?)\s*```', content, re.DOTALL | re.IGNORECASE)
    geogebra_code = match.group(1).strip() if match else ""
    
    # Remove the geogebra code block and the GeoGebra header from the main markdown
    # so it doesn't render as a raw code block in the unified view.
    markdown_content = re.sub(r'###\s*GeoGebra\s*\n*```geogebra\s*.*?\s*```', '', content, flags=re.DOTALL | re.IGNORECASE)
    # Also strip if they just wrote the geogebra block without the header
    markdown_content = re.sub(r'```geogebra\s*.*?\s*```', '', markdown_content, flags=re.DOTALL | re.IGNORECASE).strip()
    
    return {
        'markdown': markdown_content,
        'geogebra': geogebra_code
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
        
    print("Finished uploading fields!")

if __name__ == '__main__':
    main()
