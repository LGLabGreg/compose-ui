'use client'

import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui'

export default function GridStatsCard() {
  const stats = [
    { label: 'Total Sales', value: '$12,345' },
    { label: 'Orders', value: '234' },
    { label: 'Customers', value: '1,234' },
    { label: 'Revenue', value: '$45,678' },
  ]

  return (
    <CardRoot className='w-full md:w-2/3 lg:w-1/2'>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 gap-4'>
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className='text-sm text-muted-foreground'>{stat.label}</p>
              <p className='text-lg font-semibold'>{stat.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </CardRoot>
  )
}
