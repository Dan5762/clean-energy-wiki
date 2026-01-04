import fs from 'fs/promises';
import path from 'path';
import { parseMarkdown } from './parse-markdown.js';
import { articlePage, conceptPage } from './templates/article.js';
import { indexPage, aboutPage } from './templates/index.js';

/**
 * Ensure a directory exists
 */
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

/**
 * Copy a directory recursively
 */
async function copyDir(src, dest) {
  await ensureDir(dest);
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

/**
 * Render all pages to the dist directory
 */
export async function renderPages(data, distDir, publicDir) {
  const { approaches, concepts, facets, sources } = data;

  // Clean and create dist directory
  try {
    await fs.rm(distDir, { recursive: true });
  } catch {
    // Directory doesn't exist
  }
  await ensureDir(distDir);

  // Create subdirectories
  await ensureDir(path.join(distDir, 'approaches'));
  await ensureDir(path.join(distDir, 'concepts'));
  await ensureDir(path.join(distDir, 'data'));

  // Render approach pages
  for (const approach of approaches) {
    const parsedContent = parseMarkdown(approach.content, sources);
    const html = articlePage(approach, facets, parsedContent, sources);
    const outputPath = path.join(distDir, 'approaches', `${approach.id}.html`);
    await fs.writeFile(outputPath, html);
    console.log(`  ✓ ${approach.meta.name}`);
  }

  // Render concept pages
  for (const concept of concepts) {
    const parsedContent = parseMarkdown(concept.content, sources);
    const html = conceptPage(concept, parsedContent, sources);
    const outputPath = path.join(distDir, 'concepts', `${concept.id}.html`);
    await fs.writeFile(outputPath, html);
    console.log(`  ✓ ${concept.meta.name}`);
  }

  // Render index page
  const indexHtml = indexPage(approaches, facets);
  await fs.writeFile(path.join(distDir, 'index.html'), indexHtml);
  console.log('  ✓ Index page');

  // Render about page
  const aboutHtml = aboutPage();
  await fs.writeFile(path.join(distDir, 'about.html'), aboutHtml);
  console.log('  ✓ About page');

  // Copy public assets
  try {
    await copyDir(publicDir, distDir);
    console.log('  ✓ Static assets');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.warn(`  Warning: Could not copy public assets: ${err.message}`);
    }
  }

  return {
    approaches: approaches.length,
    concepts: concepts.length
  };
}
