import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle aria-label='Toggle bold' size='icon-sm'>
        <BoldIcon className='size-3.5' />
      </Toggle>
      <Toggle aria-label='Toggle bold' size='icon'>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label='Toggle bold' size='icon-lg'>
        <BoldIcon />
      </Toggle>
    </div>
  )
}
