import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss'

export default defineConfig(({ mode }) => ({
  plugins: [react(), libCss()],
  resolve: {
    alias: {
      '@lib': resolve(__dirname, '../lib'),
      '@util': resolve(__dirname, '../lib/util'),
      '@hooks': resolve(__dirname, '../lib/hooks'),
      '@components': resolve(__dirname, '../lib/components'),
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, '../lib/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}))
