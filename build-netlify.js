#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building React app for Netlify deployment...');

// Build the client
execSync('npm run build', { stdio: 'inherit' });

// Ensure video assets are copied to the build output
const videoSource = path.join('client', 'public', 'assets', 'videos');
const videoDest = path.join('dist', 'public', 'assets', 'videos');

if (fs.existsSync(videoSource)) {
  fs.mkdirSync(videoDest, { recursive: true });
  
  const videoFiles = fs.readdirSync(videoSource);
  videoFiles.forEach(file => {
    const src = path.join(videoSource, file);
    const dest = path.join(videoDest, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied video: ${file}`);
  });
}

// Create _redirects file for client-side routing
const redirectsContent = '/*    /index.html   200';
fs.writeFileSync(path.join('dist', 'public', '_redirects'), redirectsContent);

console.log('Netlify build complete!');
console.log('Deploy the "dist/public" folder to Netlify');