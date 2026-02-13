'use client'

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
