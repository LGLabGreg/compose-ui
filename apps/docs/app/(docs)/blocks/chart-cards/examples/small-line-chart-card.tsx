'use client'

import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const weeklyData = [
  { label: 'Mon', revenue: 4200 },
  { label: 'Tue', revenue: 3800 },
  { label: 'Wed', revenue: 5100 },
  { label: 'Thu', revenue: 4700 },
  { label: 'Fri', revenue: 6200 },
  { label: 'Sat', revenue: 5800 },
  { label: 'Sun', revenue: 4400 },
]

const monthlyData = [
  { label: 'W1', revenue: 28400 },
  { label: 'W2', revenue: 32100 },
  { label: 'W3', revenue: 29800 },
  { label: 'W4', revenue: 35600 },
]

const quarterlyData = [
  { label: 'Jan', revenue: 112000 },
  { label: 'Feb', revenue: 98500 },
  { label: 'Mar', revenue: 125800 },
]

type Range = '7d' | '30d' | '90d'

const rangeItems = [
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
  { value: '90d', label: '90 days' },
]

const datasets: Record<
  Range,
  { data: typeof weeklyData; total: number; change: number }
> = {
  '7d': {
    data: weeklyData,
    total: weeklyData.reduce((s, d) => s + d.revenue, 0),
    change: 8.2,
  },
  '30d': {
    data: monthlyData,
    total: monthlyData.reduce((s, d) => s + d.revenue, 0),
    change: 12.5,
  },
  '90d': {
    data: quarterlyData,
    total: quarterlyData.reduce((s, d) => s + d.revenue, 0),
    change: -3.1,
  },
}

const config: ChartConfig = {
  revenue: { label: 'Revenue', color: 'var(--color-emerald-500)' },
}

function formatCurrency(value: number) {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
  return `$${value}`
}

export default function SmallLineChartCardBlock() {
  const [range, setRange] = useState<Range>('7d')
  const { data, total, change } = datasets[range]
  const isPositive = change >= 0

  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-line-title'>
        <CardRoot>
          <CardHeader className='pb-2'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-line-title'>Revenue</CardTitle>
              <SelectRoot
                value={range}
                onValueChange={(v) => v && setRange(v as Range)}
                items={rangeItems}
              >
                <SelectTrigger className='h-7 min-w-0 gap-1 rounded-md border-0 bg-muted/60 px-2 text-xs font-medium'>
                  <SelectValue placeholder='Range' />
                  <ChevronsUpDown className='size-3 opacity-50' aria-hidden='true' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectList>
                        {rangeItems.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <SelectItemText>{item.label}</SelectItemText>
                            <SelectItemIndicator>
                              <Check className='size-3.5' />
                            </SelectItemIndicator>
                          </SelectItem>
                        ))}
                      </SelectList>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
            <div className='flex items-baseline gap-2'>
              <data value={total} className='text-3xl font-bold tracking-tight'>
                {formatCurrency(total)}
              </data>
              <span
                className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-danger'}`}
                aria-label={`Change: ${isPositive ? '+' : ''}${change}%`}
              >
                {isPositive ? '+' : ''}
                {change}%
              </span>
            </div>
          </CardHeader>

          <CardContent className='pb-3'>
            <ChartRoot config={config} className='h-[100px] w-full'>
              <LineChart
                data={data}
                accessibilityLayer
                margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
              >
                <CartesianGrid
                  horizontal
                  vertical={false}
                  strokeDasharray='3 3'
                  strokeOpacity={0.3}
                />
                <XAxis
                  dataKey='label'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  interval='preserveStartEnd'
                />
                <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
                <Tooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => formatCurrency(value as number)}
                    />
                  }
                />
                <Line
                  type='monotone'
                  dataKey='revenue'
                  stroke='var(--color-revenue)'
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 2, fill: 'var(--color-background)' }}
                />
              </LineChart>
            </ChartRoot>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
