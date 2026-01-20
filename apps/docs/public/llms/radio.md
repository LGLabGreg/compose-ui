# Radio

A control that allows the user to select a single option from a group.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { RadioRoot, RadioIndicator } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import * as React from 'react'

const apples = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string>('fuji')

  return (
    <RadioGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
      <div className='text-sm font-medium text-foreground' id={id}>
        Best apple
      </div>

      {apples.map((apple) => (
        <label key={apple.value} className='flex items-center gap-2 text-sm'>
          <RadioRoot value={apple.value}>
            <RadioIndicator />
          </RadioRoot>
          {apple.label}
        </label>
      ))}
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

- [Base UI Radio Documentation](https://base-ui.com/react/components/radio)
- [API Reference](https://base-ui.com/react/components/radio#api-reference)
