import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'
import { X } from 'lucide-react'

export default function CloseButtonExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerClose
            aria-label='Close'
            size='icon-sm'
            className='absolute top-3 right-3'
          >
            <X className='size-4' />
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p className='text-sm'>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
