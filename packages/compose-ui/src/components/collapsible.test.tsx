import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from './collapsible'

describe('Collapsible', () => {
  it('opens and closes panel when clicking trigger', async () => {
    const { user } = render(
      <CollapsibleRoot>
        <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
        <CollapsiblePanel>This is the collapsible content.</CollapsiblePanel>
      </CollapsibleRoot>,
    )

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle Content' }))

    expect(screen.getByText('This is the collapsible content.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle Content' }))

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()
  })

  it('starts open when defaultOpen is set', () => {
    render(
      <CollapsibleRoot defaultOpen>
        <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
        <CollapsiblePanel>This is the collapsible content.</CollapsiblePanel>
      </CollapsibleRoot>,
    )

    expect(screen.getByText('This is the collapsible content.')).toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledCollapsible = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <CollapsibleRoot open={open} onOpenChange={handleOpenChange}>
          <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
          <CollapsiblePanel>This is the collapsible content.</CollapsiblePanel>
        </CollapsibleRoot>
      )
    }

    const { user } = render(<ControlledCollapsible />)

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle Content' }))

    expect(screen.getByText('This is the collapsible content.')).toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(true)

    await user.click(screen.getByRole('button', { name: 'Toggle Content' }))

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('disables interaction when disabled prop is set', async () => {
    const { user } = render(
      <CollapsibleRoot disabled>
        <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
        <CollapsiblePanel>This is the collapsible content.</CollapsiblePanel>
      </CollapsibleRoot>,
    )

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle Content' }))

    expect(screen.queryByText('This is the collapsible content.')).not.toBeInTheDocument()
  })
})
