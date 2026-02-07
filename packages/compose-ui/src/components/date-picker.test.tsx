import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { DatePickerContent, DatePickerRoot, DatePickerTrigger } from './date-picker'

describe('DatePicker', () => {
  it('renders trigger with placeholder', () => {
    render(
      <DatePickerRoot>
        <DatePickerTrigger placeholder='Select date' />
        <DatePickerContent />
      </DatePickerRoot>,
    )

    expect(screen.getByText('Select date')).toBeInTheDocument()
  })

  it('opens popover when trigger is clicked', async () => {
    const { user } = render(
      <DatePickerRoot>
        <DatePickerTrigger />
        <DatePickerContent />
      </DatePickerRoot>,
    )

    expect(screen.queryByRole('grid')).not.toBeInTheDocument()

    await user.click(screen.getByText('Pick a date'))

    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('selects a date and closes popover', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <DatePickerRoot onValueChange={onValueChange} defaultValue={undefined}>
        <DatePickerTrigger />
        <DatePickerContent defaultMonth={new Date(2025, 0, 1)} />
      </DatePickerRoot>,
    )

    await user.click(screen.getByText('Pick a date'))
    expect(screen.getByRole('grid')).toBeInTheDocument()

    const cell = screen.getByRole('gridcell', { name: '15' })
    const button = cell.querySelector('button') ?? cell
    await user.click(button)

    expect(onValueChange).toHaveBeenCalled()
    const calledDate = onValueChange.mock.calls[0][0] as Date
    expect(calledDate.getDate()).toBe(15)
  })

  it('works as a controlled component', async () => {
    const onValueChange = vi.fn()
    const date = new Date(2025, 5, 15)

    const { user } = render(
      <DatePickerRoot value={date} onValueChange={onValueChange}>
        <DatePickerTrigger />
        <DatePickerContent />
      </DatePickerRoot>,
    )

    expect(screen.getByText(/June 15/)).toBeInTheDocument()

    await user.click(screen.getByText(/June 15/))
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('renders with default placeholder', () => {
    render(
      <DatePickerRoot>
        <DatePickerTrigger />
        <DatePickerContent />
      </DatePickerRoot>,
    )

    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })
})
