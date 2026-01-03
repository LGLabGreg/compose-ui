import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

describe('Drawer', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <DrawerRoot>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>Test Drawer</DrawerTitle>
              <DrawerDescription>This is a test drawer description.</DrawerDescription>
            </DrawerHeader>
            <DrawerContent>
              <p>Drawer content goes here.</p>
            </DrawerContent>
            <DrawerFooter>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerPopup>
        </DrawerPortal>
      </DrawerRoot>,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Drawer' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Drawer')).toBeInTheDocument()
    expect(screen.getByText('This is a test drawer description.')).toBeInTheDocument()
    expect(screen.getByText('Drawer content goes here.')).toBeInTheDocument()
  })

  it('closes when clicking the close button', async () => {
    const { user } = render(
      <DrawerRoot>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>Test Drawer</DrawerTitle>
              <DrawerDescription>This is a test drawer description.</DrawerDescription>
            </DrawerHeader>
            <DrawerContent>
              <p>Drawer content goes here.</p>
            </DrawerContent>
            <DrawerFooter>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerPopup>
        </DrawerPortal>
      </DrawerRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Drawer' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledDrawer = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <DrawerRoot open={open} onOpenChange={handleOpenChange}>
            <DrawerPortal>
              <DrawerBackdrop />
              <DrawerPopup>
                <DrawerHeader>
                  <DrawerTitle>Controlled Drawer</DrawerTitle>
                  <DrawerDescription>This is a controlled drawer.</DrawerDescription>
                </DrawerHeader>
                <DrawerContent>
                  <p>Drawer content goes here.</p>
                </DrawerContent>
                <DrawerFooter>
                  <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
              </DrawerPopup>
            </DrawerPortal>
          </DrawerRoot>
        </>
      )
    }

    const { user } = render(<ControlledDrawer />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Controlled Drawer')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(onOpenChange).toHaveBeenCalledTimes(1)
  })
})
