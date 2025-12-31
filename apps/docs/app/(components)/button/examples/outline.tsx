import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function OutlineExample() {
  return (
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
  )
}
