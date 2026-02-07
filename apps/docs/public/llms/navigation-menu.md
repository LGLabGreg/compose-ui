# Navigation Menu

A navigation component with support for dropdowns and submenus.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuIcon, NavigationMenuContent, NavigationMenuLink, NavigationMenuPortal, NavigationMenuPositioner, NavigationMenuPopup, NavigationMenuViewport, NavigationMenuArrow, NavigationMenuBackdrop } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@lglab/compose-ui/navigation-menu'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const gettingStartedLinks = [
  {
    href: '/overview/quick-start',
    title: 'Quick Start',
    description: 'Get started with Compose UI in your React project.',
  },
  {
    href: '/overview/composition',
    title: 'Composition',
    description: 'Learn about composable components and architecture.',
  },
  {
    href: '/overview/accessibility',
    title: 'Accessibility',
    description: 'Built-in ARIA, keyboard navigation, and focus management.',
  },
  {
    href: '/overview/theming',
    title: 'Theming',
    description: 'Customize colors, typography, and dark mode.',
  },
]

const componentsLinks = [
  { href: '/components/button', title: 'Button' },
  { href: '/components/card', title: 'Card' },
  { href: '/components/dialog', title: 'Dialog' },
  { href: '/components/menu', title: 'Menu' },
  { href: '/components/navigation-menu', title: 'Navigation Menu' },
]

const moreComponentsLinks = [
  { href: '/components/accordion', title: 'Accordion' },
  { href: '/components/tabs', title: 'Tabs' },
  { href: '/components/tooltip', title: 'Tooltip' },
  { href: '/components/popover', title: 'Popover' },
]

export default function NavigationMenuExample() {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList className='flex-col sm:flex-row'>
        <NavigationMenuItem value='home'>
          <NavigationMenuLink render={<Link href='/overview/quick-start' />}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem value='getting-started'>
          <NavigationMenuTrigger>
            Getting Started
            <NavigationMenuIcon>
              <ChevronDown className='size-4' />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='max-w-[500px]'>
            <ul className='grid gap-1 md:grid-cols-2'>
              {gettingStartedLinks.map((link) => (
                <li key={link.href}>
                  <NavigationMenuLink
                    render={<Link href={link.href} />}
                    className='flex flex-col'
                  >
                    <div className='font-medium'>{link.title}</div>
                    <p className='text-sm text-muted-foreground'>{link.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value='components'>
          <NavigationMenuTrigger>
            Components
            <NavigationMenuIcon>
              <ChevronDown className='size-4' />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='w-[220px]'>
            <ul className='grid'>
              {componentsLinks.map((link) => (
                <li key={link.href}>
                  <NavigationMenuLink render={<Link href={link.href} />}>
                    {link.title}
                  </NavigationMenuLink>
                </li>
              ))}
              <li>
                <NavigationMenuRoot orientation='vertical' className='w-full'>
                  <NavigationMenuList className='flex-col items-stretch'>
                    <NavigationMenuItem value='more-components'>
                      <NavigationMenuTrigger className='w-full justify-between'>
                        More Components
                        <NavigationMenuIcon>
                          <ChevronRight className='size-4' />
                        </NavigationMenuIcon>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='w-[200px]'>
                        <ul className='grid'>
                          {moreComponentsLinks.map((link) => (
                            <li key={link.href}>
                              <NavigationMenuLink render={<Link href={link.href} />}>
                                {link.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>

                  <NavigationMenuPortal>
                    <NavigationMenuPositioner side='right' align='start'>
                      <NavigationMenuPopup>
                        <NavigationMenuViewport />
                      </NavigationMenuPopup>
                    </NavigationMenuPositioner>
                  </NavigationMenuPortal>
                </NavigationMenuRoot>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value='resources'>
          <NavigationMenuLink render={<Link href='/overview/llms' />}>
            LLMs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuPortal>
        <NavigationMenuPositioner>
          <NavigationMenuPopup>
            <NavigationMenuArrow />
            <NavigationMenuViewport />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenuRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/navigation-menu)
