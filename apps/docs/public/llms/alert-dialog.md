# Alert Dialog

A dialog that requires a user response to proceed.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { AlertDialogRoot, AlertDialogTrigger, AlertDialogPortal, AlertDialogBackdrop, AlertDialogViewport, AlertDialogPopup, AlertDialogTitle, AlertDialogDescription, AlertDialogClose } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger variant='destructive'>Discard draft</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You can&apos;t undo this action.
          </AlertDialogDescription>
          <div className='mt-6 flex justify-end gap-2'>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose variant='destructive'>Discard</AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  )
}
```

### Close confirmation

```tsx
import {
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  Button,
} from '@lglab/compose-ui'
import {
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui'
import { useState } from 'react'

export default function CloseConfirmationExample() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')

  return (
    <DialogRoot
      open={dialogOpen}
      onOpenChange={(open) => {
        if (!open && textareaValue) {
          setConfirmationOpen(true)
        } else {
          setTextareaValue('')
          setDialogOpen(open)
        }
      }}
    >
      <DialogTrigger>Send Message</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>New Message</DialogTitle>
          <form
            className='mt-4 flex flex-col gap-6'
            onSubmit={(event) => {
              event.preventDefault()
              setDialogOpen(false)
            }}
          >
            <textarea
              required
              className='min-h-48 w-full rounded-md border px-3.5 py-2'
              placeholder="What's on your mind?"
              value={textareaValue}
              onChange={(event) => setTextareaValue(event.target.value)}
            />
            <div className='flex justify-end gap-2'>
              <DialogClose>Cancel</DialogClose>
              <Button type='submit'>Send</Button>
            </div>
          </form>
        </DialogPopup>
      </DialogPortal>

      <AlertDialogRoot open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogPortal>
          <AlertDialogPopup>
            <AlertDialogTitle>Discard message?</AlertDialogTitle>
            <AlertDialogDescription>Your tweet will be lost.</AlertDialogDescription>
            <div className='mt-6 flex items-center justify-end gap-2'>
              <AlertDialogClose>Go back</AlertDialogClose>
              <AlertDialogClose
                variant='destructive'
                onClick={() => {
                  setConfirmationOpen(false)
                  setDialogOpen(false)
                }}
              >
                Discard
              </AlertDialogClose>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>
    </DialogRoot>
  )
}
```

### Detached triggers

```tsx
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui'

const demoAlertDialog = AlertDialog.createHandle()

export default function DetachedTriggersExample() {
  return (
    <>
      <AlertDialogTrigger handle={demoAlertDialog} variant='destructive'>
        Discard draft
      </AlertDialogTrigger>

      <AlertDialogRoot handle={demoAlertDialog}>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Discard draft?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            <div className='mt-6 flex justify-end gap-2'>
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogClose variant='destructive'>Discard</AlertDialogClose>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>
    </>
  )
}
```

### Multiple triggers

```tsx
import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui'

export default function MultipleTriggersExample() {
  return (
    <AlertDialogRoot>
      <div className='flex flex-wrap gap-2'>
        <AlertDialogTrigger variant='destructive'>Delete Item 1</AlertDialogTrigger>
        <AlertDialogTrigger variant='destructive'>Delete Item 2</AlertDialogTrigger>
        <AlertDialogTrigger variant='destructive'>Delete Item 3</AlertDialogTrigger>
      </div>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Delete item?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
          <div className='mt-6 flex justify-end gap-2'>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose variant='destructive'>Delete</AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  )
}
```

### Controlled mode with multiple triggers

```tsx
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui'
import * as React from 'react'

const demoAlertDialog = AlertDialog.createHandle<{ itemName: string }>()

export default function ControlledMultipleExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 1' }}
          variant='destructive'
        >
          Delete Item 1
        </AlertDialogTrigger>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 2' }}
          variant='destructive'
        >
          Delete Item 2
        </AlertDialogTrigger>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 3' }}
          variant='destructive'
        >
          Delete Item 3
        </AlertDialogTrigger>
      </div>

      <AlertDialogRoot handle={demoAlertDialog} open={open} onOpenChange={setOpen}>
        {({ payload: currentPayload }) => {
          const payload = currentPayload as { itemName: string } | undefined
          return (
            <AlertDialogPortal>
              <AlertDialogBackdrop />
              <AlertDialogPopup>
                <AlertDialogTitle>Delete item?</AlertDialogTitle>
                <AlertDialogDescription>
                  {payload && 'itemName' in payload
                    ? `Are you sure you want to delete ${payload.itemName}? This action cannot be undone.`
                    : 'This action cannot be undone. This will permanently delete the item.'}
                </AlertDialogDescription>
                <div className='mt-6 flex justify-end gap-2'>
                  <AlertDialogClose>Cancel</AlertDialogClose>
                  <AlertDialogClose variant='destructive'>Delete</AlertDialogClose>
                </div>
              </AlertDialogPopup>
            </AlertDialogPortal>
          )
        }}
      </AlertDialogRoot>
    </>
  )
}
```

## Resources

- [Base UI Alert Dialog Documentation](https://base-ui.com/react/components/alert-dialog)
- [API Reference](https://base-ui.com/react/components/alert-dialog#api-reference)
