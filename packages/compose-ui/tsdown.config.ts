import { defineConfig } from 'tsdown'

// Component entry points for subpath exports
const components = [
  'accordion',
  'alert-dialog',
  'autocomplete',
  'avatar',
  'badge',
  'button',
  'card',
  'checkbox',
  'checkbox-group',
  'collapsible',
  'combobox',
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
