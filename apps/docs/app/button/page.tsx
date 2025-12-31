import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'

export default function ButtonComponent() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <main className='space-y-5'>
        <div className='flex gap-2'>
          <Button size='sm'>Button</Button>
          <Button>Button</Button>
          <Button size='lg'>Button</Button>
          <Button loading loadingText='Loading...'>
            Button
          </Button>
          <Button size='icon'>
            <TrashIcon />
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button variant='secondary' size='sm'>
            Button
          </Button>
          <Button variant='secondary'>Button</Button>
          <Button variant='secondary' size='lg'>
            Button
          </Button>
          <Button variant='secondary' loading loadingText='Loading...'>
            Button
          </Button>
          <Button variant='secondary' size='icon'>
            <TrashIcon />
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button variant='outline' size='sm'>
            Button
          </Button>
          <Button variant='outline'>Button</Button>
          <Button variant='outline' size='lg'>
            Button
          </Button>
          <Button variant='outline' loading loadingText='Loading...'>
            Button
          </Button>
          <Button variant='outline' size='icon'>
            <TrashIcon />
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button variant='destructive' size='sm'>
            Button
          </Button>
          <Button variant='destructive'>Button</Button>
          <Button variant='destructive' size='lg'>
            Button
          </Button>
          <Button variant='destructive' loading loadingText='Loading...'>
            Button
          </Button>
          <Button variant='destructive' size='icon'>
            <TrashIcon />
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button variant='ghost' size='sm'>
            Button
          </Button>
          <Button variant='ghost'>Button</Button>
          <Button variant='ghost' size='lg'>
            Button
          </Button>
          <Button variant='ghost' loading loadingText='Loading...'>
            Button
          </Button>
          <Button variant='ghost' size='icon'>
            <TrashIcon />
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button render={<Link href='/docs'>Link</Link>} nativeButton={false} />
        </div>
      </main>
    </div>
  )
}
