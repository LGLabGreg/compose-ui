# Statistics

Dashboard statistics blocks for key metrics, trend indicators, and KPI summaries.

## Examples

### Simple Stats

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'

type StatTrend = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  accentClassName: string
}

const stats: StatTrend[] = [
  {
    label: 'Total Revenue',
    value: 128430,
    valueFormat: 'currency',
    change: '+12.4%',
    comparedTo: 'vs last month',
    badgeVariant: 'success',
    accentClassName: 'bg-success',
  },
  {
    label: 'Churn Rate',
    value: 2.3,
    valueFormat: 'percent',
    change: '-0.6%',
    comparedTo: 'vs last month',
    badgeVariant: 'destructive',
    accentClassName: 'bg-destructive',
  },
  {
    label: 'Avg. Deal Size',
    value: 3820,
    valueFormat: 'currency',
    change: '0.0%',
    comparedTo: 'vs last month',
    badgeVariant: 'secondary',
    accentClassName: 'bg-primary',
  },
]

function formatValue(value: number, valueFormat: StatTrend['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

export default function SimpleStatsBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => (
          <CardRoot key={stat.label} className='group relative overflow-hidden'>
            <span
              aria-hidden='true'
              className={`absolute left-0 top-0 h-px w-14 transition-all duration-300 group-hover:w-full ${stat.accentClassName}`}
            />

            <CardHeader>
              <CardTitle className='text-sm font-normal text-muted-foreground'>
                {stat.label}
              </CardTitle>
            </CardHeader>

            <CardContent className='space-y-3'>
              <data
                value={String(stat.value)}
                className='block text-2xl font-semibold tracking-tight'
              >
                {formatValue(stat.value, stat.valueFormat)}
              </data>
              <div className='flex items-center justify-between gap-3'>
                <Badge
                  variant={stat.badgeVariant}
                  appearance='light'
                  size='sm'
                  shape='pill'
                >
                  {stat.change}
                </Badge>
                <p className='text-xs text-muted-foreground'>{stat.comparedTo}</p>
              </div>
            </CardContent>
          </CardRoot>
        ))}
      </div>
    </section>
  )
}
```

### Stats with Icon

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { ShoppingCart, TrendingUp, Users } from 'lucide-react'

type IconStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  icon: React.ElementType
  iconClassName: string
}

const stats: IconStat[] = [
  {
    label: 'New Customers',
    value: 2340,
    valueFormat: 'number',
    change: '+8.1%',
    comparedTo: 'vs last month',
    badgeVariant: 'success',
    icon: Users,
    iconClassName: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
  },
  {
    label: 'Total Orders',
    value: 1029,
    valueFormat: 'number',
    change: '-3.2%',
    comparedTo: 'vs last month',
    badgeVariant: 'destructive',
    icon: ShoppingCart,
    iconClassName:
      'bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
  },
  {
    label: 'Growth Rate',
    value: 24.5,
    valueFormat: 'percent',
    change: '+2.4%',
    comparedTo: 'vs last quarter',
    badgeVariant: 'success',
    icon: TrendingUp,
    iconClassName:
      'bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
  },
]

function formatValue(value: number, valueFormat: IconStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

export default function StatsWithIconBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader className='flex-row items-center gap-3'>
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${stat.iconClassName}`}
                >
                  <Icon className='size-5' aria-hidden='true' />
                </span>
                <CardTitle className='text-sm font-normal text-muted-foreground'>
                  {stat.label}
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-3'>
                <data
                  value={String(stat.value)}
                  className='block text-2xl font-semibold tracking-tight'
                >
                  {formatValue(stat.value, stat.valueFormat)}
                </data>
                <div className='flex items-center justify-between gap-3'>
                  <Badge
                    variant={stat.badgeVariant}
                    appearance='light'
                    size='sm'
                    shape='pill'
                  >
                    {stat.change}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>{stat.comparedTo}</p>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats with Sparkline

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Area, AreaChart, Tooltip } from 'recharts'

type SparklineStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  dataKey: string
  color: string
  fillId: string
}

