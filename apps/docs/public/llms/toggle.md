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
    <Toggle aria-label='Toggle bold' size='icon'>
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
    <div className='flex flex-wrap gap-2'>
      <Toggle aria-label='Toggle bold' size='icon-sm'>
        <BoldIcon className='size-3.5' />
      </Toggle>
      <Toggle aria-label='Toggle bold' size='icon'>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label='Toggle bold' size='icon-lg'>
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
    <Toggle defaultPressed aria-label='Toggle bold' size='icon'>
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
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label='Toggle bold'
        size='icon'
      >
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
    <div className='flex flex-wrap gap-2'>
      <Toggle disabled aria-label='Toggle bold' size='icon'>
        <BoldIcon />
      </Toggle>
      <Toggle disabled defaultPressed aria-label='Toggle bold' size='icon'>
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
    <div className='flex flex-wrap gap-2'>
      <Toggle aria-label='Toggle bold'>
        <BoldIcon />
        Bold
      </Toggle>
      <Toggle aria-label='Toggle bold'>Bold</Toggle>
    </div>
  )
}
```

### Ghost

```tsx
import { Toggle } from '@lglab/compose-ui'
import { Heart } from 'lucide-react'

export default function GhostExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle
        variant='ghost'
        aria-label='Toggle like'
        className='data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500'
      >
        <Heart />
      </Toggle>
    </div>
  )
}
```

## Resources

- [Base UI Toggle Documentation](https://base-ui.com/react/components/toggle)
- [API Reference](https://base-ui.com/react/components/toggle#api-reference)
