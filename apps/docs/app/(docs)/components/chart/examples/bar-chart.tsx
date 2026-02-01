'use client'

import {
  type ChartConfig,
  ChartGrid,
  ChartLegendContent,
  ChartRoot,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from '@lglab/compose-ui/chart'
import { Bar, BarChart, Legend, Tooltip } from 'recharts'

const data = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const config: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--color-teal-600)' },
  mobile: { label: 'Mobile', color: 'var(--color-amber-600)' },
}

export default function BarChartExample() {
  return (
    <ChartRoot config={config}>
      <BarChart
        data={data}
        className='min-h-[300px] w-full max-w-[700px] max-h-[70vh] aspect-video'
        accessibilityLayer
        responsive
      >
        <ChartGrid />
        <ChartXAxis dataKey='month' />
        <ChartYAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegendContent />} />
        <Bar dataKey='desktop' fill='var(--color-desktop)' radius={[4, 4, 0, 0]} />
        <Bar dataKey='mobile' fill='var(--color-mobile)' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartRoot>
  )
}
