import { Button } from '@lglab/compose-ui'
import { Github } from 'lucide-react'
import Link from 'next/link'

import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export function DocHeader() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b px-6 bg-background'>
      <Link href='/' className='flex items-center'>
        <Logo />
      </Link>
      <div className='flex items-center gap-1'>
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
      </div>
    </header>
  )
}
