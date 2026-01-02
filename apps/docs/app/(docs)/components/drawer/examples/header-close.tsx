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

export default function HeaderCloseExample() {
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
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>Manage your account preferences.</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p className='text-sm'>
              This is a basic drawer that slides in from the right side of the screen.
            </p>
          </DrawerContent>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
