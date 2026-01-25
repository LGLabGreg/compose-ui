import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  getPageRange,
} from './pagination'

describe('PaginationRoot', () => {
  it('renders as nav element with aria-label', () => {
    const { container } = render(
      <PaginationRoot>
        <div>Content</div>
      </PaginationRoot>,
    )
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveAttribute('aria-label', 'pagination')
  })

  it('merges custom className', () => {
    const { container } = render(<PaginationRoot className='custom-class' />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('custom-class')
  })
})

describe('PaginationContent', () => {
  it('renders as ul element with role="list"', () => {
    const { container } = render(
      <PaginationContent>
        <li>Item</li>
      </PaginationContent>,
    )
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
    expect(ul).toHaveAttribute('role', 'list')
  })

  it('merges custom className', () => {
    const { container } = render(<PaginationContent className='custom-class' />)
    const ul = container.querySelector('ul')
    expect(ul).toHaveClass('custom-class')
  })
})

describe('PaginationItem', () => {
  it('renders as li element', () => {
    const { container } = render(
      <PaginationItem>
        <button>1</button>
      </PaginationItem>,
    )
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<PaginationItem className='custom-class' />)
    const li = container.querySelector('li')
    expect(li).toHaveClass('custom-class')
  })
})

describe('PaginationLink', () => {
  it('renders as button element', () => {
    render(<PaginationLink>1</PaginationLink>)
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationLink onClick={onClick}>1</PaginationLink>)
    await user.click(screen.getByRole('button', { name: '1' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('active state', () => {
    it('has aria-current="page" when active', () => {
      render(<PaginationLink isActive>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveAttribute('aria-current', 'page')
    })

    it('does not have aria-current when not active', () => {
      render(<PaginationLink>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).not.toHaveAttribute('aria-current')
    })

    it('applies active styling when isActive is true', () => {
      render(<PaginationLink isActive>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('bg-accent', 'text-accent-foreground')
    })
  })

  describe('sizes', () => {
    it('renders default size', () => {
      render(<PaginationLink>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('h-9', 'w-9')
    })

    it('renders sm size', () => {
      render(<PaginationLink size='sm'>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('h-8', 'w-8', 'text-xs')
    })

    it('renders lg size', () => {
      render(<PaginationLink size='lg'>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('h-10', 'w-10')
    })

    it('renders icon size', () => {
      render(<PaginationLink size='icon'>1</PaginationLink>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('h-9', 'w-9')
    })
  })

  it('merges custom className', () => {
    render(<PaginationLink className='custom-class'>1</PaginationLink>)
    const button = screen.getByRole('button', { name: '1' })
    expect(button).toHaveClass('custom-class')
  })
})

describe('PaginationPrevious', () => {
  it('renders as button with aria-label', () => {
    render(<PaginationPrevious>Previous</PaginationPrevious>)
    const button = screen.getByRole('button', { name: 'Go to previous page' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <PaginationPrevious onClick={onClick}>Previous</PaginationPrevious>,
    )
    await user.click(screen.getByRole('button', { name: 'Go to previous page' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('disabled state', () => {
    it('has disabled attribute when disabled', () => {
      render(<PaginationPrevious disabled>Previous</PaginationPrevious>)
      const button = screen.getByRole('button', { name: 'Go to previous page' })
      expect(button).toBeDisabled()
    })

    it('has aria-disabled when disabled', () => {
      render(<PaginationPrevious disabled>Previous</PaginationPrevious>)
      const button = screen.getByRole('button', { name: 'Go to previous page' })
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })

    it('applies disabled styling when disabled', () => {
      render(<PaginationPrevious disabled>Previous</PaginationPrevious>)
      const button = screen.getByRole('button', { name: 'Go to previous page' })
      expect(button).toHaveClass('pointer-events-none', 'opacity-50')
    })

    it('does not have aria-disabled when not disabled', () => {
      render(<PaginationPrevious>Previous</PaginationPrevious>)
      const button = screen.getByRole('button', { name: 'Go to previous page' })
      expect(button).not.toHaveAttribute('aria-disabled')
    })
  })

  it('merges custom className', () => {
    render(<PaginationPrevious className='custom-class'>Previous</PaginationPrevious>)
    const button = screen.getByRole('button', { name: 'Go to previous page' })
    expect(button).toHaveClass('custom-class')
  })
})

describe('PaginationNext', () => {
  it('renders as button with aria-label', () => {
    render(<PaginationNext>Next</PaginationNext>)
    const button = screen.getByRole('button', { name: 'Go to next page' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationNext onClick={onClick}>Next</PaginationNext>)
    await user.click(screen.getByRole('button', { name: 'Go to next page' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('disabled state', () => {
    it('has disabled attribute when disabled', () => {
      render(<PaginationNext disabled>Next</PaginationNext>)
      const button = screen.getByRole('button', { name: 'Go to next page' })
      expect(button).toBeDisabled()
    })

    it('has aria-disabled when disabled', () => {
      render(<PaginationNext disabled>Next</PaginationNext>)
      const button = screen.getByRole('button', { name: 'Go to next page' })
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

describe('PaginationFirst', () => {
  it('renders as button with aria-label', () => {
    render(<PaginationFirst>First</PaginationFirst>)
    const button = screen.getByRole('button', { name: 'Go to first page' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationFirst onClick={onClick}>First</PaginationFirst>)
    await user.click(screen.getByRole('button', { name: 'Go to first page' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('disabled state', () => {
    it('has disabled attribute when disabled', () => {
      render(<PaginationFirst disabled>First</PaginationFirst>)
      const button = screen.getByRole('button', { name: 'Go to first page' })
      expect(button).toBeDisabled()
    })

    it('has aria-disabled when disabled', () => {
      render(<PaginationFirst disabled>First</PaginationFirst>)
      const button = screen.getByRole('button', { name: 'Go to first page' })
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

describe('PaginationLast', () => {
  it('renders as button with aria-label', () => {
    render(<PaginationLast>Last</PaginationLast>)
    const button = screen.getByRole('button', { name: 'Go to last page' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationLast onClick={onClick}>Last</PaginationLast>)
    await user.click(screen.getByRole('button', { name: 'Go to last page' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('disabled state', () => {
    it('has disabled attribute when disabled', () => {
      render(<PaginationLast disabled>Last</PaginationLast>)
      const button = screen.getByRole('button', { name: 'Go to last page' })
      expect(button).toBeDisabled()
    })

    it('has aria-disabled when disabled', () => {
      render(<PaginationLast disabled>Last</PaginationLast>)
      const button = screen.getByRole('button', { name: 'Go to last page' })
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

describe('PaginationEllipsis', () => {
  it('renders as span element with aria-hidden', () => {
    const { container } = render(<PaginationEllipsis />)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span).toHaveAttribute('aria-hidden', 'true')
  })

  it('displays ellipsis text', () => {
    render(<PaginationEllipsis />)
    expect(screen.getByText('...')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<PaginationEllipsis className='custom-class' />)
    const span = container.querySelector('span')
    expect(span).toHaveClass('custom-class')
  })
})

describe('getPageRange', () => {
  it('returns single page for 1 total page', () => {
    expect(getPageRange(1, 1)).toEqual([1])
  })

  it('returns all pages when totalPages <= 7', () => {
    expect(getPageRange(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(getPageRange(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('handles current page at start', () => {
    const result = getPageRange(1, 10)
    expect(result[0]).toBe(1)
    expect(result).toContain('ellipsis')
    expect(result[result.length - 1]).toBe(10)
  })

  it('handles current page at end', () => {
    const result = getPageRange(10, 10)
    expect(result[0]).toBe(1)
    expect(result).toContain('ellipsis')
    expect(result[result.length - 1]).toBe(10)
  })

  it('handles current page in middle', () => {
    const result = getPageRange(5, 10)
    expect(result[0]).toBe(1)
    expect(result).toContain('ellipsis')
    expect(result).toContain(4)
    expect(result).toContain(5)
    expect(result).toContain(6)
    expect(result).toContain('ellipsis')
    expect(result[result.length - 1]).toBe(10)
  })

  it('respects siblingCount parameter', () => {
    const result = getPageRange(5, 10, 2)
    expect(result).toContain(3)
    expect(result).toContain(4)
    expect(result).toContain(5)
    expect(result).toContain(6)
    expect(result).toContain(7)
  })

  it('does not duplicate first and last pages', () => {
    const result = getPageRange(5, 10)
    const firstIndex = result.indexOf(1)
    const lastIndex = result.indexOf(10)
    expect(firstIndex).toBeGreaterThanOrEqual(0)
    expect(lastIndex).toBeGreaterThanOrEqual(0)
    expect(result.filter((p) => p === 1).length).toBe(1)
    expect(result.filter((p) => p === 10).length).toBe(1)
  })

  it('handles large page counts', () => {
    const result = getPageRange(50, 100)
    expect(result[0]).toBe(1)
    expect(result[result.length - 1]).toBe(100)
    expect(result).toContain('ellipsis')
  })
})

describe('Keyboard accessibility', () => {
  it('PaginationLink can be activated with Enter', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationLink onClick={onClick}>1</PaginationLink>)
    const button = screen.getByRole('button', { name: '1' })
    button.focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalled()
  })

  it('PaginationLink can be activated with Space', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationLink onClick={onClick}>1</PaginationLink>)
    const button = screen.getByRole('button', { name: '1' })
    button.focus()
    await user.keyboard(' ')
    expect(onClick).toHaveBeenCalled()
  })

  it('PaginationPrevious can be activated with Enter', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <PaginationPrevious onClick={onClick}>Previous</PaginationPrevious>,
    )
    const button = screen.getByRole('button', { name: 'Go to previous page' })
    button.focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalled()
  })

  it('disabled buttons are not focusable', () => {
    render(<PaginationPrevious disabled>Previous</PaginationPrevious>)
    const button = screen.getByRole('button', { name: 'Go to previous page' })
    expect(button).toBeDisabled()
    // Disabled buttons are excluded from tab order
  })
})

describe('Accessibility', () => {
  it('PaginationRoot has navigation role and aria-label', () => {
    const { container } = render(
      <PaginationRoot>
        <div>Content</div>
      </PaginationRoot>,
    )
    const nav = container.querySelector('nav[aria-label="pagination"]')
    expect(nav).toBeInTheDocument()
  })

  it('active PaginationLink has aria-current="page"', () => {
    render(<PaginationLink isActive>1</PaginationLink>)
    const button = screen.getByRole('button', { name: '1' })
    expect(button).toHaveAttribute('aria-current', 'page')
  })

  it('inactive PaginationLink does not have aria-current', () => {
    render(<PaginationLink>1</PaginationLink>)
    const button = screen.getByRole('button', { name: '1' })
    expect(button).not.toHaveAttribute('aria-current')
  })

  it('navigation buttons have appropriate aria-label values', () => {
    render(
      <>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next</PaginationNext>
        <PaginationFirst>First</PaginationFirst>
        <PaginationLast>Last</PaginationLast>
      </>,
    )

    expect(
      screen.getByRole('button', { name: 'Go to previous page' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to next page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to first page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to last page' })).toBeInTheDocument()
  })

  it('disabled buttons have both disabled and aria-disabled', () => {
    render(<PaginationPrevious disabled>Previous</PaginationPrevious>)
    const button = screen.getByRole('button', { name: 'Go to previous page' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })

  it('PaginationEllipsis has aria-hidden="true"', () => {
    const { container } = render(<PaginationEllipsis />)
    const span = container.querySelector('span[aria-hidden="true"]')
    expect(span).toBeInTheDocument()
  })
})
