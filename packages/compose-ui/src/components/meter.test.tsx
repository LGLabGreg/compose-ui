import { screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { MeterIndicator, MeterLabel, MeterRoot, MeterTrack, MeterValue } from './meter'

describe('Meter', () => {
  it('renders with all sub-components', () => {
    render(
      <MeterRoot value={50}>
        <MeterLabel>Storage Used</MeterLabel>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toBeInTheDocument()
    expect(screen.getByText('Storage Used')).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(
      <MeterRoot value={75}>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toHaveAttribute('aria-valuenow', '75')
    expect(meter).toHaveAttribute('aria-valuemin', '0')
    expect(meter).toHaveAttribute('aria-valuemax', '100')
  })

  it('respects min and max props', () => {
    render(
      <MeterRoot value={50} min={0} max={200}>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toHaveAttribute('aria-valuemin', '0')
    expect(meter).toHaveAttribute('aria-valuemax', '200')
  })

  it('displays value immediately when animated is false', () => {
    render(
      <MeterRoot value={60} animated={false}>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toHaveAttribute('aria-valuenow', '60')
  })

  it('displays value immediately when animated prop is not provided', () => {
    render(
      <MeterRoot value={80}>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toHaveAttribute('aria-valuenow', '80')
  })

  it('starts at 0 and animates to target value when animated is true', async () => {
    render(
      <MeterRoot value={75} animated>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>,
    )

    const meter = screen.getByRole('meter')
    expect(meter).toHaveAttribute('aria-valuenow', '0')

    await waitFor(
      () => {
        expect(meter).toHaveAttribute('aria-valuenow', '75')
      },
      { timeout: 2000 },
    )
  })
})
