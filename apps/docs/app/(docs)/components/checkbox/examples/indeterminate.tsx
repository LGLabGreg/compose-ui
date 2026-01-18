'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, Minus } from 'lucide-react'
import * as React from 'react'

export default function IndeterminateExample() {
  const [checked, setChecked] = React.useState<boolean | 'indeterminate'>('indeterminate')

  return (
    <FieldRoot>
      <FieldLabel className='flex items-center gap-2'>
        <CheckboxRoot
          checked={checked === true}
          indeterminate={checked === 'indeterminate'}
          onCheckedChange={(newChecked) => setChecked(newChecked)}
        >
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
        Select all items
      </FieldLabel>
    </FieldRoot>
  )
}
