'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import {
  type ChartConfig,
  ChartRoot,
  ChartTooltipContent,
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui/toggle-group'
import { ArrowDown, ArrowUp, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts'

const data = [
  { week: '01', thisWeek: 28500, lastWeek: 30100 },
  { week: '02', thisWeek: 29200, lastWeek: 28900 },
  { week: '03', thisWeek: 31700, lastWeek: 27800 },
  { week: '04', thisWeek: 33400, lastWeek: 30900 },
  { week: '05', thisWeek: 30100, lastWeek: 32600 },
  { week: '06', thisWeek: 35600, lastWeek: 29400 },
  { week: '07', thisWeek: 38100, lastWeek: 31800 },
  { week: '08', thisWeek: 36500, lastWeek: 33200 },
  { week: '09', thisWeek: 40200, lastWeek: 34500 },
  { week: '10', thisWeek: 41800, lastWeek: 36200 },
  { week: '11', thisWeek: 38900, lastWeek: 37100 },
  { week: '12', thisWeek: 43200, lastWeek: 35600 },
]

const config: ChartConfig = {
  thisWeek: { label: 'This Week', color: 'var(--color-teal-600)' },
  lastWeek: { label: 'Last Week', color: 'var(--color-amber-600)' },
}

type RangeKey = '4W' | '8W' | '12W'
const ranges: { key: RangeKey; points: number }[] = [
  { key: '4W', points: 4 },
  { key: '8W', points: 8 },
  { key: '12W', points: 12 },
]

const formatCurrencyCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: v >= 10_000 ? 0 : 1,
  }).format(v)

const formatPercent = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(v)

