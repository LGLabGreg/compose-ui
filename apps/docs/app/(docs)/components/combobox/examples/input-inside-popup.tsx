'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  ComboboxEmpty,
  ComboboxIcon,
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
  ComboboxValue,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronsUpDown } from 'lucide-react'

interface Country {
  label: string
  value: string
}

const countries: Country[] = [
  { label: 'Argentina', value: 'ar' },
  { label: 'Australia', value: 'au' },
  { label: 'Brazil', value: 'br' },
  { label: 'Canada', value: 'ca' },
  { label: 'China', value: 'cn' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'India', value: 'in' },
  { label: 'Italy', value: 'it' },
  { label: 'Japan', value: 'jp' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Netherlands', value: 'nl' },
  { label: 'Poland', value: 'pl' },
  { label: 'South Korea', value: 'kr' },
  { label: 'Spain', value: 'es' },
  { label: 'Sweden', value: 'se' },
  { label: 'Switzerland', value: 'ch' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'United States', value: 'us' },
]

export default function InputInsidePopupExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel render={<div />} nativeLabel={false}>
        Country
      </FieldLabel>
      <ComboboxRoot items={countries}>
        <ComboboxTrigger
          render={(props) => (
            <Button
              {...props}
              className='w-64 justify-between font-normal'
              variant='outline'
            >
              <ComboboxValue placeholder='Select a country' />
              <ComboboxIcon>
                <ChevronsUpDown className='size-4 text-muted-foreground' />
              </ComboboxIcon>
            </Button>
          )}
        />

        <ComboboxPortal>
          <ComboboxPositioner align='start'>
            <ComboboxPopup className='[--input-height:3rem]'>
              <div className='w-72 h-(--input-height) p-2'>
                <ComboboxInput placeholder='e.g. United Kingdom' className='h-9' />
              </div>
              <ComboboxEmpty>No countries found.</ComboboxEmpty>
              <ComboboxList className='max-h-[min(calc(23rem-var(--input-height)),calc(var(--available-height)-var(--input-height)))]'>
                {(item: Country) => (
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
