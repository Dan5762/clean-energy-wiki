#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { loadContent } from './load-content.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function validate() {
  console.log('\n🔍 Validating content...\n');

  const data = await loadContent(rootDir);

  if (data.errors.length === 0) {
    console.log('✅ All content is valid!\n');
    console.log(`   ${data.approaches.length} approaches`);
    console.log(`   ${data.concepts.length} concepts`);
    console.log(`   ${Object.keys(data.facets).length} facet types`);
    console.log(`   ${Object.keys(data.sources).length} sources\n`);
    return;
  }

  console.error('❌ Validation errors found:\n');
  for (const error of data.errors) {
    console.error(`  • ${error}`);
  }
  console.error('\n');
  process.exit(1);
}

validate().catch(err => {
  console.error('Validation failed:', err.message);
  process.exit(1);
});
