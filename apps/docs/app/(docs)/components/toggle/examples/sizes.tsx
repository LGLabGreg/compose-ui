import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex items-center gap-2'>
      <Toggle size='sm' aria-label='Toggle bold'>
        <BoldIcon className='size-3.5' />
      </Toggle>
      <Toggle aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <Toggle size='lg' aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
