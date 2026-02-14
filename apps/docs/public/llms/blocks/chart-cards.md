# Chart Cards

Dashboard chart card blocks that wrap charts with headers, legends, filters, and summary statistics.

## Examples

### Area Chart Card

```tsx
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
```

### Bar Chart Card

```tsx
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
  ChartRoot,
  ChartTooltipContent,
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, BarChart3 } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const formatCurrencyCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: v >= 10_000 ? 0 : 1,
  }).format(v)

const data = [
  { month: 'Jul', electronics: 7200, clothing: 4800, home: 3300 },
  { month: 'Aug', electronics: 6800, clothing: 4500, home: 3100 },
  { month: 'Sep', electronics: 7900, clothing: 5100, home: 3600 },
  { month: 'Oct', electronics: 7400, clothing: 4700, home: 3400 },
  { month: 'Nov', electronics: 8800, clothing: 5600, home: 4100 },
  { month: 'Dec', electronics: 9500, clothing: 6200, home: 4800 },
]

const categories = [
  {
    key: 'electronics',
    label: 'Electronics',
    chartColor: 'var(--color-teal-600)',
    bgColor: 'bg-teal-600',
    bgLight: 'bg-teal-600/15',
  },
  {
    key: 'clothing',
    label: 'Clothing',
    chartColor: 'var(--color-amber-600)',
    bgColor: 'bg-amber-600',
    bgLight: 'bg-amber-600/15',
  },
  {
    key: 'home',
    label: 'Home & Garden',
    chartColor: 'var(--color-cyan-600)',
    bgColor: 'bg-cyan-600',
    bgLight: 'bg-cyan-600/15',
  },
] as const

const config: ChartConfig = Object.fromEntries(
  categories.map((c) => [c.key, { label: c.label, color: c.chartColor }]),
)

const totalByCategory = categories.map((cat) => {
  const total = data.reduce((sum, d) => sum + d[cat.key], 0)
  return { ...cat, total }
})

const grandTotal = totalByCategory.reduce((sum, c) => sum + c.total, 0)

export default function BarChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='bar-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='bar-chart-card-title' className='flex items-center gap-2'>
                <BarChart3 className='size-4' aria-hidden='true' />
                Revenue by Category
              </CardTitle>
              <CardDescription>
                Monthly breakdown across product categories
              </CardDescription>
            </div>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Total revenue increased 28.4% year over year'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +28.4% YoY
            </Badge>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
            <div className='min-w-0 flex-1'>
              <ChartRoot config={config} className='h-[260px] w-full'>
                <BarChart data={data} accessibilityLayer>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='month'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(v: number) =>
                      v >= 1000 ? `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}K` : String(v)
                    }
                    width={36}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => (
                      <ChartTooltipContent
                        active={active}
                        payload={payload as ChartTooltipContentProps['payload']}
                        indicator='dot'
                        label={label != null ? `Month: ${String(label)}` : undefined}
                        formatter={(value) =>
                          typeof value === 'number' ? formatCurrencyCompact(value) : value
                        }
                      />
                    )}
                  />
                  {categories.map((cat) => (
                    <Bar
                      key={cat.key}
                      dataKey={cat.key}
                      fill={`var(--color-${cat.key})`}
                      radius={[4, 4, 0, 0]}
                    />
                  ))}
                </BarChart>
              </ChartRoot>
            </div>

            <div
              className='flex flex-col justify-center gap-5 lg:w-56 lg:shrink-0'
              role='group'
              aria-label='Category breakdown'
            >
              <div className='space-y-1'>
                <p className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                  Total Revenue
                </p>
                <data value={grandTotal} className='text-2xl font-bold tracking-tight'>
                  {formatCurrencyCompact(grandTotal)}
                </data>
              </div>

              <Separator />

              <div className='space-y-4'>
                {totalByCategory.map(({ key, label, total, bgColor, bgLight }) => {
                  const share = Math.round((total / grandTotal) * 100)
                  return (
                    <div key={key} className='space-y-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <span
                            className={`size-2.5 shrink-0 rounded-full ${bgColor}`}
                            aria-hidden='true'
                          />
                          <span className='text-sm font-medium'>{label}</span>
                        </div>
                        <data
                          value={total}
                          className='text-sm font-semibold tabular-nums'
                        >
                          {formatCurrencyCompact(total)}
                        </data>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MeterRoot
                          value={share}
                          aria-label={`${label} revenue share`}
                          animated
                        >
                          <MeterTrack className={`h-1.5 ${bgLight}`}>
                            <MeterIndicator className={bgColor} />
                          </MeterTrack>
                        </MeterRoot>
                        <span className='w-8 text-right text-xs tabular-nums text-muted-foreground'>
                          {share}%
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Line Chart Card

```tsx
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
```

### Pie Chart Card

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, PieChartIcon } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const sources = [
  {
    key: 'direct',
    label: 'Direct',
    visitors: 42800,
    chartColor: 'var(--color-teal-600)',
    bgColor: 'bg-teal-600',
    bgLight: 'bg-teal-600/15',
  },
  {
    key: 'organic',
    label: 'Organic Search',
    visitors: 31200,
    chartColor: 'var(--color-amber-600)',
    bgColor: 'bg-amber-600',
    bgLight: 'bg-amber-600/15',
  },
  {
    key: 'social',
    label: 'Social Media',
    visitors: 18600,
    chartColor: 'var(--color-purple-600)',
    bgColor: 'bg-purple-600',
    bgLight: 'bg-purple-600/15',
  },
  {
    key: 'referral',
    label: 'Referral',
    visitors: 12400,
    chartColor: 'var(--color-cyan-600)',
    bgColor: 'bg-cyan-600',
    bgLight: 'bg-cyan-600/15',
  },
] as const

const total = sources.reduce((sum, s) => sum + s.visitors, 0)

const pieData = sources.map((s) => ({
  source: s.key,
  visitors: s.visitors,
  fill: `var(--color-${s.key})`,
}))

const config: ChartConfig = Object.fromEntries(
  sources.map((s) => [s.key, { label: s.label, color: s.chartColor }]),
)

const formatCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(v)

export default function PieChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='pie-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='pie-chart-card-title' className='flex items-center gap-2'>
                <PieChartIcon className='size-4' aria-hidden='true' />
                Traffic Sources
              </CardTitle>
              <CardDescription>
                Visitor distribution by acquisition channel
              </CardDescription>
            </div>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Total traffic increased 15.2% year over year'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +15.2% YoY
            </Badge>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center'>
            {/* Donut chart with center metric */}
            <div className='mx-auto lg:mx-0'>
              <ChartRoot config={config} className='h-[220px] w-[220px]'>
                <PieChart>
                  <Tooltip
                    content={
                      <ChartTooltipContent hideLabel nameKey='source' indicator='dot' />
                    }
                  />
                  <Pie
                    data={pieData}
                    dataKey='visitors'
                    nameKey='source'
                    innerRadius={70}
                    outerRadius={100}
                    strokeWidth={0}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor='middle'
                              dominantBaseline='middle'
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) - 8}
                                className='fill-foreground text-2xl font-bold'
                              >
                                {formatCompact(total)}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) + 12}
                                className='fill-muted-foreground text-xs'
                              >
                                visitors
                              </tspan>
                            </text>
                          )
                        }
                        return null
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartRoot>
            </div>

            {/* Legend with share meters */}
            <div
              role='group'
              aria-label='Traffic source breakdown'
              className='flex-1 space-y-2'
            >
              {sources.map((s) => {
                const share = Math.round((s.visitors / total) * 100)
                return (
                  <div
                    key={s.key}
                    className='rounded-lg px-3 py-2 transition-colors hover:bg-muted/50'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${s.bgColor}`}
                          aria-hidden='true'
                        />
                        <span className='text-sm font-medium'>{s.label}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <data
                          value={s.visitors}
                          className='text-sm font-semibold tabular-nums'
                        >
                          {formatCompact(s.visitors)}
                        </data>
                        <span
                          className='w-8 text-right text-xs tabular-nums text-muted-foreground'
                          aria-label={`${s.label} share: ${share}%`}
                        >
                          {share}%
                        </span>
                      </div>
                    </div>
                    <div className='mt-1.5'>
                      <MeterRoot
                        value={share}
                        aria-label={`${s.label} traffic share`}
                        animated
                      >
                        <MeterTrack className={`h-1.5 ${s.bgLight}`}>
                          <MeterIndicator className={s.bgColor} />
                        </MeterTrack>
                      </MeterRoot>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Chart with Tabs

