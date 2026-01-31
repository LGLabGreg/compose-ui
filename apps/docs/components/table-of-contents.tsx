'use client'

import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { type TocItem, useToc } from './use-toc'

function TocLink({ item, isActive }: { item: TocItem; isActive: boolean }) {
  return (
    <li>
      <Link
        href={`#${item.slug}`}
        className={`block rounded-md px-2 py-1 text-sm transition-colors ${
          isActive
            ? 'bg-muted font-medium text-foreground'
            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
        }`}
      >
        {item.title}
      </Link>
    </li>
  )
}

export function TableOfContents() {
  const { items } = useToc()
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const { examples, apiItems } = useMemo(() => {
    return {
      examples: items.filter((item) => item.type === 'example'),
      apiItems: items.filter((item) => item.type === 'api'),
    }
  }, [items])

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      },
    )

    for (const item of items) {
      const element = document.getElementById(item.slug)
      if (element) {
        observer.observe(element)
      }
    }

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) {
    return null
  }

  return (
    <ScrollAreaRoot className='h-full'>
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <h4 className='mb-3 text-sm font-semibold text-foreground'>On this page</h4>
          <nav className='space-y-4'>
            {examples.length > 0 && (
              <ul className='space-y-1'>
                {examples.map((item) => (
                  <TocLink
                    key={item.slug}
                    item={item}
                    isActive={activeSlug === item.slug}
                  />
                ))}
              </ul>
            )}
            {apiItems.length > 0 && (
              <div>
                <h5 className='mb-2 px-2 text-xs font-medium'>API Reference</h5>
                <ul className='space-y-1'>
                  {apiItems.map((item) => (
                    <TocLink
                      key={item.slug}
                      item={item}
                      isActive={activeSlug === item.slug}
                    />
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}
