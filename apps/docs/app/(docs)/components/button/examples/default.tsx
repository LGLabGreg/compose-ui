import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button size='sm'>Small</Button>
      <Button>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon-sm'>
        <TrashIcon />
      </Button>
      <Button size='icon'>
        <TrashIcon />
      </Button>
      <Button size='icon-lg'>
        <TrashIcon />
      </Button>
      <Button disabled>Disabled</Button>
      <Button loading loadingText='Loading...'>
        Button
      </Button>
    </div>
  )
}