```tsx
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
  ChartRoot,
  ChartTooltipContent,
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'
import { ArrowDown, ArrowUp, DollarSign, ShoppingCart, Users } from 'lucide-react'
import { useState } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { month: 'Jan', revenue: 42000, orders: 380, customers: 1200 },
  { month: 'Feb', revenue: 38500, orders: 350, customers: 1150 },
  { month: 'Mar', revenue: 51000, orders: 460, customers: 1380 },
  { month: 'Apr', revenue: 46800, orders: 420, customers: 1290 },
  { month: 'May', revenue: 58200, orders: 520, customers: 1450 },
  { month: 'Jun', revenue: 55400, orders: 490, customers: 1420 },
  { month: 'Jul', revenue: 64800, orders: 580, customers: 1580 },
  { month: 'Aug', revenue: 61200, orders: 550, customers: 1520 },
  { month: 'Sep', revenue: 72400, orders: 650, customers: 1700 },
  { month: 'Oct', revenue: 68900, orders: 610, customers: 1650 },
  { month: 'Nov', revenue: 78600, orders: 700, customers: 1820 },
  { month: 'Dec', revenue: 85200, orders: 760, customers: 1950 },
]

type TabKey = 'revenue' | 'orders' | 'customers'

interface TabMeta {
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  format: (v: number) => string
}

const tabMeta: Record<TabKey, TabMeta> = {
  revenue: {
    label: 'Revenue',
    icon: DollarSign,
    color: 'var(--color-teal-600)',
    format: (v) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: v >= 10_000 ? 0 : 1,
      }).format(v),
  },
  orders: {
    label: 'Orders',
    icon: ShoppingCart,
    color: 'var(--color-amber-600)',
    format: (v) => new Intl.NumberFormat('en-US').format(v),
  },
  customers: {
    label: 'Customers',
    icon: Users,
    color: 'var(--color-purple-600)',
    format: (v) =>
      new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 1,
      }).format(v),
  },
}

const formatPercent = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(v)

function computeStats(key: TabKey) {
  const h2 = data.slice(6).reduce((s, d) => s + d[key], 0)
  const h1 = data.slice(0, 6).reduce((s, d) => s + d[key], 0)
  const delta = h2 - h1
  const ratio = h1 === 0 ? 0 : delta / h1
  return { total: h2 + h1, h2, h1, delta, ratio }
}

function TabChart({ tab }: { tab: TabKey }) {
  const meta = tabMeta[tab]
  const config: ChartConfig = {
    [tab]: { label: meta.label, color: meta.color },
  }

  const renderTooltip = ({ active, payload, label }: Record<string, unknown>) => (
    <ChartTooltipContent
      active={active as boolean | undefined}
      payload={payload as ChartTooltipContentProps['payload']}
      indicator='line'
      label={label != null ? String(label) : undefined}
      formatter={(value) => (typeof value === 'number' ? meta.format(value) : value)}
    />
  )

  return (
    <ChartRoot config={config} className='h-[240px] w-full'>
      {tab === 'revenue' ? (
        <AreaChart data={data} accessibilityLayer>
          <defs>
            <linearGradient id='tabs-fill-revenue' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={meta.color} stopOpacity={0.25} />
              <stop offset='100%' stopColor={meta.color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={(v: number) => meta.format(v)}
          />
          <Tooltip content={renderTooltip} />
          <Area
            dataKey={tab}
            type='monotone'
            fill='url(#tabs-fill-revenue)'
            stroke={meta.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        </AreaChart>
      ) : tab === 'orders' ? (
        <BarChart data={data} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} width={40} />
          <Tooltip content={renderTooltip} />
          <Bar dataKey={tab} fill={meta.color} radius={[4, 4, 0, 0]} />
        </BarChart>
      ) : (
        <LineChart data={data} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={(v: number) => meta.format(v)}
          />
          <Tooltip content={renderTooltip} />
          <Line
            dataKey={tab}
            stroke={meta.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        </LineChart>
      )}
    </ChartRoot>
  )
}

export default function ChartWithTabsBlock() {
  const [activeTab, setActiveTab] = useState<TabKey>('revenue')
  const stats = computeStats(activeTab)
  const meta = tabMeta[activeTab]
  const isPositive = stats.delta >= 0

  return (
    <section className='w-full' aria-labelledby='chart-tabs-title'>
      <CardRoot>
        <TabsRoot value={activeTab} onValueChange={(v) => setActiveTab(v as TabKey)}>
          <CardHeader>
            <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
              <div className='space-y-1'>
                <CardTitle id='chart-tabs-title'>Performance Overview</CardTitle>
                <CardDescription>
                  Track revenue, orders, and customer growth
                </CardDescription>
              </div>

              <TabsList aria-label='Metric selector'>
                {(Object.keys(tabMeta) as TabKey[]).map((key) => {
                  const Icon = tabMeta[key].icon
                  return (
                    <TabsTab key={key} value={key} className='gap-1.5'>
                      <Icon className='size-3.5' aria-hidden='true' />
                      {tabMeta[key].label}
                    </TabsTab>
                  )
                })}
                <TabsIndicator />
              </TabsList>
            </div>

            <div className='mt-4 flex flex-wrap items-center gap-2'>
              <data value={stats.total} className='text-3xl font-bold tracking-tight'>
                {meta.format(stats.total)}
              </data>
              <Badge
                variant={isPositive ? 'success' : 'destructive'}
                appearance='light'
                size='sm'
                shape='pill'
                aria-label={`${meta.label} ${isPositive ? 'increased' : 'decreased'} ${formatPercent(Math.abs(stats.ratio))}`}
              >
                {isPositive ? (
                  <ArrowUp className='size-3' aria-hidden='true' />
                ) : (
                  <ArrowDown className='size-3' aria-hidden='true' />
                )}
                {isPositive ? '+' : ''}
                {formatPercent(Math.abs(stats.ratio))}
              </Badge>
            </div>
          </CardHeader>

          <Separator />

          <CardContent className='pt-6'>
            {(Object.keys(tabMeta) as TabKey[]).map((key) => (
              <TabsPanel key={key} value={key}>
                <TabChart tab={key} />
              </TabsPanel>
            ))}
          </CardContent>
        </TabsRoot>
      </CardRoot>
    </section>
  )
}
```

