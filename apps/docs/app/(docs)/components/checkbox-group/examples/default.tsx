'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { Check } from 'lucide-react'
import * as React from 'react'

const apples = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string[]>(['fuji'])

  return (
    <CheckboxGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
      <div className='text-sm font-medium text-foreground' id={id}>
        Favorite apples
      </div>

      {apples.map((apple) => (
        <label key={apple.value} className='flex items-center gap-2 text-sm'>
          <CheckboxRoot name='apple' value={apple.value}>
            <CheckboxIndicator>
              <Check className='size-3.5' />
            </CheckboxIndicator>
          </CheckboxRoot>
          {apple.label}
        </label>
      ))}
    </CheckboxGroupRoot>
  )
}
