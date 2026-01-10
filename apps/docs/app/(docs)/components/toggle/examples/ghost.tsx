import { Toggle } from '@lglab/compose-ui'
import { Heart } from 'lucide-react'

export default function GhostExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle
        variant='ghost'
        aria-label='Toggle like'
        className='data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500'
      >
        <Heart />
      </Toggle>
    </div>
  )
}
