'use client'

import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui'
import { MailIcon } from 'lucide-react'
import * as React from 'react'

export default function FormDialogExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger className='gap-1.5'>
        <MailIcon className='size-4' />
        Contact Us
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Send a Message</DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            <div className='mt-4 space-y-4'>
              <div>
                <label htmlFor='email' className='mb-1.5 block text-sm font-medium'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  className='w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                />
              </div>
              <div>
                <label htmlFor='message' className='mb-1.5 block text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  placeholder='How can we help?'
                  rows={4}
                  className='w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose variant='ghost'>Cancel</DialogClose>
              <button
                type='submit'
                className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                Send Message
              </button>
            </DialogFooter>
          </form>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
