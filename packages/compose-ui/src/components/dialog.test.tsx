import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './dialog'

describe('Dialog', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <DialogRoot>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog description.</DialogDescription>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Dialog')).toBeInTheDocument()
    expect(screen.getByText('This is a test dialog description.')).toBeInTheDocument()
  })

  it('closes when clicking the close button', async () => {
    const { user } = render(
      <DialogRoot>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog description.</DialogDescription>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledDialog = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <DialogRoot open={open} onOpenChange={handleOpenChange}>
            <DialogPortal>
              <DialogBackdrop />
              <DialogPopup>
                <DialogTitle>Controlled Dialog</DialogTitle>
                <DialogDescription>This is a controlled dialog.</DialogDescription>
                <DialogFooter>
                  <DialogClose>Close</DialogClose>
                </DialogFooter>
              </DialogPopup>
            </DialogPortal>
          </DialogRoot>
        </>
      )
    }

    const { user } = render(<ControlledDialog />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Controlled Dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(onOpenChange).toHaveBeenCalledTimes(1)
  })
})
