'use client'

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
              <CardTitle
                id='small-area-title'
                className='text-sm font-medium text-muted-foreground'
              >
                Daily Sessions
              </CardTitle>
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
                  <linearGradient id='smallAreaFill' x1='0' y1='0' x2='0' y2='1'>
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
                  fill='url(#smallAreaFill)'
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
