'use client'

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function AppearancesExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='info' appearance='default'>
        <AlertContent>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>Light background with colored text.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' appearance='outline'>
        <AlertContent>
          <AlertTitle>Outline</AlertTitle>
          <AlertDescription>Border with light background.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info' appearance='filled'>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>Solid background with white text.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
