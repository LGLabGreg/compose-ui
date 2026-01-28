# Number Field

A numeric input element with increment and decrement buttons, and a scrub area.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { NumberFieldRoot, NumberFieldScrubArea, NumberFieldScrubAreaCursor, NumberFieldGroup, NumberFieldInput, NumberFieldDecrement, NumberFieldIncrement } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
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

export default function DefaultExample() {
  return (
    <FieldRoot>
      <NumberFieldRoot defaultValue={100}>
        <NumberFieldScrubArea>
          <FieldLabel>Amount</FieldLabel>
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
```

### Min/Max

```tsx
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
```

### Step

```tsx
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

export default function StepExample() {
  return (
    <FieldRoot>
      <NumberFieldRoot defaultValue={0} step={5}>
        <NumberFieldScrubArea>
          <FieldLabel>Quantity (step: 5)</FieldLabel>
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
```

### Controlled

```tsx
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
```

### Format

```tsx
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
```

## Resources

- [Base UI Number Field Documentation](https://base-ui.com/react/components/number-field)
- [API Reference](https://base-ui.com/react/components/number-field#api-reference)