export default function LineChartCardBlock() {
  const [range, setRange] = useState<RangeKey>('8W')

  const rangePoints = ranges.find((r) => r.key === range)?.points ?? 8
  const filtered = data.slice(-rangePoints)

  const totalThisWeek = filtered.reduce((s, d) => s + d.thisWeek, 0)
  const totalLastWeek = filtered.reduce((s, d) => s + d.lastWeek, 0)
  const delta = totalThisWeek - totalLastWeek
  const deltaRatio = totalLastWeek === 0 ? 0 : delta / totalLastWeek
  const isPositive = delta >= 0

  const avgThisWeek = totalThisWeek / filtered.length
  const bestWeek = filtered.reduce(
    (best, cur) => (cur.thisWeek > best.thisWeek ? cur : best),
    filtered[0],
  )

  return (
    <section className='w-full' aria-labelledby='line-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='line-chart-card-title' className='flex items-center gap-2'>
                <TrendingUp className='size-4' aria-hidden='true' />
                Revenue Trend
              </CardTitle>
              <CardDescription>
                Weekly revenue compared to the previous period
              </CardDescription>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              <ToggleGroupRoot
                value={[range]}
                onValueChange={(v) => setRange((v[0] as RangeKey | undefined) ?? '8W')}
                aria-label='Date range'
                className='[&>button]:min-w-0'
              >
                {ranges.map((r) => {
                  return (
                    <ToggleGroupItem
                      key={r.key}
                      value={r.key}
                      aria-label={`${r.key} range`}
                      size='sm'
                      className='px-3 text-xs'
                    >
                      {r.key}
                    </ToggleGroupItem>
                  )
                })}
              </ToggleGroupRoot>
            </div>
          </div>

          <div className='mt-2 grid gap-4 sm:items-end'>
            <div className='space-y-1'>
              <div className='flex flex-wrap items-center gap-2'>
                <data
                  value={totalThisWeek}
                  className='text-3xl font-bold tracking-tight sm:text-4xl'
                >
                  {formatCurrencyCompact(totalThisWeek)}
                </data>
                <Badge
                  variant={isPositive ? 'success' : 'destructive'}
                  appearance='light'
                  size='sm'
                  shape='pill'
                  aria-label={`Change: ${isPositive ? '+' : ''}${formatPercent(deltaRatio)} vs last week`}
                >
                  {isPositive ? (
                    <ArrowUp className='size-3' aria-hidden='true' />
                  ) : (
                    <ArrowDown className='size-3' aria-hidden='true' />
                  )}
                  {isPositive ? '+' : ''}
                  {formatPercent(Math.abs(deltaRatio))}
                </Badge>
                <span className='text-xs text-muted-foreground'>
                  {isPositive ? 'Up' : 'Down'}{' '}
                  <span className='font-medium text-foreground'>
                    {formatCurrencyCompact(Math.abs(delta))}
                  </span>{' '}
                  vs last period
                </span>
              </div>
              <p className='text-xs text-muted-foreground'>
                Avg / week:{' '}
                <span className='font-medium text-foreground'>
                  {formatCurrencyCompact(avgThisWeek)}
                </span>
                <span className='mx-2 text-muted-foreground/70'>•</span>
                Best week:{' '}
                <span className='font-medium text-foreground'>
                  W{bestWeek.week} ({formatCurrencyCompact(bestWeek.thisWeek)})
                </span>
              </p>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='py-6'>
          <div className='flex flex-col gap-2 lg:flex-row lg:items-stretch'>
            <ChartRoot config={config} className='h-[160px] w-full'>
              <LineChart
                data={filtered}
                accessibilityLayer
                margin={{ left: 8, right: 8 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='week'
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(v: string) => `W${v}`}
                  interval='preserveStartEnd'
                />

                <Tooltip
                  content={({ active, payload, label }) => (
                    <ChartTooltipContent
                      active={active}
                      payload={payload as ChartTooltipContentProps['payload']}
                      indicator='line'
                      label={label != null ? `Week ${String(label)}` : undefined}
                      formatter={(value) =>
                        typeof value === 'number' ? formatCurrencyCompact(value) : value
                      }
                    />
                  )}
                />
                <Line dataKey='lastWeek' stroke='var(--color-lastWeek)' strokeWidth={2} />
                <Line dataKey='thisWeek' stroke='var(--color-thisWeek)' strokeWidth={2} />
              </LineChart>
            </ChartRoot>

            <Separator orientation='horizontal' className='lg:hidden' />
            <Separator orientation='vertical' className='hidden lg:block' />

            <div className='lg:w-[280px] lg:pl-6'>
              <div className='flex lg:flex-col gap-4'>
                <div className='space-y-1'>
                  <div className='flex items-center gap-2'>
                    <Badge
                      appearance='ghost'
                      size='sm'
                      shape='pill'
                      className='text-teal-600 dark:text-teal-400 pl-0'
                    >
                      <BadgeDot aria-hidden='true' />
                      This week
                    </Badge>
                  </div>
                  <data
                    value={totalThisWeek}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {formatCurrencyCompact(totalThisWeek)}
                  </data>
                  <p className='text-xs text-muted-foreground'>
                    Avg / week{' '}
                    <span className='font-medium text-foreground'>
                      {formatCurrencyCompact(avgThisWeek)}
                    </span>
                  </p>
                </div>

                <div className='space-y-1'>
                  <div className='flex items-center gap-2'>
                    <Badge
                      appearance='ghost'
                      size='sm'
                      shape='pill'
                      className='text-amber-600 dark:text-amber-400 pl-0'
                    >
                      <BadgeDot aria-hidden='true' />
                      Last week
                    </Badge>
                  </div>
                  <data
                    value={totalLastWeek}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {formatCurrencyCompact(totalLastWeek)}
                  </data>
                  <p className='text-xs text-muted-foreground'>
                    Delta{' '}
                    <span className='font-medium text-foreground'>
                      {isPositive ? '+' : '-'}
                      {formatCurrencyCompact(Math.abs(delta))}
                    </span>{' '}
                    ({isPositive ? '+' : '-'}
                    {formatPercent(Math.abs(deltaRatio))})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
