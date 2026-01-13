import { fireEvent, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuCheckboxItemLabel,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuRadioItemLabel,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './context-menu'

describe('ContextMenu', () => {
  it('opens and displays content when right-clicking the trigger', async () => {
    render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuItem>Item 1</ContextMenuItem>
              <ContextMenuItem>Item 2</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('calls onClick handler when menu item is clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuItem onClick={onClick}>Click Me</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('menuitem', { name: 'Click Me' }))

    expect(onClick).toHaveBeenCalled()
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuItem>Item 1</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  it('renders separator', async () => {
    render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuItem>Item 1</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Item 2</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const separator = document.querySelector('[role="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledContextMenu = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <ContextMenuRoot open={open} onOpenChange={handleOpenChange}>
          <ContextMenuTrigger>
            <div>Right-click me</div>
          </ContextMenuTrigger>
          <ContextMenuPortal>
            <ContextMenuPositioner>
              <ContextMenuPopup>
                <ContextMenuItem>Controlled Item</ContextMenuItem>
              </ContextMenuPopup>
            </ContextMenuPositioner>
          </ContextMenuPortal>
        </ContextMenuRoot>
      )
    }

    const { user } = render(<ControlledContextMenu />)

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('Controlled Item')).toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(true)

    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('handles radio group selection', async () => {
    const { user } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuRadioGroup>
                <ContextMenuRadioItem value='option1'>
                  <ContextMenuRadioItemIndicator />
                  <ContextMenuRadioItemLabel>Option 1</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value='option2'>
                  <ContextMenuRadioItemIndicator />
                  <ContextMenuRadioItemLabel>Option 2</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const option1 = screen.getByRole('menuitemradio', { name: 'Option 1' })
    const option2 = screen.getByRole('menuitemradio', { name: 'Option 2' })

    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()

    await user.click(option1)

    expect(option1).toHaveAttribute('aria-checked', 'true')
  })

  it('handles checkbox item selection', async () => {
    const { user } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div>Right-click me</div>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuCheckboxItem>
                <ContextMenuCheckboxItemIndicator />
                <ContextMenuCheckboxItemLabel>Checkbox Item</ContextMenuCheckboxItemLabel>
              </ContextMenuCheckboxItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>,
    )

    fireEvent.contextMenu(screen.getByText('Right-click me'))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const checkboxItem = screen.getByRole('menuitemcheckbox', { name: 'Checkbox Item' })
    expect(checkboxItem).toBeInTheDocument()

    await user.click(checkboxItem)

    expect(checkboxItem).toHaveAttribute('aria-checked', 'true')
  })
})
