'use client'

import { Button } from '@lglab/compose-ui/button'
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
import * as React from 'react'

export default function ControlledExample() {
  const [value, setValue] = React.useState<number | null>(50)

  return (
    <div className='flex flex-col items-center gap-4'>
      <FieldRoot>
        <NumberFieldRoot value={value} onValueChange={setValue}>
          <NumberFieldScrubArea>
            <FieldLabel>Controlled Value</FieldLabel>
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

      <div className='flex gap-2'>
        <Button onClick={() => setValue(0)}>Set to 0</Button>
        <Button onClick={() => setValue(100)}>Set to 100</Button>
        <Button onClick={() => setValue(50)}>Reset to 50</Button>
      </div>
    </div>
  )
}
