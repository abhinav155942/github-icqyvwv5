#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const buildClient = () => {
  return new Promise((resolve, reject) => {
    console.log('Starting production build...');
    
    const buildProcess = spawn('npx', ['vite', 'build', '--mode', 'production'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: process.cwd()
    });

    let output = '';
    let errorOutput = '';

    buildProcess.stdout.on('data', (data) => {
      output += data.toString();
      // Show minimal progress
      if (data.toString().includes('✓') || data.toString().includes('built in')) {
        console.log(data.toString().trim());
      }
    });

    buildProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    buildProcess.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Build completed successfully');
        resolve();
      } else {
        console.error('❌ Build failed:', errorOutput);
        reject(new Error(`Build failed with code ${code}`));
      }
    });

    // Timeout after 2 minutes
    setTimeout(() => {
      buildProcess.kill();
      reject(new Error('Build timed out'));
    }, 120000);
  });
};

try {
  await buildClient();
  
  // Verify build output
  const distPath = path.join(process.cwd(), 'client', 'dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log(`✅ ${files.length} files generated in dist/`);
  } else {
    throw new Error('Build output directory not found');
  }
  
} catch (error) {
  console.error('Build process failed:', error.message);
  process.exit(1);
}