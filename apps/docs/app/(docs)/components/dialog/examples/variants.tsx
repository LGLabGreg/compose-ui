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

export default function VariantsExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <DialogRoot>
        <DialogTrigger variant='default'>Default</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Default Variant</DialogTitle>
              <DialogDescription>Triggered with default button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='secondary'>Secondary</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Secondary Variant</DialogTitle>
              <DialogDescription>
                Triggered with secondary button style.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='outline'>Outline</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Outline Variant</DialogTitle>
              <DialogDescription>Triggered with outline button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='ghost'>Ghost</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Ghost Variant</DialogTitle>
              <DialogDescription>Triggered with ghost button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </div>
  )
}
