# Skeleton

A placeholder component for content that is loading. Use className to define custom shapes and sizes.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Skeleton } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function DefaultExample() {
  return (
    <div className='flex items-center gap-4'>
      <Skeleton className='size-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[230px]' />
        <Skeleton className='h-4 w-[190px]' />
      </div>
    </div>
  )
}
```

### Shimmer Animation

```tsx
import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function ShimmerExample() {
  return (
    <div className='flex items-center gap-4'>
      <Skeleton animation='shimmer' className='size-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton animation='shimmer' className='h-4 w-[230px]' />
        <Skeleton animation='shimmer' className='h-4 w-[190px]' />
      </div>
    </div>
  )
}
```

### Card

```tsx
import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function CardExample() {
  return (
    <CardRoot className='w-[300px] overflow-hidden'>
      <Skeleton className='h-[125px] w-full' />
      <CardContent className='space-y-2 pt-4'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </CardContent>
    </CardRoot>
  )
}
```

### No Animation

```tsx
import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function NoAnimationExample() {
  return (
    <CardRoot className='w-[300px] overflow-hidden'>
      <Skeleton animation='none' className='h-[125px] w-full' />
      <CardContent className='space-y-2 pt-4'>
        <Skeleton animation='none' className='h-4 w-full' />
        <Skeleton animation='none' className='h-4 w-3/4' />
      </CardContent>
    </CardRoot>
  )
}
```

