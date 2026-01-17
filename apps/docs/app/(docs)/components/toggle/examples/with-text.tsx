import { Toggle } from '@lglab/compose-ui/toggle'
import { BoldIcon } from 'lucide-react'

export default function WithTextExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Toggle aria-label='Toggle bold'>
        <BoldIcon />
        Bold
      </Toggle>
      <Toggle aria-label='Toggle bold'>Bold</Toggle>
    </div>
  )
}
