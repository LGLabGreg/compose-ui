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
