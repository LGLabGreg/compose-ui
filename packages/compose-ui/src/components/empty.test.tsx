import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  EmptyActions,
  EmptyBackground,
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from './empty'

describe('EmptyRoot', () => {
  it('renders children', () => {
    render(<EmptyRoot>Content</EmptyRoot>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<EmptyRoot data-testid='root'>Content</EmptyRoot>)
    expect(screen.getByTestId('root')).toHaveAttribute('data-slot', 'empty-root')
  })

  it('merges custom className', () => {
    render(
      <EmptyRoot data-testid='root' className='custom-class'>
        Content
      </EmptyRoot>,
    )
    expect(screen.getByTestId('root')).toHaveClass('custom-class')
  })

  describe('sizes', () => {
    it('renders sm size', () => {
      render(
        <EmptyRoot data-testid='root' size='sm'>
          Small
        </EmptyRoot>,
      )
      expect(screen.getByTestId('root')).toHaveClass('py-6')
    })

    it('renders md size (default)', () => {
      render(<EmptyRoot data-testid='root'>Medium</EmptyRoot>)
      expect(screen.getByTestId('root')).toHaveClass('py-10')
    })

    it('renders lg size', () => {
      render(
        <EmptyRoot data-testid='root' size='lg'>
          Large
        </EmptyRoot>,
      )
      expect(screen.getByTestId('root')).toHaveClass('py-16')
    })
  })
})

describe('EmptyBackground', () => {
  it('renders with aria-hidden', () => {
    render(<EmptyBackground data-testid='bg' />)
    expect(screen.getByTestId('bg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('has data-slot attribute', () => {
    render(<EmptyBackground data-testid='bg' />)
    expect(screen.getByTestId('bg')).toHaveAttribute('data-slot', 'empty-background')
  })

  it('is absolutely positioned', () => {
    render(<EmptyBackground data-testid='bg' />)
    expect(screen.getByTestId('bg')).toHaveClass('absolute', 'inset-0')
  })
})

describe('EmptyIcon', () => {
  it('renders children', () => {
    render(<EmptyIcon>icon content</EmptyIcon>)
    expect(screen.getByText('icon content')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<EmptyIcon data-testid='media'>icon</EmptyIcon>)
    expect(screen.getByTestId('media')).toHaveAttribute('data-slot', 'empty-icon')
  })

  describe('sizes', () => {
    it('renders sm size', () => {
      render(
        <EmptyIcon data-testid='media' size='sm'>
          icon
        </EmptyIcon>,
      )
      expect(screen.getByTestId('media')).toHaveClass('size-10')
    })

    it('renders md size (default)', () => {
      render(<EmptyIcon data-testid='media'>icon</EmptyIcon>)
      expect(screen.getByTestId('media')).toHaveClass('size-12')
    })

    it('renders lg size', () => {
      render(
        <EmptyIcon data-testid='media' size='lg'>
          icon
        </EmptyIcon>,
      )
      expect(screen.getByTestId('media')).toHaveClass('size-14')
    })
  })
})

describe('EmptyTitle', () => {
  it('renders as h2 by default', () => {
    render(<EmptyTitle>Title</EmptyTitle>)
    expect(screen.getByText('Title').tagName).toBe('H2')
  })

  it('renders with custom element via as prop', () => {
    render(<EmptyTitle as='h3'>Title</EmptyTitle>)
    expect(screen.getByText('Title').tagName).toBe('H3')
  })

  it('has data-slot attribute', () => {
    render(<EmptyTitle>Title</EmptyTitle>)
    expect(screen.getByText('Title')).toHaveAttribute('data-slot', 'empty-title')
  })

  it('has font-semibold class', () => {
    render(<EmptyTitle>Title</EmptyTitle>)
    expect(screen.getByText('Title')).toHaveClass('font-semibold')
  })
})

describe('EmptyDescription', () => {
  it('renders as p element', () => {
    render(<EmptyDescription>Description</EmptyDescription>)
    expect(screen.getByText('Description').tagName).toBe('P')
  })

  it('has data-slot attribute', () => {
    render(<EmptyDescription>Description</EmptyDescription>)
    expect(screen.getByText('Description')).toHaveAttribute(
      'data-slot',
      'empty-description',
    )
  })

  it('has max-w-sm for readability', () => {
    render(<EmptyDescription>Description</EmptyDescription>)
    expect(screen.getByText('Description')).toHaveClass('max-w-sm')
  })
})

describe('EmptyActions', () => {
  it('renders children', () => {
    render(<EmptyActions>Actions</EmptyActions>)
    expect(screen.getByText('Actions')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<EmptyActions data-testid='actions'>Actions</EmptyActions>)
    expect(screen.getByTestId('actions')).toHaveAttribute('data-slot', 'empty-actions')
  })

  it('is a flex container with gap', () => {
    render(<EmptyActions data-testid='actions'>Actions</EmptyActions>)
    expect(screen.getByTestId('actions')).toHaveClass('flex', 'gap-2')
  })
})

describe('Integration', () => {
  it('renders full empty state composition', () => {
    render(
      <EmptyRoot data-testid='empty'>
        <EmptyBackground />
        <EmptyIcon>icon</EmptyIcon>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try adjusting your filters</EmptyDescription>
        <EmptyActions>
          <button type='button'>Clear</button>
          <button type='button'>Retry</button>
        </EmptyActions>
      </EmptyRoot>,
    )

    expect(screen.getByTestId('empty')).toBeInTheDocument()
    expect(screen.getByText('icon')).toBeInTheDocument()
    expect(screen.getByText('No results')).toBeInTheDocument()
    expect(screen.getByText('Try adjusting your filters')).toBeInTheDocument()
    expect(screen.getByText('Clear')).toBeInTheDocument()
    expect(screen.getByText('Retry')).toBeInTheDocument()
  })
})
