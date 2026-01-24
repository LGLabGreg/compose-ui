'use client'

import { Badge, BadgeButton } from '@lglab/compose-ui/badge'
import { XIcon } from 'lucide-react'

export default function WithButtonExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='default'>
        Label
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='success'>
        Success
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='info' appearance='light'>
        Info
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='warning' appearance='outline'>
        Warning
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
    </div>
  )
}
