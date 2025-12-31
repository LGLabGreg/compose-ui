import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'

import { DocLinks } from '@/components/doc-links'

export default function ButtonComponent() {
  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Button</h1>
        <p className='mt-2 text-muted-foreground'>
          A versatile button component with multiple variants, sizes, and states including
          loading indicators.
        </p>
        <div className='mt-4'>
          <DocLinks component='button' />
        </div>
      </div>

      <div className='space-y-5 rounded-lg border p-6'>
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
      </div>
    </div>
  )
}
