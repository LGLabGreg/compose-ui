import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui/drawer'
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function ScrollableExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent className='flex-1 min-h-0'>
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
          </DrawerContent>
          <DrawerFooter className='flex justify-end'>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
