'use client'

import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { FieldDescription, FieldItem, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { Check } from 'lucide-react'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

export default function WithFieldExample() {
  return (
    <FieldRoot name='fruits'>
      <FieldsetRoot render={<CheckboxGroupRoot />}>
        <FieldsetLegend>Favorite Fruits</FieldsetLegend>
        {fruits.map((fruit) => (
          <FieldItem key={fruit.value}>
            <FieldLabel>
              <CheckboxRoot value={fruit.value}>
                <CheckboxIndicator>
                  <Check className='size-3.5' />
                </CheckboxIndicator>
              </CheckboxRoot>
              {fruit.label}
            </FieldLabel>
          </FieldItem>
        ))}
      </FieldsetRoot>
      <FieldDescription>Select your favorite fruits.</FieldDescription>
    </FieldRoot>
  )
}
