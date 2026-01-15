'use client'

import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui'

export default function StepExample() {
  return (
    <SliderRoot
      className='mx-auto lg:w-1/2 space-y-0.5'
      defaultValue={100}
      min={25}
      max={200}
      step={25}
      format={{ style: 'unit', unit: 'percent' }}
    >
      <div className='flex items-center justify-between text-sm'>
        <span className='font-medium'>Zoom Level</span>
        <SliderValue className='tabular-nums' />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label='Zoom level' />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  )
}