### Chart with Filters

```tsx
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
  ChartRoot,
  ChartTooltipContent,
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
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
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowUp, ChartLine, Check, ChevronsUpDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const rawData = [
  { month: 'Jan', direct: 4200, organic: 3100, social: 1800, referral: 1200 },
  { month: 'Feb', direct: 3900, organic: 2800, social: 2100, referral: 1400 },
  { month: 'Mar', direct: 5100, organic: 3600, social: 2400, referral: 1600 },
  { month: 'Apr', direct: 4700, organic: 3300, social: 2200, referral: 1500 },
  { month: 'May', direct: 5800, organic: 4100, social: 2800, referral: 1900 },
  { month: 'Jun', direct: 5400, organic: 3800, social: 2600, referral: 1700 },
  { month: 'Jul', direct: 6500, organic: 4600, social: 3200, referral: 2100 },
  { month: 'Aug', direct: 6100, organic: 4300, social: 3000, referral: 2000 },
  { month: 'Sep', direct: 7200, organic: 5100, social: 3600, referral: 2400 },
  { month: 'Oct', direct: 6800, organic: 4800, social: 3400, referral: 2200 },
  { month: 'Nov', direct: 7800, organic: 5500, social: 3900, referral: 2600 },
  { month: 'Dec', direct: 8400, organic: 5900, social: 4200, referral: 2800 },
]

const channelKeys = ['direct', 'organic', 'social', 'referral'] as const
type ChannelKey = (typeof channelKeys)[number]

const config: ChartConfig = {
  direct: { label: 'Direct', color: 'var(--color-teal-600)' },
  organic: { label: 'Organic', color: 'var(--color-amber-600)' },
  social: { label: 'Social', color: 'var(--color-purple-600)' },
  referral: { label: 'Referral', color: 'var(--color-cyan-600)' },
}

type TimeRange = '6M' | '12M'
const timeRangeItems = [
  { label: 'Last 6 months', value: '6M' },
  { label: 'Last 12 months', value: '12M' },
]

const channelItems = [
  { label: 'All Channels', value: 'all' },
  ...channelKeys.map((k) => ({ label: config[k].label as string, value: k })),
]

const formatCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(v)

const formatPercent = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(v)

export default function ChartWithFiltersBlock() {
  const [timeRange, setTimeRange] = useState<TimeRange>('12M')
  const [channel, setChannel] = useState<string>('all')

  const filteredData = useMemo(() => {
    const months = timeRange === '6M' ? 6 : 12
    return rawData.slice(-months)
  }, [timeRange])

  const activeChannels = useMemo(
    () => (channel === 'all' ? [...channelKeys] : [channel as ChannelKey]),
    [channel],
  )

  const stats = useMemo(() => {
    const half = Math.floor(filteredData.length / 2)
    const current = filteredData.slice(half)
    const previous = filteredData.slice(0, half)

    const sum = (slice: typeof filteredData) =>
      slice.reduce((s, d) => s + activeChannels.reduce((cs, ch) => cs + d[ch], 0), 0)

    const currentTotal = sum(current)
    const previousTotal = sum(previous)
    const delta = currentTotal - previousTotal
    const ratio = previousTotal === 0 ? 0 : delta / previousTotal

    return {
      total: sum(filteredData),
      delta,
      ratio,
      isPositive: delta >= 0,
    }
  }, [filteredData, activeChannels])

  return (
    <section className='w-full' aria-labelledby='chart-filters-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='chart-filters-title' className='flex items-center gap-2'>
                <ChartLine className='size-4' aria-hidden='true' />
                Traffic Analytics
              </CardTitle>
              <CardDescription>Sessions by acquisition channel</CardDescription>
            </div>

            <div
              role='group'
              aria-label='Chart filters'
              className='flex flex-wrap items-center gap-2'
            >
              <SelectRoot
                value={timeRange}
                onValueChange={(v) => v && setTimeRange(v as TimeRange)}
                items={timeRangeItems}
              >
                <SelectTrigger className='h-8 text-sm'>
                  <SelectValue placeholder='Time range' />
                  <ChevronsUpDown className='size-4' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectList>
                        {timeRangeItems.map((item) => (
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

              <SelectRoot
                value={channel}
                onValueChange={(v) => v && setChannel(v)}
                items={channelItems}
              >
                <SelectTrigger className='h-8 text-sm'>
                  <SelectValue placeholder='Channel' />
                  <ChevronsUpDown className='size-4' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectList>
                        {channelItems.map((item) => (
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
          </div>

          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <data value={stats.total} className='text-3xl font-bold tracking-tight'>
              {formatCompact(stats.total)}
            </data>
            <Badge
              variant={stats.isPositive ? 'success' : 'destructive'}
              appearance='light'
              size='sm'
              shape='pill'
              aria-label={`Traffic ${stats.isPositive ? 'increased' : 'decreased'} ${formatPercent(Math.abs(stats.ratio))} vs previous period`}
            >
              {stats.isPositive ? (
                <ArrowUp className='size-3' aria-hidden='true' />
              ) : (
                <ArrowDown className='size-3' aria-hidden='true' />
              )}
              {stats.isPositive ? '+' : ''}
              {formatPercent(Math.abs(stats.ratio))}
            </Badge>
            <span className='text-xs text-muted-foreground'>total sessions</span>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          <ChartRoot config={config} className='h-[280px] w-full'>
            <AreaChart data={filteredData} accessibilityLayer>
              <defs>
                {activeChannels.map((ch) => (
                  <linearGradient
                    key={ch}
                    id={`fill-filter-${ch}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor={`var(--color-${ch})`}
                      stopOpacity={0.25}
                    />
                    <stop
                      offset='100%'
                      stopColor={`var(--color-${ch})`}
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={36}
                tickFormatter={(v: number) => formatCompact(v)}
              />
              <Tooltip
                content={({ active, payload, label }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload as ChartTooltipContentProps['payload']}
                    indicator='dot'
                    label={label != null ? String(label) : undefined}
                    formatter={(value) =>
                      typeof value === 'number' ? formatCompact(value) : value
                    }
                  />
                )}
              />
              {activeChannels.map((ch) => (
                <Area
                  key={ch}
                  dataKey={ch}
                  type='monotone'
                  fill={`url(#fill-filter-${ch})`}
                  stroke={`var(--color-${ch})`}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                  stackId={activeChannels.length > 1 ? 'stack' : undefined}
                />
              ))}
            </AreaChart>
          </ChartRoot>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Stacked Bar Chart Card

