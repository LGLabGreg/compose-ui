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
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Meter', href: '/components/meter' },
      { name: 'Progress', href: '/components/progress' },
      { name: 'Scroll Area', href: '/components/scroll-area' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Toggle', href: '/components/toggle' },
      { name: 'Toggle Group', href: '/components/toggle-group' },
    ],
  },
]
