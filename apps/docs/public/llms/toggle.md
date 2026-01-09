# Toggle

A two-state button that can be on or off.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Toggle } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <Toggle aria-label='Toggle bold'>
      <BoldIcon />
    </Toggle>
  )
}
```

### Sizes

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex items-center gap-2'>
      <Toggle size='sm' aria-label='Toggle bold'>
        <BoldIcon className='size-3.5' />
      </Toggle>
      <Toggle aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <Toggle size='lg' aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
```

### Pressed

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function PressedExample() {
  return (
    <Toggle defaultPressed aria-label='Toggle bold'>
      <BoldIcon />
    </Toggle>
  )
}
```

### Controlled

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className='flex items-center gap-3'>
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <span className='text-sm'>{pressed ? 'Bold on' : 'Bold off'}</span>
    </div>
  )
}
```

### Disabled

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <div className='flex gap-4'>
      <Toggle disabled aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <Toggle disabled defaultPressed aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
```

### With Text

```tsx
import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function WithTextExample() {
  return (
    <Toggle aria-label='Toggle bold'>
      <BoldIcon />
      Bold
    </Toggle>
  )
}
```

## Resources

- [Base UI Toggle Documentation](https://base-ui.com/react/components/toggle)
- [API Reference](https://base-ui.com/react/components/toggle#api-reference)
