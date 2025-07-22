# create_patterns.py (Lowercase-insensitive version)

import json

INPUT_FILE = "raw_names.txt"
OUTPUT_FILE = "python/pakistani_names.jsonl"

def create_spacy_patterns():
    pattern_count = 0
    print(f"Starting pattern creation from '{INPUT_FILE}'...")

    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as infile, \
             open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
            
            for line in infile:
                if not line.strip():
                    continue

                parts = line.split()
                if len(parts) >= 1:
                    name = parts[0].strip()
                    if not name:
                        continue

                    # Match regardless of capitalization
                    pattern_data = {
                        "label": "PERSON",
                        "pattern": [{"LOWER": name.lower()}]
                    }

                    json_line = json.dumps(pattern_data)
                    outfile.write(json_line + '\n')
                    pattern_count += 1

    except FileNotFoundError:
        print(f"ERROR: Input file not found at '{INPUT_FILE}'.")
        print("Please make sure 'raw_names.txt' is in the root of your project.")
        return

    print("-" * 30)
    print("Pattern creation complete!")
    print(f"Successfully created {pattern_count} patterns.")
    print(f"Output file saved to '{OUTPUT_FILE}'.")
    print("-" * 30)

if __name__ == "__main__":
    create_spacy_patterns()
