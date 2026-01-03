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
        <DialogTrigger>Small</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='sm'>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
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
            <DialogTitle>Default Dialog</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
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
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
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
            <DialogTitle>Extra Large Dialog</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
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
            <DialogDescription>
              Nam sed enim a eros eleifend accumsan. Morbi ac risus enim. Praesent in ante
              euismod, laoreet nisl quis, maximus nisl. Maecenas congue placerat aliquet.
              Praesent sit amet orci sed purus volutpat viverra vel vitae quam. Nulla a
              varius lectus. Aenean in facilisis justo.
            </DialogDescription>
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
