# create_org_patterns.py

import json
import os
import re # Import the regular expression module

INPUT_FILE = "raw_organizations.txt"
OUTPUT_FILE = "python/pakistani_names.jsonl" # Append to the main patterns file

def create_org_patterns():
    if not os.path.exists(INPUT_FILE):
        print(f"[ERROR] '{INPUT_FILE}' not found. Please create the file and add organization names.")
        return

    org_count = 0
    processed_org_names = set() # Use a set to store unique names (for deduplication)

    print(f"Processing and appending ORG patterns from '{INPUT_FILE}' to '{OUTPUT_FILE}'...")

    try:
        # Step 1: Read, clean, and deduplicate all organization names first
        with open(INPUT_FILE, 'r', encoding='utf-8') as infile:
            for line in infile:
                stripped_line = line.strip()
                if not stripped_line:
                    continue

                # Remove leading numbers and dots (e.g., "1. Abbott" -> "Abbott")
                # Also remove trailing commas if any (common in lists)
                cleaned_name = re.sub(r'^\d+\.\s*', '', stripped_line).strip().rstrip(',')
                
                if cleaned_name: # Ensure it's not empty after cleaning
                    processed_org_names.add(cleaned_name) # Add to set for uniqueness

        # Step 2: Append unique, cleaned names as patterns to the output file
        with open(OUTPUT_FILE, 'a', encoding='utf-8') as outfile: # 'a' for append
            for org_name in sorted(list(processed_org_names)): # Sort for consistent output
                # For multi-word organizations, spaCy's EntityRuler pattern needs a list of token dictionaries.
                # E.g., "University of Central Punjab" -> [{"LOWER": "university"}, {"LOWER": "of"}, ...]
                pattern_tokens = [{"LOWER": token.lower()} for token in org_name.split()]

                org_pattern = {
                    "label": "ORG",
                    "pattern": pattern_tokens
                }

                outfile.write(json.dumps(org_pattern) + "\n")
                org_count += 1

    except Exception as e:
        print(f"ERROR: Failed to create ORG patterns. Reason: {e}")
        return

    print("-" * 50)
    print(f"✅ Added {org_count} UNIQUE ORG patterns (after cleaning and deduplication).")
    print(f"📄 Appended to file: {OUTPUT_FILE}")
    print("-" * 50)

if __name__ == "__main__":
    create_org_patterns()