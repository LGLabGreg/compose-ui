'use client'

import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { docsNavigation } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function DocsNavigation({
  closeDrawer,
  className,
}: {
  closeDrawer?: () => void
  className?: string
}) {
  const pathname = usePathname()

  return (
    <>
      <ScrollAreaRoot className={cn('h-full', className)}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div className='space-y-4'>
              {docsNavigation.map((section) => (
                <div key={section.name}>
                  <h4 className='mb-2 px-2 text-sm font-semibold text-foreground'>
                    {section.name}
                  </h4>
                  <nav>
                    <ul className='space-y-1'>
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                              pathname === item.href
                                ? 'bg-muted font-medium text-foreground'
                                : 'hover:bg-muted/50 hover:text-foreground'
                            }`}
                            onClick={closeDrawer}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='vertical'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </>
  )
}
