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
      <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
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
      <ToggleGroupItem value='bold' aria-label='Bold' size='icon'>
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic' size='icon'>
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline' size='icon'>
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
        <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
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

### Disabled

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <ToggleGroupRoot disabled defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
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
        <ToggleGroupItem value='left' aria-label='Align left' size='icon-sm'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon-sm'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon-sm'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='icon-lg'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon-lg'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon-lg'>
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
    <ToggleGroupRoot orientation='vertical' defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

### With Text

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default function WithTextExample() {
  return (
    <ToggleGroupRoot defaultValue={['bold']}>
      <ToggleGroupItem value='bold' aria-label='Bold'>
        <BoldIcon />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic'>
        <ItalicIcon />
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline'>
        <UnderlineIcon />
        Underline
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

### Ghost

```tsx
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { Bookmark, Heart, Star } from 'lucide-react'

export default function GhostExample() {
  return (
    <ToggleGroupRoot multiple>
      <ToggleGroupItem
        value='star'
        variant='ghost'
        aria-label='Favorite'
        size='icon'
        className='data-pressed:*:[svg]:fill-yellow-500 data-pressed:*:[svg]:stroke-yellow-500'
      >
        <Star />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='heart'
        variant='ghost'
        aria-label='Like'
        size='icon'
        className='data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500'
      >
        <Heart />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='bookmark'
        variant='ghost'
        aria-label='Bookmark'
        size='icon'
        className='data-pressed:*:[svg]:fill-blue-500 data-pressed:*:[svg]:stroke-blue-500'
      >
        <Bookmark />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
```

## Resources

- [Base UI Toggle Group Documentation](https://base-ui.com/react/components/toggle-group)
- [API Reference](https://base-ui.com/react/components/toggle-group#api-reference)
