'use client'

import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const components = [
  { name: 'Button', href: '/button' },
  { name: 'Dialog', href: '/dialog' },
  { name: 'Drawer', href: '/drawer' },
  { name: 'Scroll Area', href: '/scroll-area' },
  { name: 'Tabs', href: '/tabs' },
]

export function ComponentsSidebar() {
  const pathname = usePathname()

  return (
    <aside className='fixed left-0 top-14 bottom-0 w-56 border-r bg-background'>
      <ScrollAreaRoot className='h-full'>
        <ScrollAreaViewport className='h-full'>
          <ScrollAreaContent className='py-6 px-4'>
            <h4 className='mb-3 px-2 text-sm font-semibold text-foreground'>
              Components
            </h4>
            <nav>
              <ul className='space-y-1'>
                {components.map((component) => (
                  <li key={component.href}>
                    <Link
                      href={component.href}
                      className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                        pathname === component.href
                          ? 'bg-muted font-medium text-foreground'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='vertical'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </aside>
  )
}
