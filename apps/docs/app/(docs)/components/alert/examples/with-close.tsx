'use client'

import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from '@lglab/compose-ui/alert'
import { XIcon } from 'lucide-react'
import { useState } from 'react'

export default function WithCloseExample() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return (
      <button
        type='button'
        className='text-sm text-primary underline'
        onClick={() => setVisible(true)}
      >
        Show alert again
      </button>
    )
  }

  return (
    <Alert variant='warning'>
      <AlertContent>
        <AlertTitle>Dismissible Alert</AlertTitle>
        <AlertDescription>Click the close button to dismiss this alert.</AlertDescription>
      </AlertContent>
      <AlertClose onClick={() => setVisible(false)}>
        <XIcon className='size-4' />
      </AlertClose>
    </Alert>
  )
}
