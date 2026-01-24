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

export default function SizesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <DialogRoot>
        <DialogTrigger>Small</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='sm'>
            <DialogHeader>
              <DialogTitle>Small Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Large</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='lg'>
            <DialogHeader>
              <DialogTitle>Large Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Extra Large</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='xl'>
            <DialogHeader>
              <DialogTitle>Extra Large Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Full Screen</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='full'>
            <DialogHeader>
              <DialogTitle>Full Screen Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Custom</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup className='w-1/2'>
            <DialogHeader>
              <DialogTitle>Custom Size</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
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
