# Toggle Group

Provides a shared state to a series of toggle buttons.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { ToggleGroupRoot, ToggleGroupItem } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <ToggleGroupRoot defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

### Multiple Selection

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default function MultipleExample() {
  return (
    <ToggleGroupRoot multiple defaultValue={['bold']}>
      <ToggleGroupItem value='bold' aria-label='Bold'>
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic'>
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline'>
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

### Controlled

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [value, setValue] = useState<string[]>(['left'])

  return (
    <div className='flex items-center gap-3'>
      <ToggleGroupRoot value={value} onValueChange={setValue}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <span className='text-sm'>
        {value.length > 0 ? `Aligned: ${value[0]}` : 'No alignment'}
      </span>
    </div>
  )
}
```

### Sizes

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-col items-start gap-4'>
      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='sm'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='sm'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='sm'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='lg'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='lg'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='lg'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </div>
  )
}
```

### Vertical Orientation

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function OrientationExample() {
  return (
    <ToggleGroupRoot orientation='vertical' defaultValue={['left']} className='flex-col'>
      <ToggleGroupItem value='left' aria-label='Align left'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

### Disabled

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <ToggleGroupRoot disabled defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

## Resources

- [Base UI Toggle Group Documentation](https://base-ui.com/react/components/toggle-group)
- [API Reference](https://base-ui.com/react/components/toggle-group#api-reference)
