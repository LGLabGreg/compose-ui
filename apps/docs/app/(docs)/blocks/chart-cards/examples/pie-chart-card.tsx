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
import { ArrowUp, PieChartIcon } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const sources = [
  {
    key: 'direct',
    label: 'Direct',
    visitors: 42800,
    chartColor: 'var(--color-teal-600)',
    bgColor: 'bg-teal-600',
    bgLight: 'bg-teal-600/15',
  },
  {
    key: 'organic',
    label: 'Organic Search',
    visitors: 31200,
    chartColor: 'var(--color-amber-600)',
    bgColor: 'bg-amber-600',
    bgLight: 'bg-amber-600/15',
  },
  {
    key: 'social',
    label: 'Social Media',
    visitors: 18600,
    chartColor: 'var(--color-purple-600)',
    bgColor: 'bg-purple-600',
    bgLight: 'bg-purple-600/15',
  },
  {
    key: 'referral',
    label: 'Referral',
    visitors: 12400,
    chartColor: 'var(--color-cyan-600)',
    bgColor: 'bg-cyan-600',
    bgLight: 'bg-cyan-600/15',
  },
] as const

const total = sources.reduce((sum, s) => sum + s.visitors, 0)

const pieData = sources.map((s) => ({
  source: s.key,
  visitors: s.visitors,
  fill: `var(--color-${s.key})`,
}))

const config: ChartConfig = Object.fromEntries(
  sources.map((s) => [s.key, { label: s.label, color: s.chartColor }]),
)

const formatCompact = (v: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(v)

export default function PieChartCardBlock() {
  return (
    <section className='w-full' aria-labelledby='pie-chart-card-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='pie-chart-card-title' className='flex items-center gap-2'>
                <PieChartIcon className='size-4' aria-hidden='true' />
                Traffic Sources
              </CardTitle>
              <CardDescription>
                Visitor distribution by acquisition channel
              </CardDescription>
            </div>
            <Badge
              variant='success'
              appearance='light'
              size='sm'
              shape='pill'
              aria-label='Total traffic increased 15.2% year over year'
            >
              <ArrowUp className='size-3' aria-hidden='true' />
              +15.2% YoY
            </Badge>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='pt-6'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center'>
            {/* Donut chart with center metric */}
            <div className='mx-auto lg:mx-0'>
              <ChartRoot config={config} className='h-[220px] w-[220px]'>
                <PieChart>
                  <Tooltip
                    content={
                      <ChartTooltipContent hideLabel nameKey='source' indicator='dot' />
                    }
                  />
                  <Pie
                    data={pieData}
                    dataKey='visitors'
                    nameKey='source'
                    innerRadius={70}
                    outerRadius={100}
                    strokeWidth={0}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor='middle'
                              dominantBaseline='middle'
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) - 8}
                                className='fill-foreground text-2xl font-bold'
                              >
                                {formatCompact(total)}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) + 12}
                                className='fill-muted-foreground text-xs'
                              >
                                visitors
                              </tspan>
                            </text>
                          )
                        }
                        return null
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartRoot>
            </div>

            {/* Legend with share meters */}
            <div
              role='group'
              aria-label='Traffic source breakdown'
              className='flex-1 space-y-3'
            >
              {sources.map((s) => {
                const share = Math.round((s.visitors / total) * 100)
                return (
                  <div
                    key={s.key}
                    className='rounded-lg px-3 py-2 transition-colors hover:bg-muted/50'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${s.bgColor}`}
                          aria-hidden='true'
                        />
                        <span className='text-sm font-medium'>{s.label}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <data
                          value={s.visitors}
                          className='text-sm font-semibold tabular-nums'
                        >
                          {formatCompact(s.visitors)}
                        </data>
                        <span
                          className='w-8 text-right text-xs tabular-nums text-muted-foreground'
                          aria-label={`${s.label} share: ${share}%`}
                        >
                          {share}%
                        </span>
                      </div>
                    </div>
                    <div className='mt-1.5'>
                      <MeterRoot
                        value={share}
                        aria-label={`${s.label} traffic share`}
                        animated
                      >
                        <MeterTrack className={`h-1.5 ${s.bgLight}`}>
                          <MeterIndicator className={s.bgColor} />
                        </MeterTrack>
                      </MeterRoot>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
