import os
import re

MARKDOWN_DIR = "./data/flux"

# Pattern matches "Code snippet" or "Graphing calculator input:" followed by code blocks
# wrapped in triple backticks or triple dollar signs.
pattern = re.compile(
    r'(?:Code\s+snippet|Graphing\s+calculator\s+input:?)\s*\n*\s*(?:```|\$\$\$)\s*.*?\s*(?:```|\$\$\$)',
    re.DOTALL | re.IGNORECASE
)

def main():
    if not os.path.exists(MARKDOWN_DIR):
        print(f"Directory {MARKDOWN_DIR} does not exist.")
        return
        
    print(f"🧹 Scanning for and removing code snippets/calculator inputs from '{MARKDOWN_DIR}'...\n")
    
    total_removed = 0
    modified_files = 0
    
    for filename in os.listdir(MARKDOWN_DIR):
        if not filename.endswith(".md"):
            continue
            
        filepath = os.path.join(MARKDOWN_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content, count = pattern.subn('', content)
        
        # Also clean up any triple empty lines left after removal
        new_content = re.sub(r'\n{3,}', '\n\n', new_content)
        
        # Strip trailing/leading spaces or double newlines at end of file
        new_content = new_content.strip() + '\n'
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Removed {count} code snippet(s) from {filename}")
            total_removed += count
            modified_files += 1
            
    print(f"\n🎉 Clean-up complete! Modified {modified_files} files, removed {total_removed} code blocks.")

if __name__ == "__main__":
    main()
