'use client'

import { CardRoot, CardTitle } from '@lglab/compose-ui/card'

export default function CardVariants() {
  return (
    <div className='flex gap-4'>
      <CardRoot variant='default' className='w-40 p-4'>
        <CardTitle className='text-sm'>Default</CardTitle>
      </CardRoot>
      <CardRoot variant='outline' className='w-40 p-4'>
        <CardTitle className='text-sm'>Outline</CardTitle>
      </CardRoot>
      <CardRoot variant='elevated' className='w-40 p-4'>
        <CardTitle className='text-sm'>Elevated</CardTitle>
      </CardRoot>
    </div>
  )
}
