'use client'

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function SizesExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='info' size='sm'>
        <AlertContent>
          <AlertTitle>Small Alert</AlertTitle>
          <AlertDescription>This is a small alert with compact padding.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' size='md'>
        <AlertContent>
          <AlertTitle>Medium Alert</AlertTitle>
          <AlertDescription>This is the default medium alert.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' size='lg'>
        <AlertContent>
          <AlertTitle>Large Alert</AlertTitle>
          <AlertDescription>This is a large alert with bigger padding.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
