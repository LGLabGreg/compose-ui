import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from './popover'

describe('Popover', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <PopoverRoot>
        <PopoverTrigger render={(props) => <Button {...props}>Open Popover</Button>} />
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverTitle>Test Popover</PopoverTitle>
              <PopoverDescription>This is a test popover description.</PopoverDescription>
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>,
    )

    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument()
    expect(
      screen.queryByText('This is a test popover description.'),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Popover' }))

    expect(screen.getByText('Test Popover')).toBeInTheDocument()
    expect(screen.getByText('This is a test popover description.')).toBeInTheDocument()
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <PopoverRoot>
        <PopoverTrigger render={(props) => <Button {...props}>Open Popover</Button>} />
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverTitle>Test Popover</PopoverTitle>
              <PopoverDescription>This is a test popover description.</PopoverDescription>
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Popover' }))
    expect(screen.getByText('Test Popover')).toBeInTheDocument()

    await user.click(document.body)

    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument()
  })

  it('closes when clicking the close button', async () => {
    const { user } = render(
      <PopoverRoot>
        <PopoverTrigger render={(props) => <Button {...props}>Open Popover</Button>} />
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverTitle>Test Popover</PopoverTitle>
              <PopoverDescription>This is a test popover description.</PopoverDescription>
              <PopoverClose render={(props) => <Button {...props}>Close</Button>} />
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Popover' }))
    expect(screen.getByText('Test Popover')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledPopover = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <PopoverRoot open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger render={(props) => <Button {...props}>Open</Button>} />
          <PopoverPortal>
            <PopoverPositioner>
              <PopoverPopup>
                <PopoverTitle>Controlled Popover</PopoverTitle>
                <PopoverDescription>This is a controlled popover.</PopoverDescription>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>
      )
    }

    const { user } = render(<ControlledPopover />)

    expect(screen.queryByText('Controlled Popover')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByText('Controlled Popover')).toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(true)

    await user.click(document.body)

    expect(screen.queryByText('Controlled Popover')).not.toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})
