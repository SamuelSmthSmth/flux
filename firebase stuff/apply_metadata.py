import os
import json
import re

MARKDOWN_DIR = "./data/flux"
TOPICS_FILE = "all_topics_database.json"

OVERRIDES = {
    "AEA_Maths_2016_P1_Q1.md": ("Functions and Graphs", "Composite functions"),
    "AEA_Maths_2016_P1_Q2.md": ("Trigonometric Functions", "Inverse trigonometric functions"),
    "AEA_Maths_2016_P1_Q3.md": ("Vectors", "Vectors in 3D"),
    "AEA_Maths_2016_P1_Q4.md": ("Exponentials and Logarithms", "Laws of logarithms"),
    "AEA_Maths_2016_P1_Q5.md": ("Sequences and Series", "Sigma notation"),
    "AEA_Maths_2016_P1_Q6.md": ("Differentiation", "Stationary points"),
    "AEA_Maths_2016_P1_Q7.md": ("Quadratics", "The discriminant"),
    "AEA_Maths_2017_P1_Q1.md": ("Functions and Graphs", "Inverse functions"),
    "AEA_Maths_2017_P1_Q2.md": ("Trigonometric Identities and Equations", "Harder trigonometric equations"),
    "AEA_Maths_2017_P1_Q3.md": ("Vectors", "Vectors in 3D"),
    "AEA_Maths_2017_P1_Q4.md": ("Trigonometric Ratios", "The cosine rule"),
    "AEA_Maths_2017_P1_Q5.md": ("Differentiation", "Stationary points"),
    "AEA_Maths_2017_P1_Q6.md": ("Integration", "Integration by substitution"),
    "AEA_Maths_2017_P1_Q7.md": ("Integration", "Areas between curves and lines"),
}

with open(TOPICS_FILE, 'r') as f:
    topics_db = json.load(f)

topics = topics_db.get("topics", {})

def classify(text):
    text_lower = text.lower()
    best_match = None
    
    # Priority keywords matching subtopics
    for topic, subtopics in topics.items():
        for subtopic in subtopics:
            if len(subtopic) > 4 and subtopic.lower() in text_lower:
                return topic, subtopic
                
    # Fallbacks based on broad keywords
    if "integrate" in text_lower or "integral" in text_lower or "trapezium rule" in text_lower:
        return "Integration", "Definite integrals"
    if "differentiate" in text_lower or "derivative" in text_lower or "turning point" in text_lower or "dy/dx" in text_lower:
        return "Differentiation", "Finding the derivative"
    if "circle" in text_lower:
        return "Circles", "Equation of a circle"
    if "cos " in text_lower or "sin " in text_lower or "tan " in text_lower:
        return "Trigonometric Identities and Equations", "Simple trigonometric equations"
    if "probability" in text_lower or "venn diagram" in text_lower:
        return "Discrete Random Variables", "Solving problems involving random variables"
    if "prime" in text_lower or "contradiction" in text_lower:
        return "Algebraic Methods", "Proof by contradiction"
    
    return "Algebraic Expressions", "Factorising"

for filename in os.listdir(MARKDOWN_DIR):
    if not filename.endswith(".md"):
        continue
    
    filepath = os.path.join(MARKDOWN_DIR, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if content.startswith("---\n"):
        print(f"Skipping {filename}, already has frontmatter.")
        continue

    if filename in OVERRIDES:
        topic, subtopic = OVERRIDES[filename]
    else:
        topic, subtopic = classify(content)
    
    yaml_header = f"---\ntopic: \"{topic}\"\nsubtopic: \"{subtopic}\"\n---\n\n"
    new_content = yaml_header + content
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filename} with Topic: {topic}, Subtopic: {subtopic}")
