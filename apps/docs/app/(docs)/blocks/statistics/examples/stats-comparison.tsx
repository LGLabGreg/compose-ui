'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'

type ComparisonStat = {
  label: string
  current: number
  previous: number
  valueFormat: 'currency' | 'number' | 'percent'
  currentPeriod: string
  previousPeriod: string
}

const stats: ComparisonStat[] = [
  {
    label: 'Revenue',
    current: 48250,
    previous: 42180,
    valueFormat: 'currency',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'New Customers',
    current: 186,
    previous: 215,
    valueFormat: 'number',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'Conversion Rate',
    current: 4.2,
    previous: 4.2,
    valueFormat: 'percent',
    currentPeriod: 'This month',
    previousPeriod: 'Last month',
  },
  {
    label: 'Avg. Session Duration',
    current: 328,
    previous: 295,
    valueFormat: 'number',
    currentPeriod: 'This week',
    previousPeriod: 'Last week',
  },
]

function formatValue(value: number, valueFormat: ComparisonStat['valueFormat']) {
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
    label: 'Increased',
  },
  down: {
    icon: ArrowDown,
    badgeVariant: 'destructive' as const,
    label: 'Decreased',
  },
  flat: {
    icon: ArrowRight,
    badgeVariant: 'secondary' as const,
    label: 'No change',
  },
}

export default function StatsComparisonBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2'>
        {stats.map((stat) => {
          const { pct, direction } = getChange(stat.current, stat.previous)
          const config = directionConfig[direction]
          const Icon = config.icon
          const absPct = Math.abs(pct)
          const currentWins = stat.current > stat.previous
          const previousWins = stat.previous > stat.current

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
                  aria-label={`${config.label} ${absPct.toFixed(1)}%`}
                >
                  <Icon
                    className='size-3 transition-transform duration-300 group-hover:scale-125'
                    aria-hidden='true'
                  />
                  {direction === 'flat' ? '0.0%' : `${absPct.toFixed(1)}%`}
                </Badge>
              </CardHeader>

              <CardContent>
                <div className='flex items-stretch gap-0'>
                  {/* Current period */}
                  <div
                    className={`flex-1 rounded-lg px-3 py-2.5 transition-colors duration-300 ${
                      currentWins
                        ? 'bg-success/8 group-hover:bg-success/12'
                        : 'bg-transparent'
                    }`}
                  >
                    <span className='mb-1 block text-xs text-muted-foreground'>
                      {stat.currentPeriod}
                    </span>
                    <data
                      value={String(stat.current)}
                      className='block text-xl font-semibold tracking-tight'
                    >
                      {formatValue(stat.current, stat.valueFormat)}
                    </data>
                  </div>

                  {/* Vertical divider */}
                  <div className='flex items-center px-2'>
                    <Separator orientation='vertical' className='h-10' />
                  </div>

                  {/* Previous period */}
                  <div
                    className={`flex-1 rounded-lg px-3 py-2.5 transition-colors duration-300 ${
                      previousWins
                        ? 'bg-success/8 group-hover:bg-success/12'
                        : 'bg-transparent'
                    }`}
                  >
                    <span className='mb-1 block text-xs text-muted-foreground'>
                      {stat.previousPeriod}
                    </span>
                    <data
                      value={String(stat.previous)}
                      className='text-xl font-semibold tracking-tight text-muted-foreground'
                    >
                      {formatValue(stat.previous, stat.valueFormat)}
                    </data>
                  </div>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
