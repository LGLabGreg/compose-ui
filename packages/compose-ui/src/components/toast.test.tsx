import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './toast'

const ToastDemo = () => {
  const toastManager = Toast.useToastManager()

  const showToast = () => {
    toastManager.add({
      title: 'Test Toast',
      description: 'This is a test toast message.',
    })
  }

  return (
    <>
      <Button onClick={showToast}>Show Toast</Button>
      <ToastViewport>
        {toastManager.toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <ToastContent>
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
            </ToastContent>
            <ToastClose aria-label='Close'>×</ToastClose>
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

describe('Toast', () => {
  it('displays a toast when triggered', async () => {
    const { user } = render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>,
    )

    expect(screen.queryByText('Test Toast')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Show Toast' }))

    await waitFor(() => {
      expect(screen.getByText('Test Toast')).toBeInTheDocument()
    })
    expect(screen.getByText('This is a test toast message.')).toBeInTheDocument()
  })

  it('closes the toast when clicking the close button', async () => {
    const { user } = render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Show Toast' }))

    await waitFor(() => {
      expect(screen.getByText('Test Toast')).toBeInTheDocument()
    })

    await user.click(screen.getByLabelText('Close'))

    await waitFor(() => {
      expect(screen.queryByText('Test Toast')).not.toBeInTheDocument()
    })
  })

  it('can display multiple toasts', async () => {
    const { user } = render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))

    await waitFor(() => {
      const toasts = screen.getAllByText('Test Toast')
      expect(toasts.length).toBeGreaterThanOrEqual(2)
    })
  })
})
