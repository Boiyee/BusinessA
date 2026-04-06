import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react({
        // Enable React Fast Refresh in dev
        fastRefresh: true,
        // Babel plugin for production class names (smaller output)
        babel: {
          plugins: mode === 'production' ? [] : [],
        },
      }),
    ],

    resolve: {
      alias: {
        '@':            path.resolve(__dirname, './src'),
        '@components':  path.resolve(__dirname, './src/components'),
        '@pages':       path.resolve(__dirname, './src/pages'),
        '@hooks':       path.resolve(__dirname, './src/hooks'),
        '@context':     path.resolve(__dirname, './src/context'),
        '@utils':       path.resolve(__dirname, './src/utils'),
        '@data':        path.resolve(__dirname, './src/data'),
        '@assets':      path.resolve(__dirname, './src/assets'),
      },
    },

    // ── Build optimizations ──────────────────────────────────────
    build: {
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: false,
      // Raise chunk size warning to 600kb (framer-motion is large)
      chunkSizeWarningLimit: 600,

      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // React core — rarely changes, long cache
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            // Animation library — split from vendor for granular caching
            'vendor-motion': ['framer-motion'],
            // Icons — tree-shaken but still worth isolating
            'vendor-icons': ['lucide-react'],
          },
          // Asset naming with content hash for cache busting
          chunkFileNames:  'assets/js/[name]-[hash].js',
          entryFileNames:  'assets/js/[name]-[hash].js',
          assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },

    // ── Dev server ───────────────────────────────────────────────
    server: {
      port: 5173,
      open: true,
      cors: true,
      // Proxy API calls in dev (update target to your backend)
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    // ── Preview server (mirrors prod) ────────────────────────────
    preview: {
      port: 4173,
      open: true,
    },

    // ── CSS ──────────────────────────────────────────────────────
    css: {
      devSourcemap: true,
    },

    // ── Optimized deps pre-bundling ──────────────────────────────
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'lucide-react',
        'clsx',
      ],
    },
  }
})
