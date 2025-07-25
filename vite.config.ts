import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          utils: ['canvas-confetti'],
        },
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2017', // Modern browsers only
    sourcemap: false, // Disable sourcemaps for production
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['canvas-confetti'], // Exclude from pre-bundling
  },
  // Modern browser targeting
  esbuild: {
    target: 'es2017',
  },
  server: {
    headers: {
      // Cache control for all assets
      'Cache-Control': 'public, max-age=3600',
    },
  },
});