const revenueData = [
  { day: 'Mon', revenue: 4200 },
  { day: 'Tue', revenue: 3800 },
  { day: 'Wed', revenue: 5100 },
  { day: 'Thu', revenue: 4600 },
  { day: 'Fri', revenue: 5800 },
  { day: 'Sat', revenue: 6200 },
  { day: 'Sun', revenue: 5900 },
]

const sessionsData = [
  { day: 'Mon', sessions: 1200 },
  { day: 'Tue', sessions: 1400 },
  { day: 'Wed', sessions: 1100 },
  { day: 'Thu', sessions: 980 },
  { day: 'Fri', sessions: 870 },
  { day: 'Sat', sessions: 920 },
  { day: 'Sun', sessions: 810 },
]

const conversionData = [
  { day: 'Mon', conversion: 3.2 },
  { day: 'Tue', conversion: 3.5 },
  { day: 'Wed', conversion: 3.4 },
  { day: 'Thu', conversion: 3.6 },
  { day: 'Fri', conversion: 3.5 },
  { day: 'Sat', conversion: 3.7 },
  { day: 'Sun', conversion: 3.6 },
]

const stats: SparklineStat[] = [
  {
    label: 'Weekly Revenue',
    value: 35600,
    valueFormat: 'currency',
    change: '+14.2%',
    comparedTo: 'vs last week',
    badgeVariant: 'success',
    dataKey: 'revenue',
    color: 'var(--color-emerald-500)',
    fillId: 'fillRevenue',
  },
  {
    label: 'Active Sessions',
    value: 7180,
    valueFormat: 'number',
    change: '-9.8%',
    comparedTo: 'vs last week',
    badgeVariant: 'destructive',
    dataKey: 'sessions',
    color: 'var(--color-red-500)',
    fillId: 'fillSessions',
  },
  {
    label: 'Conversion Rate',
    value: 3.5,
    valueFormat: 'percent',
    change: '+0.3%',
    comparedTo: 'vs last week',
    badgeVariant: 'success',
    dataKey: 'conversion',
    color: 'var(--color-emerald-500)',
    fillId: 'fillConversion',
  },
]

const chartDataMap: Record<string, Record<string, string | number>[]> = {
  revenue: revenueData,
  sessions: sessionsData,
  conversion: conversionData,
}

