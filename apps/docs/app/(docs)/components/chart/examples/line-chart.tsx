'use client'

import {
  type ChartConfig,
  ChartLegendContent,
  ChartRoot,
  ChartTooltipContent,
} from '@lglab/compose-ui/chart'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts'

const data = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const config: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--color-teal-600)' },
  mobile: { label: 'Mobile', color: 'var(--color-amber-600)' },
}

export default function LineChartExample() {
  return (
    <ChartRoot config={config} className='h-[250px] w-full pt-4'>
      <LineChart data={data} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis dataKey='month' padding={{ left: 12, right: 12 }} />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegendContent />} />
        <Line
          dataKey='desktop'
          type='natural'
          stroke='var(--color-desktop)'
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey='mobile'
          type='natural'
          stroke='var(--color-mobile)'
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartRoot>
  )
}
