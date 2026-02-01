import type * as React from 'react'

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
    icon?: React.ComponentType<{ className?: string }>
  }
>
