import { Button } from '@lglab/compose-ui'
import { Github } from 'lucide-react'
import Link from 'next/link'

import { Logo } from './logo'

export default function MainNav() {
  return (
    <header className='flex flex-1 border-b items-center py-3 px-4 bg-background'>
      <div className='container max-w-5xl mx-auto flex items-center gap-6'>
        <Logo />
        <nav>
          <ul className='flex gap-4 text-sm'>
            <li>
              <Link href='/overview/quick-start'>Get Started</Link>
            </li>
            <li>
              <Link href='/components/accordion'>Components</Link>
            </li>
          </ul>
        </nav>
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
