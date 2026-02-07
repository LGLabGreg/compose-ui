'use client'

import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'

export default function WithActionExample() {
  return (
    <Alert variant='info'>
      <AlertContent>
        <AlertTitle>Update Available</AlertTitle>
        <AlertDescription>
          A new version is available. Update now to get the latest features.
        </AlertDescription>
      </AlertContent>
      <AlertAction>
        <button
          type='button'
          className='rounded-md bg-info px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90'
        >
          Update
        </button>
      </AlertAction>
    </Alert>
  )
}
