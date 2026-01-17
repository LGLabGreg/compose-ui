import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui/toggle-group'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <ToggleGroupRoot disabled defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left' size='icon'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center' size='icon'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right' size='icon'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
