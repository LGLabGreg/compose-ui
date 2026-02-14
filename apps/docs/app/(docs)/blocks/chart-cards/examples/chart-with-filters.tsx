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
