import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <div className='flex gap-4'>
      <Toggle disabled aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <Toggle disabled defaultPressed aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
