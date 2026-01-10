import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function OrientationExample() {
  return (
    <ToggleGroupRoot orientation='vertical' defaultValue={['left']}>
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
