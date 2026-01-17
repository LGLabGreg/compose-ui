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

  const showMultipleToasts = () => {
    toastManager.add({
      title: 'First Notification',
      description: 'This is the first toast message.',
    })
    setTimeout(() => {
      toastManager.add({
        title: 'Second Notification',
        description: 'This is the second toast message.',
      })
    }, 500)
    setTimeout(() => {
      toastManager.add({
        title: 'Third Notification',
        description: 'This is the third toast message.',
      })
    }, 1000)
  }

  return (
    <>
      <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>
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

export default function StackedExample() {
  return (
    <ToastProvider limit={3}>
      <ToastDemo />
    </ToastProvider>
  )
}
