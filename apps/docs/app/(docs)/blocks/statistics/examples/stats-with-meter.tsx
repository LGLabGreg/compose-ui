'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
import { Separator } from '@lglab/compose-ui/separator'

type MeterStat = {
  label: string
  current: number
  max: number
  unit: string
}

const stats: MeterStat[] = [
  { label: 'CPU Usage', current: 78, max: 100, unit: '%' },
  { label: 'Memory', current: 14.8, max: 16, unit: 'GB' },
  { label: 'Storage', current: 287, max: 500, unit: 'GB' },
]

function getUtilization(current: number, max: number) {
  return Math.round((current / max) * 100)
}

function getStatusConfig(utilization: number) {
  if (utilization >= 90) {
    return {
      indicator: 'bg-red-500',
      track: 'bg-red-500/15',
      badge: 'destructive' as const,
      badgeLabel: 'Critical',
    }
  }
  if (utilization >= 75) {
    return {
      indicator: 'bg-amber-500',
      track: 'bg-amber-500/15',
      badge: 'warning' as const,
      badgeLabel: 'Warning',
    }
  }
  return {
    indicator: 'bg-emerald-500',
    track: 'bg-emerald-500/15',
    badge: 'success' as const,
    badgeLabel: 'Healthy',
  }
}

function formatValue(value: number, unit: string) {
  if (unit === '%') return `${value}%`
  return `${value % 1 === 0 ? value : value.toFixed(1)} ${unit}`
}

export default function StatsWithMeterBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((stat) => {
          const utilization = getUtilization(stat.current, stat.max)
          const status = getStatusConfig(utilization)

          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-sm font-normal text-muted-foreground'>
                    {stat.label}
                  </CardTitle>
                  <Badge
                    variant={status.badge}
                    appearance='outline'
                    size='sm'
                    aria-label={`${stat.label}: ${status.badgeLabel}`}
                  >
                    {status.badgeLabel}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='flex items-baseline gap-1'>
                  <data
                    value={String(utilization)}
                    className='text-2xl font-semibold tracking-tight'
                  >
                    {utilization}%
                  </data>
                  <span className='text-xs text-muted-foreground'>utilized</span>
                </div>

                <MeterRoot
                  value={utilization}
                  aria-label={`${stat.label} utilization`}
                  animated
                >
                  <MeterTrack
                    className={`h-2.5 ${status.track} transition-colors duration-500`}
                  >
                    <MeterIndicator
                      className={`${status.indicator} transition-all duration-1000 ease-out`}
                    />
                  </MeterTrack>
                </MeterRoot>

                <Separator />

                <div className='flex items-center justify-between text-xs text-muted-foreground'>
                  <span>
                    <data
                      value={String(stat.current)}
                      className='font-medium text-foreground'
                    >
                      {formatValue(stat.current, stat.unit)}
                    </data>{' '}
                    used
                  </span>
                  <span>{formatValue(stat.max, stat.unit)} total</span>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
