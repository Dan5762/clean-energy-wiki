import { layout } from './layout.js';
import { generateTableOfContents } from '../parse-markdown.js';

/**
 * Render a source list from citation keys
 */
function renderSourceList(citations, sources) {
  if (citations.length === 0) {
    return '';
  }

  let html = '<ol class="source-list">';

  for (let i = 0; i < citations.length; i++) {
    const key = citations[i];
    const source = sources[key];

    if (!source) {
      html += `<li id="ref-${key}"><span class="source-missing">[${key}]</span></li>`;
      continue;
    }

    let citation = '';

    // Authors
    if (source.authors) {
      citation += source.authors.join(', ');
    }

    // Year
    if (source.year) {
      citation += ` (${source.year})`;
    }

    // Title
    if (source.title) {
      citation += `. "${source.title}"`;
    }

    // Journal/Book/Report details
    if (source.journal) {
      citation += `. <em>${source.journal}</em>`;
      if (source.volume) {
        citation += `, ${source.volume}`;
        if (source.issue) {
          citation += `(${source.issue})`;
        }
      }
      if (source.pages) {
        citation += `: ${source.pages}`;
      }
    } else if (source.institution) {
      citation += `. ${source.institution}`;
    } else if (source.publisher) {
      citation += `. ${source.publisher}`;
    }

    // DOI or URL
    if (source.doi) {
      citation += `. <a href="https://doi.org/${source.doi}" target="_blank" rel="noopener">doi:${source.doi}</a>`;
    } else if (source.url) {
      citation += `. <a href="${source.url}" target="_blank" rel="noopener">${source.url}</a>`;
    }

    html += `<li id="ref-${key}">${citation}</li>`;
  }

  html += '</ol>';
  return html;
}

/**
 * Article page template
 */
export function articlePage(approach, facets, parsedContent, sources) {
  const toc = generateTableOfContents(parsedContent.html);

  const content = `
  <div class="article-layout">
    <aside class="toc">
      <h2 class="toc-title">Contents</h2>
      ${toc}
    </aside>

    <main id="main" class="article-content" data-approach="${approach.id}">
      <h1>${approach.meta.name}</h1>
      <p class="lede">${approach.meta.short_description}</p>

      ${parsedContent.html}

      ${parsedContent.citations.length > 0 ? `
      <footer class="article-footer">
        <h2 id="sources">Sources</h2>
        ${renderSourceList(parsedContent.citations, sources)}
      </footer>
      ` : ''}
    </main>

    <aside class="margin" aria-label="Related information">
      <div class="margin-content">
        <p class="margin-fallback">
          Scroll to see related technologies and comparisons.
        </p>
      </div>
    </aside>
  </div>

  <div class="comparison-panel" hidden aria-modal="true">
    <div class="comparison-panel-content">
    </div>
    <button class="comparison-panel-close" aria-label="Close">&times;</button>
  </div>`;

  const scripts = `
  <script>
    window.__APPROACH__ = ${JSON.stringify({
      id: approach.id,
      name: approach.meta.name,
      facets: approach.meta.facets || {}
    })};
    window.__FACETS__ = ${JSON.stringify(facets)};
  </script>
  <script src="/scripts/main.js"></script>`;

  return layout({
    title: approach.meta.name,
    content,
    scripts
  });
}

/**
 * Concept page template (simpler than article)
 */
export function conceptPage(concept, parsedContent, sources) {
  const toc = generateTableOfContents(parsedContent.html);

  const content = `
  <div class="article-layout concept-layout">
    <aside class="toc">
      <h2 class="toc-title">Contents</h2>
      ${toc}
    </aside>

    <main id="main" class="article-content" data-concept="${concept.id}">
      <h1>${concept.meta.name}</h1>
      ${concept.meta.short_description ? `<p class="lede">${concept.meta.short_description}</p>` : ''}

      ${parsedContent.html}

      ${parsedContent.citations.length > 0 ? `
      <footer class="article-footer">
        <h2 id="sources">Sources</h2>
        ${renderSourceList(parsedContent.citations, sources)}
      </footer>
      ` : ''}
    </main>

    <aside class="margin concept-margin">
    </aside>
  </div>`;

  return layout({
    title: concept.meta.name,
    content
  });
}
