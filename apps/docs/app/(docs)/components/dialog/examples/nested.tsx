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
} from '@lglab/compose-ui/dialog'

export default function NestedExample() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogRoot>
              <DialogTrigger>Nested Dialog</DialogTrigger>
              <DialogPortal>
                <DialogBackdrop />
                <DialogPopup>
                  <DialogTitle>Nested Dialog</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    quos.
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </DialogRoot>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