```tsx
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
  ChartRoot,
  ChartTooltipContent,
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, BarChart3 } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const formatCurrency = (v: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: v >= 10_000 ? 0 : 1,
  }).format(v)

const categories = [
  {
    key: 'product',
    label: 'Product',
    chartColor: 'var(--color-teal-600)',
    dot: 'bg-teal-600',
  },
  {
    key: 'services',
    label: 'Services',
    chartColor: 'var(--color-amber-600)',
    dot: 'bg-amber-600',
  },
  {
    key: 'subscriptions',
    label: 'Subscriptions',
    chartColor: 'var(--color-purple-600)',
    dot: 'bg-purple-600',
  },
  {
    key: 'licensing',
    label: 'Licensing',
    chartColor: 'var(--color-sky-600)',
    dot: 'bg-sky-600',
  },
] as const

const config: ChartConfig = Object.fromEntries(
  categories.map((c) => [c.key, { label: c.label, color: c.chartColor }]),
)

const data = [
  {
    month: 'Jan',
    product: 42_000,
    services: 28_000,
    subscriptions: 18_500,
    licensing: 11_500,
  },
  {
    month: 'Feb',
    product: 38_500,
    services: 30_000,
    subscriptions: 19_200,
    licensing: 12_000,
  },
  {
    month: 'Mar',
    product: 45_800,
    services: 31_500,
    subscriptions: 20_800,
    licensing: 11_800,
  },
  {
    month: 'Apr',
    product: 48_500,
    services: 33_000,
    subscriptions: 22_000,
    licensing: 13_000,
  },
  {
    month: 'May',
    product: 44_200,
    services: 35_200,
    subscriptions: 23_500,
    licensing: 12_600,
  },
  {
    month: 'Jun',
    product: 51_000,
    services: 34_000,
    subscriptions: 25_000,
    licensing: 14_200,
  },
  {
    month: 'Jul',
    product: 53_200,
    services: 36_500,
    subscriptions: 26_800,
    licensing: 14_800,
  },
  {
    month: 'Aug',
    product: 49_800,
    services: 37_000,
    subscriptions: 27_500,
    licensing: 13_900,
  },
  {
    month: 'Sep',
    product: 55_400,
    services: 38_500,
    subscriptions: 29_200,
    licensing: 15_100,
  },
  {
    month: 'Oct',
    product: 52_000,
    services: 36_800,
    subscriptions: 28_000,
    licensing: 14_500,
  },
  {
    month: 'Nov',
    product: 58_000,
    services: 40_000,
    subscriptions: 31_500,
    licensing: 16_000,
  },
  {
    month: 'Dec',
    product: 62_500,
    services: 42_000,
    subscriptions: 33_000,
    licensing: 17_500,
  },
]

const grandTotal = data.reduce(
  (sum, d) => sum + categories.reduce((s, c) => s + d[c.key], 0),
  0,
)

export default function StackedBarChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='stacked-bar-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='stacked-bar-title' className='flex items-center gap-2'>
                <BarChart3 className='size-4' aria-hidden='true' />
                Revenue by Stream
              </CardTitle>
              <CardDescription>
                Monthly breakdown across revenue categories
              </CardDescription>
            </div>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Total revenue increased 24.6% year over year'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +24.6% YoY
            </Badge>
          </div>

          <div className='mt-3 flex items-baseline gap-2'>
            <data value={grandTotal} className='text-2xl font-bold tracking-tight'>
              {formatCurrency(grandTotal)}
            </data>
            <span className='text-sm text-muted-foreground'>total revenue</span>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6 space-y-2'>
          {/* Stacked bar chart */}
          <ChartRoot config={config} className='h-[280px] w-full'>
            <BarChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(v: number) => formatCurrency(v)}
                width={40}
              />
              <Tooltip
                content={({ active, payload, label }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload as ChartTooltipContentProps['payload']}
                    indicator='dot'
                    label={label != null ? String(label) : undefined}
                    formatter={(value) =>
                      typeof value === 'number' ? formatCurrency(value) : value
                    }
                  />
                )}
              />
              {categories.map((cat) => (
                <Bar
                  key={cat.key}
                  dataKey={cat.key}
                  stackId='revenue'
                  fill={`var(--color-${cat.key})`}
                  radius={cat.key === 'licensing' ? [4, 4, 0, 0] : 0}
                />
              ))}
            </BarChart>
          </ChartRoot>

          {/* Category totals row */}
          <div
            className='grid grid-cols-2 gap-3 sm:grid-cols-4'
            role='group'
            aria-label='Category totals'
          >
            {categories.map((cat) => {
              const catTotal = data.reduce((sum, d) => sum + d[cat.key], 0)
              const share = Math.round((catTotal / grandTotal) * 100)

              return (
                <div
                  key={cat.key}
                  className='rounded-lg border border-border/50 px-3 py-2.5 transition-colors hover:bg-muted/30'
                >
                  <div className='flex items-center gap-1.5'>
                    <span
                      className={`size-2 shrink-0 rounded-full ${cat.dot}`}
                      aria-hidden='true'
                    />
                    <span className='text-xs font-medium text-muted-foreground'>
                      {cat.label}
                    </span>
                  </div>
                  <div className='mt-1 flex items-baseline gap-1.5'>
                    <data
                      value={catTotal}
                      className='text-sm font-bold tabular-nums tracking-tight'
                    >
                      {formatCurrency(catTotal)}
                    </data>
                    <span
                      className='text-xs tabular-nums text-muted-foreground'
                      aria-label={`${cat.label} share: ${share}%`}
                    >
                      {share}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Composed Chart Card

```tsx
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
  type ChartTooltipContentProps,
} from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowUp, GitCompareArrows } from 'lucide-react'
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const data = [
  { month: 'Jul', revenue: 52400, expenses: 38200 },
  { month: 'Aug', revenue: 48900, expenses: 36700 },
  { month: 'Sep', revenue: 61200, expenses: 42100 },
  { month: 'Oct', revenue: 57800, expenses: 40500 },
  { month: 'Nov', revenue: 68400, expenses: 45300 },
  { month: 'Dec', revenue: 74100, expenses: 48600 },
]

