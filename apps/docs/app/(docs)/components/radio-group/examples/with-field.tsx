'use client'

import {
  FieldDescription,
  FieldItem,
  FieldLabel,
  FieldRoot,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

export default function WithFieldExample() {
  return (
    <FieldRoot name='fruit'>
      <FieldsetRoot render={<RadioGroupRoot />}>
        <FieldsetLegend>Favorite Fruit</FieldsetLegend>
        {fruits.map((fruit) => (
          <FieldItem key={fruit.value}>
            <FieldLabel>
              <RadioRoot value={fruit.value}>
                <RadioIndicator />
              </RadioRoot>
              {fruit.label}
            </FieldLabel>
          </FieldItem>
        ))}
      </FieldsetRoot>
      <FieldDescription>Select your favorite fruit.</FieldDescription>
    </FieldRoot>
  )
}
