'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string[]>(['fuji'])

  return (
    <CheckboxGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
      <div className='text-sm font-medium text-foreground' id={id}>
        Favorite apples
      </div>

      <label className='flex items-center gap-2 text-sm'>
        <CheckboxRoot name='apple' value='fuji'>
          <CheckboxIndicator>
            <Check className='size-3.5' />
          </CheckboxIndicator>
        </CheckboxRoot>
        Fuji
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <CheckboxRoot name='apple' value='gala'>
          <CheckboxIndicator>
            <Check className='size-3.5' />
          </CheckboxIndicator>
        </CheckboxRoot>
        Gala
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <CheckboxRoot name='apple' value='granny-smith'>
          <CheckboxIndicator>
            <Check className='size-3.5' />
          </CheckboxIndicator>
        </CheckboxRoot>
        Granny Smith
      </label>
    </CheckboxGroupRoot>
  )
}
