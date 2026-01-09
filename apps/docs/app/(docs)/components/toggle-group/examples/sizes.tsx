import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-col items-start gap-4'>
      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='sm'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='sm'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='sm'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <ToggleGroupRoot defaultValue={['left']}>
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

      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left' size='lg'>
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center' size='lg'>
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right' size='lg'>
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </div>
  )
}
