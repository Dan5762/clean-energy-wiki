import { marked } from 'marked';
import katex from 'katex';

/**
 * Parse custom ::: facet blocks
 * Transforms ::: facet ultimate_source ... ::: into <section class="facet-block" data-facet="ultimate_source">
 */
function parseFacetBlocks(markdown) {
  const annotations = [];

  // Match ::: facet <name> ... :::
  const facetPattern = /^::: facet (\w+)\n([\s\S]*?)^:::/gm;

  let lineOffset = 0;
  const lines = markdown.split('\n');

  const transformed = markdown.replace(facetPattern, (match, facetName, content, offset) => {
    // Calculate line number
    const beforeMatch = markdown.substring(0, offset);
    const startLine = beforeMatch.split('\n').length;
    const endLine = startLine + match.split('\n').length - 1;

    annotations.push({
      type: 'facet',
      facet: facetName,
      startLine,
      endLine
    });

    return `<section class="facet-block" data-facet="${facetName}">\n\n${content.trim()}\n\n</section>`;
  });

  return { markdown: transformed, annotations };
}

/**
 * Parse custom ::: limitation blocks
 */
function parseLimitationBlocks(markdown, existingAnnotations) {
  const annotations = [...existingAnnotations];

  const limitationPattern = /^::: limitation (\w+)\n([\s\S]*?)^:::/gm;

  const transformed = markdown.replace(limitationPattern, (match, limitationName, content, offset) => {
    const beforeMatch = markdown.substring(0, offset);
    const startLine = beforeMatch.split('\n').length;

    annotations.push({
      type: 'limitation',
      limitation: limitationName,
      startLine
    });

    return `<div class="limitation-block" data-limitation="${limitationName}">\n\n${content.trim()}\n\n</div>`;
  });

  return { markdown: transformed, annotations };
}

/**
 * Parse equation blocks and render LaTeX
 * ::: equation photon_energy ... :::
 */
function parseEquationBlocks(markdown) {
  const equations = [];

  const equationPattern = /^::: equation (\w+)\n([\s\S]*?)^:::/gm;

  const transformed = markdown.replace(equationPattern, (match, equationId, content) => {
    // Extract LaTeX from $$ blocks
    const latexMatch = content.match(/\$\$([\s\S]*?)\$\$/);
    if (latexMatch) {
      const latex = latexMatch[1].trim();
      equations.push({ id: equationId, latex });

      try {
        const html = katex.renderToString(latex, {
          displayMode: true,
          throwOnError: false,
          trust: true
        });
        return `<div class="equation-block" data-equation="${equationId}">${html}</div>`;
      } catch (err) {
        console.warn(`Failed to render equation ${equationId}: ${err.message}`);
        return `<div class="equation-block equation-error" data-equation="${equationId}">$$${latex}$$</div>`;
      }
    }

    return match;
  });

  return { markdown: transformed, equations };
}

/**
 * Parse inline LaTeX ($...$)
 */
function parseInlineLatex(markdown) {
  // Match single $ but not $$
  const inlinePattern = /(?<!\$)\$(?!\$)([^\$\n]+)(?<!\$)\$(?!\$)/g;

  const transformed = markdown.replace(inlinePattern, (match, latex) => {
    try {
      return katex.renderToString(latex.trim(), {
        displayMode: false,
        throwOnError: false,
        trust: true
      });
    } catch {
      return match;
    }
  });

  return transformed;
}

/**
 * Parse citations [@source_key]
 */
function parseCitations(markdown, sources) {
  const citations = [];
  const citationNumbers = new Map();
  let citationCount = 0;

  const citationPattern = /\[@([^\]]+)\]/g;

  const transformed = markdown.replace(citationPattern, (match, sourceKey) => {
    if (!citations.includes(sourceKey)) {
      citations.push(sourceKey);
      citationCount++;
      citationNumbers.set(sourceKey, citationCount);
    }

    const num = citationNumbers.get(sourceKey);
    const source = sources[sourceKey];
    const title = source ? source.title : sourceKey;

    return `<cite data-source="${sourceKey}" title="${title}"><sup>[${num}]</sup></cite>`;
  });

  return { markdown: transformed, citations };
}

/**
 * Parse comparison links [:compare facet_name]
 */
function parseCompareLinks(markdown) {
  const comparePattern = /\[:compare (\w+)\]/g;

  const transformed = markdown.replace(comparePattern, (match, facetType) => {
    return `<a href="#" class="compare-link" data-compare="${facetType}">compare all</a>`;
  });

  return transformed;
}

