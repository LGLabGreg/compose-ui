import { Input } from '@lglab/compose-ui/input'

export default function DefaultExample() {
  return (
    <div className='flex flex-col gap-4'>
      <label className='flex flex-col gap-1'>
        <span className='text-sm font-medium text-foreground'>Name</span>
        <Input placeholder='Enter your name' />
      </label>
      <label className='flex flex-col gap-1'>
        <span className='text-sm font-medium text-foreground'>Email</span>
        <Input type='email' placeholder='Enter your email' />
      </label>
      <label className='flex flex-col gap-1'>
        <span className='text-sm font-medium text-foreground'>Password</span>
        <Input type='password' placeholder='Enter your password' />
      </label>
    </div>
  )
}
