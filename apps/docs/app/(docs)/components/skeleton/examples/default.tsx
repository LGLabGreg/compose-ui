'use client'

import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function DefaultExample() {
  return (
    <div className='flex items-center gap-4'>
      <Skeleton className='size-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[230px]' />
        <Skeleton className='h-4 w-[190px]' />
      </div>
    </div>
  )
}
