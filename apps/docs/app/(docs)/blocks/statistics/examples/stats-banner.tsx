'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowUp, TrendingUp, Users, Wallet } from 'lucide-react'

type BannerStat = {
  label: string
  value: number
  valueFormat: 'currency' | 'number' | 'percent'
  change: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const primary: BannerStat = {
  label: 'Monthly Recurring Revenue',
  value: 284930,
  valueFormat: 'currency',
  change: '+18.2%',
  icon: Wallet,
}

const secondary: BannerStat[] = [
  {
    label: 'Active Subscribers',
    value: 12847,
    valueFormat: 'number',
    change: '+6.3%',
    icon: Users,
  },
  {
    label: 'Net Revenue Retention',
    value: 108.4,
    valueFormat: 'percent',
    change: '+2.1%',
    icon: TrendingUp,
  },
  {
    label: 'Average Revenue Per User',
    value: 22.18,
    valueFormat: 'currency',
    change: '+11.5%',
    icon: ArrowUp,
  },
]

function formatValue(value: number, valueFormat: BannerStat['valueFormat']) {
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

export default function StatsBannerBlock() {
  const PrimaryIcon = primary.icon

  return (
    <section className='w-full'>
      <CardRoot className='group relative overflow-hidden'>
        {/* Gradient accent line */}
        <span
          aria-hidden='true'
          className='absolute left-0 top-0 h-[2px] w-32 bg-primary transition-width duration-500 group-hover:w-full'
        />

        <CardContent className='pt-8 pb-6'>
          {/* Primary hero metric */}
          <div className='flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left'>
            <div
              className='flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15'
              aria-hidden='true'
            >
              <PrimaryIcon className='size-7 text-primary' />
            </div>

            <div className='space-y-1'>
              <p className='text-sm font-medium text-muted-foreground'>{primary.label}</p>
              <data
                value={String(primary.value)}
                className='block text-4xl font-bold tracking-tight'
              >
                {formatValue(primary.value, primary.valueFormat)}
              </data>
              <div className='flex items-center justify-center gap-2 pt-1 sm:justify-start'>
                <Badge
                  variant='success'
                  appearance='light'
                  size='sm'
                  shape='pill'
                  aria-label={`Increased ${primary.change}`}
                >
                  <ArrowUp className='size-3' aria-hidden='true' />
                  {primary.change}
                </Badge>
                <span className='text-xs text-muted-foreground'>vs last month</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Separator className='my-6' />

          {/* Secondary stats row */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            {secondary.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className='flex gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50'
                >
                  <div
                    className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'
                    aria-hidden='true'
                  >
                    <Icon className='size-4 text-muted-foreground' />
                  </div>
                  <div className='min-w-0'>
                    <p className='truncate text-xs text-muted-foreground'>{stat.label}</p>
                    <div className='flex items-baseline gap-2'>
                      <data
                        value={String(stat.value)}
                        className='text-lg font-semibold tracking-tight'
                      >
                        {formatValue(stat.value, stat.valueFormat)}
                      </data>
                      <Badge
                        variant='success'
                        appearance='light'
                        size='sm'
                        shape='pill'
                        aria-label={`Increased ${stat.change}`}
                      >
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
