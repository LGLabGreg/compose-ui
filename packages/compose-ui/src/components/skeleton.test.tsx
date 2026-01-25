import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.querySelector('div')
    expect(skeleton).toBeInTheDocument()
  })

  it('applies base class', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.querySelector('div')
    expect(skeleton).toHaveClass('rounded-xs bg-skeleton animate-pulse')
  })

  describe('animations', () => {
    it('renders pulse animation by default', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('div')
      expect(skeleton).toHaveClass('animate-pulse')
    })

    it('renders pulse animation when specified', () => {
      const { container } = render(<Skeleton animation='pulse' />)
      const skeleton = container.querySelector('div')
      expect(skeleton).toHaveClass('animate-pulse')
    })

    it('renders shimmer animation when specified', () => {
      const { container } = render(<Skeleton animation='shimmer' />)
      const skeleton = container.querySelector('div')
      expect(skeleton).toHaveClass('relative', 'overflow-hidden')
    })

    it('renders no animation when none is specified', () => {
      const { container } = render(<Skeleton animation='none' />)
      const skeleton = container.querySelector('div')
      expect(skeleton).not.toHaveClass('animate-pulse')
      expect(skeleton).not.toHaveClass('overflow-hidden')
    })
  })

  it('merges custom className', () => {
    const { container } = render(<Skeleton className='size-16 rounded-full' />)
    const skeleton = container.querySelector('div')
    expect(skeleton).toHaveClass('size-16', 'rounded-full')
  })

  it('merges size className', () => {
    const { container } = render(<Skeleton className='h-5 w-[225px]' />)
    const skeleton = container.querySelector('div')
    expect(skeleton).toHaveClass('h-5')
  })

  it('passes through additional props', () => {
    const { container } = render(<Skeleton data-testid='test-skeleton' />)
    const skeleton = container.querySelector('div')
    expect(skeleton).toHaveAttribute('data-testid', 'test-skeleton')
  })
})
