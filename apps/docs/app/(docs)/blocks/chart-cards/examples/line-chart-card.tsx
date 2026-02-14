'use client'

import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { week: '01', thisWeek: 284200, lastWeek: 312400 },
  { week: '02', thisWeek: 291800, lastWeek: 298100 },
  { week: '03', thisWeek: 310500, lastWeek: 285600 },
  { week: '04', thisWeek: 325100, lastWeek: 302900 },
  { week: '05', thisWeek: 298700, lastWeek: 318200 },
  { week: '06', thisWeek: 342600, lastWeek: 295400 },
  { week: '07', thisWeek: 368400, lastWeek: 310800 },
]

const config: ChartConfig = {
  thisWeek: { label: 'This Week', color: 'var(--color-primary)' },
  lastWeek: { label: 'Last Week', color: 'var(--color-sky-400)' },
}

const totalThisWeek = data.reduce((s, d) => s + d.thisWeek, 0)
const totalLastWeek = data.reduce((s, d) => s + d.lastWeek, 0)
const changePercent = (((totalThisWeek - totalLastWeek) / totalLastWeek) * 100).toFixed(1)
const isPositive = totalThisWeek >= totalLastWeek

const formatCurrency = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(v >= 10_000_000 ? 1 : 2)}M`
  if (v >= 1_000) return `$${(v / 1_000).toFixed(v >= 100_000 ? 1 : 2)}K`
  return `$${v}`
}

const periods = [
  {
    label: 'This Week',
    dotClass: 'bg-primary',
    value: formatCurrency(totalThisWeek),
    rawValue: totalThisWeek,
    description: 'Customer request in this week',
  },
  {
    label: 'Last Week',
    dotClass: 'bg-sky-400',
    value: formatCurrency(totalLastWeek),
    rawValue: totalLastWeek,
    description: 'Customer request in last week',
  },
]

export default function LineChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='line-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex items-start justify-between'>
            <div className='space-y-1'>
              <CardTitle id='line-chart-card-title'>Revenue Trend</CardTitle>
              <CardDescription>Weekly performance comparison</CardDescription>
            </div>
            <Badge variant='secondary' appearance='outline' size='sm' shape='pill'>
              View Detail
            </Badge>
          </div>

          {/* Hero metric */}
          <div className='mt-4 space-y-1'>
            <data
              value={totalThisWeek}
              className='text-3xl font-bold tracking-tight sm:text-4xl'
            >
              {formatCurrency(totalThisWeek)}
            </data>
            <div className='flex items-center gap-1.5'>
              <Badge
                variant={isPositive ? 'success' : 'destructive'}
                appearance='light'
                size='sm'
                shape='pill'
                aria-label={`Change: ${isPositive ? '+' : ''}${changePercent}% vs last week`}
              >
                {isPositive ? (
                  <ArrowUp className='size-3' aria-hidden='true' />
                ) : (
                  <ArrowDown className='size-3' aria-hidden='true' />
                )}
                {isPositive ? '+' : ''}
                {changePercent}%
              </Badge>
              <span className='text-xs text-muted-foreground'>vs last week</span>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          {/* Side-by-side: period breakdown left, chart right */}
          <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
            {/* Period breakdown */}
            <div
              className='flex flex-row gap-6 lg:w-48 lg:shrink-0 lg:flex-col lg:justify-center lg:gap-6'
              role='group'
              aria-label='Period breakdown'
            >
              {periods.map((period) => (
                <div key={period.label} className='space-y-1'>
                  <div className='flex items-center gap-2'>
                    <span
                      className={`size-2 rounded-full ${period.dotClass}`}
                      aria-hidden='true'
                    />
                    <span className='text-xs font-medium text-muted-foreground'>
                      {period.label}
                    </span>
                  </div>
                  <data
                    value={period.rawValue}
                    className='text-lg font-semibold tracking-tight'
                  >
                    {period.value}
                  </data>
                  <p className='text-xs text-muted-foreground'>{period.description}</p>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className='min-w-0 flex-1'>
              <ChartRoot config={config} className='h-[220px] w-full'>
                <LineChart data={data} accessibilityLayer>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='week'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(v: number) =>
                      v >= 1000
                        ? `${(v / 1000).toFixed(v >= 100000 ? 0 : 0)}K`
                        : String(v)
                    }
                    width={40}
                    fontSize={12}
                  />
                  <Tooltip content={<ChartTooltipContent indicator='line' />} />
                  <Line
                    dataKey='lastWeek'
                    type='monotone'
                    stroke='var(--color-lastWeek)'
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 4,
                      strokeWidth: 2,
                      stroke: 'var(--color-background)',
                    }}
                    opacity={0.5}
                  />
                  <Line
                    dataKey='thisWeek'
                    type='monotone'
                    stroke='var(--color-thisWeek)'
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{
                      r: 5,
                      strokeWidth: 2,
                      stroke: 'var(--color-background)',
                    }}
                  />
                </LineChart>
              </ChartRoot>
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
