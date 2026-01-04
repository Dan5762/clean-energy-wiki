import { layout } from './layout.js';

/**
 * About page template
 */
export function aboutPage() {
  const content = `
  <main id="main" class="about-page">
    <div class="about-content">
      <h1>About This Project</h1>

      <p class="lede">
        Clean Energy from First Principles examines renewable energy technologies
        through the lens of fundamental physics: what energy gradient exists in nature,
        and what limits its conversion to useful work?
      </p>

      <h2>Approach</h2>
      <p>
        Each technology article follows a consistent structure, examining:
      </p>
      <ul>
        <li><strong>Ultimate source:</strong> Where does the energy ultimately come from?</li>
        <li><strong>Conversion pathway:</strong> How is the energy converted to useful form?</li>
        <li><strong>Theoretical limits:</strong> What fundamental physics constrains efficiency?</li>
        <li><strong>Practical limitations:</strong> What engineering and material constraints apply?</li>
        <li><strong>Current status:</strong> Where is the technology today?</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>
        Understanding clean energy technologies from first principles helps us:
      </p>
      <ul>
        <li>Distinguish fundamental constraints from engineering challenges</li>
        <li>Compare technologies on a common basis</li>
        <li>Evaluate claims about new technologies</li>
        <li>Understand the true potential and limitations of each approach</li>
      </ul>

      <h2>Contributing</h2>
      <p>
        This is an open project. Contributions are welcome via
        <a href="https://github.com/Dan5762/clean-energy-wiki">GitHub</a>.
        See the CONTRIBUTING.md file for guidelines on writing content.
      </p>

      <h2>Author</h2>
      <p>
        Created by <a href="https://daniellong.co/">Daniel Long</a>.
      </p>

      <h2>License</h2>
      <p>
        Content is available under Creative Commons Attribution 4.0.
        Code is available under the MIT License.
      </p>
    </div>
  </main>`;

  return layout({
    title: 'About',
    content
  });
}

/**
 * Home/index page template with technology grid
 */
export function indexPage(approaches, facets) {
  // Group approaches by ultimate_source
  const bySource = {};
  for (const approach of approaches) {
    const source = approach.meta.facets?.ultimate_source || 'other';
    if (!bySource[source]) {
      bySource[source] = [];
    }
    bySource[source].push(approach);
  }

  // Generate the grid
  let gridHtml = '';

  for (const [sourceKey, sourceApproaches] of Object.entries(bySource)) {
    const sourceInfo = facets.ultimate_source?.values[sourceKey] || { name: sourceKey };

    gridHtml += `
    <section class="source-group" data-source="${sourceKey}">
      <h2 class="source-group-title">${sourceInfo.name}</h2>
      <div class="tech-grid">
    `;

    for (const approach of sourceApproaches) {
      const conversionPath = approach.meta.facets?.conversion_pathway;
      const conversionInfo = facets.conversion_pathway?.values[conversionPath] || {};

      gridHtml += `
        <a href="/approaches/${approach.id}.html" class="tech-card" data-source="${sourceKey}">
          <h3>${approach.meta.name}</h3>
          <p>${approach.meta.short_description}</p>
          <ul class="tech-card-facets">
            ${conversionInfo.name ? `<li>${conversionInfo.name}</li>` : ''}
          </ul>
        </a>
      `;
    }

    gridHtml += `
      </div>
    </section>
    `;
  }

  // Filter options
  const sourceOptions = Object.entries(facets.ultimate_source?.values || {})
    .map(([key, val]) => `<option value="${key}">${val.name}</option>`)
    .join('\n');

  const content = `
  <main id="main" class="index-page">
    <div class="index-header">
      <h1>Clean Energy from First Principles</h1>
      <p class="index-lede">
        Examining clean energy technologies through a common lens:
        what gradient exists in nature, and what limits its conversion to useful work?
      </p>
    </div>

    <div class="filter-bar">
      <label>
        Filter by source:
        <select id="filter-source">
          <option value="">All sources</option>
          ${sourceOptions}
        </select>
      </label>
    </div>

    <div class="source-groups">
      ${gridHtml}
    </div>
  </main>

  <script>
    // Simple filtering
    const filterSelect = document.getElementById('filter-source');
    const groups = document.querySelectorAll('.source-group');

    filterSelect.addEventListener('change', () => {
      const value = filterSelect.value;
      groups.forEach(group => {
        if (!value || group.dataset.source === value) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
        }
      });
    });
  </script>`;

  return layout({
    title: 'Home',
    content
  });
}
