'use client'

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
  const [date, setDate] = useState<Date | undefined>(new Date())

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
