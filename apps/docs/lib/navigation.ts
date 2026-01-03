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
      { name: 'Button', href: '/components/button' },
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Scroll Area', href: '/components/scroll-area' },
      { name: 'Tabs', href: '/components/tabs' },
    ],
  },
]
