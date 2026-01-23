'use client'

import {
  ComboboxClear,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronDown, X } from 'lucide-react'

interface Fruit {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Plum', value: 'plum' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Cantaloupe', value: 'cantaloupe' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Papaya', value: 'papaya' },
  { label: 'Guava', value: 'guava' },
  { label: 'Lychee', value: 'lychee' },
  { label: 'Pomegranate', value: 'pomegranate' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Grapefruit', value: 'grapefruit' },
  { label: 'Passionfruit', value: 'passionfruit' },
]

export default function DefaultExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel>Choose a fruit</FieldLabel>
      <ComboboxRoot items={fruits}>
        <ComboboxControl>
          <ComboboxInput placeholder='e.g. Apple' />
          <ComboboxClear aria-label='Clear selection'>
            <X className='size-4' />
          </ComboboxClear>
          <ComboboxTrigger aria-label='Open popup'>
            <ChevronDown className='size-4' />
          </ComboboxTrigger>
        </ComboboxControl>
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxEmpty>No fruits found.</ComboboxEmpty>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemText>{item.label}</ComboboxItemText>
                    <ComboboxItemIndicator>
                      <Check className='size-3.5' />
                    </ComboboxItemIndicator>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    </FieldRoot>
  )
}
