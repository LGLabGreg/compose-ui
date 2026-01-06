import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { SwitchRoot, SwitchThumb } from './switch'

describe('Switch', () => {
  it('renders the switch', () => {
    render(
      <SwitchRoot>
        <SwitchThumb />
      </SwitchRoot>,
    )
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('renders unchecked by default', () => {
    render(
      <SwitchRoot>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('renders checked when defaultChecked is true', () => {
    render(
      <SwitchRoot defaultChecked>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })

  it('calls onCheckedChange when clicked', async () => {
    const onCheckedChange = vi.fn()
    const { user } = render(
      <SwitchRoot onCheckedChange={onCheckedChange}>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)
    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('toggles checked state when clicked', async () => {
    const { user } = render(
      <SwitchRoot>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    await user.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
    await user.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('does not toggle when disabled', async () => {
    const onCheckedChange = vi.fn()
    const { user } = render(
      <SwitchRoot disabled onCheckedChange={onCheckedChange}>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-disabled', 'true')
    await user.click(switchElement)
    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('renders as checked when controlled with checked prop', () => {
    render(
      <SwitchRoot checked>
        <SwitchThumb />
      </SwitchRoot>,
    )
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })
})
