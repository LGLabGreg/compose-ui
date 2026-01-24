'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

export default function WithDotExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='success' appearance='outline'>
        <BadgeDot />
        Active
      </Badge>
      <Badge variant='warning' appearance='outline'>
        <BadgeDot />
        Pending
      </Badge>
      <Badge variant='info' appearance='outline'>
        <BadgeDot />
        New
      </Badge>
      <Badge variant='destructive' appearance='outline'>
        <BadgeDot />
        Error
      </Badge>
      <Badge variant='secondary' appearance='outline'>
        <BadgeDot />
        Inactive
      </Badge>
    </div>
  )
}
