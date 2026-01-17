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
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'Button', href: '/components/button' },
      { name: 'Card', href: '/components/card' },
      { name: 'Collapsible', href: '/components/collapsible' },
      { name: 'Context Menu', href: '/components/context-menu' },
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Menu', href: '/components/menu' },
      { name: 'Menubar', href: '/components/menubar' },
      { name: 'Meter', href: '/components/meter' },
      { name: 'Popover', href: '/components/popover' },
      { name: 'Preview Card', href: '/components/preview-card' },
      { name: 'Progress', href: '/components/progress' },
      { name: 'Scroll Area', href: '/components/scroll-area' },
      { name: 'Separator', href: '/components/separator' },
      { name: 'Slider', href: '/components/slider' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Toggle', href: '/components/toggle' },
      { name: 'Toggle Group', href: '/components/toggle-group' },
      { name: 'Tooltip', href: '/components/tooltip' },
    ],
  },
]
