'use client'

import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import * as React from 'react'

const apples = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string>('fuji')

  return (
    <RadioGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
      <div className='text-sm font-medium text-foreground' id={id}>
        Best apple
      </div>

      {apples.map((apple) => (
        <label key={apple.value} className='flex items-center gap-2 text-sm'>
          <RadioRoot value={apple.value}>
            <RadioIndicator />
          </RadioRoot>
          {apple.label}
        </label>
      ))}
    </RadioGroupRoot>
  )
}
