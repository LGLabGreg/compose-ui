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

export default function MinMaxExample() {
  return (
    <FieldRoot>
      <NumberFieldRoot defaultValue={50} min={0} max={100}>
        <NumberFieldScrubArea>
          <FieldLabel>Percentage (0-100)</FieldLabel>
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
