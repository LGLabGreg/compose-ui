import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { RadioIndicator, RadioRoot } from './radio'
import { RadioGroupRoot } from './radio-group'

describe('RadioGroup', () => {
  it('manages value state', async () => {
    const { user } = render(
      <RadioGroupRoot defaultValue='option1'>
        <RadioRoot data-testid='radio1' value='option1'>
          <RadioIndicator />
        </RadioRoot>
        <RadioRoot data-testid='radio2' value='option2'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    const radio1 = screen.getByTestId('radio1')
    const radio2 = screen.getByTestId('radio2')

    expect(radio1).toHaveAttribute('data-checked', '')
    expect(radio2).toHaveAttribute('data-unchecked', '')

    await user.click(radio2)
    expect(radio1).toHaveAttribute('data-unchecked', '')
    expect(radio2).toHaveAttribute('data-checked', '')
  })

  it('calls onValueChange when value changes', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <RadioGroupRoot defaultValue='option1' onValueChange={handleChange}>
        <RadioRoot data-testid='radio1' value='option1'>
          <RadioIndicator />
        </RadioRoot>
        <RadioRoot data-testid='radio2' value='option2'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    await user.click(screen.getByTestId('radio2'))
    expect(handleChange).toHaveBeenCalledWith('option2', expect.any(Object))
  })

  it('disables all radios when group is disabled', () => {
    render(
      <RadioGroupRoot defaultValue='option1' disabled>
        <RadioRoot data-testid='radio1' value='option1'>
          <RadioIndicator />
        </RadioRoot>
        <RadioRoot data-testid='radio2' value='option2'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    expect(screen.getByTestId('radio1')).toHaveAttribute('data-disabled', '')
    expect(screen.getByTestId('radio2')).toHaveAttribute('data-disabled', '')
  })

  it('applies custom className', () => {
    render(
      <RadioGroupRoot defaultValue='option1' className='custom-group'>
        <RadioRoot value='option1'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    const group = screen.getByRole('radiogroup')
    expect(group).toHaveClass('custom-group')
  })
})
