import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { ToggleGroupItem, ToggleGroupRoot } from './toggle-group'

describe('ToggleGroup', () => {
  it('renders the toggle group with items', () => {
    render(
      <ToggleGroupRoot>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right'>
          Right
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Align left' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Align center' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Align right' })).toBeInTheDocument()
  })

  it('renders with defaultValue', () => {
    render(
      <ToggleGroupRoot defaultValue={['left']}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          Center
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    const leftButton = screen.getByRole('button', { name: 'Align left' })
    const centerButton = screen.getByRole('button', { name: 'Align center' })
    expect(leftButton).toHaveAttribute('aria-pressed', 'true')
    expect(centerButton).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onValueChange when an item is clicked', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ToggleGroupRoot onValueChange={onValueChange}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          Center
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    await user.click(screen.getByRole('button', { name: 'Align left' }))
    expect(onValueChange).toHaveBeenCalledWith(['left'], expect.any(Object))
  })

  it('allows multiple selections when multiple is true', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ToggleGroupRoot multiple onValueChange={onValueChange}>
        <ToggleGroupItem value='bold' aria-label='Bold'>
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value='italic' aria-label='Italic'>
          Italic
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    await user.click(screen.getByRole('button', { name: 'Bold' }))
    await user.click(screen.getByRole('button', { name: 'Italic' }))
    expect(onValueChange).toHaveBeenLastCalledWith(['bold', 'italic'], expect.any(Object))
  })

  it('deselects current item when clicking again in single mode', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ToggleGroupRoot onValueChange={onValueChange}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          Center
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    const leftButton = screen.getByRole('button', { name: 'Align left' })
    await user.click(leftButton)
    expect(onValueChange).toHaveBeenLastCalledWith(['left'], expect.any(Object))
    await user.click(leftButton)
    expect(onValueChange).toHaveBeenLastCalledWith([], expect.any(Object))
  })

  it('does not allow selection when disabled', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ToggleGroupRoot disabled onValueChange={onValueChange}>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    const leftButton = screen.getByRole('button', { name: 'Align left' })
    expect(leftButton).toBeDisabled()
    await user.click(leftButton)
    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('navigates between items with arrow keys', async () => {
    const { user } = render(
      <ToggleGroupRoot>
        <ToggleGroupItem value='left' aria-label='Align left'>
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Align center'>
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Align right'>
          Right
        </ToggleGroupItem>
      </ToggleGroupRoot>,
    )
    const leftButton = screen.getByRole('button', { name: 'Align left' })
    leftButton.focus()
    expect(leftButton).toHaveFocus()
    await user.keyboard('[ArrowRight]')
    expect(screen.getByRole('button', { name: 'Align center' })).toHaveFocus()
  })
})
