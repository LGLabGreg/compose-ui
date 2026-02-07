# Radio Group

Provides shared state to a series of radio buttons.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { RadioGroupRoot } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import * as React from 'react'

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string>('fuji')

  return (
    <RadioGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
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
```

### With Field

```tsx
import {
  FieldDescription,
  FieldItem,
  FieldLabel,
  FieldRoot,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

export default function WithFieldExample() {
  return (
    <FieldRoot name='fruit'>
      <FieldsetRoot render={<RadioGroupRoot />}>
        <FieldsetLegend>Favorite Fruit</FieldsetLegend>
        {fruits.map((fruit) => (
          <FieldItem key={fruit.value}>
            <FieldLabel>
              <RadioRoot value={fruit.value}>
                <RadioIndicator />
              </RadioRoot>
              {fruit.label}
            </FieldLabel>
          </FieldItem>
        ))}
      </FieldsetRoot>
      <FieldDescription>Select your favorite fruit.</FieldDescription>
    </FieldRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/radio-group)
