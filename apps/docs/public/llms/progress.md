# Progress

The progressbar range widget indicates that a request has been received and the application is making progress toward completing the requested action.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from '@lglab/compose-ui'
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
} from '@lglab/compose-ui'
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
    <ProgressRoot className='lg:w-1/2 mx-auto text-sm font-medium ' value={value}>
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

## Resources

- [Base UI Progress Documentation](https://base-ui.com/react/components/progress)
- [API Reference](https://base-ui.com/react/components/progress#api-reference)
