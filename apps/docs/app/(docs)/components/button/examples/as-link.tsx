import { Button } from '@lglab/compose-ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function AsLinkExample() {
  return (
    <div className='flex gap-2'>
      <Button
        render={
          <Link href='https://github.com/LGLabGreg/compose-ui'>
            <Github />
            Github
          </Link>
        }
        nativeButton={false}
      />
    </div>
  )
}
