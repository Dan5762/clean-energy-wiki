// main.js - Client-side interactivity for Clean Energy Wiki
// No build step, runs directly in browser

(function() {
  'use strict';

  // Only run on article pages
  if (!document.querySelector('.article-content')) return;

  const state = {
    currentFacet: null,
    comparisonData: null  // Lazy-loaded
  };

  // ─────────────────────────────────────────────────────────────
  // Margin Updates
  // ─────────────────────────────────────────────────────────────

  const margin = document.querySelector('.margin-content');
  const facetBlocks = document.querySelectorAll('[data-facet]');

  if (facetBlocks.length === 0 || !margin) return;

  const observer = new IntersectionObserver((entries) => {
    // Find the most visible facet block
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible && visible.target.dataset.facet !== state.currentFacet) {
      // Remove active class from previous
      const prev = document.querySelector('.facet-block.active');
      if (prev) prev.classList.remove('active');

      // Add active class to current
      visible.target.classList.add('active');

      state.currentFacet = visible.target.dataset.facet;
      updateMargin(state.currentFacet);
    }
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '-10% 0px -10% 0px'
  });

  facetBlocks.forEach(block => observer.observe(block));

  function updateMargin(facetType) {
    if (!window.__FACETS__ || !window.__APPROACH__) return;

    const facetSchema = window.__FACETS__[facetType];
    if (!facetSchema) {
      margin.innerHTML = `<p class="margin-fallback">Scroll to see related technologies and comparisons.</p>`;
      return;
    }

    const currentValue = window.__APPROACH__.facets[facetType];
    const valueInfo = facetSchema.values ? facetSchema.values[currentValue] : null;

    if (!valueInfo) {
      margin.innerHTML = `
        <div class="margin-facet">
          <p class="margin-label">${facetSchema.name || facetType}</p>
          <p class="margin-value">${currentValue || 'Unknown'}</p>
          <button class="margin-compare" data-facet="${facetType}">
            Compare all →
          </button>
        </div>
      `;
      return;
    }

    margin.innerHTML = `
      <div class="margin-facet">
        <p class="margin-label">${facetSchema.name}</p>
        <p class="margin-value">${valueInfo.name}</p>
        <p class="margin-description">${valueInfo.description || ''}</p>
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

  if (!panel || !panelContent) return;

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

    // Close on backdrop click
    if (e.target === panel) {
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
      try {
        const response = await fetch('/data/comparisons.json');
        state.comparisonData = await response.json();
      } catch (err) {
        panelContent.innerHTML = '<p>Failed to load comparison data.</p>';
        panel.hidden = false;
        return;
      }
    }

    const data = state.comparisonData[facetType];
    if (!data) {
      panelContent.innerHTML = `<p>No comparison data available for "${facetType}".</p>`;
    } else {
      panelContent.innerHTML = renderComparison(data, facetType);
    }

    panel.hidden = false;
    document.body.style.overflow = 'hidden';

    // Focus management for accessibility
    const closeBtn = panel.querySelector('.comparison-panel-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeComparison() {
    panel.hidden = true;
    document.body.style.overflow = '';
  }

  function renderComparison(data, facetType) {
    if (data.rows) {
      return renderComparisonTable(data);
    } else if (data.groups) {
      return renderComparisonGroups(data);
    }
    return '<p>Unknown comparison format.</p>';
  }

  function renderComparisonTable(data) {
    const currentId = window.__APPROACH__?.id;

    // Build header row
    const columnLabels = {
      'technology': 'Technology',
      'limit_name': 'Limit',
      'limit_percent': 'Theoretical (%)',
      'achieved_percent': 'Achieved (%)',
      'peak_w_per_m2': 'Peak (W/m²)',
      'average_w_per_m2': 'Avg (W/m²)',
      'delivered_w_per_m2': 'Delivered (W/m²)',
      'trl': 'TRL',
      'lcoe_low': 'LCOE Low',
      'lcoe_high': 'LCOE High',
      'global_capacity_gw': 'Capacity (GW)'
    };

    const headers = data.columns
      .map(c => `<th>${columnLabels[c] || c}</th>`)
      .join('');

    const rows = data.rows.map(row => {
      const isCurrent = row.id === currentId;
      const cells = data.columns.map(col => {
        if (col === 'technology') {
          return `<td><a href="/approaches/${row.id}.html">${row.name}</a></td>`;
        }
        const val = row[col];
        return `<td>${val !== null && val !== undefined ? val : '—'}</td>`;
      }).join('');

      return `<tr class="${isCurrent ? 'current' : ''}">${cells}</tr>`;
    }).join('');

    return `
      <h2>${data.title}</h2>
      <table class="comparison-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderComparisonGroups(data) {
    const currentId = window.__APPROACH__?.id;

    const groups = Object.entries(data.groups).map(([key, group]) => {
      const techList = group.technologies.map(id => {
        const isCurrent = id === currentId;
        return `<li class="${isCurrent ? 'current' : ''}">
          <a href="/approaches/${id}.html">${id}</a>
        </li>`;
      }).join('');

      return `
        <div class="comparison-group">
          <h3>${group.name}</h3>
          <p>${group.description}</p>
          <ul>${techList}</ul>
        </div>
      `;
    }).join('');

    return `<h2>${data.title}</h2><div class="comparison-groups">${groups}</div>`;
  }

  // ─────────────────────────────────────────────────────────────
  // Mobile margin toggle
  // ─────────────────────────────────────────────────────────────

  if (window.matchMedia('(max-width: 1000px)').matches) {
    const marginEl = document.querySelector('.margin');
    if (marginEl) {
      // Show margin when a facet block is scrolled into view
      let marginVisible = false;

      const mobileObserver = new IntersectionObserver((entries) => {
        const anyVisible = entries.some(e => e.isIntersecting);
        if (anyVisible && !marginVisible) {
          marginEl.classList.add('visible');
          marginVisible = true;
        }
      }, { threshold: 0.5 });

      facetBlocks.forEach(block => mobileObserver.observe(block));

      // Allow closing on mobile
      marginEl.addEventListener('click', (e) => {
        if (e.target === marginEl) {
          marginEl.classList.remove('visible');
          marginVisible = false;
        }
      });
    }
  }

})();
