'use client'

import { CartesianGrid } from 'recharts'
import type { CartesianGridProps } from 'recharts'

type ChartGridProps = CartesianGridProps

function ChartGrid(props: ChartGridProps) {
  return <CartesianGrid vertical={false} {...props} />
}

ChartGrid.displayName = 'ChartGrid'

export { ChartGrid }
export type { ChartGridProps }
