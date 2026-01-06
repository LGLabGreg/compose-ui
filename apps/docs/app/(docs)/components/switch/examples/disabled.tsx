import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui'

export default function DisabledExample() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <SwitchRoot disabled>
          <SwitchThumb />
        </SwitchRoot>
        <span className='text-sm font-medium text-muted-foreground'>
          Disabled unchecked
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <SwitchRoot disabled defaultChecked>
          <SwitchThumb />
        </SwitchRoot>
        <span className='text-sm font-medium text-muted-foreground'>
          Disabled checked
        </span>
      </div>
    </div>
  )
}
