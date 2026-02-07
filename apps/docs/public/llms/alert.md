# Alert

A composable alert component for displaying important messages with multiple variants, appearances, and sizes.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertAction, AlertClose } from '@lglab/compose-ui'
```

## Examples

### Variants

```tsx
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function DefaultExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='default'>
        <AlertContent>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>This is a default alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='destructive'>
        <AlertContent>
          <AlertTitle>Destructive</AlertTitle>
          <AlertDescription>This is a destructive alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='success'>
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>This is a success alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='warning'>
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>This is a warning alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info'>
        <AlertContent>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an info alert message.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
```

### Appearances

```tsx
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function AppearancesExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='info' appearance='default'>
        <AlertContent>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>Light background with colored text.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' appearance='outline'>
        <AlertContent>
          <AlertTitle>Outline</AlertTitle>
          <AlertDescription>Border with light background.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' appearance='filled'>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>Solid background with white text.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
```

### Sizes

```tsx
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function SizesExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='info' size='sm'>
        <AlertContent>
          <AlertTitle>Small Alert</AlertTitle>
          <AlertDescription>This is a small alert with compact padding.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' size='md'>
        <AlertContent>
          <AlertTitle>Medium Alert</AlertTitle>
          <AlertDescription>This is the default medium alert.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' size='lg'>
        <AlertContent>
          <AlertTitle>Large Alert</AlertTitle>
          <AlertDescription>This is a large alert with bigger padding.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
```

### With Icon

```tsx
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@lglab/compose-ui/alert'
import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  ShieldAlertIcon,
} from 'lucide-react'

export default function WithIconExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='success'>
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info'>
        <AlertIcon>
          <InfoIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This feature is currently in beta.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='warning'>
        <AlertIcon>
          <AlertTriangleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Your session is about to expire.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='destructive'>
        <AlertIcon>
          <ShieldAlertIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
```

### With Close

```tsx
import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'
import { XIcon } from 'lucide-react'
import { useState } from 'react'

export default function WithCloseExample() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return (
      <button
        type='button'
        className='text-sm text-primary underline'
        onClick={() => setVisible(true)}
      >
        Show alert again
      </button>
    )
  }

  return (
    <Alert variant='warning'>
      <AlertContent>
        <AlertTitle>Dismissible Alert</AlertTitle>
        <AlertDescription>Click the close button to dismiss this alert.</AlertDescription>
      </AlertContent>
      <AlertClose onClick={() => setVisible(false)}>
        <XIcon className='size-4' />
      </AlertClose>
    </Alert>
  )
}
```

### With Action

```tsx
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function WithActionExample() {
  return (
    <Alert variant='info'>
      <AlertContent>
        <AlertTitle>Update Available</AlertTitle>
        <AlertDescription>
          A new version is available. Update now to get the latest features.
        </AlertDescription>
      </AlertContent>
      <AlertAction>
        <button
          type='button'
          className='rounded-md bg-info px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90'
        >
          Update
        </button>
      </AlertAction>
    </Alert>
  )
}
```

