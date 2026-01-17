import { Toggle } from '@lglab/compose-ui/toggle'
import { BoldIcon } from 'lucide-react'

export default function PressedExample() {
  return (
    <Toggle defaultPressed aria-label='Toggle bold' size='icon'>
      <BoldIcon />
    </Toggle>
  )
}
