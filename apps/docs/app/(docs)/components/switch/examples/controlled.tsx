'use client'

import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui'
import { useState } from 'react'

export default function ControlledExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className='flex items-center gap-2'>
      <SwitchRoot checked={checked} onCheckedChange={setChecked}>
        <SwitchThumb />
      </SwitchRoot>
      <span className='text-sm font-medium'>
        {checked ? 'Notifications enabled' : 'Notifications disabled'}
      </span>
    </div>
  )
}
