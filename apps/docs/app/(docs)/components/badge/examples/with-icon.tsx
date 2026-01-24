'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from 'lucide-react'

export default function WithIconExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='success'>
        <CheckCircle2Icon />
        Completed
      </Badge>
      <Badge variant='info'>
        <InfoIcon />
        Information
      </Badge>
      <Badge variant='warning'>
        <AlertTriangleIcon />
        Warning
      </Badge>
    </div>
  )
}
