import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-col items-start gap-4'>
      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='icon-sm'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon-sm'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon-sm'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
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

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='icon-lg'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='icon-lg'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='icon-lg'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </div>
  )
}
