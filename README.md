# The Ekaterinburg Gazette: Decoding the Romanov Myths

## Project Overview

This project is an interactive historical research website about the Romanov family, the Anastasia survival myth, and the forensic evidence that eventually resolved the mystery.

The website combines:

- A story-based RPG / visual novel
- A 53-source historical archive
- RAG-assisted research organization
- A D3.js property graph
- A vintage newspaper visual design system
- Public deployment through GitHub Pages

The project turns a historical research topic into an interactive learning experience. Instead of only reading a report, users follow the ghosts of Anastasia and Maria through four historical eras, answer evidence-based questions, and then explore the source relationships through a Knowledge Graph.

## Public Website

Main website:

```text
https://donkeyjo6rmp4.github.io/1142_DTAI_DHA002/
```

Direct Knowledge Graph page:

```text
https://donkeyjo6rmp4.github.io/1142_DTAI_DHA002/KnowledgeGraph
```

GitHub repository:

```text
https://github.com/DonkEyJo6Rmp4/1142_DTAI_DHA002
```

## Assets Folder for Review

All supporting submission materials can be found in the `assets/` folder.

This folder is included so that the instructor and reviewers can quickly find the presentation, poster, music, character images, and source archive without searching through the development files.

```text
assets/
```

The folder contains:

```text
assets/presentation/
```

Presentation file for the final project.

```text
assets/poster/
```

A1 poster image for the final exhibition submission.

The GitHub-friendly poster file is:

```text
assets/poster/1142_DHAI_InnoFest_Poster.jpg
```

The original high-resolution PNG poster may be kept locally because it is larger than GitHub's normal single-file upload limit.

```text
assets/Music/
```

Background music used in the website.

```text
assets/characterPic/
```

Original character images used for the RPG website.

```text
assets/paper/
```

The 53 research source files used to build the Romanov archive and Knowledge Graph.

## Research Topic

The project studies how the Romanov survival myth was created and sustained after the execution of the Romanov family in 1918.

The central historical issue is that the Soviet government initially concealed parts of the execution story. The public received incomplete and contradictory information. Because complete bodies were not publicly available for decades, rumors and impostor claims became possible.

The most famous impostor was Anna Anderson, who claimed to be Grand Duchess Anastasia. Her claim was later romanticized by Western media and popular culture. In the 1990s and 2000s, forensic DNA studies finally confirmed the identities of the Romanov remains and disproved the survival myth.

## Research Questions

1. What information gaps were created by contradictions between Soviet official narratives, the Yurovsky Note, and Sokolov's investigation?

2. How did Anna Anderson's identity claims become amplified by Western media, and how did forensic DNA evidence disprove those claims?

## Website Story Structure

The RPG is divided into four historical eras:

1. **Execution & Early Rumors**
   - Focus: Soviet cover-up, early contradictory reports, missing public bodies
   - NPC: Ivan Petrov, Soviet Press Officer

2. **Impostors & Royalist Claims**
   - Focus: Anna Anderson, coached memory, royalist hope
   - NPC: Colonel Dmitri Volkov, White Russian Royalist Emigre

3. **Western Media & Pop Culture**
   - Focus: romanticized survival stories in film and animation
   - NPC: Chuck Morrison, Hollywood Film Producer

4. **Forensic DNA Verdict**
   - Focus: exhumation, mitochondrial DNA, STR markers, second grave evidence
   - NPC: Dr. Elena Kasimova, Forensic Geneticist

Anastasia and Maria appear as ghost guides. The player helps them understand the truth of their deaths by choosing answers supported by historical evidence.

## User Experience

The website has two main modes:

1. **RPG Investigation**
   - Users progress through dialogue scenes.
   - Each NPC presents a misleading or incomplete claim.
   - The user must choose the evidence-based answer.
   - Incorrect choices trigger NPC responses and ghost hints.
   - The story ends with the Romanov family finally shown together.

2. **Knowledge Graph**
   - Users can explore the source archive after or without playing the RPG.
   - The graph shows documents, people, events, and typed relationships.
   - Users can filter by era, evidence stance, and node type.
   - Clicking a node shows its description, source filename, and explicit relationships.

## Knowledge Graph Implementation

The Knowledge Graph is the most important technical and research component of the project.

It is implemented as a **property graph**, meaning:

