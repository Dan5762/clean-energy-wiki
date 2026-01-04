#!/usr/bin/env node

import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { loadContent } from './load-content.js';
import { renderPages } from './render-pages.js';
import { generateComparisonData, generateFacetIndex, generateSearchIndex } from './generate-data.js';
import { generateSitemap } from './generate-sitemap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function build() {
  console.log('\n🔨 Building Clean Energy Wiki...\n');

  const contentDir = rootDir;
  const distDir = path.join(rootDir, 'dist');
  const publicDir = path.join(rootDir, 'public');

  // Phase 1: Load and validate content
  console.log('📖 Loading content...');
  const data = await loadContent(contentDir);

  if (data.errors.length > 0) {
    console.error('\n❌ Validation errors found:\n');
    for (const error of data.errors) {
      console.error(`  • ${error}`);
    }
    console.error('\n');
    process.exit(1);
  }

  console.log(`  ✓ Loaded ${data.approaches.length} approaches`);
  console.log(`  ✓ Loaded ${data.concepts.length} concepts`);
  console.log(`  ✓ Loaded ${Object.keys(data.facets).length} facet types`);
  console.log(`  ✓ Loaded ${Object.keys(data.sources).length} sources`);

  // Phase 2: Generate data files
  console.log('\n📊 Generating data files...');
  const comparisons = generateComparisonData(data.approaches, data.facets);
  const facetIndex = generateFacetIndex(data.approaches, data.facets);
  const searchIndex = generateSearchIndex(data.approaches, data.concepts);

  // Phase 3: Render pages
  console.log('\n📝 Rendering pages...');
  const stats = await renderPages(data, distDir, publicDir);

  // Write data files
  const dataDir = path.join(distDir, 'data');
  await fs.writeFile(
    path.join(dataDir, 'comparisons.json'),
    JSON.stringify(comparisons, null, 2)
  );
  await fs.writeFile(
    path.join(dataDir, 'facets.json'),
    JSON.stringify(facetIndex, null, 2)
  );
  await fs.writeFile(
    path.join(dataDir, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  );
  console.log('  ✓ Data files');

  // Generate and write sitemap
  const sitemap = generateSitemap(data);
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('  ✓ Sitemap');

  // Copy CNAME file for custom domain
  const cnameSource = path.join(rootDir, 'CNAME');
  const cnameDest = path.join(distDir, 'CNAME');
  try {
    await fs.copyFile(cnameSource, cnameDest);
    console.log('  ✓ CNAME');
  } catch (err) {
    // CNAME file is optional
  }

  // Summary
  console.log('\n✅ Build complete!\n');
  console.log(`   ${stats.approaches} approach pages`);
  console.log(`   ${stats.concepts} concept pages`);
  console.log(`   Output: ${distDir}\n`);
}

build().catch(err => {
  console.error('\n❌ Build failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
