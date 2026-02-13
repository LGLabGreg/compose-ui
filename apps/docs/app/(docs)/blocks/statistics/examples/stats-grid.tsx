'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'
import { CardContent, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'

type MiniStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  direction: 'up' | 'down' | 'flat'
  category: string
  dotClassName: string
  accentClassName: string
}

const stats: MiniStat[] = [
  {
    label: 'Revenue',
    value: 48200,
    valueFormat: 'currency',
    change: '+12.3%',
    direction: 'up',
    category: 'Finance',
    dotClassName: 'bg-emerald-500',
    accentClassName: 'border-l-emerald-500',
  },
  {
    label: 'Orders',
    value: 1283,
    valueFormat: 'number',
    change: '+4.1%',
    direction: 'up',
    category: 'Sales',
    dotClassName: 'bg-blue-500',
    accentClassName: 'border-l-blue-500',
  },
  {
    label: 'Conversion',
    value: 3.6,
    valueFormat: 'percent',
    change: '-0.4%',
    direction: 'down',
    category: 'Marketing',
    dotClassName: 'bg-violet-500',
    accentClassName: 'border-l-violet-500',
  },
  {
    label: 'Avg. Ticket',
    value: 37.58,
    valueFormat: 'currency',
    change: '+1.8%',
    direction: 'up',
    category: 'Sales',
    dotClassName: 'bg-amber-500',
    accentClassName: 'border-l-amber-500',
  },
  {
    label: 'Visitors',
    value: 34500,
    valueFormat: 'number',
    change: '0.0%',
    direction: 'flat',
    category: 'Traffic',
    dotClassName: 'bg-sky-500',
    accentClassName: 'border-l-sky-500',
  },
  {
    label: 'Churn',
    value: 1.9,
    valueFormat: 'percent',
    change: '-0.3%',
    direction: 'down',
    category: 'Retention',
    dotClassName: 'bg-rose-500',
    accentClassName: 'border-l-rose-500',
  },
]

const badgeConfig = {
  up: { variant: 'success' as const, prefix: '' },
  down: { variant: 'destructive' as const, prefix: '' },
  flat: { variant: 'secondary' as const, prefix: '' },
}

function formatValue(value: number, valueFormat: MiniStat['valueFormat']) {
  if (valueFormat === 'currency') {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    })
  }

  if (valueFormat === 'percent') {
    return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
  }

  return value.toLocaleString()
}

export default function StatsGridBlock() {
  return (
    <section className='w-full'>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((stat) => {
          const config = badgeConfig[stat.direction]

          return (
            <CardRoot
              key={stat.label}
              className={`group border-l-2 transition-colors ${stat.accentClassName}`}
            >
              <CardContent className='p-4'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-sm font-normal text-muted-foreground'>
                    {stat.label}
                  </CardTitle>
                  <Badge variant='secondary' appearance='ghost' size='sm'>
                    <BadgeDot className={stat.dotClassName} />
                    {stat.category}
                  </Badge>
                </div>

                <Separator className='my-2.5' />

                <div className='flex items-end justify-between gap-2'>
                  <data
                    value={String(stat.value)}
                    className='text-lg font-semibold tracking-tight'
                  >
                    {formatValue(stat.value, stat.valueFormat)}
                  </data>
                  <Badge
                    variant={config.variant}
                    appearance='light'
                    size='sm'
                    shape='pill'
                    aria-label={`${stat.direction === 'up' ? 'Increased' : stat.direction === 'down' ? 'Decreased' : 'No change'} ${stat.change}`}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </CardRoot>
          )
        })}
      </div>
    </section>
  )
}
