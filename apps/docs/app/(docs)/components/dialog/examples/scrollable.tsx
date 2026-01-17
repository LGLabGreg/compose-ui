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
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function ScrollableExample() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className='flex flex-col h-[min(32rem,calc(100vh-2rem))]'>
          <DialogHeader>
            <DialogTitle>Scrollable Dialog</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
          </DialogHeader>
          <div className='flex-1 min-h-0'>
            <ScrollAreaRoot className='h-full'>
              <ScrollAreaViewport>
                <ScrollAreaContent>
                  <div className='space-y-4'>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <p key={i}>
                        Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit.
                        Nulla bibendum est aliquam mauris laoreet interdum.
                      </p>
                    ))}
                  </div>
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar orientation='vertical'>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollAreaRoot>
          </div>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
