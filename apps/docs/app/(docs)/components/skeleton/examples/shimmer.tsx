'use client'

import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function ShimmerExample() {
  return (
    <div className='flex items-center gap-4'>
      <Skeleton animation='shimmer' className='size-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton animation='shimmer' className='h-4 w-[230px]' />
        <Skeleton animation='shimmer' className='h-4 w-[190px]' />
      </div>
    </div>
  )
}
