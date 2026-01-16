import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from './tooltip'

describe('Tooltip', () => {
  it('shows tooltip on hover', async () => {
    const { user } = render(
      <TooltipRoot>
        <TooltipTrigger render={(props) => <Button {...props}>Hover me</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>Tooltip content</TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>,
    )

    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('button', { name: 'Hover me' }))

    expect(await screen.findByText('Tooltip content')).toBeInTheDocument()
  })

  it('hides tooltip when mouse leaves', async () => {
    const { user } = render(
      <TooltipRoot>
        <TooltipTrigger render={(props) => <Button {...props}>Hover me</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>Tooltip content</TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>,
    )

    await user.hover(screen.getByRole('button', { name: 'Hover me' }))
    expect(await screen.findByText('Tooltip content')).toBeInTheDocument()

    await user.unhover(screen.getByRole('button', { name: 'Hover me' }))

    await vi.waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument()
    })
  })

  it('shows tooltip on focus', async () => {
    const { user } = render(
      <TooltipRoot>
        <TooltipTrigger render={(props) => <Button {...props}>Focus me</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>Tooltip content</TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>,
    )

    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument()

    await user.tab()

    expect(await screen.findByText('Tooltip content')).toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledTooltip = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <TooltipRoot open={open} onOpenChange={handleOpenChange}>
          <TooltipTrigger render={(props) => <Button {...props}>Hover</Button>} />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>Controlled tooltip</TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>
      )
    }

    const { user } = render(<ControlledTooltip />)

    expect(screen.queryByText('Controlled tooltip')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('button', { name: 'Hover' }))

    expect(await screen.findByText('Controlled tooltip')).toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('respects defaultOpen prop', () => {
    render(
      <TooltipRoot defaultOpen>
        <TooltipTrigger render={(props) => <Button {...props}>Trigger</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>Default open tooltip</TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>,
    )

    expect(screen.getByText('Default open tooltip')).toBeInTheDocument()
  })
})
