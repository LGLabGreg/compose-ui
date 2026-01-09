'use client'

import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [value, setValue] = useState<string[]>(['left'])

  return (
    <div className='flex items-center gap-3'>
      <ToggleGroupRoot value={value} onValueChange={setValue}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <span className='text-sm'>
        {value.length > 0 ? `Aligned: ${value[0]}` : 'No alignment'}
      </span>
    </div>
  )
}
