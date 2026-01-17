# Switch

A control that indicates whether a setting is on or off.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'

export default function DefaultExample() {
  return (
    <SwitchRoot>
      <SwitchThumb />
    </SwitchRoot>
  )
}
```

### Checked

```tsx
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'

export default function CheckedExample() {
  return (
    <SwitchRoot defaultChecked>
      <SwitchThumb />
    </SwitchRoot>
  )
}
```

### Controlled

```tsx
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { useState } from 'react'

export default function ControlledExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className='flex items-center gap-2'>
      <SwitchRoot checked={checked} onCheckedChange={setChecked}>
        <SwitchThumb />
      </SwitchRoot>
      <span className='text-sm font-medium'>
        {checked ? 'Notifications enabled' : 'Notifications disabled'}
      </span>
    </div>
  )
}
```

### Disabled

```tsx
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'

export default function DisabledExample() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <SwitchRoot disabled>
          <SwitchThumb />
        </SwitchRoot>
        <span className='text-sm font-medium text-muted-foreground'>
          Disabled unchecked
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <SwitchRoot disabled defaultChecked>
          <SwitchThumb />
        </SwitchRoot>
        <span className='text-sm font-medium text-muted-foreground'>
          Disabled checked
        </span>
      </div>
    </div>
  )
}
```

## Resources

- [Base UI Switch Documentation](https://base-ui.com/react/components/switch)
- [API Reference](https://base-ui.com/react/components/switch#api-reference)
