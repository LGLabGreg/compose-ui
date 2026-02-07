'use client'

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function DefaultExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='default'>
        <AlertContent>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>This is a default alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='destructive'>
        <AlertContent>
          <AlertTitle>Destructive</AlertTitle>
          <AlertDescription>This is a destructive alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='success'>
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>This is a success alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='warning'>
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>This is a warning alert message.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info'>
        <AlertContent>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an info alert message.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
