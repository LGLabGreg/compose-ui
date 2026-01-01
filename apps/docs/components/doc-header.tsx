'use client'

import { Button } from '@lglab/compose-ui'
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerFooter,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from '@lglab/compose-ui'
import { Github, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { DocsNavigation } from './docs-navigation'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export function DocHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex h-14 items-center border-b px-6 bg-background'>
      <Link href='/' className='flex items-center'>
        <Logo />
      </Link>
      <div className='flex items-center gap-1 ml-auto'>
        <ThemeToggle />
        <Button
          variant='ghost'
          size='icon'
          render={
            <a href='https://github.com/LGLabGreg/compose-ui' target='_blank'>
              <Github className='size-5' />
            </a>
          }
          nativeButton={false}
        />
        <DrawerRoot open={open} onOpenChange={setOpen}>
          <DrawerTrigger className='md:hidden' size='icon-sm' variant='ghost'>
            <Menu />
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerBackdrop />
            <DrawerPopup className='w-full' side='right'>
              <DocsNavigation closeDrawer={() => setOpen(false)} />
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerPopup>
          </DrawerPortal>
        </DrawerRoot>
      </div>
    </header>
  )
}
