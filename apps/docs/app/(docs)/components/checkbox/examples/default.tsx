'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check } from 'lucide-react'

export default function DefaultExample() {
  return (
    <FieldRoot>
      <FieldLabel className='flex items-center gap-2'>
        <CheckboxRoot defaultChecked>
          <CheckboxIndicator>
            <Check className='size-3.5' />
          </CheckboxIndicator>
        </CheckboxRoot>
        Accept terms and conditions
      </FieldLabel>
    </FieldRoot>
  )
}
