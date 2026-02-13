'use client'

import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressTrack,
} from '@lglab/compose-ui/progress'

type ProgressStat = {
  label: string
  current: number
  target: number
  unit: string
  progressColor: string
  trackColor: string
}

const stats: ProgressStat[] = [
  {
    label: 'Monthly Revenue',
    current: 84200,
    target: 100000,
    unit: 'currency',
    progressColor: 'bg-emerald-500',
    trackColor: 'bg-emerald-500/15',
  },
  {
    label: 'New Customers',
    current: 312,
    target: 500,
    unit: 'number',
    progressColor: 'bg-blue-500',
    trackColor: 'bg-blue-500/15',
  },
  {
    label: 'Support Tickets Resolved',
    current: 189,
    target: 200,
    unit: 'number',
    progressColor: 'bg-violet-500',
    trackColor: 'bg-violet-500/15',
  },
]

function formatValue(value: number, unit: string) {
  if (unit === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  if (unit === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

function getPercentage(current: number, target: number) {
  return Math.min(Math.round((current / target) * 100), 100)
}

export default function StatsWithProgressBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => {
          const pct = getPercentage(stat.current, stat.target)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader>
                <CardTitle className='text-sm font-normal text-muted-foreground'>
                  {stat.label}
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='flex items-baseline justify-between gap-2'>
                  <data
                    value={String(stat.current)}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {formatValue(stat.current, stat.unit)}
                  </data>
                  <span className='text-xs text-muted-foreground'>
                    / {formatValue(stat.target, stat.unit)}
                  </span>
                </div>

                <ProgressRoot value={pct} aria-label={`${stat.label} progress`}>
                  <ProgressTrack className={`h-2 ${stat.trackColor}`}>
                    <ProgressIndicator
                      className={`${stat.progressColor} transition-all duration-1000 ease-out`}
                    />
                  </ProgressTrack>
                </ProgressRoot>

                <div className='flex items-center justify-between'>
                  <span className='text-xs font-medium text-muted-foreground'>
                    {pct}% of target
                  </span>
                  {pct >= 90 && (
                    <span className='text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      Almost there
                    </span>
                  )}
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
