import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { CheckboxIndicator, CheckboxRoot } from './checkbox'
import { CheckboxGroupRoot } from './checkbox-group'

describe('CheckboxGroup', () => {
  it('renders checkbox group with multiple checkboxes', () => {
    render(
      <CheckboxGroupRoot data-testid='group'>
        <label>
          <CheckboxRoot value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
        <label>
          <CheckboxRoot value='option2'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 2
        </label>
      </CheckboxGroupRoot>,
    )

    expect(screen.getByTestId('group')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('supports defaultValue for initial checked state', () => {
    render(
      <CheckboxGroupRoot defaultValue={['option1']}>
        <label>
          <CheckboxRoot data-testid='checkbox1' value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
        <label>
          <CheckboxRoot data-testid='checkbox2' value='option2'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 2
        </label>
      </CheckboxGroupRoot>,
    )

    expect(screen.getByTestId('checkbox1')).toHaveAttribute('data-checked', '')
    expect(screen.getByTestId('checkbox2')).toHaveAttribute('data-unchecked', '')
  })

  it('calls onValueChange when checkbox is toggled', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <CheckboxGroupRoot value={[]} onValueChange={handleChange}>
        <label>
          <CheckboxRoot data-testid='checkbox1' value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
      </CheckboxGroupRoot>,
    )

    await user.click(screen.getByTestId('checkbox1'))
    expect(handleChange).toHaveBeenCalledWith(['option1'], expect.any(Object))
  })

  it('allows multiple selections', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <CheckboxGroupRoot value={['option1']} onValueChange={handleChange}>
        <label>
          <CheckboxRoot data-testid='checkbox1' value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
        <label>
          <CheckboxRoot data-testid='checkbox2' value='option2'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 2
        </label>
      </CheckboxGroupRoot>,
    )

    await user.click(screen.getByTestId('checkbox2'))

    expect(handleChange).toHaveBeenCalledWith(['option1', 'option2'], expect.any(Object))
  })

  it('applies custom className', () => {
    render(
      <CheckboxGroupRoot data-testid='group' className='custom-group'>
        <label>
          <CheckboxRoot value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
      </CheckboxGroupRoot>,
    )

    expect(screen.getByTestId('group')).toHaveClass('custom-group')
  })

  it('disables all checkboxes when group is disabled', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <CheckboxGroupRoot disabled onValueChange={handleChange}>
        <label>
          <CheckboxRoot data-testid='checkbox1' value='option1'>
            <CheckboxIndicator>
              <span>check</span>
            </CheckboxIndicator>
          </CheckboxRoot>
          Option 1
        </label>
      </CheckboxGroupRoot>,
    )

    const checkbox = screen.getByTestId('checkbox1')
    expect(checkbox).toHaveAttribute('data-disabled', '')

    await user.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
  })
})
