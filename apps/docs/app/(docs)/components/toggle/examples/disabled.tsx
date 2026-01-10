import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle disabled aria-label='Toggle bold' size='icon'>
        <BoldIcon />
      </Toggle>
      <Toggle disabled defaultPressed aria-label='Toggle bold' size='icon'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
