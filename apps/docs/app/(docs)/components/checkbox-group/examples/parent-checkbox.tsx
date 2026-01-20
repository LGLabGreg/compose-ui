'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { Check, Minus } from 'lucide-react'
import * as React from 'react'

const apples = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

export default function ParentCheckboxExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string[]>(['fuji'])

  return (
    <CheckboxGroupRoot
      aria-labelledby={id}
      value={value}
      onValueChange={setValue}
      allValues={apples.map((apple) => apple.value)}
      className='pl-4'
    >
      <label className='-ml-4 flex items-center gap-2 text-sm font-medium' id={id}>
        <CheckboxRoot name='apples' parent>
          <CheckboxIndicator
            render={(props, state) => (
              <span {...props}>
                {state.indeterminate ? (
                  <Minus className='size-3.5' />
                ) : (
                  <Check className='size-3.5' />
                )}
              </span>
            )}
          />
        </CheckboxRoot>
        Apples
      </label>

      {apples.map((apple) => (
        <label key={apple.value} className='flex items-center gap-2 text-sm'>
          <CheckboxRoot value={apple.value}>
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
