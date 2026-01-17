import { Button } from '@lglab/compose-ui/button'
import { TrashIcon } from 'lucide-react'

export default function OutlineExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button variant='outline' size='sm'>
        Small
      </Button>
      <Button variant='outline'>Default</Button>
      <Button variant='outline' size='lg'>
        Large
      </Button>
      <Button variant='outline' size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button variant='outline' size='icon'>
        <TrashIcon />
      </Button>
      <Button variant='outline' size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button variant='outline' disabled>
        Disabled
      </Button>
    </div>
  )
}
