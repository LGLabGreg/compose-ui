import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { RadioIndicator, RadioRoot } from './radio'
import { RadioGroupRoot } from './radio-group'

describe('Radio', () => {
  it('renders unchecked by default', () => {
    render(
      <RadioGroupRoot defaultValue='option1'>
        <RadioRoot data-testid='radio' value='option1'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    const radio = screen.getByTestId('radio')
    expect(radio).toHaveAttribute('data-checked', '')
  })

  it('renders unchecked when not selected', () => {
    render(
      <RadioGroupRoot defaultValue='option1'>
        <RadioRoot data-testid='radio' value='option2'>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    const radio = screen.getByTestId('radio')
    expect(radio).toHaveAttribute('data-unchecked', '')
  })

  it('changes checked state when clicked', async () => {
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

  it('calls onValueChange when selection changes', async () => {
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

  it('does not change when disabled', async () => {
    const handleChange = vi.fn()

    const { user } = render(
      <RadioGroupRoot defaultValue='option1' onValueChange={handleChange}>
        <RadioRoot data-testid='radio1' value='option1'>
          <RadioIndicator />
        </RadioRoot>
        <RadioRoot data-testid='radio2' value='option2' disabled>
          <RadioIndicator />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    const radio2 = screen.getByTestId('radio2')
    expect(radio2).toHaveAttribute('data-disabled', '')

    await user.click(radio2)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(
      <RadioGroupRoot defaultValue='option1'>
        <RadioRoot data-testid='radio' value='option1' className='custom-radio'>
          <RadioIndicator className='custom-indicator' />
        </RadioRoot>
      </RadioGroupRoot>,
    )

    expect(screen.getByTestId('radio')).toHaveClass('custom-radio')
  })
})
