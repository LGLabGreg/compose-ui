import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui'

export default function DefaultExample() {
  return (
    <SliderRoot
      className='mx-auto lg:w-1/2 space-y-0.5'
      defaultValue={43}
      thumbAlignment='edge'
    >
      <div className='flex items-center justify-between text-sm'>
        <span className='font-medium'>Volume</span>
        <SliderValue className='tabular-nums' />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label='Volume' />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  )
}
