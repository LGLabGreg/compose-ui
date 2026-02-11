'use client'

import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { ProgressCircle, ProgressRoot } from '@lglab/compose-ui/progress'

type RingStat = {
  label: string
  value: number
  target: number
  color: string
  trackColor: string
}

const stats: RingStat[] = [
  {
    label: 'Revenue Goal',
    value: 84,
    target: 100,
    color: 'stroke-emerald-500',
    trackColor: 'stroke-emerald-500/15',
  },
  {
    label: 'New Users',
    value: 62,
    target: 100,
    color: 'stroke-blue-500',
    trackColor: 'stroke-blue-500/15',
  },
  {
    label: 'Retention',
    value: 91,
    target: 100,
    color: 'stroke-violet-500',
    trackColor: 'stroke-violet-500/15',
  },
  {
    label: 'Support SLA',
    value: 47,
    target: 100,
    color: 'stroke-amber-500',
    trackColor: 'stroke-amber-500/15',
  },
]

function getStatusLabel(value: number) {
  if (value >= 90)
    return { text: 'Excellent', className: 'text-emerald-600 dark:text-emerald-400' }
  if (value >= 70)
    return { text: 'On Track', className: 'text-blue-600 dark:text-blue-400' }
  if (value >= 50)
    return { text: 'In Progress', className: 'text-amber-600 dark:text-amber-400' }
  return { text: 'Needs Attention', className: 'text-red-600 dark:text-red-400' }
}

export default function StatsRingBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => {
          const status = getStatusLabel(stat.value)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardContent className='flex flex-col items-center gap-3 pt-6'>
                <ProgressRoot
                  className='w-auto'
                  value={stat.value}
                  aria-label={`${stat.label} progress`}
                >
                  <ProgressCircle
                    value={stat.value}
                    size={100}
                    strokeWidth={8}
                    className={stat.color}
                    trackClassName={stat.trackColor}
                  >
                    <data
                      value={String(stat.value)}
                      className='text-xl font-semibold tracking-tight'
                    >
                      {stat.value}%
                    </data>
                  </ProgressCircle>
                </ProgressRoot>

                <div className='flex flex-col items-center gap-0.5'>
                  <h3 className='text-sm font-medium text-foreground'>{stat.label}</h3>
                  <span className={`text-xs font-medium ${status.className}`}>
                    {status.text}
                  </span>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
