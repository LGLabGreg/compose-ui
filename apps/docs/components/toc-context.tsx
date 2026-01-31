'use client'

import { usePathname } from 'next/navigation'
import { type ReactNode, useCallback, useMemo, useState } from 'react'

import { TocContext, type TocItem } from './use-toc'

function TocProviderInner({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<TocItem[]>([])

  const registerItem = useCallback((item: TocItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.slug === item.slug)) {
        return prev
      }
      return [...prev, item]
    })
  }, [])

  const value = useMemo(() => ({ items, registerItem }), [items, registerItem])

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>
}

export function TocProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // Key on pathname to reset state when route changes
  return <TocProviderInner key={pathname}>{children}</TocProviderInner>
}
