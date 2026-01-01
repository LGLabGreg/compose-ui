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

import { docsNavigation } from '@/lib/navigation'

export function DocsNavigation() {
  const pathname = usePathname()

  return (
    <>
      <ScrollAreaRoot className='h-full'>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            {docsNavigation.map((section) => (
              <div key={section.name}>
                <h4 className='mb-3 px-2 text-sm font-semibold text-foreground'>
                  {section.name}
                </h4>
                <nav>
                  <ul className='space-y-1'>
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                            pathname === item.href
                              ? 'bg-muted font-medium text-foreground'
                              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='vertical'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </>
  )
}
