import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuCheckboxItemLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRadioItemLabel,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from './menu'

describe('Menu', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('calls onClick handler when menu item is clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem onClick={onClick}>Click Me</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('menuitem', { name: 'Click Me' }))

    expect(onClick).toHaveBeenCalled()
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Item 1</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  it('renders separator', async () => {
    const { user } = render(
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Item 1</MenuItem>
              <MenuSeparator />
              <MenuItem>Item 2</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const separator = document.querySelector('[role="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledMenu = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <MenuRoot open={open} onOpenChange={handleOpenChange}>
            <MenuPortal>
              <MenuPositioner>
                <MenuPopup>
                  <MenuItem>Controlled Item</MenuItem>
                </MenuPopup>
              </MenuPositioner>
            </MenuPortal>
          </MenuRoot>
        </>
      )
    }

    const { user } = render(<ControlledMenu />)

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('Controlled Item')).toBeInTheDocument()

    // onOpenChange is called when menu closes, not when opening programmatically
    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('handles radio group selection', async () => {
    const { user } = render(
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuRadioGroup>
                <MenuRadioItem value='option1'>
                  <MenuRadioItemIndicator />
                  <MenuRadioItemLabel>Option 1</MenuRadioItemLabel>
                </MenuRadioItem>
                <MenuRadioItem value='option2'>
                  <MenuRadioItemIndicator />
                  <MenuRadioItemLabel>Option 2</MenuRadioItemLabel>
                </MenuRadioItem>
              </MenuRadioGroup>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

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
      <MenuRoot>
        <MenuTrigger render={(props) => <Button {...props}>Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuCheckboxItem>
                <MenuCheckboxItemIndicator />
                <MenuCheckboxItemLabel>Checkbox Item</MenuCheckboxItemLabel>
              </MenuCheckboxItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const checkboxItem = screen.getByRole('menuitemcheckbox', { name: 'Checkbox Item' })
    expect(checkboxItem).toBeInTheDocument()

    await user.click(checkboxItem)

    expect(checkboxItem).toHaveAttribute('aria-checked', 'true')
  })
})
