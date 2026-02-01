'use client'

import * as React from 'react'

import type { ChartConfig } from './types'

type ChartContextValue = {
  config: ChartConfig
}

export const ChartContext = React.createContext<ChartContextValue | null>(null)

export function useChartContext() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error('useChartContext must be used within a ChartRoot')
  }
  return context
}
