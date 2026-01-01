import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function SecondaryExample() {
  return (
    <div className='flex flex-wrap gap-2'>
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
  )
}
