import { Toggle } from '@lglab/compose-ui'
import { BoldIcon } from 'lucide-react'

export default function WithTextExample() {
  return (
    <Toggle aria-label='Toggle bold'>
      <BoldIcon />
      Bold
    </Toggle>
  )
}
