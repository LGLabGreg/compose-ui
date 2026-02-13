'use client'

import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import * as React from 'react'

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string>('fuji')

  return (
    <RadioGroupRoot
      aria-labelledby={id}
      value={value}
      onValueChange={(value) => setValue(value as string)}
    >
      <div className='text-sm font-medium text-foreground' id={id}>
        Best apple
      </div>

      <label className='flex items-center gap-2 text-sm'>
        <RadioRoot value='fuji'>
          <RadioIndicator />
        </RadioRoot>
        Fuji
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <RadioRoot value='gala'>
          <RadioIndicator />
        </RadioRoot>
        Gala
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <RadioRoot value='granny-smith'>
          <RadioIndicator />
        </RadioRoot>
        Granny Smith
      </label>
    </RadioGroupRoot>
  )
}
