import { Separator } from '@lglab/compose-ui/separator'

export default function DefaultExample() {
  return (
    <div className='space-y-2'>
      <div>
        <h4 className='font-medium'>Compose UI</h4>
        <p className='text-sm text-muted-foreground'>
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Overview</div>
        <Separator orientation='vertical' />
        <div>Quick Start</div>
        <Separator orientation='vertical' />
        <div>Theming</div>
      </div>
    </div>
  )
}
