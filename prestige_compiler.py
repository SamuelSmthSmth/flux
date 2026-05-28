import json
import hashlib
import os
import re

def fix_latex_functions(text):
    # List of functions to auto-slash
    functions = [
        'sin', 'cos', 'tan', 'sec', 'csc', 'cot', 
        'ln', 'log', 'exp', 'sqrt', 'pi', 'infty', 
        'arcsin', 'arccos', 'arctan'
    ]
    
    for func in functions:
        # Pattern: Word boundary, not preceded by a backslash
        pattern = r'(?<!\\)\b' + re.escape(func) + r'\b'
        text = re.sub(pattern, r'\\' + func, text)
    
    # Replace the ~ (hard space) with a regular space if you want cleaner rendering
    text = text.replace('~', ' ')
    return text

def compile_all_files():
    # Get all .txt files in the current directory
    txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
    
    # Ignore common non-problem files
    ignore_list = ['requirements.txt', 'todo.txt', 'notes.txt']
    txt_files = [f for f in txt_files if f not in ignore_list]

    if not txt_files:
        print("No .txt files found to compile!")
        return

    # Ensure output directory exists
    out_dir = 'question_bank'
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)

    print(f"Found {len(txt_files)} files. Starting batch compilation...\n")

    for filename in txt_files:
        output_name = filename.replace('.txt', '.json')
        output_path = os.path.join(out_dir, output_name)
        compiled_data = []

        with open(filename, 'r', encoding='utf-8') as f:
            lines = [line.strip() for line in f.readlines() if line.strip()]

        for line in lines:
            if "|" not in line:
                continue
            
            parts = [part.strip() for part in line.split("|")]
            
            if len(parts) >= 4:
                category = parts[0]
                name = parts[1]
                question = fix_latex_functions(parts[2])
                answer = fix_latex_functions(parts[3])
                
                problem_id = "prest_" + hashlib.md5(name.encode()).hexdigest()[:8]
                
                problem_entry = {
                    "id": problem_id,
                    "origin": name,
                    "metadata": {
                        "topic": "Calculus",
                        "category": category,
                        "difficulty": "Extreme"
                    },
                    "content": {
                        "latex_problem": question,
                        "final_answer": answer,
                        "examiner_notes": "" 
                    }
                }
                compiled_data.append(problem_entry)

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(compiled_data, f, indent=4)

        print(f"✓ Compiled: {filename} -> {out_dir}/{output_name} ({len(compiled_data)} problems)")

    print(f"\n--- All files processed! ---")

if __name__ == "__main__":
    compile_all_files()