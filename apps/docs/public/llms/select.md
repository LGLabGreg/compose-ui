# Select

A common form component for choosing a predefined value in a dropdown menu.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectBackdrop, SelectPortal, SelectPositioner, SelectPopup, SelectList, SelectArrow, SelectItem, SelectItemText, SelectItemIndicator, SelectGroup, SelectGroupLabel, SelectScrollUpArrow, SelectScrollDownArrow, SelectSeparator } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Check, ChevronsUpDown } from 'lucide-react'

const apples = [
  { label: 'Gala', value: 'gala' },
  { label: 'Fuji', value: 'fuji' },
  { label: 'Honeycrisp', value: 'honeycrisp' },
  { label: 'Granny Smith', value: 'granny-smith' },
  { label: 'Pink Lady', value: 'pink-lady' },
]

export default function DefaultExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel nativeLabel={false} render={<div />}>
        Apple
      </FieldLabel>
      <SelectRoot items={apples}>
        <SelectTrigger>
          <SelectValue placeholder='Select apple' />
          <SelectIcon>
            <ChevronsUpDown className='size-4' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {apples.map(({ label, value }) => (
                  <SelectItem key={label} value={value}>
                    <SelectItemText>{label}</SelectItemText>
                    <SelectItemIndicator>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </FieldRoot>
  )
}
```

### Multiple Selection

```tsx
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Check, ChevronsUpDown } from 'lucide-react'

const languages = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  csharp: 'C#',
  php: 'PHP',
  cpp: 'C++',
  rust: 'Rust',
  go: 'Go',
  swift: 'Swift',
}

type Language = keyof typeof languages

const values = Object.keys(languages) as Language[]

function renderValue(value: Language[]) {
  if (value.length === 0) {
    return 'Select languages…'
  }

  const firstLanguage = languages[value[0]]
  const additionalLanguages = value.length > 1 ? ` (+${value.length - 1} more)` : ''
  return firstLanguage + additionalLanguages
}

export default function MultipleExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel nativeLabel={false} render={<div />}>
        Languages
      </FieldLabel>
      <SelectRoot multiple defaultValue={['javascript', 'typescript']}>
        <SelectTrigger>
          <SelectValue>{renderValue}</SelectValue>
          <SelectIcon>
            <ChevronsUpDown className='size-4' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner alignItemWithTrigger={false}>
            <SelectPopup>
              <SelectList>
                {values.map((value) => (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{languages[value]}</SelectItemText>
                    <SelectItemIndicator>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </FieldRoot>
  )
}
```

### Object Values

```tsx
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Check, ChevronsUpDown } from 'lucide-react'

interface ShippingMethod {
  id: string
  name: string
  duration: string
  price: string
}

const shippingMethods: ShippingMethod[] = [
  {
    id: 'standard',
    name: 'Standard',
    duration: 'Delivers in 4-6 business days',
    price: '$4.99',
  },
  {
    id: 'express',
    name: 'Express',
    duration: 'Delivers in 2-3 business days',
    price: '$9.99',
  },
  {
    id: 'overnight',
    name: 'Overnight',
    duration: 'Delivers next business day',
    price: '$19.99',
  },
]

export default function ObjectValuesExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel nativeLabel={false} render={<div />}>
        Shipping method
      </FieldLabel>
      <SelectRoot<ShippingMethod>
        defaultValue={shippingMethods[0]}
        itemToStringValue={(item) => item.id}
      >
        <SelectTrigger className='min-h-10 items-start py-2'>
          <SelectValue>
            {(method: ShippingMethod) => (
              <span className='flex flex-col items-start text-left'>
                <span className='text-base font-medium'>{method.name}</span>
                <span className='text-sm'>
                  {method.duration} ({method.price})
                </span>
              </span>
            )}
          </SelectValue>
          <SelectIcon className='self-center'>
            <ChevronsUpDown className='size-4' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {shippingMethods.map((method) => (
                  <SelectItem
                    key={method.id}
                    value={method}
                    className='items-start py-2.5'
                  >
                    <SelectItemText className='flex flex-col items-start text-left'>
                      <span className='text-base font-medium'>{method.name}</span>
                      <span className='text-sm'>
                        {method.duration} ({method.price})
                      </span>
                    </SelectItemText>
                    <SelectItemIndicator className='relative top-[0.4em]'>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </FieldRoot>
  )
}
```

## Resources

- [Base UI Select Documentation](https://base-ui.com/react/components/select)
- [API Reference](https://base-ui.com/react/components/select#api-reference)
