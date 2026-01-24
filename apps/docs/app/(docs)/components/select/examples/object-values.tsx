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
