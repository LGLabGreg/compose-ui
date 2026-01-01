import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function GhostExample() {
  return (
    <div className='flex flex-wrap gap-2'>
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
  )
}
