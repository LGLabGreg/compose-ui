import { Button } from '@lglab/compose-ui/button'
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

export default function FooterExample() {
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
          <DrawerContent className='flex-1'>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
          <DrawerFooter className='flex gap-2 justify-end'>
            <DrawerClose>Cancel</DrawerClose>
            <Button variant='destructive'>Delete</Button>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
