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
