import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button size='sm'>Small</Button>
      <Button>Default</Button>
      <Button size='lg'>Large</Button>
      <Button loading loadingText='Loading...'>
        Button
      </Button>
      <Button size='icon'>
        <TrashIcon />
      </Button>
    </div>
  )
}
