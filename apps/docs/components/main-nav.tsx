'use client'

import { Button } from '@lglab/compose-ui/button'
import { Github } from 'lucide-react'

import { Logo } from './logo'

export default function MainNav() {
  return (
    <header className='flex flex-1 border-b items-center py-3 px-4 bg-background'>
      <div className='container max-w-7xl mx-auto flex items-center gap-6'>
        <Logo />
        <div className='ml-auto'>
          <Button
            variant='ghost'
            size='icon'
            render={
              <a href='https://github.com/LGLabGreg/compose-ui' target='_blank'>
                <Github />
              </a>
            }
            nativeButton={false}
          ></Button>
        </div>
      </div>
    </header>
  )
}
