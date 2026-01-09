import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Toggle } from './toggle'

describe('Toggle', () => {
  it('renders the toggle button', () => {
    render(<Toggle>Bold</Toggle>)
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument()
  })

  it('renders unpressed by default', () => {
    render(<Toggle>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders pressed when defaultPressed is true', () => {
    render(<Toggle defaultPressed>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })

  it('calls onPressedChange when clicked', async () => {
    const onPressedChange = vi.fn()
    const { user } = render(<Toggle onPressedChange={onPressedChange}>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    await user.click(toggle)
    expect(onPressedChange).toHaveBeenCalledWith(true, expect.any(Object))
  })

  it('toggles pressed state when clicked', async () => {
    const { user } = render(<Toggle>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })

  it('does not toggle when disabled', async () => {
    const onPressedChange = vi.fn()
    const { user } = render(
      <Toggle disabled onPressedChange={onPressedChange}>
        Bold
      </Toggle>,
    )
    const toggle = screen.getByRole('button', { name: 'Bold' })
    expect(toggle).toBeDisabled()
    await user.click(toggle)
    expect(onPressedChange).not.toHaveBeenCalled()
  })

  it('renders as pressed when controlled with pressed prop', () => {
    render(<Toggle pressed>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })

  it('can be activated with keyboard', async () => {
    const onPressedChange = vi.fn()
    const { user } = render(<Toggle onPressedChange={onPressedChange}>Bold</Toggle>)
    const toggle = screen.getByRole('button', { name: 'Bold' })
    toggle.focus()
    await user.keyboard('[Space]')
    expect(onPressedChange).toHaveBeenCalledWith(true, expect.any(Object))
  })
})
