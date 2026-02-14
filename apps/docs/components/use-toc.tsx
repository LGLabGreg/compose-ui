'use client'

import { createContext, useContext } from 'react'

export interface TocItem {
  title: string
  slug: string
  type: 'example' | 'api'
  group?: string
}

export interface TocContextValue {
  items: TocItem[]
  registerItem: (item: TocItem) => void
}

export const TocContext = createContext<TocContextValue | null>(null)

export function useToc() {
  const context = useContext(TocContext)
  if (!context) {
    throw new Error('useToc must be used within a TocProvider')
  }
  return context
}
