'use client'

import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import {
  type ChartConfig,
  ChartLegendContent,
  ChartRoot,
  ChartTooltipContent,
} from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts'

const data = [
  { date: 'Jan', pageViews: 4200, uniqueVisitors: 2400 },
  { date: 'Feb', pageViews: 3800, uniqueVisitors: 2210 },
  { date: 'Mar', pageViews: 5100, uniqueVisitors: 2900 },
  { date: 'Apr', pageViews: 4600, uniqueVisitors: 2700 },
  { date: 'May', pageViews: 6200, uniqueVisitors: 3500 },
  { date: 'Jun', pageViews: 5800, uniqueVisitors: 3300 },
  { date: 'Jul', pageViews: 7400, uniqueVisitors: 4100 },
  { date: 'Aug', pageViews: 6900, uniqueVisitors: 3800 },
  { date: 'Sep', pageViews: 8100, uniqueVisitors: 4500 },
  { date: 'Oct', pageViews: 7600, uniqueVisitors: 4200 },
  { date: 'Nov', pageViews: 9200, uniqueVisitors: 5100 },
  { date: 'Dec', pageViews: 8700, uniqueVisitors: 4800 },
]

const series = [
  { key: 'pageViews', label: 'Page Views', color: 'var(--color-teal-600)' },
  { key: 'uniqueVisitors', label: 'Unique Visitors', color: 'var(--color-amber-600)' },
] as const

type SeriesKey = (typeof series)[number]['key']

const config: ChartConfig = Object.fromEntries(
  series.map((s) => [s.key, { label: s.label, color: s.color }]),
)

const formatCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(v)

const totals = Object.fromEntries(
  series.map((s) => [s.key, data.reduce((sum, d) => sum + d[s.key], 0)]),
) as Record<SeriesKey, number>

const summaryStats = [
  { label: 'Total Views', rawValue: totals.pageViews, change: 23.1 },
  { label: 'Unique Visitors', rawValue: totals.uniqueVisitors, change: 18.7 },
  {
    label: 'Avg. per Month',
    rawValue: Math.round(totals.pageViews / data.length),
    change: 15.4,
  },
]

export default function AreaChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='area-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='area-chart-card-title' className='flex items-center gap-2'>
                <TrendingUp className='size-4' aria-hidden='true' />
                Website Traffic
              </CardTitle>
              <CardDescription>
                Page views and unique visitors over the past 12 months
              </CardDescription>
            </div>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Traffic increased 23.1% year over year'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +23.1% YoY
            </Badge>
          </div>

          <div className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {summaryStats.map((stat) => (
              <div key={stat.label} className='space-y-0.5'>
                <p className='text-xs text-muted-foreground'>{stat.label}</p>
                <div className='flex items-baseline gap-1.5'>
                  <data
                    value={stat.rawValue}
                    className='text-lg font-semibold tracking-tight'
                  >
                    {formatCompact(stat.rawValue)}
                  </data>
                  <span
                    className='text-xs font-medium text-success'
                    aria-label={`Change: +${stat.change}%`}
                  >
                    +{stat.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          <ChartRoot config={config} className='h-[280px] w-full'>
            <AreaChart data={data} accessibilityLayer>
              <defs>
                {series.map((s) => (
                  <linearGradient
                    key={s.key}
                    id={`area-card-fill-${s.key}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor={`var(--color-${s.key})`}
                      stopOpacity={0.25}
                    />
                    <stop
                      offset='100%'
                      stopColor={`var(--color-${s.key})`}
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey='date' tickLine={false} axisLine={false} tickMargin={8} />
              <Tooltip content={<ChartTooltipContent indicator='dot' />} />
              <Legend
                content={<ChartLegendContent />}
                verticalAlign='bottom'
                wrapperStyle={{ paddingTop: 14 }}
              />
              {series.map((s) => (
                <Area
                  key={s.key}
                  dataKey={s.key}
                  type='monotone'
                  fill={`url(#area-card-fill-${s.key})`}
                  stroke={`var(--color-${s.key})`}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              ))}
            </AreaChart>
          </ChartRoot>
        </CardContent>
      </CardRoot>
    </section>
  )
}
