'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot } from '@lglab/compose-ui/card'

type StatTrend = {
  label: string
  value: string
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  accentClassName: string
}

const stats: StatTrend[] = [
  {
    label: 'Total Revenue',
    value: '$128,430',
    change: '+12.4%',
    comparedTo: 'vs last month',
    badgeVariant: 'success',
    accentClassName: 'bg-success',
  },
  {
    label: 'Churn Rate',
    value: '2.3%',
    change: '-0.6%',
    comparedTo: 'vs last month',
    badgeVariant: 'destructive',
    accentClassName: 'bg-destructive',
  },
  {
    label: 'Avg. Deal Size',
    value: '$3,820',
    change: '0.0%',
    comparedTo: 'vs last month',
    badgeVariant: 'secondary',
    accentClassName: 'bg-primary',
  },
]

export default function SimpleStatsBlock() {
  return (
    <section className='w-full' aria-label='Simple statistics overview'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => (
          <CardRoot
            key={stat.label}
            className='group relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5'
          >
            <span
              aria-hidden='true'
              className={`absolute left-0 top-0 h-0.5 w-14 transition-all duration-300 group-hover:w-full ${stat.accentClassName}`}
            />

            <CardHeader className='pb-2 text-sm text-muted-foreground'>
              {stat.label}
            </CardHeader>

            <CardContent className='space-y-3'>
              <p className='text-2xl font-semibold tracking-tight'>{stat.value}</p>
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
