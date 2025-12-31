import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import preserveDirectives from 'rollup-preserve-directives'
import { type Plugin, defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    preserveDirectives() as Plugin,
    viteStaticCopy({
      targets: [
        {
          src: 'styles/*',
          dest: 'styles',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'compose-ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^tailwindcss/,
        /^@base-ui\/react/,
        'clsx',
        'class-variance-authority',
        'tailwind-merge',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
