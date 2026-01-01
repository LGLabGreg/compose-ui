import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function DestructiveExample() {
  return (
    <div className='flex flex-wrap gap-2'>
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
  )
}
