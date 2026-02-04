# Badge

A versatile badge component for displaying labels, status indicators, and tags with multiple variants, sizes, and shapes.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Badge, BadgeDot, BadgeButton } from '@lglab/compose-ui'
```

## Examples

### Variants

```tsx
import { Badge } from '@lglab/compose-ui/badge'

export default function DefaultExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='default'>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='info'>Info</Badge>
    </div>
  )
}
```

### Sizes

```tsx
import { Badge } from '@lglab/compose-ui/badge'

export default function SizesExample() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Badge size='sm'>Small</Badge>
      <Badge size='md'>Medium</Badge>
      <Badge size='lg'>Large</Badge>
    </div>
  )
}
```

### Shapes

```tsx
import { Badge } from '@lglab/compose-ui/badge'

export default function ShapesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge shape='pill'>Pill</Badge>
      <Badge shape='rounded'>Rounded</Badge>
    </div>
  )
}
```

### With Dot

```tsx
import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

const badges = [
  { variant: 'success', label: 'Active' },
  { variant: 'warning', label: 'Pending' },
  { variant: 'info', label: 'New' },
  { variant: 'destructive', label: 'Error' },
  { variant: 'secondary', label: 'Inactive' },
] as const

export default function WithDotExample() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-2'>
        {badges.map(({ variant, label }) => (
          <Badge key={variant} variant={variant} appearance='outline'>
            <BadgeDot />
            {label}
          </Badge>
        ))}
      </div>
      <div className='flex flex-wrap gap-2'>
        {badges.map(({ variant, label }) => (
          <Badge
            key={variant}
            variant={variant}
            appearance='outline'
            className='relative'
          >
            <BadgeDot className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 animate-ping' />
            <BadgeDot className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2' />
            {label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
```

### With Icon

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from 'lucide-react'

export default function WithIconExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='success'>
        <CheckCircle2Icon />
        Completed
      </Badge>
      <Badge variant='info'>
        <InfoIcon />
        Information
      </Badge>
      <Badge variant='warning'>
        <AlertTriangleIcon />
        Warning
      </Badge>
    </div>
  )
}
```

### With Button

```tsx
import { Badge, BadgeButton } from '@lglab/compose-ui/badge'
import { XIcon } from 'lucide-react'

export default function WithButtonExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='default'>
        Label
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='success'>
        Success
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='info' appearance='light'>
        Info
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
      <Badge variant='warning' appearance='outline'>
        Warning
        <BadgeButton aria-label='Remove'>
          <XIcon />
        </BadgeButton>
      </Badge>
    </div>
  )
}
```

### Appearances

```tsx
import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

export default function AppearancesExample() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Default (Solid)</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='default'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='default'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='default'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='default'>
            Success
          </Badge>
          <Badge variant='warning' appearance='default'>
            Warning
          </Badge>
          <Badge variant='info' appearance='default'>
            Info
          </Badge>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Light</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='light'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='light'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='light'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='light'>
            Success
          </Badge>
          <Badge variant='warning' appearance='light'>
            Warning
          </Badge>
          <Badge variant='info' appearance='light'>
            Info
          </Badge>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Outline</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='outline'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='outline'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='outline'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='outline'>
            Success
          </Badge>
          <Badge variant='warning' appearance='outline'>
            Warning
          </Badge>
          <Badge variant='info' appearance='outline'>
            Info
          </Badge>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Ghost</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='ghost'>
            <BadgeDot />
            Default
          </Badge>
          <Badge variant='secondary' appearance='ghost'>
            <BadgeDot />
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='ghost'>
            <BadgeDot />
            Destructive
          </Badge>
          <Badge variant='success' appearance='ghost'>
            <BadgeDot />
            Success
          </Badge>
          <Badge variant='warning' appearance='ghost'>
            <BadgeDot />
            Warning
          </Badge>
          <Badge variant='info' appearance='ghost'>
            <BadgeDot />
            Info
          </Badge>
        </div>
      </div>
    </div>
  )
}
```

### Custom Colors

```tsx
import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

export default function CustomColorsExample() {
  return (
    <div className='flex flex-col gap-6'>
      {/* Default (solid) appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Default (Solid)</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='default'
            className='bg-purple-600 text-white'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-pink-500 text-white'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-indigo-600 text-white'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-teal-600 text-white'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-amber-600 text-white'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Light appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Light</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='light'
            className='bg-purple-500/10 text-purple-600 dark:text-purple-400'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-pink-500/10 text-pink-600 dark:text-pink-400'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-teal-500/10 text-teal-600 dark:text-teal-400'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-amber-500/10 text-amber-600 dark:text-amber-400'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Outline appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Outline</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='outline'
            className='border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-pink-500 bg-pink-500/10 text-pink-600 dark:text-pink-400'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Ghost appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Ghost</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-purple-600 dark:text-purple-400'
          >
            <BadgeDot />
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-pink-600 dark:text-pink-400'
          >
            <BadgeDot />
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-indigo-600 dark:text-indigo-400'
          >
            <BadgeDot />
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-teal-600 dark:text-teal-400'
          >
            <BadgeDot />
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-amber-600 dark:text-amber-400'
          >
            <BadgeDot />
            Amber
          </Badge>
        </div>
      </div>
    </div>
  )
}
```