function formatValue(value: number, valueFormat: SparklineStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

function SparklineCard({ stat }: { stat: SparklineStat }) {
  const config: ChartConfig = {
    [stat.dataKey]: { label: stat.label, color: stat.color },
  }

  return (
    <CardRoot className='group'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-sm font-normal text-muted-foreground'>
          {stat.label}
        </CardTitle>
        <Badge variant={stat.badgeVariant} appearance='light' size='sm' shape='pill'>
          {stat.change}
        </Badge>
      </CardHeader>

      <CardContent className='space-y-2'>
        <div className='flex flex-col gap-1'>
          <data
            value={String(stat.value)}
            className='text-2xl font-semibold tracking-tight leading-none'
          >
            {formatValue(stat.value, stat.valueFormat)}
          </data>
          <span className='text-xs text-muted-foreground'>{stat.comparedTo}</span>
        </div>
      </CardContent>

      <ChartRoot config={config} className='h-[48px] w-full'>
        <AreaChart
          data={chartDataMap[stat.dataKey]}
          margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
          accessibilityLayer
        >
          <defs>
            <linearGradient id={stat.fillId} x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={stat.color} stopOpacity={0.3} />
              <stop offset='100%' stopColor={stat.color} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Tooltip content={<ChartTooltipContent hideLabel indicator='dot' />} />
          <Area
            type='monotone'
            dataKey={stat.dataKey}
            stroke={stat.color}
            strokeWidth={1.5}
            fill={`url(#${stat.fillId})`}
            dot={false}
            activeDot={{ r: 3, strokeWidth: 0 }}
          />
        </AreaChart>
      </ChartRoot>
    </CardRoot>
  )
}

export default function StatsWithSparklineBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => (
          <SparklineCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
```

### Stats with Progress

```tsx
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressTrack,
} from '@lglab/compose-ui/progress'

type ProgressStat = {
  label: string
  current: number
  target: number
  unit: string
  progressColor: string
  trackColor: string
}

const stats: ProgressStat[] = [
  {
    label: 'Monthly Revenue',
    current: 84200,
    target: 100000,
    unit: 'currency',
    progressColor: 'bg-emerald-500',
    trackColor: 'bg-emerald-500/15',
  },
  {
    label: 'New Customers',
    current: 312,
    target: 500,
    unit: 'number',
    progressColor: 'bg-blue-500',
    trackColor: 'bg-blue-500/15',
  },
  {
    label: 'Support Tickets Resolved',
    current: 189,
    target: 200,
    unit: 'number',
    progressColor: 'bg-violet-500',
    trackColor: 'bg-violet-500/15',
  },
]

function formatValue(value: number, unit: string) {
  if (unit === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (unit === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

function getPercentage(current: number, target: number) {
  return Math.min(Math.round((current / target) * 100), 100)
}

export default function StatsWithProgressBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => {
          const pct = getPercentage(stat.current, stat.target)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader>
                <CardTitle className='text-sm font-normal text-muted-foreground'>
                  {stat.label}
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='flex items-baseline justify-between gap-2'>
                  <data
                    value={String(stat.current)}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {formatValue(stat.current, stat.unit)}
                  </data>
                  <span className='text-xs text-muted-foreground'>
                    / {formatValue(stat.target, stat.unit)}
                  </span>
                </div>

                <ProgressRoot value={pct} aria-label={`${stat.label} progress`}>
                  <ProgressTrack className={`h-2 ${stat.trackColor}`}>
                    <ProgressIndicator
                      className={`${stat.progressColor} transition-all duration-1000 ease-out`}
                    />
                  </ProgressTrack>
                </ProgressRoot>

                <div className='flex items-center justify-between'>
                  <span className='text-xs font-medium text-muted-foreground'>
                    {pct}% of target
                  </span>
                  {pct >= 90 && (
                    <span className='text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      Almost there
                    </span>
                  )}
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats with Meter

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'

type MeterStat = {
  label: string
  current: number
  max: number
  unit: string
}

const stats: MeterStat[] = [
  { label: 'CPU Usage', current: 78, max: 100, unit: '%' },
  { label: 'Memory', current: 14.8, max: 16, unit: 'GB' },
  { label: 'Storage', current: 287, max: 500, unit: 'GB' },
]

function getUtilization(current: number, max: number) {
  return Math.round((current / max) * 100)
}

function getStatusConfig(utilization: number) {
  if (utilization >= 90) {
    return {
      indicator: 'bg-red-500',
      track: 'bg-red-500/15',
      badge: 'destructive' as const,
      badgeLabel: 'Critical',
    }
  }
  if (utilization >= 75) {
    return {
      indicator: 'bg-amber-500',
      track: 'bg-amber-500/15',
      badge: 'warning' as const,
      badgeLabel: 'Warning',
    }
  }
  return {
    indicator: 'bg-emerald-500',
    track: 'bg-emerald-500/15',
    badge: 'success' as const,
    badgeLabel: 'Healthy',
  }
}

function formatValue(value: number, unit: string) {
  if (unit === '%') return `${value}%`
  return `${value % 1 === 0 ? value : value.toFixed(1)} ${unit}`
}

export default function StatsWithMeterBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((stat) => {
          const utilization = getUtilization(stat.current, stat.max)
          const status = getStatusConfig(utilization)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-sm font-normal text-muted-foreground'>
                    {stat.label}
                  </CardTitle>
                  <Badge
                    variant={status.badge}
                    appearance='outline'
                    size='sm'
                    aria-label={`${stat.label}: ${status.badgeLabel}`}
                  >
                    {status.badgeLabel}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='flex items-baseline gap-1'>
                  <data
                    value={String(utilization)}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {utilization}%
                  </data>
                  <span className='text-xs text-muted-foreground'>utilized</span>
                </div>

                <MeterRoot
                  value={utilization}
                  aria-label={`${stat.label} utilization`}
                  animated
                >
                  <MeterTrack
                    className={`h-2.5 ${status.track} transition-colors duration-500`}
                  >
                    <MeterIndicator
                      className={`${status.indicator} transition-all duration-1000 ease-out`}
                    />
                  </MeterTrack>
                </MeterRoot>

                <Separator />

                <div className='flex items-center justify-between text-xs text-muted-foreground'>
                  <span>
                    <data
                      value={String(stat.current)}
                      className='font-medium text-foreground'
                    >
                      {formatValue(stat.current, stat.unit)}
                    </data>{' '}
                    used
                  </span>
                  <span>{formatValue(stat.max, stat.unit)} total</span>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats Ring

```tsx
import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { ProgressCircle, ProgressRoot } from '@lglab/compose-ui/progress'

type RingStat = {
  label: string
  value: number
  target: number
  color: string
  trackColor: string
}

const stats: RingStat[] = [
  {
    label: 'Revenue Goal',
    value: 84,
    target: 100,
    color: 'stroke-emerald-500',
    trackColor: 'stroke-emerald-500/15',
  },
  {
    label: 'New Users',
    value: 62,
    target: 100,
    color: 'stroke-blue-500',
    trackColor: 'stroke-blue-500/15',
  },
  {
    label: 'Retention',
    value: 91,
    target: 100,
    color: 'stroke-violet-500',
    trackColor: 'stroke-violet-500/15',
  },
  {
    label: 'Support SLA',
    value: 47,
    target: 100,
    color: 'stroke-amber-500',
    trackColor: 'stroke-amber-500/15',
  },
]

function getStatusLabel(value: number) {
  if (value >= 90)
    return { text: 'Excellent', className: 'text-emerald-600 dark:text-emerald-400' }
  if (value >= 70)
    return { text: 'On Track', className: 'text-blue-600 dark:text-blue-400' }
  if (value >= 50)
    return { text: 'In Progress', className: 'text-amber-600 dark:text-amber-400' }
  return { text: 'Needs Attention', className: 'text-red-600 dark:text-red-400' }
}

export default function StatsRingBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => {
          const status = getStatusLabel(stat.value)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardContent className='flex flex-col items-center gap-3 pt-6'>
                <ProgressRoot
                  className='w-auto'
                  value={stat.value}
                  aria-label={`${stat.label} progress`}
                >
                  <ProgressCircle
                    value={stat.value}
                    size={100}
                    strokeWidth={8}
                    className={stat.color}
                    trackClassName={stat.trackColor}
                  >
                    <data
                      value={String(stat.value)}
                      className='text-xl font-semibold tracking-tight'
                    >
                      {stat.value}%
                    </data>
                  </ProgressCircle>
                </ProgressRoot>

                <div className='flex flex-col items-center gap-0.5'>
                  <h3 className='text-sm font-medium text-foreground'>{stat.label}</h3>
                  <span className={`text-xs font-medium ${status.className}`}>
                    {status.text}
                  </span>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats Trend

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'

type TrendStat = {
  label: string
  current: number
  previous: number
  valueFormat: 'currency' | 'number' | 'percent'
  period: string
  previousPeriod: string
}

const stats: TrendStat[] = [
  {
    label: 'Active Users',
    current: 8420,
    previous: 9130,
    valueFormat: 'number',
    period: 'This week',
    previousPeriod: 'Last week',
  },
  {
    label: 'Conversion Rate',
    current: 3.8,
    previous: 3.8,
    valueFormat: 'percent',
    period: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'Avg. Order Value',
    current: 74,
    previous: 68,
    valueFormat: 'currency',
    period: 'This month',
    previousPeriod: 'Last month',
  },
]

function formatValue(value: number, valueFormat: TrendStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

function getChange(current: number, previous: number) {
  if (previous === 0) return { pct: 0, direction: 'flat' as const }
  const pct = ((current - previous) / previous) * 100
  const direction =
    pct > 0 ? ('up' as const) : pct < 0 ? ('down' as const) : ('flat' as const)
  return { pct, direction }
}

const directionConfig = {
  up: {
    icon: ArrowUp,
    badgeVariant: 'success' as const,
    colorClass: 'text-emerald-600 dark:text-emerald-400',
  },
  down: {
    icon: ArrowDown,
    badgeVariant: 'destructive' as const,
    colorClass: 'text-red-600 dark:text-red-400',
  },
  flat: {
    icon: ArrowRight,
    badgeVariant: 'secondary' as const,
    colorClass: 'text-muted-foreground',
  },
}

export default function StatsTrendBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => {
          const { pct, direction } = getChange(stat.current, stat.previous)
          const config = directionConfig[direction]
          const Icon = config.icon
          const absPct = Math.abs(pct)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader className='flex-row items-center justify-between'>
                <CardTitle className='text-sm font-normal text-muted-foreground'>
                  {stat.label}
                </CardTitle>
                <Badge
                  variant={config.badgeVariant}
                  appearance='light'
                  size='sm'
                  shape='pill'
                  aria-label={`${direction === 'up' ? 'Increased' : direction === 'down' ? 'Decreased' : 'No change'} ${absPct.toFixed(1)}%`}
                >
                  <Icon
                    className='size-3 transition-transform duration-300 group-hover:scale-125'
                    aria-hidden='true'
                  />
                  {direction === 'flat' ? '0.0%' : `${absPct.toFixed(1)}%`}
                </Badge>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='flex items-baseline gap-2'>
                  <data
                    value={String(stat.current)}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {formatValue(stat.current, stat.valueFormat)}
                  </data>
                  <span className='text-xs text-muted-foreground'>{stat.period}</span>
                </div>

                <div className='space-y-1.5'>
                  <div className='flex items-center justify-between text-xs text-muted-foreground'>
                    <span>{stat.previousPeriod}</span>
                    <data value={String(stat.previous)}>
                      {formatValue(stat.previous, stat.valueFormat)}
                    </data>
                  </div>

                  <MeterRoot
                    value={stat.current}
                    min={0}
                    max={Math.max(stat.current, stat.previous)}
                    getAriaValueText={(_formatted, value) =>
                      `${formatValue(value, stat.valueFormat)} out of ${formatValue(Math.max(stat.current, stat.previous), stat.valueFormat)}`
                    }
                  >
                    <MeterTrack
                      className={`h-1.5 ${
                        direction === 'up'
                          ? 'bg-emerald-500/15'
                          : direction === 'down'
                            ? 'bg-red-400/15'
                            : 'bg-muted'
                      }`}
                    >
                      <MeterIndicator
                        className={
                          direction === 'up'
                            ? 'bg-emerald-500'
                            : direction === 'down'
                              ? 'bg-red-400'
                              : 'bg-muted-foreground/40'
                        }
                      />
                    </MeterTrack>
                  </MeterRoot>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats Grid

```tsx
import { Badge, BadgeDot } from '@lglab/compose-ui/badge'
import { CardContent, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'

type MiniStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  direction: 'up' | 'down' | 'flat'
  category: string
  dotClassName: string
  accentClassName: string
}

const stats: MiniStat[] = [
  {
    label: 'Revenue',
    value: 48200,
    valueFormat: 'currency',
    change: '+12.3%',
    direction: 'up',
    category: 'Finance',
    dotClassName: 'bg-emerald-500',
    accentClassName: 'border-l-emerald-500',
  },
  {
    label: 'Orders',
    value: 1283,
    valueFormat: 'number',
    change: '+4.1%',
    direction: 'up',
    category: 'Sales',
    dotClassName: 'bg-blue-500',
    accentClassName: 'border-l-blue-500',
  },
  {
    label: 'Conversion',
    value: 3.6,
    valueFormat: 'percent',
    change: '-0.4%',
    direction: 'down',
    category: 'Marketing',
    dotClassName: 'bg-violet-500',
    accentClassName: 'border-l-violet-500',
  },
  {
    label: 'Avg. Ticket',
    value: 37.58,
    valueFormat: 'currency',
    change: '+1.8%',
    direction: 'up',
    category: 'Sales',
    dotClassName: 'bg-amber-500',
    accentClassName: 'border-l-amber-500',
  },
  {
    label: 'Visitors',
    value: 34500,
    valueFormat: 'number',
    change: '0.0%',
    direction: 'flat',
    category: 'Traffic',
    dotClassName: 'bg-sky-500',
    accentClassName: 'border-l-sky-500',
  },
  {
    label: 'Churn',
    value: 1.9,
    valueFormat: 'percent',
    change: '-0.3%',
    direction: 'down',
    category: 'Retention',
    dotClassName: 'bg-rose-500',
    accentClassName: 'border-l-rose-500',
  },
]

const badgeConfig = {
  up: { variant: 'success' as const, prefix: '' },
  down: { variant: 'destructive' as const, prefix: '' },
  flat: { variant: 'secondary' as const, prefix: '' },
}

function formatValue(value: number, valueFormat: MiniStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

export default function StatsGridBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((stat) => {
          const config = badgeConfig[stat.direction]

          return (
            <CardRoot
              key={stat.label}
              className={`group border-l-2 transition-colors ${stat.accentClassName}`}
            >
              <CardContent className='p-4'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-sm font-normal text-muted-foreground'>
                    {stat.label}
                  </CardTitle>
                  <Badge variant='secondary' appearance='ghost' size='sm'>
                    <BadgeDot className={stat.dotClassName} />
                    {stat.category}
                  </Badge>
                </div>

                <Separator className='my-2.5' />

                <div className='flex items-end justify-between gap-2'>
                  <data
                    value={String(stat.value)}
                    className='text-lg font-semibold tracking-tight'
                  >
                    {formatValue(stat.value, stat.valueFormat)}
                  </data>
                  <Badge
                    variant={config.variant}
                    appearance='light'
                    size='sm'
                    shape='pill'
                    aria-label={`${stat.direction === 'up' ? 'Increased' : stat.direction === 'down' ? 'Decreased' : 'No change'} ${stat.change}`}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats Comparison

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'

type ComparisonStat = {
  label: string
  current: number
  previous: number
  valueFormat: 'currency' | 'number' | 'percent'
  currentPeriod: string
  previousPeriod: string
}

const stats: ComparisonStat[] = [
  {
    label: 'Revenue',
    current: 48250,
    previous: 42180,
    valueFormat: 'currency',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'New Customers',
    current: 186,
    previous: 215,
    valueFormat: 'number',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'Conversion Rate',
    current: 4.2,
    previous: 4.2,
    valueFormat: 'percent',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'Avg. Session Duration',
    current: 328,
    previous: 295,
    valueFormat: 'number',
    currentPeriod: 'This week',
    previousPeriod: 'Last week',
  },
]

function formatValue(value: number, valueFormat: ComparisonStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

function getChange(current: number, previous: number) {
  if (previous === 0) return { pct: 0, direction: 'flat' as const }
  const pct = ((current - previous) / previous) * 100
  const direction =
    pct > 0 ? ('up' as const) : pct < 0 ? ('down' as const) : ('flat' as const)
  return { pct, direction }
}

const directionConfig = {
  up: {
    icon: ArrowUp,
    badgeVariant: 'success' as const,
    label: 'Increased',
  },
  down: {
    icon: ArrowDown,
    badgeVariant: 'destructive' as const,
    label: 'Decreased',
  },
  flat: {
    icon: ArrowRight,
    badgeVariant: 'secondary' as const,
    label: 'No change',
  },
}

export default function StatsComparisonBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2'>
        {stats.map((stat) => {
          const { pct, direction } = getChange(stat.current, stat.previous)
          const config = directionConfig[direction]
          const Icon = config.icon
          const absPct = Math.abs(pct)
          const currentWins = stat.current > stat.previous
          const previousWins = stat.previous > stat.current

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader className='flex-row items-center justify-between'>
                <CardTitle className='text-sm font-normal text-muted-foreground'>
                  {stat.label}
                </CardTitle>
                <Badge
                  variant={config.badgeVariant}
                  appearance='light'
                  size='sm'
                  shape='pill'
                  aria-label={`${config.label} ${absPct.toFixed(1)}%`}
                >
                  <Icon
                    className='size-3 transition-transform duration-300 group-hover:scale-125'
                    aria-hidden='true'
                  />
                  {direction === 'flat' ? '0.0%' : `${absPct.toFixed(1)}%`}
                </Badge>
              </CardHeader>

              <CardContent>
                <div className='flex items-stretch gap-0'>
                  {/* Current period */}
                  <div
                    className={`flex-1 rounded-lg px-3 py-2.5 transition-colors duration-300 ${
                      currentWins
                        ? 'bg-success/8 group-hover:bg-success/12'
                        : 'bg-transparent'
                    }`}
                  >
                    <span className='mb-1 block text-xs text-muted-foreground'>
                      {stat.currentPeriod}
                    </span>
                    <data
                      value={String(stat.current)}
                      className='block text-xl font-semibold tracking-tight'
                    >
                      {formatValue(stat.current, stat.valueFormat)}
                    </data>
                  </div>

                  {/* Vertical divider */}
                  <div className='flex items-center px-2'>
                    <Separator orientation='vertical' className='h-10' />
                  </div>

                  {/* Previous period */}
                  <div
                    className={`flex-1 rounded-lg px-3 py-2.5 transition-colors duration-300 ${
                      previousWins
                        ? 'bg-success/8 group-hover:bg-success/12'
                        : 'bg-transparent'
                    }`}
                  >
                    <span className='mb-1 block text-xs text-muted-foreground'>
                      {stat.previousPeriod}
                    </span>
                    <data
                      value={String(stat.previous)}
                      className='text-xl font-semibold tracking-tight text-muted-foreground'
                    >
                      {formatValue(stat.previous, stat.valueFormat)}
                    </data>
                  </div>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
```

### Stats Banner

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, TrendingUp, Users, Wallet } from 'lucide-react'

type BannerStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const primary: BannerStat = {
  label: 'Monthly Recurring Revenue',
  value: 284930,
  valueFormat: 'currency',
  change: '+18.2%',
  icon: Wallet,
}

const secondary: BannerStat[] = [
  {
    label: 'Active Subscribers',
    value: 12847,
    valueFormat: 'number',
    change: '+6.3%',
    icon: Users,
  },
  {
    label: 'Net Revenue Retention',
    value: 108.4,
    valueFormat: 'percent',
    change: '+2.1%',
    icon: TrendingUp,
  },
  {
    label: 'Average Revenue Per User',
    value: 22.18,
    valueFormat: 'currency',
    change: '+11.5%',
    icon: ArrowUp,
  },
]

function formatValue(value: number, valueFormat: BannerStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

export default function StatsBannerBlock() {
  const PrimaryIcon = primary.icon

  return (
    <section className='w-full'>
      <CardRoot className='group relative overflow-hidden'>
        {/* Gradient accent line */}
        <span
          aria-hidden='true'
          className='absolute left-0 top-0 h-[2px] w-32 bg-primary transition-width duration-500 group-hover:w-full'
        />

        <CardContent className='pt-8 pb-6'>
          {/* Primary hero metric */}
          <div className='flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left'>
            <div
              className='flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15'
              aria-hidden='true'
            >
              <PrimaryIcon className='size-7 text-primary' />
            </div>

            <div className='space-y-1'>
              <p className='text-sm font-medium text-muted-foreground'>{primary.label}</p>
              <data
                value={String(primary.value)}
                className='block text-4xl font-bold tracking-tight'
              >
                {formatValue(primary.value, primary.valueFormat)}
              </data>
              <div className='flex items-center justify-center gap-2 pt-1 sm:justify-start'>
                <Badge
                  variant='success'
                  appearance='light'
                  size='sm'
                  shape='pill'
                  aria-label={`Increased ${primary.change}`}
                >
                  <ArrowUp className='size-3' aria-hidden='true' />
                  {primary.change}
                </Badge>
                <span className='text-xs text-muted-foreground'>vs last month</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Separator className='my-6' />

          {/* Secondary stats row */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            {secondary.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className='flex gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50'
                >
                  <div
                    className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'
                    aria-hidden='true'
                  >
                    <Icon className='size-4 text-muted-foreground' />
                  </div>
                  <div className='min-w-0'>
                    <p className='truncate text-xs text-muted-foreground'>{stat.label}</p>
                    <div className='flex items-baseline gap-2'>
                      <data
                        value={String(stat.value)}
                        className='text-lg font-semibold tracking-tight'
                      >
                        {formatValue(stat.value, stat.valueFormat)}
                      </data>
                      <Badge
                        variant='success'
                        appearance='light'
                        size='sm'
                        shape='pill'
                        aria-label={`Increased ${stat.change}`}
                      >
                        {stat.change}
                      </Badge>
                    </div>
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

