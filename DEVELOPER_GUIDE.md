# Developer Guide: Building the Clean Energy Wiki

This guide explains how to build the wiki site from the content structure. We use a simple build script approach with vanilla JavaScript for interactivity.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Build Pipeline](#build-pipeline)
- [Data Flow](#data-flow)
- [Components to Build](#components-to-build)
- [Styling Approach](#styling-approach)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              BUILD TIME                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   /content                        /build                    /dist        │
│   ├── approaches/                 ├── index.js              ├── index.html
│   │   └── */meta.yaml    ───►     ├── parse-markdown.js ───► ├── approaches/*.html
│   │   └── */content.md            ├── generate-data.js      ├── concepts/*.html
│   ├── concepts/                   └── templates.js          ├── data/
│   ├── facets.yaml                                           │   ├── facets.json
│   └── sources/sources.yaml                                  │   ├── comparisons.json
│                                                              │   └── search-index.json
│                                                              ├── styles/main.css
│                                                              └── scripts/main.js
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                              RUNTIME (Browser)                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   Static HTML        +        Vanilla JS (~3kb)                          │
│   - Article content           - Scroll observer (margin updates)         │
│   - Pre-rendered margins      - Comparison panel toggle                  │
│   - Facet metadata inline     - Search (optional, via Pagefind)          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Design Principles

1. **Static first.** All content is pre-rendered HTML. Pages work without JavaScript.
2. **Progressive enhancement.** JS adds the living margin and comparison panels.
3. **Data at build time.** Comparisons and facet groupings are computed once, not on every page load.
4. **Minimal client JS.** No framework, no build step for client code, just vanilla JS.

---

## Project Structure

```
/
├── content/                    # Source content (see CONTRIBUTING.md)
│   ├── approaches/
│   │   └── {technology}/
│   │       ├── meta.yaml
│   │       └── content.md
│   ├── concepts/
│   │   └── {concept}/
│   │       ├── meta.yaml
│   │       └── content.md
│   ├── facets.yaml
│   └── sources/
│       └── sources.yaml
│
├── build/                      # Build scripts (Node.js)
│   ├── index.js                # Main entry point
│   ├── load-content.js         # Read and validate content files
│   ├── parse-markdown.js       # Transform markdown + annotations to HTML
│   ├── generate-data.js        # Create comparison and facet JSON
│   ├── render-pages.js         # Generate HTML pages from templates
│   └── templates/              # HTML templates
│       ├── layout.js           # Base page layout
│       ├── article.js          # Article page template
│       ├── index.js            # Home/grid page template
│       └── comparison.js       # Comparison page template (optional)
│
├── public/                     # Static assets (copied to dist/)
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── main.js             # Client-side interactivity
│
├── dist/                       # Build output (git-ignored)
│
├── package.json
├── CONTRIBUTING.md             # Content authoring guide
└── DEVELOPER_GUIDE.md          # This file
```

---

## Build Pipeline

The build runs in four phases:

### Phase 1: Load and Validate

```
Input:  content/**/*.yaml, content/**/*.md
Output: In-memory data structures

Tasks:
1. Parse facets.yaml as schema
2. Parse sources.yaml as bibliography
3. For each approach/concept:
   a. Parse meta.yaml
   b. Validate facet values against schema
   c. Validate source references exist
   d. Read content.md
4. Report any validation errors and exit if invalid
```

**Key validation rules:**
- All `facets.*` values in meta.yaml must exist in facets.yaml
- All `[@source_key]` citations must exist in sources.yaml
- Required fields must be present (id, name, short_description, facets)
- IDs must be unique across all content

### Phase 2: Parse and Transform Markdown

```
Input:  Raw markdown with custom annotations
Output: HTML with data attributes, extracted annotation metadata

Tasks:
1. Transform ::: facet blocks to <div data-facet="...">
2. Transform ::: limitation blocks to <div data-limitation="...">
3. Transform ::: equation blocks to rendered LaTeX
4. Transform [@citation] to <cite> elements with source data
5. Transform [:compare X] to clickable comparison links
6. Transform [:link X] to internal links
7. Run standard markdown-to-HTML conversion
8. Extract annotation metadata for margin generation
```

**Annotation transformations:**

| Annotation | HTML Output |
|------------|-------------|
| `::: facet ultimate_source` | `<section class="facet-block" data-facet="ultimate_source">` |
| `::: limitation material_scarcity` | `<div class="limitation-block" data-limitation="material_scarcity">` |
| `[@shockley1961]` | `<cite data-source="shockley1961"><sup>[1]</sup></cite>` |
| `[:compare power_density]` | `<a href="#" class="compare-link" data-compare="power_density">` |
| `[:link wind]` | `<a href="/approaches/wind.html">` |

### Phase 3: Generate Data Files

```
Input:  All parsed content, facets schema
Output: JSON files for client-side use

Tasks:
1. Generate facets.json
   - Facet definitions with all values
   - List of technologies per facet value
   
2. Generate comparisons.json
   - For each comparison type (theoretical_limit, power_density, etc.):
     - Aggregated data from all technologies
     - Pre-sorted by relevant columns
     
3. Generate search-index.json (optional)
   - Technology names, descriptions, content snippets
   - Or defer to Pagefind post-build
```

**comparisons.json structure:**

```json
{
  "theoretical_limit": {
    "title": "Theoretical Efficiency Limits",
    "columns": ["technology", "limit_name", "limit_percent", "achieved_percent"],
    "rows": [
      {
        "id": "photovoltaics",
        "name": "Photovoltaics (Si)",
        "limit_name": "Shockley-Queisser",
        "limit_percent": 29,
        "achieved_percent": 26.8
      },
      ...
    ]
  },
  "ultimate_source": {
    "title": "Energy Sources",
    "groups": {
      "solar": {
        "name": "Solar-derived",
        "description": "Energy originating from nuclear fusion in the Sun",
        "technologies": ["photovoltaics", "wind", "wave", "hydro", "otec", "biomass"]
      },
      ...
    }
  },
  ...
}
```

### Phase 4: Render Pages

```
Input:  Parsed content, generated data, templates
Output: HTML files in dist/

Tasks:
1. For each approach:
   a. Render article template with content HTML
   b. Embed relevant facet data for margin
   c. Generate source list from citations used
   d. Write to dist/approaches/{id}.html

2. For each concept:
   a. Similar to approaches
   b. Write to dist/concepts/{id}.html

3. Render index page:
   a. Grid/table of all technologies
   b. Facet filtering UI
   c. Write to dist/index.html

4. Copy public/ assets to dist/
5. Copy generated JSON to dist/data/
```

---

## Data Flow

### Build-time Data

```
facets.yaml ─────┐
                 ├──► Validation ──► Parsed approaches ──► HTML pages
meta.yaml ───────┤                         │
content.md ──────┘                         │
                                           ▼
                                    comparisons.json
                                    facets.json
```

### Runtime Data

```
                    Page Load
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│  HTML includes:                                      │
│  - Article content with data-facet attributes       │
│  - <script> with window.__APPROACH__ = {...}        │
│  - <script> with window.__FACETS__ = {...}          │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│  main.js initialises:                                │
│  - IntersectionObserver on [data-facet] elements    │
│  - Click handlers for comparison links              │
│  - Margin update function                           │
└─────────────────────────────────────────────────────┘
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
   User scrolls              User clicks "Compare all"
          │                           │
          ▼                           ▼
   Observer fires            Fetch comparisons.json
          │                   (or use cached)
          ▼                           │
   updateMargin(facetType)            ▼
          │                   Render comparison panel
          ▼                           │
   Margin HTML updated        Panel shown
```

---

## Components to Build

### 1. Content Loader (`build/load-content.js`)

**Responsibilities:**
- Recursively read content directories
- Parse YAML and markdown files
- Validate against schema
- Return structured data

**Interface:**
```javascript
async function loadContent(contentDir) {
  return {
    facets: { /* parsed facets.yaml */ },
    sources: { /* parsed sources.yaml */ },
    approaches: [
      {
        id: 'photovoltaics',
        meta: { /* parsed meta.yaml */ },
        content: '/* raw markdown */',
        path: 'content/approaches/photovoltaics'
      },
      ...
    ],
    concepts: [ /* similar structure */ ],
    errors: [ /* validation errors, if any */ ]
  };
}
```

### 2. Markdown Parser (`build/parse-markdown.js`)

**Responsibilities:**
- Transform custom annotations to HTML
- Handle LaTeX equation rendering
- Process citations
- Track annotations for margin data

**Interface:**
```javascript
function parseMarkdown(markdown, sources) {
  return {
    html: '/* transformed HTML */',
    annotations: [
      { type: 'facet', facet: 'ultimate_source', startLine: 10, endLine: 25 },
      { type: 'limitation', limitation: 'material_scarcity', startLine: 150 },
      ...
    ],
    citations: ['shockley1961', 'fraunhofer2024', ...],
    equations: [
      { id: 'photon_energy', latex: 'E = h\\nu' },
      ...
    ]
  };
}
```

**Implementation notes:**
- Use marked or markdown-it as the base parser
- Write custom tokeniser/renderer for ::: blocks
- For LaTeX, either:
  - Render to MathML/SVG at build time (KaTeX)
  - Or include KaTeX client-side and render on load

### 3. Data Generator (`build/generate-data.js`)

**Responsibilities:**
- Aggregate comparison data across technologies
- Group technologies by facet values
- Structure data for efficient client-side use

**Interface:**
```javascript
function generateComparisonData(approaches, facets) {
  return {
    theoretical_limit: { /* comparison table data */ },
    power_density: { /* comparison table data */ },
    ultimate_source: { /* grouped technologies */ },
    // ... one entry per facet/comparison type
  };
}

function generateFacetIndex(approaches, facets) {
  return {
    ultimate_source: {
      solar: ['photovoltaics', 'wind', 'wave', ...],
      gravitational: ['tidal-barrage', 'tidal-stream'],
      // ...
    },
    // ... one entry per facet
  };
}
```

### 4. Page Templates (`build/templates/`)

**Base layout (`layout.js`):**
```javascript
function layout({ title, content, scripts, styles }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Clean Energy from First Principles</title>
  <link rel="stylesheet" href="/styles/main.css">
  ${styles || ''}
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  
  <header class="site-header">
    <a href="/" class="site-title">Clean Energy from First Principles</a>
    <nav class="site-nav">
      <a href="/">All Technologies</a>
      <a href="/about.html">About</a>
    </nav>
  </header>
  
  ${content}
  
  ${scripts || ''}
</body>
</html>`;
}
```

**Article template (`article.js`):**
```javascript
function articlePage(approach, facets, parsedContent) {
  const content = `
  <div class="article-layout">
    <aside class="toc">
      ${generateTableOfContents(parsedContent.html)}
    </aside>
    
    <main id="main" class="article-content" data-approach="${approach.id}">
      <h1>${approach.meta.name}</h1>
      <p class="lede">${approach.meta.short_description}</p>
      
      ${parsedContent.html}
      
      <footer class="article-footer">
        <h2>Sources</h2>
        ${renderSourceList(parsedContent.citations)}
      </footer>
    </main>
    
    <aside class="margin" aria-label="Related information">
      <div class="margin-content">
        <!-- Populated by JS, fallback content here -->
        <p class="margin-fallback">
          Scroll to see related technologies and comparisons.
        </p>
      </div>
    </aside>
  </div>
  
  <div class="comparison-panel" hidden aria-modal="true">
    <div class="comparison-panel-content">
      <!-- Populated by JS -->
    </div>
    <button class="comparison-panel-close" aria-label="Close">×</button>
  </div>`;

  const scripts = `
  <script>
    window.__APPROACH__ = ${JSON.stringify(approach.meta)};
    window.__FACETS__ = ${JSON.stringify(facets)};
  </script>
  <script src="/scripts/main.js"></script>`;

  return layout({
    title: approach.meta.name,
    content,
    scripts
  });
}
```

**Index/grid template (`index.js`):**
```javascript
function indexPage(approaches, facets) {
  const grid = approaches.map(a => `
    <a href="/approaches/${a.id}.html" class="tech-card" data-source="${a.meta.facets.ultimate_source}">
      <h3>${a.meta.name}</h3>
      <p>${a.meta.short_description}</p>
      <ul class="tech-card-facets">
        <li>${facets.ultimate_source.values[a.meta.facets.ultimate_source].name}</li>
        <li>${facets.conversion_pathway.values[a.meta.facets.conversion_pathway].name}</li>
      </ul>
    </a>
  `).join('\n');

  const content = `
  <main id="main" class="index-page">
    <h1>Clean Energy from First Principles</h1>
    <p class="index-lede">
      Examining clean energy technologies through a common lens: 
      what gradient exists in nature, and what limits its conversion to useful work?
    </p>
    
    <div class="filter-bar">
      <label>
        Filter by source:
        <select id="filter-source">
          <option value="">All sources</option>
          ${Object.entries(facets.ultimate_source.values).map(([key, val]) => 
            `<option value="${key}">${val.name}</option>`
          ).join('\n')}
        </select>
      </label>
    </div>
    
    <div class="tech-grid">
      ${grid}
    </div>
  </main>`;

  return layout({ title: 'Home', content });
}
```

### 5. Client-Side JavaScript (`public/scripts/main.js`)

**Responsibilities:**
- Watch scroll position, update margin
- Handle comparison panel open/close
- Optional: search, filtering

**Structure:**
```javascript
// main.js - no build step, runs directly in browser

(function() {
  'use strict';
  
  // Only run on article pages
  if (!document.querySelector('.article-content')) return;
  
  const state = {
    currentFacet: null,
    comparisonData: null,  // Lazy-loaded
  };
  
  // ─────────────────────────────────────────────────────────────
  // Margin Updates
  // ─────────────────────────────────────────────────────────────
  
  const margin = document.querySelector('.margin-content');
  const facetBlocks = document.querySelectorAll('[data-facet]');
  
  const observer = new IntersectionObserver((entries) => {
    // Find the most visible facet block
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    
    if (visible && visible.target.dataset.facet !== state.currentFacet) {
      state.currentFacet = visible.target.dataset.facet;
      updateMargin(state.currentFacet);
    }
  }, { 
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '-10% 0px -10% 0px'
  });
  
  facetBlocks.forEach(block => observer.observe(block));
  
  function updateMargin(facetType) {
    const facetSchema = window.__FACETS__[facetType];
    const currentValue = window.__APPROACH__.facets[facetType];
    const valueInfo = facetSchema.values[currentValue];
    
    margin.innerHTML = `
      <div class="margin-facet">
        <p class="margin-label">${facetSchema.name}</p>
        <p class="margin-value">${valueInfo.name}</p>
        <p class="margin-description">${valueInfo.description}</p>
        <button class="margin-compare" data-facet="${facetType}">
          Compare all →
        </button>
      </div>
    `;
  }
  
  // ─────────────────────────────────────────────────────────────
  // Comparison Panel  
  // ─────────────────────────────────────────────────────────────
  
  const panel = document.querySelector('.comparison-panel');
  const panelContent = document.querySelector('.comparison-panel-content');
  
  // Event delegation for compare buttons
  document.addEventListener('click', async (e) => {
    const compareBtn = e.target.closest('[data-compare], .margin-compare');
    if (compareBtn) {
      e.preventDefault();
      const facetType = compareBtn.dataset.facet || compareBtn.dataset.compare;
      await openComparison(facetType);
    }
    
    if (e.target.closest('.comparison-panel-close')) {
      closeComparison();
    }
  });
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) {
      closeComparison();
    }
  });
  
  async function openComparison(facetType) {
    // Lazy load comparison data
    if (!state.comparisonData) {
      const response = await fetch('/data/comparisons.json');
      state.comparisonData = await response.json();
    }
    
    const data = state.comparisonData[facetType];
    panelContent.innerHTML = renderComparison(data, facetType);
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    panel.querySelector('.comparison-panel-close').focus();
  }
  
  function closeComparison() {
    panel.hidden = true;
    document.body.style.overflow = '';
  }
  
  function renderComparison(data, facetType) {
    // Different rendering based on comparison type
    if (data.rows) {
      return renderComparisonTable(data);
    } else if (data.groups) {
      return renderComparisonGroups(data);
    }
  }
  
  function renderComparisonTable(data) {
    const headers = data.columns.map(c => `<th>${c}</th>`).join('');
    const rows = data.rows.map(row => `
      <tr data-id="${row.id}" class="${row.id === window.__APPROACH__.id ? 'current' : ''}">
        <td><a href="/approaches/${row.id}.html">${row.name}</a></td>
        ${data.columns.slice(1).map(col => `<td>${row[col] ?? '—'}</td>`).join('')}
      </tr>
    `).join('');
    
    return `
      <h2>${data.title}</h2>
      <table class="comparison-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }
  
  function renderComparisonGroups(data) {
    const groups = Object.entries(data.groups).map(([key, group]) => `
      <div class="comparison-group">
        <h3>${group.name}</h3>
        <p>${group.description}</p>
        <ul>
          ${group.technologies.map(id => {
            const isCurrent = id === window.__APPROACH__.id;
            return `<li class="${isCurrent ? 'current' : ''}">
              <a href="/approaches/${id}.html">${id}</a>
            </li>`;
          }).join('')}
        </ul>
      </div>
    `).join('');
    
    return `<h2>${data.title}</h2><div class="comparison-groups">${groups}</div>`;
  }
  
})();
```

---

## Styling Approach

### Layout Structure

```css
/* Three-column layout for article pages */
.article-layout {
  display: grid;
  grid-template-columns: 180px minmax(0, 680px) 240px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* TOC on left */
.toc {
  position: sticky;
  top: 2rem;
  height: fit-content;
  font-size: 0.875rem;
}

/* Main content in center */
.article-content {
  min-width: 0;  /* Prevent overflow */
}

/* Living margin on right */
.margin {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

/* Responsive: collapse to single column */
@media (max-width: 1000px) {
  .article-layout {
    grid-template-columns: 1fr;
  }
  
  .toc {
    display: none;  /* Or convert to hamburger menu */
  }
  
  .margin {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    background: white;
    border-top: 1px solid #ddd;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.2s;
  }
  
  .margin.visible {
    transform: translateY(0);
  }
}
```

### Typography

```css
/* Readable defaults */
.article-content {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1a1a1a;
}

/* Headings */
.article-content h2 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.article-content h3 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

/* Keep prose measure readable */
.article-content p,
.article-content li {
  max-width: 65ch;
}
```

### Facet Blocks and Annotations

```css
/* Facet blocks get subtle left border */
.facet-block {
  border-left: 3px solid #e0e0e0;
  padding-left: 1rem;
  margin-left: -1rem;
  transition: border-color 0.2s;
}

/* Highlight when corresponding margin is active */
.facet-block.active {
  border-left-color: #0066cc;
}

/* Limitation blocks */
.limitation-block {
  background: #fff8e6;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

/* Citations */
cite {
  cursor: help;
}

cite sup {
  color: #0066cc;
}
```

### Comparison Panel

```css
.comparison-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(600px, 90vw);
  background: white;
  box-shadow: -4px 0 20px rgba(0,0,0,0.15);
  overflow-y: auto;
  z-index: 100;
  
  transform: translateX(100%);
  transition: transform 0.25s ease-out;
}

.comparison-panel:not([hidden]) {
  transform: translateX(0);
}

.comparison-panel[hidden] {
  display: block;  /* Override default, let transform handle visibility */
  pointer-events: none;
}

.comparison-panel-content {
  padding: 2rem;
}

.comparison-panel-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Highlight current technology in comparison */
.comparison-table tr.current {
  background: #e6f0ff;
}
```

---

## Development Workflow

### Setup

```bash
# Clone and install
git clone <repo>
cd clean-energy-wiki
npm install

# Dependencies needed:
# - yaml (YAML parsing)
# - marked (Markdown parsing)
# - katex (LaTeX rendering, optional)
# - chokidar (file watching, dev only)
```

### Scripts

```json
{
  "scripts": {
    "build": "node build/index.js",
    "dev": "node build/dev.js",
    "validate": "node build/validate.js",
    "preview": "npx serve dist"
  }
}
```

### Development Server (`build/dev.js`)

```javascript
// Watch for changes and rebuild
import chokidar from 'chokidar';
import { exec } from 'child_process';

const watcher = chokidar.watch(['content/**/*', 'public/**/*'], {
  ignoreInitial: true
});

watcher.on('all', (event, path) => {
  console.log(`${event}: ${path}`);
  exec('npm run build', (err, stdout, stderr) => {
    if (err) console.error(stderr);
    else console.log('Rebuilt');
  });
});

console.log('Watching for changes...');

// Also start a static server
exec('npx serve dist -p 3000');
```

### Typical Workflow

1. **Adding a new technology:**
   ```bash
   cp -r content/templates/approach content/approaches/new-tech
   # Edit meta.yaml and content.md
   npm run validate  # Check for errors
   npm run dev       # Preview locally
   ```

2. **Updating comparison data:**
   ```bash
   # Edit relevant meta.yaml files
   npm run build     # Regenerates comparisons.json
   ```

3. **Changing styles or client JS:**
   ```bash
   # Edit public/styles/main.css or public/scripts/main.js
   # Changes copy directly to dist/ on build
   ```

---

## Deployment

### Static Hosting

The output is entirely static files. Deploy to:

- **GitHub Pages:** Push `dist/` to `gh-pages` branch
- **Netlify/Vercel:** Point build command to `npm run build`, publish directory to `dist`
- **Any static host:** Upload `dist/` contents

### Build Command for CI

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Post-Build: Search Index

For search, add Pagefind after the main build:

```bash
npm run build
npx pagefind --source dist --bundle-dir search
```

This indexes the HTML and adds a search UI with minimal configuration.

---

## Checklist for Implementation

### Phase 1: Minimal Viable Build
- [ ] `load-content.js`: Load and validate YAML/MD files
- [ ] `parse-markdown.js`: Basic markdown to HTML (no custom annotations yet)
- [ ] `render-pages.js`: Simple article template
- [ ] `index.js`: Orchestrate build
- [ ] Static CSS: Basic readable layout
- [ ] **Output:** Static HTML pages that display content

### Phase 2: Annotations and Margins
- [ ] Extend parser: Handle `::: facet` blocks
- [ ] Extend parser: Handle citations `[@key]`
- [ ] Embed facet data in pages
- [ ] `main.js`: Intersection Observer for scroll tracking
- [ ] `main.js`: Margin update function
- [ ] CSS: Margin positioning and styling
- [ ] **Output:** Living margin that updates on scroll

### Phase 3: Comparisons
- [ ] `generate-data.js`: Build comparisons.json
- [ ] `main.js`: Comparison panel open/close
- [ ] `main.js`: Fetch and render comparison data
- [ ] CSS: Comparison panel styling
- [ ] **Output:** Click facet in margin → see comparison panel

### Phase 4: Polish
- [ ] Table of contents generation
- [ ] Responsive design (mobile layout)
- [ ] Index page with grid and filtering
- [ ] Source list rendering
- [ ] LaTeX equation rendering
- [ ] Accessibility audit (focus management, ARIA)
- [ ] Search integration (Pagefind)

### Phase 5: Content
- [ ] Convert existing PV content to annotated format
- [ ] Write second technology (wind recommended)
- [ ] Validate comparison views work across technologies
- [ ] Write remaining technologies