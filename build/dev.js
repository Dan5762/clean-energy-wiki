#!/usr/bin/env node

import { spawn, exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

console.log('\n🚀 Starting development server...\n');

// Initial build
console.log('Running initial build...');
const initialBuild = spawn('node', ['build/index.js'], {
  cwd: rootDir,
  stdio: 'inherit'
});

initialBuild.on('close', (code) => {
  if (code !== 0) {
    console.error('Initial build failed');
    process.exit(1);
  }

  console.log('\n👀 Watching for changes...');
  console.log('   Press Ctrl+C to stop\n');

  // Start static server
  const server = spawn('npx', ['serve', 'dist', '-p', '3000'], {
    cwd: rootDir,
    stdio: 'inherit'
  });

  // Watch for changes using chokidar
  import('chokidar').then(({ default: chokidar }) => {
    const watcher = chokidar.watch([
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

    async function rebuild() {
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
  }).catch(err => {
    console.warn('Warning: chokidar not installed. File watching disabled.');
    console.warn('Run: npm install chokidar --save-dev');
  });

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n\nShutting down...');
    server.kill();
    process.exit(0);
  });
});
