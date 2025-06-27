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
      'aed65838-776b-44b3-8eb0-30ff3eba00ad-00-127z3ue8rzjtx.riker.replit.dev',
      'aaf9ed5a-3ef5-4622-abda-3bc03e89cfde-00-qvtbq5bt9vq0.kirk.replit.dev',
      '1b534582-3ba2-4768-9b1b-5fdc449249e6-00-2ldhokdcs30l4.worf.replit.dev',
      '957b7aaf-f9b3-484f-a6c5-61e60be98409-00-32u4zbgzxht7k.spock.replit.dev'
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
    target: "es2015",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: "/",
  css: {
    postcss: "./postcss.config.js"
  },
  define: {
    'process.env': {}
  }
});