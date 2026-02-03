'use client'

import {
  type ChartConfig,
  ChartLegendContent,
  ChartRoot,
  ChartTooltipContent,
} from '@lglab/compose-ui/chart'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts'

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

export default function AreaChartExample() {
  return (
    <ChartRoot config={config} className='h-[250px] w-full pt-4'>
      <AreaChart data={data} accessibilityLayer>
        <defs>
          <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='var(--color-desktop)' stopOpacity={0.8} />
            <stop offset='95%' stopColor='var(--color-desktop)' stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='var(--color-mobile)' stopOpacity={0.8} />
            <stop offset='95%' stopColor='var(--color-mobile)' stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey='month' interval='preserveStartEnd' />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegendContent />} />
        <Area
          dataKey='mobile'
          type='natural'
          fill='url(#fillMobile)'
          stroke='var(--color-mobile)'
          stackId='a'
        />
        <Area
          dataKey='desktop'
          type='natural'
          fill='url(#fillDesktop)'
          stroke='var(--color-desktop)'
          stackId='a'
        />
      </AreaChart>
    </ChartRoot>
  )
}
