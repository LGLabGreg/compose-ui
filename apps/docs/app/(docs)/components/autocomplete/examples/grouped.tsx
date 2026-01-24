'use client'

import {
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteSeparator,
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
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
      <FieldLabel>Search produce</FieldLabel>
      <AutocompleteRoot items={groupedProduce}>
        <AutocompleteInput placeholder='e.g. Mango' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No produce found.</AutocompleteEmpty>
              <AutocompleteList>
                {(group: ProduceGroup, index: number) => (
                  <React.Fragment key={group.value}>
                    <AutocompleteGroup items={group.items}>
                      <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                      <AutocompleteCollection>
                        {(item: Produce) => (
                          <AutocompleteItem key={item.id} value={item}>
                            {item.label}
                          </AutocompleteItem>
                        )}
                      </AutocompleteCollection>
                    </AutocompleteGroup>
                    {index < groupedProduce.length - 1 && <AutocompleteSeparator />}
                  </React.Fragment>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </FieldRoot>
  )
}
