# Toast

A notification message that appears temporarily to provide feedback.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Toast } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

function ToastDemo() {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    toastManager.add({
      title: 'Event Created',
      description: 'Your event has been scheduled successfully.',
    })
  }

  return (
    <>
      <Button onClick={showToast}>Show Toast</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function DefaultExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
```

### With Action

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

function ToastDemo() {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    const toastId = toastManager.add({
      title: 'File Deleted',
      description: 'The file has been moved to trash.',
      type: 'success',
      actionProps: {
        children: 'Undo',
        onClick: () => {
          toastManager.close(toastId)
          toastManager.add({
            title: 'File Restored',
            description: 'The file has been restored from trash.',
          })
        },
      },
    })
  }

  return (
    <>
      <Button onClick={showToast}>Delete File</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
              <ToastAction />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function WithActionExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
```

### Promise Toast

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

function ToastDemo() {
  const toastManager = Toast.useToastManager()

  const saveData = () => {
    const promise = new Promise<{ message: string }>((resolve) => {
      setTimeout(() => resolve({ message: 'Data saved!' }), 2000)
    })

    toastManager.promise(promise, {
      loading: 'Saving...',
      success: (data) => data.message,
      error: 'Failed to save',
    })
  }

  return (
    <>
      <Button onClick={saveData}>Save Data</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function PromiseExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
```

### Stacked Toasts

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

function ToastDemo() {
  const toastManager = Toast.useToastManager()

  const showMultipleToasts = () => {
    toastManager.add({
      title: 'First Notification',
      description: 'This is the first toast message.',
    })
    setTimeout(() => {
      toastManager.add({
        title: 'Second Notification',
        description: 'This is the second toast message.',
      })
    }, 500)
    setTimeout(() => {
      toastManager.add({
        title: 'Third Notification',
        description: 'This is the third toast message.',
      })
    }, 1000)
  }

  return (
    <>
      <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function StackedExample() {
  return (
    <ToastProvider limit={3}>
      <ToastDemo />
    </ToastProvider>
  )
}
```

### Custom Positions

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  type ToastViewportProps,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

type Position = NonNullable<ToastViewportProps['position']>

function ToastDemo({ position }: { position: Position }) {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    toastManager.add({
      title: `Toast from ${position}`,
      description: 'This toast appears in a custom position.',
    })
  }

  return (
    <>
      <Button onClick={showToast} variant='outline' size='sm'>
        {position}
      </Button>
      <ToastViewport position={position}>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function PositionsExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <ToastProvider>
        <ToastDemo position='top-left' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='top-center' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='top-right' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-left' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-center' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-right' />
      </ToastProvider>
    </div>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/toast)
