'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from '@lglab/compose-ui/drawer'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from '@lglab/compose-ui/navigation-menu'
import { Github, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Logo } from './logo'
import { SectionNavigation } from './section-navigation'
import { ThemeColorSelector } from './theme-color-selector'
import { ThemeToggle } from './theme-toggle'

export function DocHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex h-14 items-center border-b px-6 bg-background'>
      <Link href='/' className='flex items-center'>
        <Logo />
      </Link>
      <nav className='ml-6 hidden items-center gap-4 text-sm font-medium md:flex'>
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem value='components'>
              <NavigationMenuLink render={<Link href='/components/accordion' />}>
                Components
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem value='blocks'>
              <NavigationMenuLink render={<Link href='/blocks/statistics' />}>
                Blocks
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      </nav>
      <div className='flex items-center gap-1 ml-auto'>
        <ThemeColorSelector />
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
            <DrawerPopup className='w-full pr-0' side='right'>
              <DrawerClose
                aria-label='Close'
                size='icon-sm'
                className='absolute top-3 right-3 z-10'
              >
                <X className='size-4' />
              </DrawerClose>
              <SectionNavigation closeDrawer={() => setOpen(false)} collapsible={false} />
            </DrawerPopup>
          </DrawerPortal>
        </DrawerRoot>
      </div>
    </header>
  )
}
