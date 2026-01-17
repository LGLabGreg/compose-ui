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

const sides = ['top', 'right', 'bottom', 'left'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      {sides.map((side) => (
        <DrawerRoot key={side}>
          <DrawerTrigger className='capitalize'>{side}</DrawerTrigger>
          <DrawerPortal>
            <DrawerBackdrop />
            <DrawerPopup side={side}>
              <DrawerHeader>
                <DrawerTitle className='capitalize'>{side} Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the {side}.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerContent>
                <p>
                  Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
                  bibendum est aliquam mauris laoreet interdum.
                </p>
              </DrawerContent>
              <DrawerFooter className='flex justify-end'>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerPopup>
          </DrawerPortal>
        </DrawerRoot>
      ))}
    </div>
  )
}
