'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'

export default function FallbackExample() {
  return (
    <div className='flex gap-4'>
      <AvatarRoot size='sm'>
        <AvatarFallback>SC</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>MJ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size='lg'>
        <AvatarImage src='invalid-url' alt='Failed Image' />
        <AvatarFallback>FI</AvatarFallback>
      </AvatarRoot>
    </div>
  )
}
