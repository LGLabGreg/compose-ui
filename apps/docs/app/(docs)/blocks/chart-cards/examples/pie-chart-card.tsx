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

const data = [
  { source: 'direct', visitors: 42800, fill: 'var(--color-direct)' },
  { source: 'organic', visitors: 31200, fill: 'var(--color-organic)' },
  { source: 'social', visitors: 18600, fill: 'var(--color-social)' },
  { source: 'referral', visitors: 12400, fill: 'var(--color-referral)' },
]

const config: ChartConfig = {
  direct: { label: 'Direct', color: 'var(--color-teal-600)' },
  organic: { label: 'Organic Search', color: 'var(--color-amber-600)' },
  social: { label: 'Social Media', color: 'var(--color-rose-600)' },
  referral: { label: 'Referral', color: 'var(--color-cyan-600)' },
}

const total = data.reduce((sum, d) => sum + d.visitors, 0)

const categories = data.map((d) => ({
  key: d.source,
  label: config[d.source].label,
  value: d.visitors,
  share: Math.round((d.visitors / total) * 100),
  color: `bg-${d.source === 'direct' ? 'teal' : d.source === 'organic' ? 'amber' : d.source === 'social' ? 'violet' : d.source === 'referral' ? 'cyan' : 'rose'}-600`,
  lightColor: `bg-${d.source === 'direct' ? 'teal' : d.source === 'organic' ? 'amber' : d.source === 'social' ? 'violet' : d.source === 'referral' ? 'cyan' : 'rose'}-600/15`,
}))

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
                    data={data}
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
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className='rounded-lg px-3 py-2 transition-colors hover:bg-muted/50'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`size-2.5 shrink-0 rounded-full ${cat.color}`}
                        aria-hidden='true'
                      />
                      <span className='text-sm font-medium'>{cat.label}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <data
                        value={cat.value}
                        className='text-sm font-semibold tabular-nums'
                      >
                        {formatCompact(cat.value)}
                      </data>
                      <span
                        className='text-xs tabular-nums text-muted-foreground w-8 text-right'
                        aria-label={`${cat.label} share: ${cat.share}%`}
                      >
                        {cat.share}%
                      </span>
                    </div>
                  </div>
                  <div className='mt-1.5'>
                    <MeterRoot
                      value={cat.share}
                      aria-label={`${cat.label} traffic share`}
                      animated
                    >
                      <MeterTrack className={`h-1.5 ${cat.lightColor}`}>
                        <MeterIndicator className={cat.color} />
                      </MeterTrack>
                    </MeterRoot>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
