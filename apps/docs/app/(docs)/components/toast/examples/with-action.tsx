'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  Toast,
  ToastAction,
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
    const toastId = toastManager.add({
      title: 'File Deleted',
      description: 'The file has been moved to trash.',
      type: 'success',
      actionProps: {
        children: 'Undo',
        onClick: () => {
          toastManager.close(toastId)
          toastManager.add({
            title: 'File Restored',
            description: 'The file has been restored from trash.',
          })
        },
      },
    })
  }

  return (
    <>
      <Button onClick={showToast}>Delete File</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle />
              <ToastDescription />
              <ToastAction />
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

export default function WithActionExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
