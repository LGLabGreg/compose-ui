import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function PressedExample() {
  return (
    <Toggle defaultPressed aria-label='Toggle bold'>
      <BoldIcon />
    </Toggle>
  )
}
