'use client'

import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>You are all caught up. Good job!</DialogDescription>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
