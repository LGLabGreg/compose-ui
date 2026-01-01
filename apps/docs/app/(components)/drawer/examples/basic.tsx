'use client'

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
} from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>Manage your account preferences.</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p className='text-sm text-muted-foreground'>
              This is a basic drawer that slides in from the right side of the screen.
            </p>
          </DrawerContent>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
