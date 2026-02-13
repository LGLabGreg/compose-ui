# Progress

The progressbar range widget indicates that a request has been received and the application is making progress toward completing the requested action.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { ProgressRoot, ProgressTrack, ProgressIndicator, ProgressValue, ProgressLabel, ProgressCircle } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from '@lglab/compose-ui/progress'
import * as React from 'react'

export default function BasicExample() {
  const [value, setValue] = React.useState(20)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ProgressRoot className='w-full max-w-md mx-auto text-sm font-medium ' value={value}>
      <div className='flex items-center justify-between mb-2'>
        <ProgressLabel>
          {value < 100 ? 'Uploading file...' : 'File uploaded'}
        </ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  )
}
```

### Circular

```tsx
import { ProgressCircle, ProgressRoot, ProgressValue } from '@lglab/compose-ui/progress'
import * as React from 'react'

export default function CircularExample() {
  const [value, setValue] = React.useState(20)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-center justify-center gap-8'>
      <ProgressRoot className='w-auto' value={value}>
        <ProgressCircle value={value}>
          <ProgressValue className='text-lg font-semibold' />
        </ProgressCircle>
      </ProgressRoot>

      <ProgressRoot className='w-auto' value={value}>
        <ProgressCircle value={value} size={80} strokeWidth={6}>
          <ProgressValue className='text-sm font-medium' />
        </ProgressCircle>
      </ProgressRoot>

      <ProgressRoot className='w-auto' value={null}>
        <ProgressCircle value={null} size={80} strokeWidth={6} />
      </ProgressRoot>
    </div>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/progress)
