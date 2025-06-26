import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      'dd6cf9ec-3ae1-4587-9a2e-0d10a02764ff-00-3jie8zda2qii3.worf.replit.dev',
      'aed65838-776b-44b3-8eb0-30ff3eba00ad-00-127z3ue8rzjtx.riker.replit.dev'
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  base: "./",
  css: {
    postcss: "./postcss.config.js"
  }
});