- Each node has properties.
- Each edge has a typed relationship.
- The graph is not only visual; it represents the evidence structure of the research.

### Node Types

The graph contains three major node types:

- `document`
  - Historical papers, reports, books, articles, and source files
  - Properties include `id`, `label`, `stance`, `era`, `description`, and `fullName`

- `person`
  - Historical figures such as Nicholas II, Anastasia, Maria, Anna Anderson, Peter Gill, and Michael Coble

- `event`
  - Historical events such as the 1918 execution, Sokolov investigation, 1991 exhumation, 1994 DNA study, second grave discovery, and final DNA verdict

### Edge Types

Edges describe explicit relationships between nodes. Examples include:

- `ABOUT`
- `AUTHORED_BY`
- `SUPPORTS`
- `DEBUNKS`
- `CONTRADICTS`
- `DOCUMENTS`
- `ANALYZES`
- `REFERENCES`
- `PARTICIPATED_IN`
- `LED_TO`

These edge types allow the graph to show how evidence supports, challenges, documents, or explains different parts of the Romanov myth.

### D3 Hybrid Rendering

The graph uses D3.js with a hybrid rendering method:

- SVG is used for edges, arrows, and relationship labels.
- HTML `div` elements are used for graph nodes.
- D3 force simulation controls the layout.
- Zooming, dragging, filtering, and neighbor highlighting support exploration.

This design makes the graph readable and visually consistent with the rest of the website.

## Visual Design

The visual style is called **The Ekaterinburg Gazette**.

The design uses:

- Kraft paper background
- Vintage newspaper layout
- Charcoal ink
- Dried-blood red stamps
- Prussian blue labels
- Aged gold highlights
- Typewriter-style text
- Halftone and print texture effects

This style was chosen because the project is about newspapers, propaganda, archives, missing evidence, and historical investigation.

## Background Music

The website uses:

```text
Tchaikovsky - The Seasons - October - Autumn Song
```

The music loops in the background at low volume. It was chosen because it is Russian classical music with a sad and reflective mood that fits the Romanov story.

## Technical Stack

- Vite
- JavaScript
- D3.js
- HTML / CSS
- GitHub Pages

## Important Files

```text
src/main.js
```

Main application logic:

- screen rendering
- RPG state machine
- event listeners
- background music
- Knowledge Graph initialization
- D3 force graph behavior

```text
src/data/gameData.js
```

RPG content:

- characters
- images
- prologue
- four eras
- questions
- answer choices
- correct and incorrect responses
- true ending

```text
src/data/graphData.js
```

Knowledge Graph data:

- graph nodes
- graph edges
- document, person, and event relationships

```text
src/style.css
```

Visual design:

- newspaper layout
- kraft paper texture
- typography
- character layout
- RPG panels
- Knowledge Graph styling

```text
public/characters/
```

Original PNG character images and ending image fallback.

```text
public/characters/optimized/
```

Optimized WebP versions used for faster website loading.

```text
public/Music/
```

Background music file.

## Image Optimization Note

The original character images were large PNG files. To improve website loading speed, optimized WebP versions were added. The website now loads WebP images first and falls back to PNG if needed.

The true ending family image also has a dedicated rotated version:

```text
public/characters/optimized/7_WholeFamily_ending.webp
public/characters/7_WholeFamily_ending.png
```

This image is used only in the final ending scene.

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start local development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

The website is deployed using GitHub Pages.

The deployment workflow is stored at:

```text
.github/workflows/deploy.yml
```

The Vite base path is configured in:

```text
vite.config.js
```

The project also includes a GitHub Pages SPA fallback so that the direct Knowledge Graph route works:

```text
https://donkeyjo6rmp4.github.io/1142_DTAI_DHA002/KnowledgeGraph
```

## Final Deliverables

The complete final project includes:

- Interactive RPG website
- Direct Knowledge Graph page
- 53-source Romanov research archive
- A1 research poster
- English presentation script
- Project report
- Code review document
- GitHub Pages public deployment

The files for the poster, presentation, music, images, and paper archive are collected in:

```text
assets/
```

## Summary

This project uses AI-assisted research and coding to transform a complex historical topic into an interactive website. The RPG helps users emotionally understand the Romanov myth, while the Knowledge Graph helps users inspect the evidence behind the story.

The final goal is to move from rumor and myth toward evidence and historical understanding.
