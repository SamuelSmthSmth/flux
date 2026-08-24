import re
import os
import glob

def should_be_display_math(math_content):
    # Strip whitespace
    m = math_content.strip()
    
    # 1. Contains integral, sum, product, limit
    if any(kw in m for kw in ['\\int', '\\sum', '\\prod', '\\lim']):
        return True
    
    # 2. Long expression (e.g. > 50 chars) that has an equals sign or inequality
    if len(m) > 50 and ('=' in m or '\\geqslant' in m or '\\leqslant' in m or '>' in m or '<' in m):
        return True
    
    # 3. Contains \Rightarrow or \Leftrightarrow
    if '\\Rightarrow' in m or '\\Leftrightarrow' in m:
        return True
        
    # 4. Expressions containing arrays or matrices or cases
    if any(kw in m for kw in ['\\begin{array}', '\\begin{matrix}', '\\begin{pmatrix}', '\\begin{bmatrix}', '\\begin{cases}']):
        return True

    # 5. Long fractions (heuristically, more than 40 chars and contains \frac and =)
    if '\\frac' in m and len(m) > 40 and '=' in m:
        return True
        
    return False

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find single $...$ but NOT $$...$$
    # (?<!\$) : Negative lookbehind for $
    # \$      : Literal $
    # (       : Start capture group 1
    #  [^\$]+ : One or more characters that are not $
    # )       : End capture group 1
    # \$      : Literal $
    # (?!\$)  : Negative lookahead for $
    
    def replacer(match):
        math_content = match.group(1)
        if should_be_display_math(math_content):
            return f"$${math_content}$$"
        else:
            return match.group(0) # Unchanged

    new_content = re.sub(r'(?<!\$)\$([^\$]+)\$(?!\$)', replacer, content)

    # We also want to support `...` replacing. 
    # Since the user mentioned they sometimes replace $ with ` and vice versa.
    # The user says "If it's consistent enough, we'll change it so that it actually checks for ` and makes it double for the same cases as with $"
    # We will implement this for ` too:
    def backtick_replacer(match):
        math_content = match.group(1)
        if should_be_display_math(math_content):
            return f"``{math_content}``"
        else:
            return match.group(0)

    # (?<!`)`([^`]+)`(?!`)
    new_content = re.sub(r'(?<!`)`([^`\n]+)`(?!`)', backtick_replacer, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

if __name__ == "__main__":
    # Ensure working directory is correct
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    files = glob.glob('data/flux/*.md')
    changed = 0
    for file in files:
        if process_file(file):
            changed += 1
            print(f"Updated {file}")
    print(f"Total files updated: {changed}")
