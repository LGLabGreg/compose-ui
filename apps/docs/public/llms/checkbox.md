# Checkbox

A control that allows the user to toggle between checked and unchecked states.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { CheckboxRoot, CheckboxIndicator } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
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
```

### Indeterminate

```tsx
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
```

## Resources

- [Base UI Checkbox Documentation](https://base-ui.com/react/components/checkbox)
- [API Reference](https://base-ui.com/react/components/checkbox#api-reference)
