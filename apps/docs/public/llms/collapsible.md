# Collapsible

A component that allows content to be expanded or collapsed.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  Button,
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@lglab/compose-ui'
import { ChevronDown } from 'lucide-react'

export default function DefaultExample() {
  return (
    <CollapsibleRoot className='group w-full max-w-md'>
      <CollapsibleTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='w-full justify-between'>
            <span>What is Compose UI?</span>
            <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180' />
          </Button>
        )}
      />
      <CollapsiblePanel>
        <div className='p-2 text-sm'>
          <p>
            Compose UI is a collection of accessible React components built with Base UI
            and Tailwind CSS, ready to use in your design systems and web apps.
          </p>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  )
}
```

### Sidebar Menu

```tsx
import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from '@lglab/compose-ui'
import { ChevronDown, Settings } from 'lucide-react'

const menuItems = [
  {
    title: 'Settings',
    icon: Settings,
    items: ['Preferences', 'Notifications', 'Privacy', 'Security'],
  },
]

export default function SidebarMenuExample() {
  return (
    <nav className='w-3xs'>
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
          <CollapsibleRoot key={item.title} className='group'>
            <CollapsibleTrigger className='flex w-full items-center gap-2 px-2 py-1.5 text-sm text-left font-medium text-foreground transition-colors hover:bg-muted'>
              <Icon className='size-4 shrink-0' />
              <span className='flex-1'>{item.title}</span>
              <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-270 group-data-open:rotate-360' />
            </CollapsibleTrigger>
            <CollapsiblePanel>
              <div className='ml-4 border-l border-border pl-4 pt-1'>
                <ul className='space-y-0.5'>
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <a
                        href='#'
                        className='block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsiblePanel>
          </CollapsibleRoot>
        )
      })}
    </nav>
  )
}
```

### Default Open

```tsx
import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from '@lglab/compose-ui'
import { ChevronDown, Settings } from 'lucide-react'

const menuItems = [
  {
    title: 'Settings',
    icon: Settings,
    items: ['Preferences', 'Notifications', 'Privacy', 'Security'],
  },
]

export default function SidebarMenuDefaultOpenExample() {
  return (
    <nav className='w-3xs'>
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
          <CollapsibleRoot key={item.title} className='group' defaultOpen>
            <CollapsibleTrigger className='flex w-full items-center gap-2 px-2 py-1.5 text-sm text-left font-medium text-foreground transition-colors hover:bg-muted'>
              <Icon className='size-4 shrink-0' />
              <span className='flex-1'>{item.title}</span>
              <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-270 group-data-open:rotate-360' />
            </CollapsibleTrigger>
            <CollapsiblePanel>
              <div className='ml-4 border-l border-border pl-4 pt-1'>
                <ul className='space-y-0.5'>
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <a
                        href='#'
                        className='block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsiblePanel>
          </CollapsibleRoot>
        )
      })}
    </nav>
  )
}
```

## Resources

- [Base UI Collapsible Documentation](https://base-ui.com/react/components/collapsible)
- [API Reference](https://base-ui.com/react/components/collapsible#api-reference)
