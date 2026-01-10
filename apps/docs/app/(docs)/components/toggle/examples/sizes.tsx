import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle size='icon-sm' aria-label='Toggle bold'>
        <BoldIcon className='size-3.5' />
      </Toggle>
      <Toggle aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
      <Toggle size='icon-lg' aria-label='Toggle bold'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
