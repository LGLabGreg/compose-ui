import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import preserveDirectives from 'rollup-preserve-directives'
import { type Plugin, defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Component entry points for subpath exports
const components = [
  'accordion',
  'alert-dialog',
  'avatar',
  'button',
  'card',
  'checkbox',
  'checkbox-group',
  'collapsible',
  'context-menu',
  'dialog',
  'drawer',
  'field',
  'fieldset',
  'form',
  'input',
  'menu',
  'menubar',
  'meter',
  'navigation-menu',
  'number-field',
  'popover',
  'preview-card',
  'progress',
  'radio',
  'radio-group',
  'scroll-area',
  'select',
  'separator',
  'slider',
  'switch',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'toggle-group',
  'tooltip',
]

// Build entry points: index barrel + individual components
const entryPoints: Record<string, string> = {
  index: resolve(__dirname, 'src/index.ts'),
}

for (const component of components) {
  entryPoints[component] = resolve(__dirname, `src/components/${component}.tsx`)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      exclude: ['**/*.test.ts', '**/*.test.tsx', 'vitest.utils.ts'],
      entryRoot: 'src',
      outDir: 'dist',
      rollupTypes: true,
      copyDtsFiles: false,
    }),
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
      entry: entryPoints,
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
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
