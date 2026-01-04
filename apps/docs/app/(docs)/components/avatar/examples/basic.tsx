'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <div className='flex gap-4'>
      <AvatarRoot size='sm'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Sarah Chen'
        />
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
          alt='Marcus Johnson'
        />
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80'
          alt='Emma Wilson'
        />
        <AvatarFallback>EW</AvatarFallback>
      </AvatarRoot>
    </div>
  )
}