const prevPeriod = [
  { month: 'Jan', revenue: 44200, expenses: 34800 },
  { month: 'Feb', revenue: 41600, expenses: 33100 },
  { month: 'Mar', revenue: 49800, expenses: 37400 },
  { month: 'Apr', revenue: 46300, expenses: 35900 },
  { month: 'May', revenue: 53100, expenses: 39200 },
  { month: 'Jun', revenue: 50700, expenses: 37600 },
]

/* ------------------------------------------------------------------ */
/*  Computed stats                                                     */
/* ------------------------------------------------------------------ */

const totalRevenue = data.reduce((s, d) => s + d.revenue, 0)
const totalExpenses = data.reduce((s, d) => s + d.expenses, 0)
const prevTotalRevenue = prevPeriod.reduce((s, d) => s + d.revenue, 0)
const prevTotalExpenses = prevPeriod.reduce((s, d) => s + d.expenses, 0)

const revenueChange =
  prevTotalRevenue === 0 ? 0 : (totalRevenue - prevTotalRevenue) / prevTotalRevenue
const expensesChange =
  prevTotalExpenses === 0 ? 0 : (totalExpenses - prevTotalExpenses) / prevTotalExpenses

/* ------------------------------------------------------------------ */
/*  Formatters                                                         */
/* ------------------------------------------------------------------ */

