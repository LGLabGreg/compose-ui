# Checkbox Group

Provides shared state to a series of checkboxes.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { CheckboxGroupRoot } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { Check } from 'lucide-react'
import * as React from 'react'

const apples = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

export default function DefaultExample() {
  const id = React.useId()
  const [value, setValue] = React.useState<string[]>(['fuji'])

  return (
    <CheckboxGroupRoot aria-labelledby={id} value={value} onValueChange={setValue}>
      <div className='text-sm font-medium text-foreground' id={id}>
        Favorite apples
      </div>

      {apples.map((apple) => (
        <label key={apple.value} className='flex items-center gap-2 text-sm'>
          <CheckboxRoot name='apple' value={apple.value}>
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
```

### Parent Checkbox

```tsx
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
```

### With Field

```tsx
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { FieldDescription, FieldItem, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { Check } from 'lucide-react'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

export default function WithFieldExample() {
  return (
    <FieldRoot name='fruits'>
      <FieldsetRoot render={<CheckboxGroupRoot />}>
        <FieldsetLegend>Favorite Fruits</FieldsetLegend>
        {fruits.map((fruit) => (
          <FieldItem key={fruit.value}>
            <FieldLabel>
              <CheckboxRoot value={fruit.value}>
                <CheckboxIndicator>
                  <Check className='size-3.5' />
                </CheckboxIndicator>
              </CheckboxRoot>
              {fruit.label}
            </FieldLabel>
          </FieldItem>
        ))}
      </FieldsetRoot>
      <FieldDescription>Select your favorite fruits.</FieldDescription>
    </FieldRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/checkbox-group)
