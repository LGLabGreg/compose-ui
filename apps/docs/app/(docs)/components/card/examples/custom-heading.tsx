'use client'

import { CardDescription, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'

export default function CardWithCustomHeading() {
  return (
    <CardRoot className='w-72'>
      <CardHeader>
        <CardTitle as='h2' className='text-xl'>
          Page Title Card
        </CardTitle>
        <CardDescription>Using h2 instead of the default h3.</CardDescription>
      </CardHeader>
    </CardRoot>
  )
}
