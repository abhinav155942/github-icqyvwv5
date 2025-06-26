#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building React app for Netlify deployment...');

// Change to client directory and build
process.chdir('client');
execSync('npm install', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });

// Create _redirects file for client-side routing in dist folder
const redirectsContent = '/*    /index.html   200';
fs.writeFileSync(path.join('dist', '_redirects'), redirectsContent);

console.log('Netlify build complete!');
console.log('Deploy the "client/dist" folder to Netlify');