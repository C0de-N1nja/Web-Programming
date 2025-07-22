import spacy
from spacy.pipeline import EntityRuler
import json
import sys

nlp = spacy.load("xx_ent_wiki_sm")

ruler = nlp.add_pipe("entity_ruler", before="ner")

patterns = []
with open("pakistani_names.jsonl", "r") as r_file:
    for line in r_file:
        patterns.append(json.loads(line))

ruler.add_patterns(patterns)

input_text = sys.argv[1]

doc = nlp(input_text)

merged_entities = []

entities_by_label = {
    "PERSON": [],
    "ORG": [],
    "GPE": [],
    "LOC": [],
}

i = 0

while i < len(doc.ents):
    current_entity = doc.ents[i]
    if i+1 < len(doc.ents):
        next_entity = doc.ents[i+1]

        if current_entity.label_ == "PERSON" and next_entity.label_ == "PERSON" and \
           (next_entity.start == current_entity.end or next_entity.start == current_entity.end + 1):
            merged_text = current_entity.text + " " + next_entity.text
            merged_entities.append(merged_text)
            entities_by_label["PERSON"].append(merged_text)
            i += 2
        else:
            merged_entities.append(current_entity.text)
            if current_entity.label_ in entities_by_label:
                entities_by_label[current_entity.label_].append(current_entity.text)
            i += 1
    else:
        merged_entities.append(current_entity.text)
        if current_entity.label_ in entities_by_label:
                entities_by_label[current_entity.label_].append(current_entity.text)
        i += 1
        
for label in entities_by_label:
    entities_by_label[label] = [entity.title() for entity in entities_by_label[label]]

print(json.dumps(entities_by_label))
