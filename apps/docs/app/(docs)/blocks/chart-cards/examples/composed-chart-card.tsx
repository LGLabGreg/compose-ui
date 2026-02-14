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
                  <linearGradient id='fillMixedRevenue' x1='0' y1='0' x2='0' y2='1'>
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
                  fill='url(#fillMixedRevenue)'
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
