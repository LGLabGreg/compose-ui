import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ProgressCircle,
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

describe('ProgressCircle', () => {
  it('renders SVG with two circles', () => {
    const { container } = render(<ProgressCircle value={50} />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const circles = container.querySelectorAll('circle')
    expect(circles).toHaveLength(2)
  })

  it('computes correct strokeDashoffset for given value', () => {
    const size = 120
    const strokeWidth = 8
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    const { container } = render(
      <ProgressCircle value={75} size={size} strokeWidth={strokeWidth} />,
    )

    const circles = container.querySelectorAll('circle')
    const indicator = circles[1]
    const expectedOffset = circumference - (75 / 100) * circumference
    expect(indicator).toHaveAttribute('stroke-dashoffset', String(expectedOffset))
  })

  it('renders children centered inside the circle', () => {
    render(
      <ProgressCircle value={50}>
        <span>50%</span>
      </ProgressCircle>,
    )

    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('works with custom min/max', () => {
    const size = 120
    const strokeWidth = 8
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    const { container } = render(
      <ProgressCircle
        value={50}
        min={0}
        max={200}
        size={size}
        strokeWidth={strokeWidth}
      />,
    )

    const circles = container.querySelectorAll('circle')
    const indicator = circles[1]
    // 50 out of 200 = 25%
    const expectedOffset = circumference - (25 / 100) * circumference
    expect(indicator).toHaveAttribute('stroke-dashoffset', String(expectedOffset))
  })

  it('handles indeterminate state (value={null})', () => {
    const { container } = render(<ProgressCircle value={null} />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()

    // Indeterminate injects a <style> for the spin keyframes
    const style = svg?.querySelector('style')
    expect(style).toBeInTheDocument()

    // Indicator circle gets the spin animation
    const circles = container.querySelectorAll('circle')
    const indicator = circles[1]
    expect(indicator?.style.animation).toContain('progress-circle-spin')
  })
})
