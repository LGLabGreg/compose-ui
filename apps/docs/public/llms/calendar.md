# Calendar

A date calendar component built on react-day-picker.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Calendar } from '@lglab/compose-ui'
```

## Examples

### Single Date

```tsx
import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function DefaultExample() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border border-border'
    />
  )
}
```

### Date Range

```tsx
import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function RangeExample() {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <Calendar
      mode='range'
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className='rounded-md border border-border'
    />
  )
}
```

### Multiple Dates

```tsx
import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function MultipleExample() {
  const [dates, setDates] = useState<Date[] | undefined>()

  return (
    <Calendar
      mode='multiple'
      selected={dates}
      onSelect={setDates}
      className='rounded-md border border-border'
    />
  )
}
```

### Dropdown Caption

```tsx
import { Calendar } from '@lglab/compose-ui/calendar'
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
import { type ChangeEvent, useState } from 'react'
import type { DropdownProps } from 'react-day-picker'

function CustomDropdown({
  options,
  value,
  onChange,
  'aria-label': ariaLabel,
}: DropdownProps) {
  const selected = options?.find((o) => o.value === value)

  return (
    <SelectRoot
      value={String(value)}
      onValueChange={(val) => {
        const syntheticEvent = {
          target: { value: val },
        } as ChangeEvent<HTMLSelectElement>
        onChange?.(syntheticEvent)
      }}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        className='min-w-0 min-h-0 h-7 border-none shadow-none bg-transparent px-1 gap-1 hover:bg-muted'
      >
        <SelectValue placeholder={ariaLabel}>{selected?.label}</SelectValue>
        <SelectIcon>
          <ChevronsUpDown className='size-3.5' />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectScrollUpArrow />
            <SelectList>
              {options?.map(({ value: optValue, label, disabled }) => (
                <SelectItem key={optValue} value={String(optValue)} disabled={disabled}>
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
  )
}

export default function DropdownExample() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      captionLayout='dropdown'
      components={{ Dropdown: CustomDropdown }}
      className='rounded-md border border-border'
    />
  )
}
```

### Footer

```tsx
import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function FooterExample() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border border-border'
      footer={
        date
          ? `${date?.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}.`
          : 'Please pick a date.'
      }
    />
  )
}
```

## Resources

- [React Day Picker](https://daypicker.dev)
