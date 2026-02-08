'use client'

import {
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@lglab/compose-ui/collapsible'
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { docsNavigation } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function DocsNavigation({
  closeDrawer,
  className,
  collapsible = true,
}: {
  closeDrawer?: () => void
  className?: string
  collapsible?: boolean
}) {
  const pathname = usePathname()
  const defaultOpenSection = React.useMemo(() => {
    const matchedSection = docsNavigation.find((section) =>
      section.items.some((item) => item.href === pathname),
    )

    return matchedSection?.name ?? docsNavigation[0]?.name ?? null
  }, [pathname])
  const [openSection, setOpenSection] = React.useState<string | null>(defaultOpenSection)

  React.useEffect(() => {
    setOpenSection(defaultOpenSection)
  }, [defaultOpenSection])

  return (
    <>
      <ScrollAreaRoot className={cn('h-full', className)}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div className='space-y-2'>
              {docsNavigation.map((section) => {
                if (!collapsible) {
                  return (
                    <div key={section.name}>
                      <h4 className='mb-1 px-2 text-sm font-semibold text-foreground'>
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
                  )
                }

                return (
                  <CollapsibleRoot
                    key={section.name}
                    className='group'
                    open={openSection === section.name}
                    onOpenChange={(open) => setOpenSection(open ? section.name : null)}
                  >
                    <CollapsibleTrigger className='mb-1 flex w-full items-center justify-between px-2 py-1.5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted rounded-md'>
                      <span>{section.name}</span>
                      <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-270 group-data-open:rotate-360' />
                    </CollapsibleTrigger>
                    <CollapsiblePanel>
                      <nav>
                        <ul className='space-y-1'>
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
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
                    </CollapsiblePanel>
                  </CollapsibleRoot>
                )
              })}
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
