'use client'

import { Badge } from '@lglab/compose-ui/badge'

export default function ShapesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge shape='pill'>Pill</Badge>
      <Badge shape='rounded'>Rounded</Badge>
    </div>
  )
}
