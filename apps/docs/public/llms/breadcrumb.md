# Breadcrumb

A composable breadcrumb navigation component that shows the user

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'

export default function DefaultExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
```

### Custom Separator

```tsx
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import { ChevronRight } from 'lucide-react'

export default function WithCustomSeparatorExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
```

### With Ellipsis

```tsx
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'

export default function WithEllipsisExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
```

### With Icon

```tsx
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import { HomeIcon } from 'lucide-react'

export default function WithIconExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>
          <HomeIcon className='size-4' />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
```

### With Next.js Link

```tsx
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import Link from 'next/link'

export default function WithNextLinkExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink render={<Link href='/' />}>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink render={<Link href='/components' />}>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
```

