#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('\n🚀 Starting development server...\n');

// Initial build
console.log('Running initial build...');
const initialBuild = spawn('node', ['build/index.js'], {
  cwd: rootDir,
  stdio: 'inherit'
});

initialBuild.on('close', async (code) => {
  if (code !== 0) {
    console.error('Initial build failed');
    process.exit(1);
  }

  // Start browser-sync
  const bs = await import('browser-sync');
  const browserSync = bs.default.create();

  browserSync.init({
    server: {
      baseDir: distDir,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 3000,
    open: false,
    notify: false,
    logLevel: 'silent'
  });

  console.log('\n👀 Watching for changes...');
  console.log('   http://localhost:3000');
  console.log('   Press Ctrl+C to stop\n');

  // Watch for source changes using chokidar
  const chokidar = await import('chokidar');
  const watcher = chokidar.default.watch([
    'approaches/**/*',
    'concepts/**/*',
    'facets.yaml',
    'sources.yaml',
    'public/**/*'
  ], {
    cwd: rootDir,
    ignoreInitial: true,
    ignored: ['dist/**', 'node_modules/**', '.git/**']
  });

  let buildPending = false;
  let building = false;

  function rebuild() {
    if (building) {
      buildPending = true;
      return;
    }

    building = true;
    console.log('\n🔨 Rebuilding...');

    const build = spawn('node', ['build/index.js'], {
      cwd: rootDir,
      stdio: 'inherit'
    });

    build.on('close', (code) => {
      building = false;
      if (code === 0) {
        console.log('✅ Rebuild complete\n');
        browserSync.reload();
      } else {
        console.log('❌ Rebuild failed\n');
      }

      if (buildPending) {
        buildPending = false;
        rebuild();
      }
    });
  }

  watcher.on('all', (event, filePath) => {
    console.log(`\n📝 ${event}: ${filePath}`);
    rebuild();
  });

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n\nShutting down...');
    browserSync.exit();
    process.exit(0);
  });
});
