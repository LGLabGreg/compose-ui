import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Calendar } from './calendar'

describe('Calendar', () => {
  it('renders a calendar', () => {
    render(<Calendar />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('renders with a selected date', () => {
    const date = new Date(2025, 0, 15)
    render(<Calendar mode='single' selected={date} defaultMonth={date} />)

    const selectedButton = screen.getByRole('gridcell', { name: '15' })
    expect(selectedButton).toBeInTheDocument()
  })

  it('allows navigation between months', async () => {
    const { user } = render(<Calendar defaultMonth={new Date(2025, 0, 1)} />)

    expect(screen.getByText('January 2025')).toBeInTheDocument()

    const nextButton = screen.getByRole('button', { name: /next/i })
    await user.click(nextButton)

    expect(screen.getByText('February 2025')).toBeInTheDocument()
  })

  it('merges custom classNames', () => {
    render(<Calendar className='custom-class' classNames={{ root: 'custom-root' }} />)

    const root = screen.getByRole('grid').closest('.custom-root')
    expect(root).toBeInTheDocument()
  })

  it('supports range mode', () => {
    const from = new Date(2025, 0, 10)
    const to = new Date(2025, 0, 15)
    render(<Calendar mode='range' selected={{ from, to }} defaultMonth={from} />)

    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('renders dropdown selects with captionLayout="dropdown"', () => {
    render(
      <Calendar
        mode='single'
        captionLayout='dropdown'
        defaultMonth={new Date(2025, 5, 15)}
      />,
    )

    const monthDropdown = screen.getByRole('combobox', { name: /month/i })
    const yearDropdown = screen.getByRole('combobox', { name: /year/i })

    expect(monthDropdown).toBeInTheDocument()
    expect(yearDropdown).toBeInTheDocument()
  })

  it('allows changing month via dropdown', async () => {
    const { user } = render(
      <Calendar
        mode='single'
        captionLayout='dropdown'
        defaultMonth={new Date(2025, 5, 15)}
      />,
    )

    const monthDropdown = screen.getByRole('combobox', { name: /month/i })
    await user.selectOptions(monthDropdown, '0')
    expect(monthDropdown).toHaveValue('0')
  })

  it('allows changing year via dropdown', async () => {
    const { user } = render(
      <Calendar
        mode='single'
        captionLayout='dropdown'
        defaultMonth={new Date(2025, 5, 15)}
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2030, 11)}
      />,
    )

    const yearDropdown = screen.getByRole('combobox', { name: /year/i })
    await user.selectOptions(yearDropdown, '2023')

    expect(yearDropdown).toHaveValue('2023')
  })
})