const formatCurrency = (v: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: v >= 10_000 ? 0 : 1,
  }).format(v)

const formatPercent = (v: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1,
    signDisplay: 'exceptZero',
  }).format(v)

/* ------------------------------------------------------------------ */
/*  Chart config                                                       */
/* ------------------------------------------------------------------ */

const chartConfig: ChartConfig = {
  revenue: { label: 'Revenue', color: 'var(--color-teal-600)' },
  expenses: { label: 'Expenses', color: 'var(--color-amber-600)' },
}

/* ------------------------------------------------------------------ */
/*  Trend badge                                                        */
/* ------------------------------------------------------------------ */

function TrendBadge({ change, label }: { change: number; label: string }) {
  const isPositive = change >= 0
  return (
    <Badge
      variant={isPositive ? 'success' : 'destructive'}
      appearance='light'
      size='sm'
      shape='pill'
      aria-label={label}
    >
      {isPositive ? (
        <ArrowUp className='size-3' aria-hidden='true' />
      ) : (
        <ArrowDown className='size-3' aria-hidden='true' />
      )}
      {formatPercent(change)}
    </Badge>
  )
}

/* ------------------------------------------------------------------ */
/*  YAxis tick formatter                                                */
/* ------------------------------------------------------------------ */

const yAxisFormat = (v: number) =>
  v >= 1000 ? `${(v / 1000).toFixed(v >= 10_000 ? 0 : 1)}K` : String(v)

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ComposedChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='composed-chart-card-title'>
      <CardRoot>
        {/* ---- Header ---- */}
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle
                id='composed-chart-card-title'
                className='flex items-center gap-2'
              >
                <GitCompareArrows className='size-4' aria-hidden='true' />
                Revenue vs Expenses
              </CardTitle>
              <CardDescription>Combined view for the last 6 months</CardDescription>
            </div>
          </div>
        </CardHeader>

        <Separator />

        {/* ---- Stats row ---- */}
        <CardContent className='pt-6'>
          <div className='flex flex-wrap gap-6'>
            <div className='space-y-0.5' role='group' aria-label='Revenue metric'>
              <p className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                Revenue
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                <data value={totalRevenue} className='text-2xl font-bold tracking-tight'>
                  {formatCurrency(totalRevenue)}
                </data>
                <TrendBadge
                  change={revenueChange}
                  label={`Revenue ${revenueChange >= 0 ? 'increased' : 'decreased'} ${formatPercent(Math.abs(revenueChange))} vs previous period`}
                />
              </div>
            </div>

            <div className='space-y-0.5' role='group' aria-label='Expenses metric'>
              <p className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                Expenses
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                <data value={totalExpenses} className='text-2xl font-bold tracking-tight'>
                  {formatCurrency(totalExpenses)}
                </data>
                <TrendBadge
                  change={expensesChange}
                  label={`Expenses ${expensesChange >= 0 ? 'increased' : 'decreased'} ${formatPercent(Math.abs(expensesChange))} vs previous period`}
                />
              </div>
            </div>
          </div>

          {/* ---- Composed chart ---- */}
          <div className='mt-6'>
            <ChartRoot config={chartConfig} className='h-[260px] w-full'>
              <ComposedChart data={data} accessibilityLayer>
                <defs>
                  <linearGradient id='composed-fill-revenue' x1='0' y1='0' x2='0' y2='1'>
                    <stop
                      offset='0%'
                      stopColor='var(--color-revenue)'
                      stopOpacity={0.25}
                    />
                    <stop
                      offset='100%'
                      stopColor='var(--color-revenue)'
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={5} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  width={36}
                  tickFormatter={yAxisFormat}
                />
                <Tooltip
                  content={({ active, payload, label }) => (
                    <ChartTooltipContent
                      active={active}
                      payload={payload as ChartTooltipContentProps['payload']}
                      indicator='dot'
                      label={label != null ? String(label) : undefined}
                      formatter={(value) =>
                        typeof value === 'number' ? formatCurrency(value) : value
                      }
                    />
                  )}
                />
                <Legend content={<ChartLegendContent />} />
                <Bar
                  dataKey='expenses'
                  fill='var(--color-expenses)'
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
                <Area
                  dataKey='revenue'
                  type='monotone'
                  fill='url(#composed-fill-revenue)'
                  stroke='var(--color-revenue)'
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              </ComposedChart>
            </ChartRoot>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Small Bar Chart Card

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Bar, BarChart, Tooltip, XAxis } from 'recharts'

