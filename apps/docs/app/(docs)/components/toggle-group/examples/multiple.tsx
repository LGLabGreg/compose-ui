import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default function MultipleExample() {
  return (
    <ToggleGroupRoot multiple defaultValue={['bold']}>
      <ToggleGroupItem value='bold' aria-label='Bold'>
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Italic'>
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Underline'>
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
