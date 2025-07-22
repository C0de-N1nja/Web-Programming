
# OSINT NER Module

## 📌 Overview

The **OSINT NER Module** is a standalone AI component engineered for extracting structured intelligence from unstructured textual bios. Built using spaCy and custom rule-based patterns, it specializes in identifying **people, organizations, cities, and geopolitical entities** with a strong focus on the **Pakistani context**.

It was developed as part of a larger **OSINT Recon Dashboard**, and demonstrates AI-enhanced parsing and classification of social media bios, profiles, and textual metadata gathered during recon workflows. It is ideal for downstream enrichment, risk scoring, or network graph analysis.

---

## 🎯 Project Purpose

This module fulfills the AI requirement of the Web Programming Project assignment and was developed **solo** (individual submission). The key objectives are: 

* 🧠 Introduce an **AI-enhanced NLP module** for real-time entity detection.
* 🌐 Provide **region-aware entity recognition** (Pakistan-specific).
* 🔄 Convert unstructured bios into **structured, actionable insights**.
* ⚙️ Enable seamless integration into a web-based dashboard or API.
* 📊 Prepare clean data for further analytics, scoring, or visualization layers.

---

## 🚀 Features

| Feature                       | Description                                                             |
| ----------------------------- | ----------------------------------------------------------------------- |
| ✅ Multilingual Support        | Uses spaCy’s `xx_ent_wiki_sm` for universal text recognition            |
| ✅ Custom EntityRuler Patterns | Tailored rules for Pakistani names, universities, companies, and cities |
| ✅ Intelligent Merging         | Joins first + last names into complete `PERSON` entities                |
| ✅ Structured JSON Output      | Entities are grouped by type (PERSON, ORG, GPE, LOC)                    |
| ✅ CLI-Based Interface         | Command-line script supports easy bio input/output                      |
| ✅ UTF-8 Safe Parsing          | Ensures compatibility with Urdu, Roman Urdu, and English bios           |
| ✅ Language-Agnostic Logic     | Model can handle bios in mixed languages (e.g., "Ali Khan from لاہور")  |
| ✅ Lightweight and Fast        | Minimal dependencies, optimized for real-time use                       |

---

## 🛠️ Technologies Used

| Technology   | Purpose                                      |
| ------------ | -------------------------------------------- |
| Python 3.x   | Core language for processing and scripting   |
| spaCy        | NLP pipeline and pretrained multilingual NER |
| EntityRuler  | Rule-based matcher for injecting custom data |
| JSON / JSONL | Data formats for input, output, and patterns |
| Bash / CLI   | Command-line operation for fast testing      |

---

## 📦 Installation & Requirements

### 🔧 Dependencies

This module requires **Python 3.7+** and uses **spaCy** for NLP processing. All other packages are standard and included in base Python.

Install dependencies with:

```bash
pip install -r requirements.txt
```

> Make sure you have pip installed and updated (`pip install --upgrade pip`).

---

### 📥 Download spaCy Multilingual Model

After installing spaCy, download the lightweight multilingual model:

```bash
python -m spacy download xx_ent_wiki_sm
```

Or install it directly via pip:

```bash
pip install https://github.com/explosion/spacy-models/releases/download/xx_ent_wiki_sm-3.7.0/xx_ent_wiki_sm-3.7.0.tar.gz
```

---

### 📄 `requirements.txt`

```
spacy==3.7.2
```
---

## 🗂 Folder Structure

```
osint_ner_module/
│
├── bio_entity_extractor.py         # Main script: loads spaCy + rules, outputs structured NER
├── pakistani_names.jsonl           # Custom PERSON entity patterns
├── pakistani_organizations.jsonl   # Custom ORG entity patterns
├── pakistani_locations.jsonl       # Custom GPE/LOC patterns
├── create_patterns.py              # Converts .txt name lists → .jsonl rules
├── create_location_patterns.py     # Converts .txt city/org lists → .jsonl rules
├── sample_input.txt                # Sample bios for manual testing
├── sample_output.json              # Sample structured output for demonstration
└── README.md                       # Documentation (this file)
```

---

## 🔄 Data Flow & Workflow

```
          [ Input Bio Text ]
                   │
                   ▼
      ┌────────────────────────────┐
      │ Load spaCy NLP Model       │ ← xx_ent_wiki_sm
      └────────────────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │ Inject EntityRuler Patterns│ ← Names, Cities, Orgs (Pakistani)
      └────────────────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │   Named Entity Recognition │
      └────────────────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │ Merge Adjacent PERSON Tags │ ← "Muhammad" + "Rehan" = "Muhammad Rehan"
      └────────────────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │   Categorized JSON Output  │
      └────────────────────────────┘
                   │
                   ▼
          [ Structured Data ]
```

---

## 🧪 Input/Output Format

* Input: Single-line bio text via command-line
* Output: Categorized JSON object like:

```bash
$ python bio_entity_extractor.py "Muhammad Rehan is a Cyber Security student studied at University of Central Punjab lives in Gujranwala."
```

```json
{
  "PERSON": ["Muhammad Rehan"],
  "ORG": ["University of Central Punjab"],
  "GPE": ["Gujranwala"],
  "LOC": []
}
```

---

## 🔗 Integration into OSINT Recon System

This module is a plug-and-play backend utility inside a broader **OSINT Recon Dashboard**, which includes:

* Scrapers for Instagram, GitHub, and Twitter bios
* Bio normalization, duplication removal, and language detection
* Named entity extraction using this module
* MongoDB-backed storage and Node.js orchestration
* Later stages: Entity enrichment, contact info detection, and risk scoring

All data processed by this module is passed to the central Node.js server as structured JSON for storage and analytics.

---

## 📦 Datasets Used

The `.jsonl` patterns were generated using curated local datasets:

| Entity Type   | Source Domains                                          |
| ------------- | ------------------------------------------------------- |
| Names         | Common Pakistani male/female names (over 2,000 entries) |
| Organizations | HEC Universities, PSX Companies, LinkedIn/Jobs.pk data  |
| Cities/GPE    | Provinces, major and minor cities of Pakistan           |

These were manually cleaned, deduplicated, and formatted using helper scripts. All `.txt` → `.jsonl` transformations are reproducible.

---

## 🧩 Module Design Principles

* **Modular**: All components can be swapped, reused, or extended independently.
* **Stealth-Oriented**: Designed for backend integration, not frontend display.
* **Low Dependency**: Uses only spaCy and standard Python libraries.
* **Cultural Awareness**: Patterns are tailored for Pakistan-specific terminology.

---
