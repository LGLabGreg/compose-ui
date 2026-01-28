# Button

A versatile button component with multiple variants, sizes, and states including loading indicators.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Button } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      <Button size='sm'>Small</Button>
      <Button>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button size='icon'>
        <TrashIcon />
      </Button>
      <Button size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}
```

### Secondary

```tsx
import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function SecondaryExample() {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      <Button variant='secondary' size='sm'>
        Small
      </Button>
      <Button variant='secondary'>Default</Button>
      <Button variant='secondary' size='lg'>
        Large
      </Button>
      <Button variant='secondary' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' disabled>
        Disabled
      </Button>
    </div>
  )
}
```

### Outline

```tsx
import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function OutlineExample() {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      <Button variant='outline' size='sm'>
        Small
      </Button>
      <Button variant='outline'>Default</Button>
      <Button variant='outline' size='lg'>
        Large
      </Button>
      <Button variant='outline' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='outline' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='outline' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='outline' disabled>
        Disabled
      </Button>
    </div>
  )
}
```

### Destructive

```tsx
import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function DestructiveExample() {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      <Button variant='destructive' size='sm'>
        Small
      </Button>
      <Button variant='destructive'>Default</Button>
      <Button variant='destructive' size='lg'>
        Large
      </Button>
      <Button variant='destructive' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' disabled>
        Disabled
      </Button>
    </div>
  )
}
```

### Ghost

```tsx
import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function GhostExample() {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      <Button variant='ghost' size='sm'>
        Small
      </Button>
      <Button variant='ghost'>Default</Button>
      <Button variant='ghost' size='lg'>
        Large
      </Button>
      <Button variant='ghost' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' disabled>
        Disabled
      </Button>
    </div>
  )
}
```

### Loading

```tsx
import { Button } from '@lglab/compose-ui/button'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'

export default function LoadingExample() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className='flex gap-2'>
      <Button disabled={loading} focusableWhenDisabled onClick={handleClick}>
        {loading ? (
          <div className='flex items-center gap-2'>
            <LoaderCircle className='animate-spin' /> Loading...
          </div>
        ) : (
          'Submit'
        )}
      </Button>
    </div>
  )
}
```

### As Link

```tsx
import { Button } from '@lglab/compose-ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function AsLinkExample() {
  return (
    <div className='flex gap-2'>
      <Button
        render={
          <Link href='https://github.com/LGLabGreg/compose-ui'>
            <Github />
            Github
          </Link>
        }
        nativeButton={false}
      />
    </div>
  )
}
```

## Resources

- [Base UI Button Documentation](https://base-ui.com/react/components/button)
- [API Reference](https://base-ui.com/react/components/button#api-reference)
