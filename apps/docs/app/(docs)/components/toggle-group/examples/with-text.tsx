import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default function WithTextExample() {
  return (
    <ToggleGroupRoot defaultValue={['bold']}>
      <ToggleGroupItem value='bold' aria-label='Bold'>
        <BoldIcon />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic'>
        <ItalicIcon />
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline'>
        <UnderlineIcon />
        Underline
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
