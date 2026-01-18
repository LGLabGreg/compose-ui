import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { CheckboxIndicator, CheckboxRoot } from './checkbox'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(
      <CheckboxRoot data-testid='checkbox'>
        <CheckboxIndicator>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('data-unchecked', '')
  })

  it('renders checked when defaultChecked is true', () => {
    render(
      <CheckboxRoot data-testid='checkbox' defaultChecked>
        <CheckboxIndicator>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('data-checked', '')
  })

  it('toggles checked state when clicked', async () => {
    const { user } = render(
      <CheckboxRoot data-testid='checkbox'>
        <CheckboxIndicator>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('data-unchecked', '')

    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('data-checked', '')

    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('data-unchecked', '')
  })

  it('calls onCheckedChange when toggled', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <CheckboxRoot data-testid='checkbox' onCheckedChange={handleChange}>
        <CheckboxIndicator>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    await user.click(screen.getByTestId('checkbox'))
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object))
  })

  it('does not toggle when disabled', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <CheckboxRoot data-testid='checkbox' disabled onCheckedChange={handleChange}>
        <CheckboxIndicator>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('data-disabled', '')

    await user.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(
      <CheckboxRoot data-testid='checkbox' className='custom-checkbox'>
        <CheckboxIndicator className='custom-indicator'>
          <span>check</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    expect(screen.getByTestId('checkbox')).toHaveClass('custom-checkbox')
  })

  it('supports indeterminate state', () => {
    render(
      <CheckboxRoot data-testid='checkbox' indeterminate>
        <CheckboxIndicator>
          <span>minus</span>
        </CheckboxIndicator>
      </CheckboxRoot>,
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('data-indeterminate', '')
  })
})
