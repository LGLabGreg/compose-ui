import { defineConfig } from 'tsdown'

// Component entry points for subpath exports
const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'autocomplete',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'checkbox',
  'checkbox-group',
  'collapsible',
  'combobox',
  'context-menu',
  'dialog',
  'drawer',
  'empty',
  'field',
  'fieldset',
  'form',
  'group',
  'input',
  'menu',
  'menubar',
  'meter',
  'navigation-menu',
  'number-field',
  'pagination',
  'popover',
  'preview-card',
  'progress',
  'radio',
  'radio-group',
  'scroll-area',
  'select',
  'separator',
  'skeleton',
  'slider',
  'switch',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'timeline',
  'toggle-group',
  'toolbar',
  'tooltip',
]

// Build entry points: index barrel + individual components
const entry: Record<string, string> = {
  index: 'src/index.ts',
}

for (const component of components) {
  entry[component] = `src/components/${component}.tsx`
}

// Folder-based components with separate hook entry points
entry['table/index'] = 'src/components/table/index.ts'
entry['table/use-table'] = 'src/components/table/use-table.ts'
entry['chart/index'] = 'src/components/chart/index.ts'

export default defineConfig({
  entry,
  format: 'esm',
  dts: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    /^tailwindcss/,
    /^@base-ui\/react/,
    /^react-day-picker/,
    /^date-fns/,
    /^recharts/,
    'clsx',
    'class-variance-authority',
    'tailwind-merge',
  ],
  copy: [{ from: 'styles', to: 'dist/styles' }],
  clean: true,
  sourcemap: true,
  hash: false,
  unbundle: true,
})
