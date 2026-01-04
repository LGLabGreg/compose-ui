import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from './progress'

describe('Progress', () => {
  it('renders with all sub-components', () => {
    render(
      <ProgressRoot value={50}>
        <ProgressLabel>Export data</ProgressLabel>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>,
    )

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
    expect(screen.getByText('Export data')).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(
      <ProgressRoot value={75}>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>,
    )

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '75')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
  })

  it('respects min and max props', () => {
    render(
      <ProgressRoot value={50} min={0} max={200}>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>,
    )

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '200')
  })

  it('handles indeterminate state when value is null', () => {
    render(
      <ProgressRoot value={null}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>,
    )

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).not.toHaveAttribute('aria-valuenow')
    expect(progressbar).toHaveAttribute('data-indeterminate')
  })
})
