import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { ChartRoot } from './context'
import { ChartLegendContent } from './legend'
import { ChartTooltipContent } from './tooltip'
import type { ChartConfig } from './types'
import { useChartContext } from './use-chart-context'

const testConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}

describe('ChartRoot', () => {
  it('renders children', () => {
    render(
      <ChartRoot config={testConfig}>
        <div data-testid='child'>Child content</div>
      </ChartRoot>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toHaveTextContent('Child content')
  })

  it('provides CSS variables for config colors', () => {
    render(
      <ChartRoot config={testConfig}>
        <div data-testid='child'>Content</div>
      </ChartRoot>,
    )
    const wrapper = screen.getByTestId('child').parentElement
    expect(wrapper).toHaveStyle({
      '--color-desktop': 'var(--chart-1)',
      '--color-mobile': 'var(--chart-2)',
    })
  })

  it('provides context to children', () => {
    function TestConsumer() {
      const { config } = useChartContext()
      return <div data-testid='config'>{Object.keys(config).join(',')}</div>
    }

    render(
      <ChartRoot config={testConfig}>
        <TestConsumer />
      </ChartRoot>,
    )
    expect(screen.getByTestId('config')).toHaveTextContent('desktop,mobile')
  })

  it('applies custom className', () => {
    render(
      <ChartRoot config={testConfig} data-testid='root' className='custom-class'>
        <div>Chart content</div>
      </ChartRoot>,
    )
    expect(screen.getByTestId('root')).toHaveClass('custom-class')
  })
})

describe('ChartTooltipContent', () => {
  it('renders nothing when not active', () => {
    const { container } = render(
      <ChartRoot config={testConfig}>
        <ChartTooltipContent active={false} payload={[]} />
      </ChartRoot>,
    )
    expect(container.querySelector('.rounded-lg')).not.toBeInTheDocument()
  })

  it('renders nothing when payload is empty', () => {
    const { container } = render(
      <ChartRoot config={testConfig}>
        <ChartTooltipContent active={true} payload={[]} />
      </ChartRoot>,
    )
    expect(container.querySelector('.rounded-lg')).not.toBeInTheDocument()
  })

  it('renders tooltip content when active with payload', () => {
    render(
      <ChartRoot config={testConfig}>
        <ChartTooltipContent
          active={true}
          label='January'
          payload={[
            { dataKey: 'desktop', value: 100, color: 'var(--chart-1)' },
            { dataKey: 'mobile', value: 50, color: 'var(--chart-2)' },
          ]}
        />
      </ChartRoot>,
    )
    expect(screen.getByText('January')).toBeInTheDocument()
    expect(screen.getByText('Desktop')).toBeInTheDocument()
    expect(screen.getByText('Mobile')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('hides label when hideLabel is true', () => {
    render(
      <ChartRoot config={testConfig}>
        <ChartTooltipContent
          active={true}
          label='January'
          hideLabel={true}
          payload={[{ dataKey: 'desktop', value: 100, color: 'var(--chart-1)' }]}
        />
      </ChartRoot>,
    )
    expect(screen.queryByText('January')).not.toBeInTheDocument()
  })

  it('uses labelKey from payload when provided', () => {
    render(
      <ChartRoot config={testConfig}>
        <ChartTooltipContent
          active={true}
          label='January'
          labelKey='customLabel'
          payload={[
            {
              dataKey: 'desktop',
              value: 100,
              color: 'var(--chart-1)',
              payload: { customLabel: 'Custom Label' },
            },
          ]}
        />
      </ChartRoot>,
    )
    expect(screen.getByText('Custom Label')).toBeInTheDocument()
    expect(screen.queryByText('January')).not.toBeInTheDocument()
  })
})

describe('ChartLegendContent', () => {
  it('renders nothing when payload is empty', () => {
    const { container } = render(
      <ChartRoot config={testConfig}>
        <ChartLegendContent payload={[]} />
      </ChartRoot>,
    )
    expect(container.querySelector('.flex')).not.toBeInTheDocument()
  })

  it('renders legend items with correct labels', () => {
    render(
      <ChartRoot config={testConfig}>
        <ChartLegendContent
          payload={[
            { dataKey: 'desktop', color: 'var(--chart-1)' },
            { dataKey: 'mobile', color: 'var(--chart-2)' },
          ]}
        />
      </ChartRoot>,
    )
    expect(screen.getByText('Desktop')).toBeInTheDocument()
    expect(screen.getByText('Mobile')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <ChartRoot config={testConfig}>
        <ChartLegendContent
          className='custom-legend'
          payload={[{ dataKey: 'desktop', color: 'var(--chart-1)' }]}
        />
      </ChartRoot>,
    )
    expect(screen.getByText('Desktop').parentElement?.parentElement).toHaveClass(
      'custom-legend',
    )
  })
})
