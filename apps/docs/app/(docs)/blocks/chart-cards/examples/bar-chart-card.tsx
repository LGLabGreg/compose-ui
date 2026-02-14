'use client'

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
import { ArrowUp, BarChart3 } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { month: 'Jan', electronics: 4200, clothing: 2800, home: 1800 },
  { month: 'Feb', electronics: 3900, clothing: 3100, home: 2100 },
  { month: 'Mar', electronics: 5300, clothing: 3400, home: 2400 },
  { month: 'Apr', electronics: 4800, clothing: 3700, home: 2200 },
  { month: 'May', electronics: 6100, clothing: 4200, home: 2900 },
  { month: 'Jun', electronics: 5700, clothing: 3900, home: 2600 },
  { month: 'Jul', electronics: 7200, clothing: 4800, home: 3300 },
  { month: 'Aug', electronics: 6800, clothing: 4500, home: 3100 },
  { month: 'Sep', electronics: 7900, clothing: 5100, home: 3600 },
  { month: 'Oct', electronics: 7400, clothing: 4700, home: 3400 },
  { month: 'Nov', electronics: 8800, clothing: 5600, home: 4100 },
  { month: 'Dec', electronics: 9500, clothing: 6200, home: 4800 },
]

const config: ChartConfig = {
  electronics: { label: 'Electronics', color: 'var(--color-violet-500)' },
  clothing: { label: 'Clothing', color: 'var(--color-sky-500)' },
  home: { label: 'Home & Garden', color: 'var(--color-amber-500)' },
}

const categories = [
  {
    key: 'electronics',
    label: 'Electronics',
    value: '$78.6K',
    rawValue: 78600,
    share: 47,
    color: 'bg-violet-500',
    lightColor: 'bg-violet-500/15',
  },
  {
    key: 'clothing',
    label: 'Clothing',
    value: '$52.0K',
    rawValue: 52000,
    share: 31,
    color: 'bg-sky-500',
    lightColor: 'bg-sky-500/15',
  },
  {
    key: 'home',
    label: 'Home & Garden',
    value: '$36.3K',
    rawValue: 36300,
    share: 22,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-500/15',
  },
]

export default function BarChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='bar-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='bar-chart-card-title' className='flex items-center gap-2'>
                <BarChart3 className='size-4 text-primary' aria-hidden='true' />
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
          {/* Side-by-side: chart left, category breakdown right */}
          <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
            {/* Chart area — takes 2/3 */}
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
                  <Tooltip content={<ChartTooltipContent indicator='dot' />} />
                  <Bar
                    dataKey='electronics'
                    fill='var(--color-electronics)'
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey='clothing'
                    fill='var(--color-clothing)'
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey='home' fill='var(--color-home)' radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartRoot>
            </div>

            {/* Category breakdown — takes 1/3 */}
            <div
              className='flex flex-col justify-center gap-5 lg:w-56 lg:shrink-0'
              role='group'
              aria-label='Category breakdown'
            >
              <div className='space-y-1'>
                <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                  Total Revenue
                </p>
                <data value={166900} className='text-2xl font-bold tracking-tight'>
                  $166.9K
                </data>
              </div>

              <Separator />

              <div className='space-y-4'>
                {categories.map((cat) => (
                  <div key={cat.key} className='space-y-1.5'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${cat.color}`}
                          aria-hidden='true'
                        />
                        <span className='text-sm font-medium'>{cat.label}</span>
                      </div>
                      <data
                        value={cat.rawValue}
                        className='text-sm font-semibold tabular-nums'
                      >
                        {cat.value}
                      </data>
                    </div>
                    {/* Share meter */}
                    <div className='flex items-center gap-2'>
                      <MeterRoot
                        value={cat.share}
                        aria-label={`${cat.label} revenue share`}
                        animated
                      >
                        <MeterTrack className={`h-1.5 ${cat.lightColor}`}>
                          <MeterIndicator className={cat.color} />
                        </MeterTrack>
                      </MeterRoot>
                      <span className='text-xs tabular-nums text-muted-foreground w-8 text-right'>
                        {cat.share}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
