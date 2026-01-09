'use client'

import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className='flex items-center gap-3'>
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <span className='text-sm'>{pressed ? 'Bold on' : 'Bold off'}</span>
    </div>
  )
}