const data = [
  { hour: '00', visitors: 42 },
  { hour: '02', visitors: 18 },
  { hour: '04', visitors: 12 },
  { hour: '06', visitors: 68 },
  { hour: '08', visitors: 245 },
  { hour: '10', visitors: 398 },
  { hour: '12', visitors: 470 },
  { hour: '14', visitors: 412 },
  { hour: '16', visitors: 358 },
  { hour: '18', visitors: 290 },
  { hour: '20', visitors: 185 },
  { hour: '22', visitors: 81 },
]

const config: ChartConfig = {
  visitors: { label: 'Visitors', color: 'var(--color-cyan-600)' },
}

export default function MiniBarChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-bar-title'>
        <CardRoot>
          <CardHeader className='pb-2'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-bar-title'>Hourly Traffic</CardTitle>
              <Badge
                variant='success'
                appearance='light'
                size='sm'
                shape='pill'
                aria-label='Traffic increased 2.45%'
              >
                <ArrowUp className='size-3' aria-hidden='true' />
                +2.45%
              </Badge>
            </div>
            <div className='flex items-baseline gap-1.5'>
              <data value={2579} className='text-3xl font-bold tracking-tight'>
                2,579
              </data>
              <span className='text-sm text-muted-foreground'>Visitors</span>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <ChartRoot config={config} className='h-[120px] w-full'>
              <BarChart data={data} accessibilityLayer>
                <Tooltip content={<ChartTooltipContent hideLabel />} />
                <XAxis dataKey='hour' tickLine={false} axisLine={false} tickMargin={4} />
                <Bar
                  dataKey='visitors'
                  fill='var(--color-visitors)'
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartRoot>
            <Separator className='mb-2' />
            <Button variant='ghost' size='sm' className='flex ml-auto'>
              View full report
              <ArrowRight className='size-3' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
```

### Small Area Chart Card

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { day: 'Mon', sessions: 1240 },
  { day: 'Tue', sessions: 1580 },
  { day: 'Wed', sessions: 1420 },
  { day: 'Thu', sessions: 1860 },
  { day: 'Fri', sessions: 2140 },
  { day: 'Sat', sessions: 1680 },
  { day: 'Sun', sessions: 1380 },
]

const total = data.reduce((sum, d) => sum + d.sessions, 0)

const config: ChartConfig = {
  sessions: { label: 'Sessions', color: 'var(--color-violet-500)' },
}

export default function SmallAreaChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-area-title'>
        <CardRoot>
          <CardHeader className='pb-2'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-area-title'>Daily Sessions</CardTitle>
              <Badge
                variant='success'
                appearance='light'
                size='sm'
                shape='pill'
                aria-label='Sessions increased 12.3% from last week'
              >
                <ArrowUp className='size-3' aria-hidden='true' />
                +12.3%
              </Badge>
            </div>
            <div className='flex items-baseline gap-1.5'>
              <data value={total} className='text-3xl font-bold tracking-tight'>
                {total.toLocaleString()}
              </data>
              <span className='text-sm text-muted-foreground'>sessions</span>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <ChartRoot config={config} className='h-[120px] w-full'>
              <AreaChart
                data={data}
                accessibilityLayer
                margin={{ top: 4, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient
                    id='small-area-fill-sessions'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor='var(--color-sessions)'
                      stopOpacity={0.3}
                    />
                    <stop
                      offset='100%'
                      stopColor='var(--color-sessions)'
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey='day'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  interval='preserveStartEnd'
                />
                <Tooltip content={<ChartTooltipContent />} />
                <YAxis hide domain={['dataMin - 200', 'dataMax + 200']} />

                <Area
                  type='monotone'
                  dataKey='sessions'
                  stroke='var(--color-sessions)'
                  strokeWidth={2}
                  fill='url(#small-area-fill-sessions)'
                  activeDot={{ r: 4, strokeWidth: 2, fill: 'var(--color-background)' }}
                />
              </AreaChart>
            </ChartRoot>

            <Separator className='mb-2' />
            <Button variant='ghost' size='sm' className='flex ml-auto'>
              View analytics
              <ArrowRight className='size-3' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
```

### Small Line Chart Card

```tsx
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
                className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}
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
```

### Small Pie Chart Card

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const categories = [
  {
    key: 'documents',
    label: 'Documents',
    size: 4.5,
    chartColor: 'var(--color-cyan-600)',
    bgColor: 'bg-cyan-600',
    bgLight: 'bg-cyan-600/15',
  },
  {
    key: 'media',
    label: 'Media',
    size: 2.8,
    chartColor: 'var(--color-amber-500)',
    bgColor: 'bg-amber-500',
    bgLight: 'bg-amber-500/15',
  },
  {
    key: 'projects',
    label: 'Projects',
    size: 1.8,
    chartColor: 'var(--color-teal-500)',
    bgColor: 'bg-teal-500',
    bgLight: 'bg-teal-500/15',
  },
  {
    key: 'other',
    label: 'Other',
    size: 0.9,
    chartColor: 'var(--color-zinc-400)',
    bgColor: 'bg-zinc-400',
    bgLight: 'bg-zinc-400/15',
  },
] as const

const total = categories.reduce((sum, c) => sum + c.size, 0)

const pieData = categories.map((c) => ({
  name: c.key,
  value: c.size,
  fill: `var(--color-${c.key})`,
}))

const config: ChartConfig = Object.fromEntries(
  categories.map((c) => [c.key, { label: c.label, color: c.chartColor }]),
)

