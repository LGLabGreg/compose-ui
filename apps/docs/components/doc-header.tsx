import { Button } from '@lglab/compose-ui'
import { Github } from 'lucide-react'
import Link from 'next/link'

import { Logo } from './logo'

export function DocHeader() {
  return (
    <header className='flex h-14 items-center justify-between border-b px-6 bg-background'>
      <Link href='/' className='flex items-center'>
        <Logo />
      </Link>
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
    </header>
  )
}
