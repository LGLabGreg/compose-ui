import { Toggle } from '@lglab/compose-ui/toggle'
import { BoldIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <Toggle aria-label='Toggle bold' size='icon'>
      <BoldIcon />
    </Toggle>
  )
}
