'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { ArrowDown, ArrowUp, BarChart3 } from 'lucide-react'
import { Area, AreaChart, Tooltip } from 'recharts'

const metrics = [
  {
    label: 'Revenue',
    value: '$48.2K',
    rawValue: 48200,
    change: 12.5,
    sparkline: [3200, 3800, 3500, 4100, 4600, 4200, 4800, 5100, 4900, 5400, 5200, 5600],
    color: 'var(--color-teal-600)',
    configKey: 'revenue',
  },
  {
    label: 'Orders',
    value: '1,284',
    rawValue: 1284,
    change: 8.3,
    sparkline: [85, 92, 88, 105, 98, 110, 102, 115, 108, 120, 112, 125],
    color: 'var(--color-amber-600)',
    configKey: 'orders',
  },
  {
    label: 'New Customers',
    value: '342',
    rawValue: 342,
    change: -3.2,
    sparkline: [38, 35, 32, 28, 30, 27, 31, 29, 26, 28, 25, 27],
    color: 'var(--color-cyan-600)',
    configKey: 'customers',
  },
  {
    label: 'Avg. Order Value',
    value: '$37.54',
    rawValue: 37.54,
    change: 4.1,
    sparkline: [32, 33, 35, 34, 36, 35, 37, 36, 38, 37, 38, 39],
    color: 'var(--color-purple-600)',
    configKey: 'aov',
  },
]

function Sparkline({
  data,
  color,
  gradientId,
}: {
  data: { i: number; v: number }[]
  color: string
  gradientId: string
}) {
  const config: ChartConfig = { v: { label: '', color } }

  return (
    <ChartRoot config={config} className='h-[32px] w-full'>
      <AreaChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <defs>
          <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor={color} stopOpacity={0.25} />
            <stop offset='100%' stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Tooltip content={<ChartTooltipContent hideLabel indicator='line' />} />
        <Area
          dataKey='v'
          type='monotone'
          fill={`url(#${gradientId})`}
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0 }}
        />
      </AreaChart>
    </ChartRoot>
  )
}

export default function SparklineRowBlock() {
  return (
    <section className='w-full' aria-labelledby='sparkline-row-title'>
      <CardRoot>
        <CardHeader className='pb-0'>
          <CardTitle id='sparkline-row-title' className='flex items-center gap-2'>
            <BarChart3 className='size-4' aria-hidden='true' />
            Key Metrics
          </CardTitle>
        </CardHeader>

        <div className='divide-y px-6 pb-2'>
          {metrics.map((metric) => {
            const isPositive = metric.change >= 0
            const sparkData = metric.sparkline.map((v, i) => ({ i, v }))

            return (
              <div
                key={metric.configKey}
                role='group'
                aria-label={metric.label}
                className='py-3'
              >
                <div className='flex items-center gap-4'>
                  <span className='w-28 shrink-0 text-sm text-muted-foreground sm:w-32'>
                    {metric.label}
                  </span>

                  <data
                    value={metric.rawValue}
                    className='w-20 shrink-0 text-sm font-semibold tabular-nums sm:w-24'
                  >
                    {metric.value}
                  </data>

                  <Badge
                    variant={isPositive ? 'success' : 'destructive'}
                    appearance='light'
                    size='sm'
                    shape='pill'
                    className='w-20 shrink-0 justify-center'
                    aria-label={`${metric.label} ${isPositive ? 'increased' : 'decreased'} ${Math.abs(metric.change)}%`}
                  >
                    {isPositive ? (
                      <ArrowUp className='size-3' aria-hidden='true' />
                    ) : (
                      <ArrowDown className='size-3' aria-hidden='true' />
                    )}
                    {isPositive ? '+' : ''}
                    {metric.change}%
                  </Badge>

                  <div className='hidden flex-1 sm:block'>
                    <Sparkline
                      data={sparkData}
                      color={metric.color}
                      gradientId={`fill-${metric.configKey}`}
                    />
                  </div>
                </div>

                <div className='mt-2 sm:hidden'>
                  <Sparkline
                    data={sparkData}
                    color={metric.color}
                    gradientId={`fill-${metric.configKey}-mobile`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardRoot>
    </section>
  )
}
