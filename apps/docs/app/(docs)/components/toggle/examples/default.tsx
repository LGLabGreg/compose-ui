import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <Toggle aria-label='Toggle bold' size='icon'>
      <BoldIcon />
    </Toggle>
  )
}
