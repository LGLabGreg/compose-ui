'use client'

import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'

export default function VerticalExample() {
  return (
    <SliderRoot
      className='mx-auto flex h-40 w-fit flex-col items-center'
      orientation='vertical'
      defaultValue={50}
    >
      <SliderValue className='mb-2 text-sm' />
      <SliderControl className='h-full w-fit flex-col py-0 px-3'>
        <SliderTrack className='h-full w-1.5'>
          <SliderIndicator />
          <SliderThumb aria-label='Value' />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  )
}
