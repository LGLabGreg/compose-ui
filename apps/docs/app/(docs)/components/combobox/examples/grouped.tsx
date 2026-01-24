'use client'

import {
  ComboboxClear,
  ComboboxCollection,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronDown, X } from 'lucide-react'
import * as React from 'react'

interface Produce {
  id: string
  label: string
  group: 'Fruits' | 'Vegetables' | 'Grains'
}

interface ProduceGroup {
  value: string
  items: Produce[]
}

const produceData: Produce[] = [
  { id: 'fruit-apple', label: 'Apple', group: 'Fruits' },
  { id: 'fruit-banana', label: 'Banana', group: 'Fruits' },
  { id: 'fruit-mango', label: 'Mango', group: 'Fruits' },
  { id: 'fruit-kiwi', label: 'Kiwi', group: 'Fruits' },
  { id: 'veg-broccoli', label: 'Broccoli', group: 'Vegetables' },
  { id: 'veg-carrot', label: 'Carrot', group: 'Vegetables' },
  { id: 'veg-cauliflower', label: 'Cauliflower', group: 'Vegetables' },
  { id: 'veg-cucumber', label: 'Cucumber', group: 'Vegetables' },
  { id: 'veg-kale', label: 'Kale', group: 'Vegetables' },
  { id: 'veg-pepper', label: 'Bell pepper', group: 'Vegetables' },
  { id: 'veg-spinach', label: 'Spinach', group: 'Vegetables' },
  { id: 'veg-zucchini', label: 'Zucchini', group: 'Vegetables' },
  { id: 'grain-rice', label: 'Rice', group: 'Grains' },
  { id: 'grain-wheat', label: 'Wheat', group: 'Grains' },
  { id: 'grain-oats', label: 'Oats', group: 'Grains' },
  { id: 'grain-barley', label: 'Barley', group: 'Grains' },
  { id: 'grain-quinoa', label: 'Quinoa', group: 'Grains' },
]

function groupProduce(items: Produce[]): ProduceGroup[] {
  const groups: Record<string, Produce[]> = {}
  items.forEach((item) => {
    ;(groups[item.group] ??= []).push(item)
  })
  const order = ['Fruits', 'Vegetables', 'Grains']
  return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedProduce: ProduceGroup[] = groupProduce(produceData)

export default function GroupedExample() {
  return (
    <FieldRoot>
      <FieldLabel>Select produce</FieldLabel>
      <ComboboxRoot items={groupedProduce}>
        <ComboboxControl>
          <ComboboxInput placeholder='e.g. Mango' />
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
              <ComboboxEmpty>No produce found.</ComboboxEmpty>
              <ComboboxList>
                {(group: ProduceGroup, index: number) => (
                  <React.Fragment key={group.value}>
                    <ComboboxGroup items={group.items}>
                      <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                      <ComboboxCollection>
                        {(item: Produce) => (
                          <ComboboxItem key={item.id} value={item}>
                            <ComboboxItemText>{item.label}</ComboboxItemText>
                            <ComboboxItemIndicator>
                              <Check className='size-3.5' />
                            </ComboboxItemIndicator>
                          </ComboboxItem>
                        )}
                      </ComboboxCollection>
                    </ComboboxGroup>
                    {index < groupedProduce.length - 1 && <ComboboxSeparator />}
                  </React.Fragment>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    </FieldRoot>
  )
}
