# Slider

A control for selecting a value or range from a continuous or discrete set of values.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { SliderRoot, SliderValue, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'

export default function DefaultExample() {
  return (
    <SliderRoot
      className='mx-auto w-full max-w-md space-y-0.5'
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
```

### Range

```tsx
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'

export default function RangeExample() {
  return (
    <SliderRoot
      className='mx-auto w-full max-w-md space-y-0.5'
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
```

### Step

```tsx
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'

export default function StepExample() {
  return (
    <SliderRoot
      className='mx-auto w-full max-w-md space-y-0.5'
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
```

### Vertical

```tsx
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
      className='mx-auto flex h-40 w-full max-w-md flex-col items-center'
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
```

## Resources

- [Base UI](https://base-ui.com/react/components/slider)
