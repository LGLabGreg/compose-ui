import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function DisabledExample() {
  return (
    <ToggleGroupRoot disabled defaultValue={['left']}>
      <ToggleGroupItem value='left' aria-label='Align left'>
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center'>
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right'>
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
