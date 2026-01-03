import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function DestructiveExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button variant='destructive' size='sm'>
        Small
      </Button>
      <Button variant='destructive'>Default</Button>
      <Button variant='destructive' size='lg'>
        Large
      </Button>
      <Button variant='destructive' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='destructive' disabled>
        Disabled
      </Button>
      <Button variant='destructive' loading loadingText='Loading...'>
        Button
      </Button>
    </div>
  )
}
