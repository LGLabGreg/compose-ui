import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui/toggle-group'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default function MultipleExample() {
  return (
    <ToggleGroupRoot multiple defaultValue={['bold']}>
      <ToggleGroupItem value='bold' aria-label='Bold' size='icon'>
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic' size='icon'>
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline' size='icon'>
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
