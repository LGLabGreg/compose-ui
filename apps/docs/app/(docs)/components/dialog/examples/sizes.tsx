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

export default function SizesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <DialogRoot>
        <DialogTrigger size='sm'>Small</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='sm'>
            <DialogHeader>
              <DialogTitle>Small Dialog</DialogTitle>
              <DialogDescription>
                This is a compact dialog for quick interactions.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose size='sm'>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Default</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Default Dialog</DialogTitle>
              <DialogDescription>
                This is the default sized dialog, suitable for most use cases.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger size='lg'>Large</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='lg'>
            <DialogHeader>
              <DialogTitle>Large Dialog</DialogTitle>
              <DialogDescription>
                This is a large dialog with more space for complex content like forms or
                detailed information.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose size='lg'>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </div>
  )
}
