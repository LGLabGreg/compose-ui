'use client'

import { Badge } from '@lglab/compose-ui/badge'

export default function SizesExample() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Badge size='sm'>Small</Badge>
      <Badge size='md'>Medium</Badge>
      <Badge size='lg'>Large</Badge>
    </div>
  )
}
