'use client'

import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from '@lglab/compose-ui/number-field'
import { Minus, MoveHorizontal, Plus } from 'lucide-react'

export default function FormatExample() {
  return (
    <FieldRoot>
      <NumberFieldRoot
        defaultValue={1234.56}
        locale='ja-JP'
        format={{ style: 'currency', currency: 'JPY' }}
      >
        <NumberFieldScrubArea>
          <FieldLabel>Japanese Yen (ja-JP)</FieldLabel>
          <NumberFieldScrubAreaCursor>
            <MoveHorizontal className='size-4' />
          </NumberFieldScrubAreaCursor>
        </NumberFieldScrubArea>

        <NumberFieldGroup>
          <NumberFieldDecrement>
            <Minus className='size-4' />
          </NumberFieldDecrement>
          <NumberFieldInput />
          <NumberFieldIncrement>
            <Plus className='size-4' />
          </NumberFieldIncrement>
        </NumberFieldGroup>
      </NumberFieldRoot>
    </FieldRoot>
  )
}
