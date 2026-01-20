'use client'

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
                    <SelectItemIndicator>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                    <SelectItemText>{label}</SelectItemText>
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
