'use client'

import { CardContent, CardRoot } from '@lglab/compose-ui/card'
import { Skeleton } from '@lglab/compose-ui/skeleton'

export default function CardExample() {
  return (
    <CardRoot className='w-[300px] overflow-hidden'>
      <Skeleton className='h-[125px] w-full' />
      <CardContent className='space-y-2 pt-4'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </CardContent>
    </CardRoot>
  )
}
