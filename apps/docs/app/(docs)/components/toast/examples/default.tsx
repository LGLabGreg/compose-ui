'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

function ToastDemo() {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    toastManager.add({
      title: 'Event Created',
      description: 'Your event has been scheduled successfully.',
    })
  }

  return (
    <>
      <Button onClick={showToast}>Show Toast</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
            </ToastContent>
            <ToastClose aria-label='Close'>
              <X className='size-4' />
            </ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

export default function DefaultExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
