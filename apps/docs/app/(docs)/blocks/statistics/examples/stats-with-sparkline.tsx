'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Area, AreaChart, Tooltip } from 'recharts'

type SparklineStat = {
  label: string
  value: string
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
    value: '$35,600',
    change: '+14.2%',
    comparedTo: 'vs last week',
    badgeVariant: 'success',
    dataKey: 'revenue',
    color: 'var(--color-emerald-500)',
    fillId: 'fillRevenue',
  },
  {
    label: 'Active Sessions',
    value: '7,180',
    change: '-9.8%',
    comparedTo: 'vs last week',
    badgeVariant: 'destructive',
    dataKey: 'sessions',
    color: 'var(--color-red-500)',
    fillId: 'fillSessions',
  },
  {
    label: 'Conversion Rate',
    value: '3.5%',
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

function SparklineCard({ stat }: { stat: SparklineStat }) {
  const config: ChartConfig = {
    [stat.dataKey]: { label: stat.label, color: stat.color },
  }

  return (
    <CardRoot className='group'>
      <CardHeader className='flex flex-row items-center justify-between text-sm text-muted-foreground'>
        {stat.label}
        <Badge variant={stat.badgeVariant} appearance='light' size='sm' shape='pill'>
          {stat.change}
        </Badge>
      </CardHeader>

      <CardContent className='space-y-2'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold tracking-tight leading-none'>
            {stat.value}
          </span>
          <span className='text-xs text-muted-foreground'>{stat.comparedTo}</span>
        </div>
      </CardContent>

      <ChartRoot config={config} className='h-[48px] w-full'>
        <AreaChart
          data={chartDataMap[stat.dataKey]}
          margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
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
    <section className='w-full' aria-label='Statistics with sparkline charts'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => (
          <SparklineCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
