import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function GhostExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button variant='ghost' size='sm'>
        Small
      </Button>
      <Button variant='ghost'>Default</Button>
      <Button variant='ghost' size='lg'>
        Large
      </Button>
      <Button variant='ghost' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='ghost' disabled>
        Disabled
      </Button>
      <Button variant='ghost' loading loadingText='Loading...'>
        Button
      </Button>
    </div>
  )
}
