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

export default function BasicExample() {
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
  )
}
