import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from './slider'

describe('Slider', () => {
  it('renders with all sub-components', () => {
    render(
      <SliderRoot defaultValue={50}>
        <SliderValue />
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(
      <SliderRoot defaultValue={75}>
        <SliderValue />
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '75')
  })

  it('respects min and max props', () => {
    render(
      <SliderRoot defaultValue={50} min={10} max={200}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('min', '10')
    expect(slider).toHaveAttribute('max', '200')
  })

  it('handles controlled value', () => {
    const onValueChange = vi.fn()

    render(
      <SliderRoot value={30} onValueChange={onValueChange}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '30')
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <SliderRoot defaultValue={50} onValueChange={onValueChange}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowRight}')

    expect(onValueChange).toHaveBeenCalled()
  })

  it('handles disabled state', () => {
    render(
      <SliderRoot data-testid='slider-root' defaultValue={50} disabled>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const root = screen.getByTestId('slider-root')
    expect(root).toHaveAttribute('data-disabled')
  })

  it('supports range slider with multiple thumbs', () => {
    render(
      <SliderRoot defaultValue={[25, 75]}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '25')
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '75')
  })

  it('renders slider value text', () => {
    render(
      <SliderRoot defaultValue={42}>
        <SliderValue data-testid='slider-value' />
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>,
    )

    const valueElement = screen.getByTestId('slider-value')
    expect(valueElement).toHaveTextContent('42')
  })
})
