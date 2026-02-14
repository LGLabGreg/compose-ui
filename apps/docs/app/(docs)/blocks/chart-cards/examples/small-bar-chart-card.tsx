'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Bar, BarChart, Tooltip, XAxis } from 'recharts'

const data = [
  { hour: '00', visitors: 42 },
  { hour: '02', visitors: 18 },
  { hour: '04', visitors: 12 },
  { hour: '06', visitors: 68 },
  { hour: '08', visitors: 245 },
  { hour: '10', visitors: 398 },
  { hour: '12', visitors: 470 },
  { hour: '14', visitors: 412 },
  { hour: '16', visitors: 358 },
  { hour: '18', visitors: 290 },
  { hour: '20', visitors: 185 },
  { hour: '22', visitors: 81 },
]

const config: ChartConfig = {
  visitors: { label: 'Visitors', color: 'var(--color-cyan-600)' },
}

export default function MiniBarChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <CardRoot>
        <CardHeader className='pb-2'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              Hourly Traffic
            </CardTitle>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Traffic increased 2.45%'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +2.45%
            </Badge>
          </div>
          <div className='flex items-baseline gap-1.5'>
            <data value={2579} className='text-3xl font-bold tracking-tight'>
              2,579
            </data>
            <span className='text-sm text-muted-foreground'>Visitors</span>
          </div>
        </CardHeader>

        <CardContent className='pb-2'>
          <ChartRoot config={config} className='h-[120px] w-full'>
            <BarChart data={data} accessibilityLayer>
              <Tooltip content={<ChartTooltipContent hideLabel />} />
              <XAxis dataKey='hour' tickLine={false} axisLine={false} tickMargin={4} />
              <Bar
                dataKey='visitors'
                fill='var(--color-visitors)'
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartRoot>
          <Separator className='mb-2' />
          <Button variant='ghost' size='sm' className='flex ml-auto'>
            View full report
            <ArrowRight className='size-3' />
          </Button>
        </CardContent>
      </CardRoot>
    </div>
  )
}
