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
  type ToastViewportProps,
} from '@lglab/compose-ui/toast'
import { X } from 'lucide-react'

type Position = NonNullable<ToastViewportProps['position']>

function ToastDemo({ position }: { position: Position }) {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    toastManager.add({
      title: `Toast from ${position}`,
      description: 'This toast appears in a custom position.',
    })
  }

  return (
    <>
      <Button onClick={showToast} variant='outline' size='sm'>
        {position}
      </Button>
      <ToastViewport position={position}>
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

export default function PositionsExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <ToastProvider>
        <ToastDemo position='top-left' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='top-center' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='top-right' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-left' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-center' />
      </ToastProvider>
      <ToastProvider>
        <ToastDemo position='bottom-right' />
      </ToastProvider>
    </div>
  )
}
