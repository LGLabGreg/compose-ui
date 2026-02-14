'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const categories = [
  {
    key: 'documents',
    label: 'Documents',
    size: 4.5,
    chartColor: 'var(--color-cyan-600)',
    bgColor: 'bg-cyan-600',
    bgLight: 'bg-cyan-600/15',
  },
  {
    key: 'media',
    label: 'Media',
    size: 2.8,
    chartColor: 'var(--color-amber-500)',
    bgColor: 'bg-amber-500',
    bgLight: 'bg-amber-500/15',
  },
  {
    key: 'projects',
    label: 'Projects',
    size: 1.8,
    chartColor: 'var(--color-teal-500)',
    bgColor: 'bg-teal-500',
    bgLight: 'bg-teal-500/15',
  },
  {
    key: 'other',
    label: 'Other',
    size: 0.9,
    chartColor: 'var(--color-zinc-400)',
    bgColor: 'bg-zinc-400',
    bgLight: 'bg-zinc-400/15',
  },
] as const

const total = categories.reduce((sum, c) => sum + c.size, 0)

const pieData = categories.map((c) => ({
  name: c.key,
  value: c.size,
  fill: `var(--color-${c.key})`,
}))

const config: ChartConfig = Object.fromEntries(
  categories.map((c) => [c.key, { label: c.label, color: c.chartColor }]),
)

export default function SmallPieChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-pie-title'>
        <CardRoot>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-pie-title'>Storage Usage</CardTitle>
              <Badge
                variant='warning'
                appearance='outline'
                size='sm'
                shape='pill'
                aria-label='Storage usage increased 8.2% from last month'
              >
                <ArrowUp className='size-3' aria-hidden='true' />
                +8.2%
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <div className='flex flex-col items-center gap-4'>
              <div className='shrink-0'>
                <ChartRoot config={config} className='h-[180px] w-[180px]'>
                  <PieChart>
                    <Tooltip
                      content={
                        <ChartTooltipContent
                          hideLabel
                          formatter={(value) => `${value} GB`}
                        />
                      }
                    />
                    <Pie
                      data={pieData}
                      dataKey='value'
                      nameKey='name'
                      innerRadius={54}
                      outerRadius={80}
                      strokeWidth={0}
                      paddingAngle={2}
                    >
                      <Label
                        className='fill-foreground text-2xl font-medium'
                        position='center'
                      >{`${total.toFixed(0)}GB`}</Label>
                    </Pie>
                  </PieChart>
                </ChartRoot>
              </div>

              <div
                role='group'
                aria-label='Storage breakdown by category'
                className='w-full space-y-1 mb-2'
              >
                {categories.map((c) => {
                  const share = Math.round((c.size / total) * 100)
                  return (
                    <MeterRoot
                      key={c.key}
                      value={share}
                      aria-label={`${c.label} storage share`}
                      animated
                      className='rounded-md px-2 py-1.5'
                    >
                      <div className='flex items-center justify-between gap-2 mb-1.5'>
                        <MeterLabel>{c.label}</MeterLabel>
                        <MeterValue className='font-semibold tabular-nums'>
                          {(value) => `${value}`}
                        </MeterValue>
                      </div>
                      <MeterTrack className={`h-1.5 ${c.bgLight}`}>
                        <MeterIndicator className={c.bgColor} />
                      </MeterTrack>
                    </MeterRoot>
                  )
                })}
              </div>
            </div>

            <Separator className='my-2' />
            <Button variant='ghost' size='sm' className='ml-auto flex'>
              Manage storage
              <ArrowRight className='size-3.5' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
