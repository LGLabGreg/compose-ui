import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <div className='flex flex-wrap gap-2'>
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
  )
}
