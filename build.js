import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building client application...');

try {
  // Build the client
  execSync('npx vite build', { stdio: 'inherit', cwd: process.cwd() });
  console.log('✓ Client build completed');
  
  // Verify dist directory exists
  const distPath = path.join(process.cwd(), 'client', 'dist');
  if (fs.existsSync(distPath)) {
    console.log('✓ Distribution files created');
    const files = fs.readdirSync(distPath);
    console.log('Built files:', files.join(', '));
  } else {
    console.log('✗ Distribution directory not found');
  }
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}