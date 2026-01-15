'use client'

import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui'

export default function RangeExample() {
  return (
    <SliderRoot
      className='mx-auto lg:w-1/2 space-y-0.5'
      defaultValue={[40, 80]}
      min={10}
      max={120}
      format={{ style: 'currency', currency: 'EUR' }}
    >
      <div className='flex items-center justify-between text-sm'>
        <span className='font-medium'>Price Range</span>
        <SliderValue className='tabular-nums' />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label='Minimum price' />
          <SliderThumb aria-label='Maximum price' />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  )
}
