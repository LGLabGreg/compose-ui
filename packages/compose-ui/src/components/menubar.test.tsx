import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  MenubarCheckboxItem,
  MenubarCheckboxItemIndicator,
  MenubarCheckboxItemLabel,
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRadioItemIndicator,
  MenubarRadioItemLabel,
  MenubarRoot,
  MenubarSeparator,
  MenubarSubmenuRoot,
  MenubarSubmenuTrigger,
  MenubarTrigger,
} from './menubar'

describe('Menubar', () => {
  it('renders menubar with multiple menus', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Open</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument()

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Open')).toBeInTheDocument()
  })

  it('opens and displays content when clicking a trigger', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Save</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(screen.queryByText('New')).not.toBeInTheDocument()

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('calls onClick handler when menu item is clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem onClick={onClick}>New File</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('menuitem', { name: 'New File' }))

    expect(onClick).toHaveBeenCalled()
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

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
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Exit</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const separator = document.querySelector('[role="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('handles radio group selection', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarRadioGroup>
                  <MenubarRadioItem value='small'>
                    <MenubarRadioItemIndicator />
                    <MenubarRadioItemLabel>Small</MenubarRadioItemLabel>
                  </MenubarRadioItem>
                  <MenubarRadioItem value='medium'>
                    <MenubarRadioItemIndicator />
                    <MenubarRadioItemLabel>Medium</MenubarRadioItemLabel>
                  </MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'View' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const small = screen.getByRole('menuitemradio', { name: 'Small' })
    const medium = screen.getByRole('menuitemradio', { name: 'Medium' })

    expect(small).toBeInTheDocument()
    expect(medium).toBeInTheDocument()

    await user.click(small)

    expect(small).toHaveAttribute('aria-checked', 'true')
  })

  it('handles checkbox item selection', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarCheckboxItem>
                  <MenubarCheckboxItemIndicator />
                  <MenubarCheckboxItemLabel>Show Toolbar</MenubarCheckboxItemLabel>
                </MenubarCheckboxItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'View' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    const checkboxItem = screen.getByRole('menuitemcheckbox', { name: 'Show Toolbar' })
    expect(checkboxItem).toBeInTheDocument()

    await user.click(checkboxItem)

    expect(checkboxItem).toHaveAttribute('aria-checked', 'true')
  })

  it('supports variant prop on trigger', () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger variant='ghost'>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    const trigger = screen.getByRole('menuitem', { name: 'File' })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveClass('border-border')
  })

  it('renders submenu', async () => {
    const { user } = render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarPositioner>
              <MenubarPopup>
                <MenubarItem>New</MenubarItem>
                <MenubarSubmenuRoot>
                  <MenubarSubmenuTrigger>Export</MenubarSubmenuTrigger>
                  <MenubarPortal>
                    <MenubarPositioner side='right'>
                      <MenubarPopup>
                        <MenubarItem>PDF</MenubarItem>
                        <MenubarItem>PNG</MenubarItem>
                      </MenubarPopup>
                    </MenubarPositioner>
                  </MenubarPortal>
                </MenubarSubmenuRoot>
              </MenubarPopup>
            </MenubarPositioner>
          </MenubarPortal>
        </MenubarMenu>
      </MenubarRoot>,
    )

    await user.click(screen.getByRole('menuitem', { name: 'File' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    expect(screen.getByText('Export')).toBeInTheDocument()

    await user.hover(screen.getByText('Export'))

    await waitFor(() => {
      expect(screen.getByText('PDF')).toBeInTheDocument()
      expect(screen.getByText('PNG')).toBeInTheDocument()
    })
  })
})
