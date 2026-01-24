interface DocsNavigationItem {
  name: string
  href: string
  items?: DocsNavigationItem[]
}

interface DocsNavigationSection {
  name: string
  items: DocsNavigationItem[]
}

export const docsNavigation: DocsNavigationSection[] = [
  {
    name: 'Overview',
    items: [
      { name: 'Quick Start', href: '/overview/quick-start' },
      { name: 'Composition', href: '/overview/composition' },
      { name: 'Accessibility', href: '/overview/accessibility' },
      { name: 'Theming', href: '/overview/theming' },
      { name: 'LLMs', href: '/overview/llms' },
    ],
  },
  {
    name: 'Components',
    items: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'Alert Dialog', href: '/components/alert-dialog' },
      { name: 'Autocomplete', href: '/components/autocomplete' },
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Button', href: '/components/button' },
      { name: 'Card', href: '/components/card' },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Checkbox Group', href: '/components/checkbox-group' },
      { name: 'Collapsible', href: '/components/collapsible' },
      { name: 'Combobox', href: '/components/combobox' },
      { name: 'Context Menu', href: '/components/context-menu' },
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Field', href: '/components/field' },
      { name: 'Form', href: '/components/form' },
      { name: 'Input', href: '/components/input' },
      { name: 'Menu', href: '/components/menu' },
      { name: 'Menubar', href: '/components/menubar' },
      { name: 'Meter', href: '/components/meter' },
      { name: 'Navigation Menu', href: '/components/navigation-menu' },
      { name: 'Number Field', href: '/components/number-field' },
      { name: 'Popover', href: '/components/popover' },
      { name: 'Preview Card', href: '/components/preview-card' },
      { name: 'Progress', href: '/components/progress' },
      { name: 'Radio', href: '/components/radio' },
      { name: 'Radio Group', href: '/components/radio-group' },
      { name: 'Scroll Area', href: '/components/scroll-area' },
      { name: 'Select', href: '/components/select' },
      { name: 'Separator', href: '/components/separator' },
      { name: 'Slider', href: '/components/slider' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Textarea', href: '/components/textarea' },
      { name: 'Toast', href: '/components/toast' },
      { name: 'Toggle', href: '/components/toggle' },
      { name: 'Toggle Group', href: '/components/toggle-group' },
      { name: 'Toolbar', href: '/components/toolbar' },
      { name: 'Tooltip', href: '/components/tooltip' },
    ],
  },
]
