import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'
import { Button } from './button'

describe('AlertDialog', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <AlertDialogRoot>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Test Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is a test alert dialog description.
            </AlertDialogDescription>
            <div className='mt-6 flex justify-end gap-2'>
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogClose>Confirm</AlertDialogClose>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>,
    )

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Alert Dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Alert Dialog' }))

    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    expect(screen.getByText('Test Alert Dialog')).toBeInTheDocument()
    expect(
      screen.getByText('This is a test alert dialog description.'),
    ).toBeInTheDocument()
  })

  it('closes when clicking the close button', async () => {
    const { user } = render(
      <AlertDialogRoot>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Test Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is a test alert dialog description.
            </AlertDialogDescription>
            <div className='mt-6 flex justify-end gap-2'>
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogClose>Confirm</AlertDialogClose>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Alert Dialog' }))
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledAlertDialog = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <AlertDialogRoot open={open} onOpenChange={handleOpenChange}>
            <AlertDialogPortal>
              <AlertDialogBackdrop />
              <AlertDialogPopup>
                <AlertDialogTitle>Controlled Alert Dialog</AlertDialogTitle>
                <AlertDialogDescription>
                  This is a controlled alert dialog.
                </AlertDialogDescription>
                <div className='mt-6 flex justify-end gap-2'>
                  <AlertDialogClose>Cancel</AlertDialogClose>
                  <AlertDialogClose>Confirm</AlertDialogClose>
                </div>
              </AlertDialogPopup>
            </AlertDialogPortal>
          </AlertDialogRoot>
        </>
      )
    }

    const { user } = render(<ControlledAlertDialog />)

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    expect(screen.getByText('Controlled Alert Dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(onOpenChange).toHaveBeenCalledTimes(1)
  })
})
