import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function SecondaryExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button variant='secondary' size='sm'>
        Small
      </Button>
      <Button variant='secondary'>Default</Button>
      <Button variant='secondary' size='lg'>
        Large
      </Button>
      <Button variant='secondary' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='secondary' disabled>
        Disabled
      </Button>
    </div>
  )
}
