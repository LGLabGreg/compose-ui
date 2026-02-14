'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import {
  SelectItem,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowRight, ArrowUp, ChevronsUpDown, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Area, AreaChart, Tooltip } from 'recharts'

type Period = 'today' | 'week' | 'month'

type MetricData = {
  label: string
  today: number
  week: number
  month: number
  todayData: number[]
  weekData: number[]
  monthData: number[]
  color: string
  gradientId: string
}

const metricsData: MetricData[] = [
  {
    label: 'Page Views',
    today: 2847,
    week: 18420,
    month: 76500,
    todayData: [220, 285, 310, 275, 420, 380, 465, 520, 580, 630, 720, 810],
    weekData: [2100, 2400, 2650, 2580, 2820, 2640, 2847],
    monthData: [2100, 2300, 2500, 2400, 2600, 2550, 2700, 2650, 2800, 2750, 2900, 2847],
    color: 'var(--color-amber-600)',
    gradientId: 'fill-views',
  },
  {
    label: 'Unique Visitors',
    today: 1842,
    week: 12640,
    month: 54200,
    todayData: [145, 180, 195, 175, 265, 240, 290, 320, 360, 400, 450, 520],
    weekData: [1450, 1680, 1840, 1780, 1920, 1820, 1842],
    monthData: [1450, 1600, 1750, 1680, 1820, 1780, 1900, 1860, 1960, 1920, 2000, 1842],
    color: 'var(--color-teal-600)',
    gradientId: 'fill-visitors',
  },
]

const periodLabels: Record<Period, { label: string; comparison: string }> = {
  today: { label: 'Today', comparison: 'vs Yesterday' },
  week: { label: 'This Week', comparison: 'vs Last Week' },
  month: { label: 'This Month', comparison: 'vs Last Month' },
}

const periodItems = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
]

const changeByPeriod: Record<Period, Record<string, number>> = {
  today: { 'Page Views': 18.5, 'Unique Visitors': 23.2 },
  week: { 'Page Views': 12.8, 'Unique Visitors': 8.4 },
  month: { 'Page Views': -3.6, 'Unique Visitors': 5.7 },
}

function Sparkline({
  data,
  color,
  gradientId,
}: {
  data: { i: number; v: number }[]
  color: string
  gradientId: string
}) {
  const config: ChartConfig = { v: { label: '', color } }

  return (
    <ChartRoot config={config} className='h-[40px] w-full'>
      <AreaChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <defs>
          <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor={color} stopOpacity={0.22} />
            <stop offset='100%' stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Tooltip content={<ChartTooltipContent hideLabel indicator='line' />} />
        <Area
          dataKey='v'
          type='monotone'
          fill={`url(#${gradientId})`}
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0 }}
        />
      </AreaChart>
    </ChartRoot>
  )
}

function formatNumber(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return value.toLocaleString()
}

export default function SmallSparklineCardBlock() {
  const [period, setPeriod] = useState<Period>('today')

  const metrics = useMemo(() => {
    return metricsData.map((metric) => {
      const value = metric[period]
      const data =
        period === 'today'
          ? metric.todayData
          : period === 'week'
            ? metric.weekData
            : metric.monthData
      const sparkData = data.map((v, i) => ({ i, v }))
      const change = changeByPeriod[period][metric.label]
      const isPositive = change >= 0

      return {
        label: metric.label,
        value,
        sparkData,
        color: metric.color,
        gradientId: `${metric.gradientId}-${period}`,
        change,
        isPositive,
      }
    })
  }, [period])

  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-sparkline-title'>
        <CardRoot>
          <CardHeader className='pb-4'>
            <div className='flex items-center justify-between gap-3'>
              <div className='space-y-1'>
                <CardTitle id='small-sparkline-title' className='flex items-center gap-2'>
                  <TrendingUp className='size-4' aria-hidden='true' />
                  Traffic Overview
                </CardTitle>
              </div>
              <SelectRoot
                value={period}
                onValueChange={(v) => v && setPeriod(v as Period)}
                items={periodItems}
              >
                <SelectTrigger className='w-[140px]' aria-label='Select time period'>
                  <SelectValue />
                  <ChevronsUpDown className='size-4' aria-hidden='true' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectList>
                        {periodItems.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <SelectItemText>{item.label}</SelectItemText>
                          </SelectItem>
                        ))}
                      </SelectList>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
          </CardHeader>

          <CardContent className='space-y-3 pb-4'>
            {metrics.map((metric) => (
              <div
                key={metric.label}
                role='group'
                aria-label={metric.label}
                className='rounded-md border bg-muted/20 px-4 py-3 transition-colors hover:bg-muted/40'
              >
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-sm font-medium text-muted-foreground'>
                    {metric.label}
                  </span>
                  <Badge
                    variant={metric.isPositive ? 'success' : 'destructive'}
                    appearance='light'
                    size='sm'
                    shape='pill'
                    aria-label={`${metric.label} ${metric.isPositive ? 'increased' : 'decreased'} ${Math.abs(metric.change)}% ${periodLabels[period].comparison.toLowerCase()}`}
                  >
                    {metric.isPositive ? (
                      <ArrowUp className='size-3' aria-hidden='true' />
                    ) : (
                      <ArrowDown className='size-3' aria-hidden='true' />
                    )}
                    {metric.isPositive ? '+' : ''}
                    {metric.change}%
                  </Badge>
                </div>
                <div className='flex items-center gap-3'>
                  <data
                    value={metric.value}
                    className='shrink-0 text-lg font-semibold tabular-nums tracking-tight'
                  >
                    {formatNumber(metric.value)}
                  </data>
                  <div className='flex-1 min-w-0'>
                    <Sparkline
                      data={metric.sparkData}
                      color={metric.color}
                      gradientId={metric.gradientId}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Separator className='my-3' />
            <Button variant='ghost' size='sm' className='ml-auto flex'>
              View analytics
              <ArrowRight className='size-4' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
