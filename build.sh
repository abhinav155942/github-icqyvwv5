#!/bin/bash

# Build script for Vercel deployment
echo "Building application for production..."

# Build the client-side React application
echo "Building React frontend..."
npx vite build

# Ensure API directory exists and is properly configured
echo "Verifying API configuration..."
if [ ! -d "api" ]; then
  echo "Error: API directory not found"
  exit 1
fi

if [ ! -f "api/contact-submission.js" ]; then
  echo "Error: contact-submission.js not found in api directory"
  exit 1
fi

echo "Build completed successfully!"
echo "Frontend built to: dist/public"
echo "API functions ready in: api/"