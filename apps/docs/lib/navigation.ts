export interface DocsNavigationItem {
  name: string
  href: string
  badge?: string
  items?: DocsNavigationItem[]
}

export interface DocsNavigationSection {
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
      { name: 'MCP', href: '/overview/mcp' },
    ],
  },
  {
    name: 'Components',
    items: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'Alert', href: '/components/alert' },
      { name: 'Alert Dialog', href: '/components/alert-dialog' },
      { name: 'Autocomplete', href: '/components/autocomplete' },
      { name: 'Avatar', href: '/components/avatar' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Breadcrumb', href: '/components/breadcrumb' },
      { name: 'Button', href: '/components/button' },
      { name: 'Calendar', href: '/components/calendar' },
      { name: 'Card', href: '/components/card' },
      { name: 'Chart', href: '/components/chart' },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Checkbox Group', href: '/components/checkbox-group' },
      { name: 'Collapsible', href: '/components/collapsible' },
      { name: 'Combobox', href: '/components/combobox' },
      { name: 'Context Menu', href: '/components/context-menu' },
      { name: 'Date Picker', href: '/components/date-picker' },
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Empty', href: '/components/empty' },
      { name: 'Field', href: '/components/field' },
      { name: 'Fieldset', href: '/components/fieldset' },
      { name: 'Form', href: '/components/form' },
      { name: 'Group', href: '/components/group' },
      { name: 'Input', href: '/components/input' },
      { name: 'Menu', href: '/components/menu' },
      { name: 'Menubar', href: '/components/menubar' },
      { name: 'Meter', href: '/components/meter' },
      { name: 'Navigation Menu', href: '/components/navigation-menu' },
      { name: 'Number Field', href: '/components/number-field' },
      { name: 'Pagination', href: '/components/pagination' },
      { name: 'Popover', href: '/components/popover' },
      { name: 'Preview Card', href: '/components/preview-card' },
      { name: 'Progress', href: '/components/progress' },
      { name: 'Radio Group', href: '/components/radio-group' },
      { name: 'Scroll Area', href: '/components/scroll-area' },
      { name: 'Select', href: '/components/select' },
      { name: 'Separator', href: '/components/separator' },
      { name: 'Skeleton', href: '/components/skeleton' },
      { name: 'Slider', href: '/components/slider' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Table', href: '/components/table' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Textarea', href: '/components/textarea' },
      { name: 'Timeline', href: '/components/timeline' },
      { name: 'Toast', href: '/components/toast' },
      { name: 'Toggle', href: '/components/toggle' },
      { name: 'Toggle Group', href: '/components/toggle-group' },
      { name: 'Toolbar', href: '/components/toolbar' },
      { name: 'Tooltip', href: '/components/tooltip' },
    ],
  },
]

export const blocksNavigation: DocsNavigationSection[] = [
  {
    name: 'Blocks',
    items: [
      { name: 'Statistics', href: '/blocks/statistics' },
      { name: 'Chart Cards', href: '/blocks/chart-cards' },
      { name: 'Data Tables', href: '/blocks/data-tables' },
      { name: 'Headers & Toolbars', href: '/blocks/headers-toolbars', badge: 'Soon' },
    ],
  },
]
