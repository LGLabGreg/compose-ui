'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

const badges = [
  { variant: 'success', label: 'Active' },
  { variant: 'warning', label: 'Pending' },
  { variant: 'info', label: 'New' },
  { variant: 'destructive', label: 'Error' },
  { variant: 'secondary', label: 'Inactive' },
] as const

export default function WithDotExample() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-2'>
        {badges.map(({ variant, label }) => (
          <Badge key={variant} variant={variant} appearance='outline'>
            <BadgeDot />
            {label}
          </Badge>
        ))}
      </div>
      <div className='flex flex-wrap gap-2'>
        {badges.map(({ variant, label }) => (
          <Badge
            key={variant}
            variant={variant}
            appearance='outline'
            className='relative'
          >
            <BadgeDot className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 animate-ping' />
            <BadgeDot className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2' />
            {label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
