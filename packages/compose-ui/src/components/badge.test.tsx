import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Badge, BadgeDot } from './badge'

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
  })

  describe('variants', () => {
    it('renders default variant with default appearance', () => {
      render(<Badge variant='default'>Default</Badge>)
      const badge = screen.getByText('Default')
      expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('renders secondary variant with default appearance', () => {
      render(<Badge variant='secondary'>Secondary</Badge>)
      const badge = screen.getByText('Secondary')
      expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    it('renders destructive variant with default appearance', () => {
      render(<Badge variant='destructive'>Destructive</Badge>)
      const badge = screen.getByText('Destructive')
      expect(badge).toHaveClass('bg-destructive', 'text-white')
    })

    it('renders success variant with default appearance', () => {
      render(<Badge variant='success'>Success</Badge>)
      const badge = screen.getByText('Success')
      expect(badge).toHaveClass('bg-success', 'text-white')
    })

    it('renders warning variant with default appearance', () => {
      render(<Badge variant='warning'>Warning</Badge>)
      const badge = screen.getByText('Warning')
      expect(badge).toHaveClass('bg-warning', 'text-white')
    })

    it('renders info variant with default appearance', () => {
      render(<Badge variant='info'>Info</Badge>)
      const badge = screen.getByText('Info')
      expect(badge).toHaveClass('bg-info', 'text-white')
    })
  })

  describe('appearances', () => {
    it('renders default appearance (solid)', () => {
      render(
        <Badge variant='destructive' appearance='default'>
          Default
        </Badge>,
      )
      const badge = screen.getByText('Default')
      expect(badge).toHaveClass('bg-destructive', 'text-white')
    })

    it('renders light appearance', () => {
      render(
        <Badge variant='destructive' appearance='light'>
          Light
        </Badge>,
      )
      const badge = screen.getByText('Light')
      expect(badge).toHaveClass('bg-destructive/10', 'text-destructive')
    })

    it('renders outline appearance', () => {
      render(
        <Badge variant='destructive' appearance='outline'>
          Outline
        </Badge>,
      )
      const badge = screen.getByText('Outline')
      expect(badge).toHaveClass(
        'border',
        'border-destructive',
        'bg-destructive/10',
        'text-destructive',
      )
    })

    it('renders ghost appearance', () => {
      render(
        <Badge variant='destructive' appearance='ghost'>
          Ghost
        </Badge>,
      )
      const badge = screen.getByText('Ghost')
      expect(badge).toHaveClass('text-destructive')
    })

    it('renders all appearances with success variant', () => {
      const { rerender } = render(
        <Badge variant='success' appearance='default'>
          Default
        </Badge>,
      )
      expect(screen.getByText('Default')).toHaveClass('bg-success', 'text-white')

      rerender(
        <Badge variant='success' appearance='light'>
          Light
        </Badge>,
      )
      expect(screen.getByText('Light')).toHaveClass('bg-success/10', 'text-success')

      rerender(
        <Badge variant='success' appearance='outline'>
          Outline
        </Badge>,
      )
      expect(screen.getByText('Outline')).toHaveClass(
        'border-success',
        'bg-success/10',
        'text-success',
      )

      rerender(
        <Badge variant='success' appearance='ghost'>
          Ghost
        </Badge>,
      )
      expect(screen.getByText('Ghost')).toHaveClass('text-success')
    })
  })

  describe('sizes', () => {
    it('renders sm size', () => {
      render(<Badge size='sm'>Small</Badge>)
      const badge = screen.getByText('Small')
      expect(badge).toHaveClass('text-xs', 'px-2', 'h-5')
    })

    it('renders md size', () => {
      render(<Badge size='md'>Medium</Badge>)
      const badge = screen.getByText('Medium')
      expect(badge).toHaveClass('text-xs', 'px-2.5', 'h-6')
    })

    it('renders lg size', () => {
      render(<Badge size='lg'>Large</Badge>)
      const badge = screen.getByText('Large')
      expect(badge).toHaveClass('text-sm', 'px-3', 'h-7')
    })
  })

  describe('shapes', () => {
    it('renders pill shape', () => {
      render(<Badge shape='pill'>Pill</Badge>)
      const badge = screen.getByText('Pill')
      expect(badge).toHaveClass('rounded-full')
    })

    it('renders rounded shape', () => {
      render(<Badge shape='rounded'>Rounded</Badge>)
      const badge = screen.getByText('Rounded')
      expect(badge).toHaveClass('rounded-md')
    })
  })

  it('merges custom className', () => {
    render(<Badge className='custom-class'>Custom</Badge>)
    const badge = screen.getByText('Custom')
    expect(badge).toHaveClass('custom-class')
  })

  it('applies default variant, appearance, size, and shape when not specified', () => {
    const { container } = render(<Badge>Default</Badge>)
    const badge = container.querySelector('span')
    expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
    expect(badge).toHaveClass('text-xs', 'px-2.5', 'h-6')
    expect(badge).toHaveClass('rounded-md')
  })
})

describe('BadgeDot', () => {
  it('renders as a circle', () => {
    const { container } = render(<BadgeDot />)
    const dot = container.querySelector('span')
    expect(dot).toHaveClass('size-2', 'rounded-full')
  })

  it('accepts className prop', () => {
    const { container } = render(<BadgeDot className='bg-success' />)
    const dot = container.querySelector('span')
    expect(dot).toHaveClass('bg-success')
  })

  it('merges custom className with default classes', () => {
    const { container } = render(<BadgeDot className='bg-warning' />)
    const dot = container.querySelector('span')
    expect(dot).toHaveClass('size-2', 'rounded-full', 'bg-warning')
  })
})