export default function SmallPieChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-pie-title'>
        <CardRoot>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-pie-title'>Storage Usage</CardTitle>
              <Badge
                variant='warning'
                appearance='outline'
                size='sm'
                shape='pill'
                aria-label='Storage usage increased 8.2% from last month'
              >
                <ArrowUp className='size-3' aria-hidden='true' />
                +8.2%
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <div className='flex flex-col items-center gap-4'>
              <div className='shrink-0'>
                <ChartRoot config={config} className='h-[180px] w-[180px]'>
                  <PieChart>
                    <Tooltip
                      content={
                        <ChartTooltipContent
                          hideLabel
                          formatter={(value) => `${value} GB`}
                        />
                      }
                    />
                    <Pie
                      data={pieData}
                      dataKey='value'
                      nameKey='name'
                      innerRadius={54}
                      outerRadius={80}
                      strokeWidth={0}
                      paddingAngle={2}
                    >
                      <Label
                        className='fill-foreground text-2xl font-medium'
                        position='center'
                      >{`${total.toFixed(0)}GB`}</Label>
                    </Pie>
                  </PieChart>
                </ChartRoot>
              </div>

              <div
                role='group'
                aria-label='Storage breakdown by category'
                className='w-full space-y-1 mb-2'
              >
                {categories.map((c) => {
                  const share = Math.round((c.size / total) * 100)
                  return (
                    <MeterRoot
                      key={c.key}
                      value={share}
                      aria-label={`${c.label} storage share`}
                      animated
                      className='rounded-md px-2 py-1.5'
                    >
                      <div className='flex items-center justify-between gap-2 mb-1.5'>
                        <MeterLabel>{c.label}</MeterLabel>
                        <MeterValue className='font-semibold tabular-nums'>
                          {(value) => `${value}`}
                        </MeterValue>
                      </div>
                      <MeterTrack className={`h-1.5 ${c.bgLight}`}>
                        <MeterIndicator className={c.bgColor} />
                      </MeterTrack>
                    </MeterRoot>
                  )
                })}
              </div>
            </div>

            <Separator className='my-2' />
            <Button variant='ghost' size='sm' className='ml-auto flex'>
              Manage storage
              <ArrowRight className='size-3.5' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
```

### Small Donut Chart Card

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { GroupRoot } from '@lglab/compose-ui/group'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, Wallet } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const budget = 5000
const spent = 3650
const remaining = budget - spent
const percentage = Math.round((spent / budget) * 100)

function getThreshold(pct: number) {
  if (pct < 50)
    return {
      variant: 'success' as const,
      spentColor: 'var(--color-success)',
      label: 'On track',
    }
  if (pct < 75)
    return {
      variant: 'warning' as const,
      spentColor: 'var(--color-amber-500)',
      label: 'Monitor',
    }
  return {
    variant: 'destructive' as const,
    spentColor: 'var(--color-danger)',
    label: 'Over pace',
  }
}

const threshold = getThreshold(percentage)

const donutData = [
  { name: 'spent', value: spent, fill: threshold.spentColor },
  { name: 'remaining', value: remaining, fill: 'var(--color-muted)' },
]

const config: ChartConfig = {
  spent: { label: 'Spent', color: threshold.spentColor },
  remaining: { label: 'Remaining', color: 'var(--color-muted)' },
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function SmallDonutChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-donut-title'>
        <CardRoot>
          <CardHeader className='pb-2'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-donut-title'>Monthly Budget</CardTitle>
              <Badge
                variant={threshold.variant}
                appearance='outline'
                size='sm'
                shape='pill'
                aria-label={`Budget status: ${threshold.label}. ${percentage}% of budget spent.`}
              >
                <Wallet className='size-3' aria-hidden='true' />
                {threshold.label}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <div className='flex justify-center my-4'>
              <ChartRoot config={config} className='h-[180px] w-[180px]'>
                <PieChart>
                  <Tooltip
                    content={
                      <ChartTooltipContent
                        hideLabel
                        nameKey='name'
                        formatter={(value) => formatCurrency(value as number)}
                      />
                    }
                  />
                  <Pie
                    data={donutData}
                    dataKey='value'
                    nameKey='name'
                    innerRadius={54}
                    outerRadius={80}
                    strokeWidth={0}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Label
                      className='fill-foreground text-2xl font-medium'
                      position='center'
                    >
                      {`${percentage}%`}
                    </Label>
                  </Pie>
                </PieChart>
              </ChartRoot>
            </div>

            <GroupRoot
              aria-label='Budget breakdown'
              className='py-2 mb-4 flex w-full items-center justify-between text-sm rounded-md border'
            >
              <div className='flex-1 text-center'>
                <data
                  value={spent}
                  className='block text-base font-semibold tabular-nums tracking-tight'
                >
                  {formatCurrency(spent)}
                </data>
                <span className='text-xs text-muted-foreground'>spent</span>
              </div>
              <Separator orientation='vertical' className='h-8 shrink-0' />
              <div className='flex-1 text-center'>
                <data
                  value={budget}
                  className='block text-base font-semibold tabular-nums tracking-tight'
                >
                  {formatCurrency(budget)}
                </data>
                <span className='text-xs text-muted-foreground'>budget</span>
              </div>
              <Separator orientation='vertical' className='h-8 shrink-0' />
              <div className='flex-1 text-center'>
                <data
                  value={remaining}
                  className='block text-base font-semibold tabular-nums tracking-tight text-success'
                >
                  {formatCurrency(remaining)}
                </data>
                <span className='text-xs text-muted-foreground'>remaining</span>
              </div>
            </GroupRoot>

            <Separator className='my-2' />
            <Button variant='ghost' size='sm' className='ml-auto flex'>
              View expenses
              <ArrowRight className='size-3' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
```

