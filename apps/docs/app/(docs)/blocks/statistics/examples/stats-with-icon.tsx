'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { CardContent, CardHeader, CardRoot } from '@lglab/compose-ui/card'
import { ShoppingCart, TrendingUp, Users } from 'lucide-react'

type IconStat = {
  label: string
  value: string
  change: string
  comparedTo: string
  badgeVariant: 'success' | 'destructive' | 'secondary'
  icon: React.ElementType
  iconClassName: string
}

const stats: IconStat[] = [
  {
    label: 'New Customers',
    value: '2,340',
    change: '+8.1%',
    comparedTo: 'vs last month',
    badgeVariant: 'success',
    icon: Users,
    iconClassName: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
  },
  {
    label: 'Total Orders',
    value: '1,029',
    change: '-3.2%',
    comparedTo: 'vs last month',
    badgeVariant: 'destructive',
    icon: ShoppingCart,
    iconClassName:
      'bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
  },
  {
    label: 'Growth Rate',
    value: '24.5%',
    change: '+2.4%',
    comparedTo: 'vs last quarter',
    badgeVariant: 'success',
    icon: TrendingUp,
    iconClassName:
      'bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
  },
]

export default function StatsWithIconBlock() {
  return (
    <section className='w-full' aria-label='Statistics with icons'>
      <div className='grid gap-4 lg:grid-cols-3'>
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <CardRoot key={stat.label} className='group'>
              <CardHeader className='flex-row items-center gap-3'>
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${stat.iconClassName}`}
                >
                  <Icon className='size-5' aria-hidden='true' />
                </span>
                <span className='text-sm text-muted-foreground'>{stat.label}</span>
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
          )
        })}
      </div>
    </section>
  )
}
