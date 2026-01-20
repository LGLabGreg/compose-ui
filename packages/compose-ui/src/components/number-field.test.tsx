import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from './number-field'

describe('NumberField', () => {
  it('renders with all sub-components', () => {
    render(
      <NumberFieldRoot defaultValue={100}>
        <NumberFieldScrubArea>
          <NumberFieldScrubAreaCursor />
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('100')
  })

  it('displays the correct default value', () => {
    render(
      <NumberFieldRoot defaultValue={42}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('42')
  })

  it('increments value when increment button is clicked', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={10} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1]
    await user.click(incrementButton)

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalled()
    })

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('11')
  })

  it('decrements value when decrement button is clicked', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={10} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const buttons = screen.getAllByRole('button')
    const decrementButton = buttons[0]
    await user.click(decrementButton)

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalled()
    })

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('9')
  })

  it('respects min prop', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={5} min={5} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const buttons = screen.getAllByRole('button')
    const decrementButton = buttons[0]
    await user.click(decrementButton)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('5')
  })

  it('respects max prop', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={10} max={10} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1]
    await user.click(incrementButton)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('10')
  })

  it('respects step prop', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={10} step={5} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1]
    await user.click(incrementButton)

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalled()
    })

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('15')
  })

  it('handles controlled value', () => {
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot value={25} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('25')
  })

  it('handles direct input changes', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <NumberFieldRoot defaultValue={10} onValueChange={onValueChange}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const input = screen.getByRole('textbox')
    await user.clear(input)
    await user.type(input, '42')

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalled()
    })

    expect(input).toHaveValue('42')
  })

  it('handles disabled state', () => {
    render(
      <NumberFieldRoot defaultValue={10} disabled>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const root = screen.getByRole('textbox').closest('[data-disabled]')
    expect(root).toBeInTheDocument()
  })

  it('handles readOnly state', () => {
    render(
      <NumberFieldRoot defaultValue={10} readOnly>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const root = screen.getByRole('textbox').closest('[data-readonly]')
    expect(root).toBeInTheDocument()
  })

  it('renders scrub area with cursor', () => {
    render(
      <NumberFieldRoot defaultValue={100}>
        <NumberFieldScrubArea>
          <NumberFieldScrubAreaCursor />
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberFieldRoot>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})
