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

  const saveData = () => {
    const promise = new Promise<{ message: string }>((resolve) => {
      setTimeout(() => resolve({ message: 'Data saved!' }), 2000)
    })

    toastManager.promise(promise, {
      loading: 'Saving...',
      success: (data) => data.message,
      error: 'Failed to save',
    })
  }

  return (
    <>
      <Button onClick={saveData}>Save Data</Button>
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

export default function PromiseExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
