# Avatar

An easily stylable avatar component for displaying user profile pictures, initials, or fallback content.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot, AvatarStack } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <div className='flex gap-4'>
      <AvatarRoot size='sm'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Sarah Chen'
        />
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
          alt='Marcus Johnson'
        />
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80'
          alt='Emma Wilson'
        />
        <AvatarFallback>EW</AvatarFallback>
      </AvatarRoot>
    </div>
  )
}
```

### Fallback

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui'

export default function FallbackExample() {
  return (
    <div className='flex gap-4'>
      <AvatarRoot size='sm'>
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage src='invalid-url' alt='Failed Image' />
        <AvatarFallback>FI</AvatarFallback>
      </AvatarRoot>
    </div>
  )
}
```

### Stack

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot, AvatarStack } from '@lglab/compose-ui'

export default function StackExample() {
  return (
    <AvatarStack aria-label='Project contributors'>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Sarah Chen'
        />
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
          alt='Marcus Johnson'
        />
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80'
          alt='Emma Wilson'
        />
        <AvatarFallback>EW</AvatarFallback>
      </AvatarRoot>
    </AvatarStack>
  )
}
```

### Stack with overflow

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot, AvatarStack } from '@lglab/compose-ui'

export default function StackOverflowExample() {
  return (
    <AvatarStack aria-label='Project contributors' maxVisible={3}>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Sarah Chen'
        />
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
          alt='Marcus Johnson'
        />
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80'
          alt='Emma Wilson'
        />
        <AvatarFallback>EW</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>AB</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>CD</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>EF</AvatarFallback>
      </AvatarRoot>
    </AvatarStack>
  )
}
```

## Resources

- [Base UI Avatar Documentation](https://base-ui.com/react/components/avatar)
- [API Reference](https://base-ui.com/react/components/avatar#api-reference)
