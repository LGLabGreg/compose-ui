'use client'

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
