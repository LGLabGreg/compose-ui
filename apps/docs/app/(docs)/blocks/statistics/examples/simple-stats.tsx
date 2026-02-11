'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'

type StatTrend = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  accentClassName: string
}

const stats: StatTrend[] = [
  {
    label: 'Total Revenue',
    value: 128430,
    valueFormat: 'currency',
    change: '+12.4%',
    comparedTo: 'vs last month',
    badgeVariant: 'success',
    accentClassName: 'bg-success',
  },
  {
    label: 'Churn Rate',
    value: 2.3,
    valueFormat: 'percent',
    change: '-0.6%',
    comparedTo: 'vs last month',
    badgeVariant: 'destructive',
    accentClassName: 'bg-destructive',
  },
  {
    label: 'Avg. Deal Size',
    value: 3820,
    valueFormat: 'currency',
    change: '0.0%',
    comparedTo: 'vs last month',
    badgeVariant: 'secondary',
    accentClassName: 'bg-primary',
  },
]

function formatValue(value: number, valueFormat: StatTrend['valueFormat']) {
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

export default function SimpleStatsBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => (
          <CardRoot key={stat.label} className='group relative overflow-hidden'>
            <span
              aria-hidden='true'
              className={`absolute left-0 top-0 h-px w-14 transition-all duration-300 group-hover:w-full ${stat.accentClassName}`}
            />

            <CardHeader>
              <CardTitle className='text-sm font-normal text-muted-foreground'>
                {stat.label}
              </CardTitle>
            </CardHeader>

            <CardContent className='space-y-3'>
              <data
                value={String(stat.value)}
                className='block text-2xl font-semibold tracking-tight'
              >
                {formatValue(stat.value, stat.valueFormat)}
              </data>
              <div className='flex items-center justify-between gap-3'>
                <Badge
                  variant={stat.badgeVariant}
                  appearance='light'
                  size='sm'
                  shape='pill'
                >
                  {stat.change}
                </Badge>
                <p className='text-xs text-muted-foreground'>{stat.comparedTo}</p>
              </div>
            </CardContent>
          </CardRoot>
        ))}
      </div>
    </section>
  )
}
