'use client'

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@lglab/compose-ui/alert'
import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  ShieldAlertIcon,
} from 'lucide-react'

export default function WithIconExample() {
  return (
    <div className='flex flex-col flex-1 gap-3'>
      <Alert variant='success'>
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='info'>
        <AlertIcon>
          <InfoIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This feature is currently in beta.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='warning'>
        <AlertIcon>
          <AlertTriangleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Your session is about to expire.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant='destructive'>
        <AlertIcon>
          <ShieldAlertIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
