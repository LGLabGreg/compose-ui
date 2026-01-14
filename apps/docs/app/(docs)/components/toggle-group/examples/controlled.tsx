'use client'

import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [value, setValue] = useState<string[]>(['left'])

  return (
    <div className='flex flex-col items-center gap-3'>
      <ToggleGroupRoot value={value} onValueChange={setValue}>
        <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <span className='text-sm'>
        {value.length > 0 ? `Aligned: ${value[0]}` : 'No alignment'}
      </span>
    </div>
  )
}
