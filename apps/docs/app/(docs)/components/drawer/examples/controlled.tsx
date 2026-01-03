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
} from '@lglab/compose-ui'
import { Button } from '@lglab/compose-ui'
import { SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant='outline'>
        <SlidersHorizontal />
        Filters
      </Button>
      <DrawerRoot open={open} onOpenChange={setOpen}>
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
    </>
  )
}
