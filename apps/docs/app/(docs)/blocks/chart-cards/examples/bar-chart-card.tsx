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
                {totalByCategory.map((cat) => {
                  const share = Math.round((cat.total / grandTotal) * 100)
                  return (
                    <div key={cat.key} className='space-y-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <span
                            className={`size-2.5 shrink-0 rounded-full ${cat.bgColor}`}
                            aria-hidden='true'
                          />
                          <span className='text-sm font-medium'>{cat.label}</span>
                        </div>
                        <data
                          value={cat.total}
                          className='text-sm font-semibold tabular-nums'
                        >
                          {formatCurrencyCompact(cat.total)}
                        </data>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MeterRoot
                          value={share}
                          aria-label={`${cat.label} revenue share`}
                          animated
                        >
                          <MeterTrack className={`h-1.5 ${cat.bgLight}`}>
                            <MeterIndicator className={cat.bgColor} />
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