/**
 * Parse internal links [:link approach_id]
 */
function parseInternalLinks(markdown) {
  const linkPattern = /\[:link ([^\]]+)\]/g;

  const transformed = markdown.replace(linkPattern, (match, targetId) => {
    // Determine if it's an approach or concept based on common patterns
    // For now, default to approaches
    return `<a href="/approaches/${targetId}.html" class="internal-link">${targetId}</a>`;
  });

  return transformed;
}

/**
 * Generate a URL-friendly slug from text
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Configure marked for our needs
 */
function setupMarked() {
  // Custom renderer for some elements
  const renderer = new marked.Renderer();

  // Generate heading IDs
  const headingIds = new Map();
  renderer.heading = (text, level, raw) => {
    const baseSlug = slugify(raw);
    let slug = baseSlug;
    let count = headingIds.get(baseSlug) || 0;

    if (count > 0) {
      slug = `${baseSlug}-${count}`;
    }
    headingIds.set(baseSlug, count + 1);

    return `<h${level} id="${slug}">${text}</h${level}>\n`;
  };

  // Make tables responsive
  const originalTable = renderer.table.bind(renderer);
  renderer.table = (header, body) => {
    const table = originalTable(header, body);
    return `<div class="table-wrapper">${table}</div>`;
  };

  marked.use({
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    extensions: [
      // Disable strikethrough to avoid issues with ~values
      {
        name: 'del',
        level: 'inline',
        start(src) { return undefined; },
        tokenizer(src, tokens) { return undefined; }
      }
    ]
  });
}

/**
 * Remove the first h1 heading from markdown (we render title from meta)
 */
function removeFirstH1(markdown) {
  return markdown.replace(/^#\s+[^\n]+\n+/, '');
}

/**
 * Protect tilde characters from strikethrough interpretation
 * Replaces ~ with a placeholder, then restores after markdown processing
 */
function protectTildes(markdown) {
  // Replace standalone ~ (not ~~) with a placeholder
  return markdown.replace(/(?<!\~)\~(?!\~)/g, '⟨TILDE⟩');
}

function restoreTildes(html) {
  return html.replace(/⟨TILDE⟩/g, '~');
}

/**
 * Main markdown parsing function
 */
export function parseMarkdown(markdown, sources = {}) {
  setupMarked();

  // Remove first h1 as we render title from meta.yaml
  let transformed = removeFirstH1(markdown);

  // Protect tildes from strikethrough interpretation
  transformed = protectTildes(transformed);

  let annotations = [];
  let equations = [];
  let citations = [];

  // Parse custom blocks (before markdown conversion)
  const facetResult = parseFacetBlocks(transformed);
  transformed = facetResult.markdown;
  annotations = facetResult.annotations;

  const limitationResult = parseLimitationBlocks(transformed, annotations);
  transformed = limitationResult.markdown;
  annotations = limitationResult.annotations;

  const equationResult = parseEquationBlocks(transformed);
  transformed = equationResult.markdown;
  equations = equationResult.equations;

  // Parse citations
  const citationResult = parseCitations(transformed, sources);
  transformed = citationResult.markdown;
  citations = citationResult.citations;

  // Parse special links
  transformed = parseCompareLinks(transformed);
  transformed = parseInternalLinks(transformed);

  // Parse inline LaTeX
  transformed = parseInlineLatex(transformed);

  // Convert remaining markdown to HTML
  let html = marked.parse(transformed);

  // Restore protected tildes
  html = restoreTildes(html);

  return {
    html,
    annotations,
    citations,
    equations
  };
}

/**
 * Generate a table of contents from HTML headings
 */
export function generateTableOfContents(html) {
  const headingPattern = /<h([2-3])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[2-3]>/g;
  const toc = [];
  let match;

  while ((match = headingPattern.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const text = match[3];

    toc.push({ level, id, text });
  }

  if (toc.length === 0) {
    return '';
  }

  let tocHtml = '<nav class="toc-nav" aria-label="Table of contents"><ul>';

  for (const item of toc) {
    const indent = item.level === 3 ? ' class="toc-sub"' : '';
    tocHtml += `<li${indent}><a href="#${item.id}">${item.text}</a></li>`;
  }

  tocHtml += '</ul></nav>';

  return tocHtml;
}
