import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  DateRangePickerContent,
  DateRangePickerRoot,
  DateRangePickerTrigger,
} from './date-range-picker'

describe('DateRangePicker', () => {
  it('renders trigger with placeholder', () => {
    render(
      <DateRangePickerRoot>
        <DateRangePickerTrigger placeholder='Select range' />
        <DateRangePickerContent />
      </DateRangePickerRoot>,
    )

    expect(screen.getByText('Select range')).toBeInTheDocument()
  })

  it('opens popover when trigger is clicked', async () => {
    const { user } = render(
      <DateRangePickerRoot>
        <DateRangePickerTrigger />
        <DateRangePickerContent defaultMonth={new Date(2025, 0, 1)} />
      </DateRangePickerRoot>,
    )

    expect(screen.queryByRole('grid')).not.toBeInTheDocument()

    await user.click(screen.getByText('Pick a date range'))

    expect(screen.getAllByRole('grid').length).toBeGreaterThanOrEqual(1)
  })

  it('displays two months by default', async () => {
    const { user } = render(
      <DateRangePickerRoot>
        <DateRangePickerTrigger />
        <DateRangePickerContent defaultMonth={new Date(2025, 0, 1)} />
      </DateRangePickerRoot>,
    )

    await user.click(screen.getByText('Pick a date range'))

    const grids = screen.getAllByRole('grid')
    expect(grids).toHaveLength(2)
  })

  it('selects a range and stays open', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <DateRangePickerRoot onValueChange={onValueChange}>
        <DateRangePickerTrigger />
        <DateRangePickerContent defaultMonth={new Date(2025, 0, 1)} />
      </DateRangePickerRoot>,
    )

    await user.click(screen.getByText('Pick a date range'))

    const day10Cell = screen.getAllByRole('gridcell', { name: '10' })[0]
    const day10Button = day10Cell.querySelector('button') ?? day10Cell
    await user.click(day10Button)

    // Popover should still be open after selecting start date
    expect(screen.getAllByRole('grid').length).toBeGreaterThanOrEqual(1)

    const day20Cell = screen.getAllByRole('gridcell', { name: '20' })[0]
    const day20Button = day20Cell.querySelector('button') ?? day20Cell
    await user.click(day20Button)

    // Popover should still be open after selecting end date
    expect(screen.getAllByRole('grid').length).toBeGreaterThanOrEqual(1)
    expect(onValueChange).toHaveBeenCalled()
  })

  it('displays formatted range in trigger', () => {
    const from = new Date(2025, 0, 10)
    const to = new Date(2025, 0, 20)

    render(
      <DateRangePickerRoot value={{ from, to }}>
        <DateRangePickerTrigger />
        <DateRangePickerContent />
      </DateRangePickerRoot>,
    )

    expect(screen.getByText(/January 10/)).toBeInTheDocument()
    expect(screen.getByText(/January 20/)).toBeInTheDocument()
  })
})
