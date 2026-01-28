import { renderHook, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  usePagination,
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

describe('PaginationButton', () => {
  it('renders as button element', () => {
    render(<PaginationButton>1</PaginationButton>)
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationButton onClick={onClick}>1</PaginationButton>)
    await user.click(screen.getByRole('button', { name: '1' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('active state', () => {
    it('has aria-current="page" when active', () => {
      render(<PaginationButton isActive>1</PaginationButton>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveAttribute('aria-current', 'page')
    })

    it('does not have aria-current when not active', () => {
      render(<PaginationButton>1</PaginationButton>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).not.toHaveAttribute('aria-current')
    })
  })

  describe('sizes', () => {
    it('renders default (icon) size', () => {
      render(<PaginationButton>1</PaginationButton>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('size-8')
    })

    it('renders icon-sm size', () => {
      render(<PaginationButton size='icon'>1</PaginationButton>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('size-9')
    })

    it('renders icon-lg size', () => {
      render(<PaginationButton size='icon-lg'>1</PaginationButton>)
      const button = screen.getByRole('button', { name: '1' })
      expect(button).toHaveClass('size-10')
    })
  })

  it('merges custom className', () => {
    render(<PaginationButton className='custom-class'>1</PaginationButton>)
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
    const { container } = render(<PaginationEllipsis>...</PaginationEllipsis>)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders children', () => {
    render(<PaginationEllipsis>...</PaginationEllipsis>)
    expect(screen.getByText('...')).toBeInTheDocument()
  })

  describe('sizes', () => {
    it('renders default (icon) size', () => {
      const { container } = render(<PaginationEllipsis>...</PaginationEllipsis>)
      const span = container.querySelector('span')
      expect(span).toHaveClass('size-8')
    })

    it('renders icon-sm size', () => {
      const { container } = render(
        <PaginationEllipsis size='icon'>...</PaginationEllipsis>,
      )
      const span = container.querySelector('span')
      expect(span).toHaveClass('size-9')
    })

    it('renders icon-lg size', () => {
      const { container } = render(
        <PaginationEllipsis size='icon-lg'>...</PaginationEllipsis>,
      )
      const span = container.querySelector('span')
      expect(span).toHaveClass('size-10')
    })
  })

  it('merges custom className', () => {
    const { container } = render(
      <PaginationEllipsis className='custom-class'>...</PaginationEllipsis>,
    )
    const span = container.querySelector('span')
    expect(span).toHaveClass('custom-class')
  })
})

describe('usePagination', () => {
  it('returns single page for 1 total page', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 1, onPageChange: vi.fn() }),
    )
    expect(result.current.pages).toEqual([1])
  })

  it('returns all pages when totalPages <= 7', () => {
    const { result: result1 } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 5, onPageChange: vi.fn() }),
    )
    expect(result1.current.pages).toEqual([1, 2, 3, 4, 5])

    const { result: result2 } = renderHook(() =>
      usePagination({ currentPage: 3, totalPages: 7, onPageChange: vi.fn() }),
    )
    expect(result2.current.pages).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('handles current page at start', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 10, onPageChange: vi.fn() }),
    )
    const pages = result.current.pages
    expect(pages[0]).toBe(1)
    expect(pages).toContain('ellipsis')
    expect(pages[pages.length - 1]).toBe(10)
  })

  it('handles current page at end', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 10, totalPages: 10, onPageChange: vi.fn() }),
    )
    const pages = result.current.pages
    expect(pages[0]).toBe(1)
    expect(pages).toContain('ellipsis')
    expect(pages[pages.length - 1]).toBe(10)
  })

  it('handles current page in middle', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10, onPageChange: vi.fn() }),
    )
    const pages = result.current.pages
    expect(pages[0]).toBe(1)
    expect(pages).toContain('ellipsis')
    expect(pages).toContain(4)
    expect(pages).toContain(5)
    expect(pages).toContain(6)
    expect(pages).toContain('ellipsis')
    expect(pages[pages.length - 1]).toBe(10)
  })

  it('respects siblingCount parameter', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        siblingCount: 2,
        onPageChange: vi.fn(),
      }),
    )
    const pages = result.current.pages
    expect(pages).toContain(3)
    expect(pages).toContain(4)
    expect(pages).toContain(5)
    expect(pages).toContain(6)
    expect(pages).toContain(7)
  })

  it('does not duplicate first and last pages', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10, onPageChange: vi.fn() }),
    )
    const pages = result.current.pages
    const firstIndex = pages.indexOf(1)
    const lastIndex = pages.indexOf(10)
    expect(firstIndex).toBeGreaterThanOrEqual(0)
    expect(lastIndex).toBeGreaterThanOrEqual(0)
    expect(pages.filter((p) => p === 1).length).toBe(1)
    expect(pages.filter((p) => p === 10).length).toBe(1)
  })

  it('handles large page counts', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 50, totalPages: 100, onPageChange: vi.fn() }),
    )
    const pages = result.current.pages
    expect(pages[0]).toBe(1)
    expect(pages[pages.length - 1]).toBe(100)
    expect(pages).toContain('ellipsis')
  })

  it('returns correct navigation state', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10, onPageChange: vi.fn() }),
    )
    expect(result.current.canGoNext).toBe(true)
    expect(result.current.canGoPrevious).toBe(true)
    expect(result.current.currentPage).toBe(5)
    expect(result.current.totalPages).toBe(10)
  })

  it('canGoNext is false on last page', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 10, totalPages: 10, onPageChange: vi.fn() }),
    )
    expect(result.current.canGoNext).toBe(false)
    expect(result.current.canGoPrevious).toBe(true)
  })

  it('canGoPrevious is false on first page', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 10, onPageChange: vi.fn() }),
    )
    expect(result.current.canGoNext).toBe(true)
    expect(result.current.canGoPrevious).toBe(false)
  })

  it('navigation functions call onPageChange correctly', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10, onPageChange }),
    )

    result.current.goToNext()
    expect(onPageChange).toHaveBeenLastCalledWith(6)

    result.current.goToPrevious()
    expect(onPageChange).toHaveBeenLastCalledWith(4)

    result.current.goToFirst()
    expect(onPageChange).toHaveBeenLastCalledWith(1)

    result.current.goToLast()
    expect(onPageChange).toHaveBeenLastCalledWith(10)

    result.current.goToPage(7)
    expect(onPageChange).toHaveBeenLastCalledWith(7)
  })

  it('goToNext does not exceed totalPages', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({ currentPage: 10, totalPages: 10, onPageChange }),
    )
    result.current.goToNext()
    expect(onPageChange).toHaveBeenLastCalledWith(10)
  })

  it('goToPrevious does not go below 1', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 10, onPageChange }),
    )
    result.current.goToPrevious()
    expect(onPageChange).toHaveBeenLastCalledWith(1)
  })

  describe('page size', () => {
    it('returns default pageSize and pageSizeOptions', () => {
      const { result } = renderHook(() =>
        usePagination({ currentPage: 1, totalPages: 10, onPageChange: vi.fn() }),
      )
      expect(result.current.pageSize).toBe(10)
      expect(result.current.pageSizeOptions).toEqual([10, 25, 50, 100])
    })

    it('returns custom pageSize when provided', () => {
      const { result } = renderHook(() =>
        usePagination({
          currentPage: 1,
          totalPages: 10,
          onPageChange: vi.fn(),
          pageSize: 25,
        }),
      )
      expect(result.current.pageSize).toBe(25)
    })

    it('returns custom pageSizeOptions when provided', () => {
      const customOptions = [5, 10, 20]
      const { result } = renderHook(() =>
        usePagination({
          currentPage: 1,
          totalPages: 10,
          onPageChange: vi.fn(),
          pageSizeOptions: customOptions,
        }),
      )
      expect(result.current.pageSizeOptions).toEqual(customOptions)
    })

    it('setPageSize calls onPageSizeChange', () => {
      const onPageSizeChange = vi.fn()
      const { result } = renderHook(() =>
        usePagination({
          currentPage: 1,
          totalPages: 10,
          onPageChange: vi.fn(),
          onPageSizeChange,
        }),
      )
      result.current.setPageSize(50)
      expect(onPageSizeChange).toHaveBeenCalledWith(50)
    })

    it('setPageSize does not throw when onPageSizeChange is not provided', () => {
      const { result } = renderHook(() =>
        usePagination({ currentPage: 1, totalPages: 10, onPageChange: vi.fn() }),
      )
      expect(() => result.current.setPageSize(50)).not.toThrow()
    })
  })
})

describe('Keyboard accessibility', () => {
  it('PaginationButton can be activated with Enter', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationButton onClick={onClick}>1</PaginationButton>)
    const button = screen.getByRole('button', { name: '1' })
    button.focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalled()
  })

  it('PaginationButton can be activated with Space', async () => {
    const onClick = vi.fn()
    const { user } = render(<PaginationButton onClick={onClick}>1</PaginationButton>)
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

  it('active PaginationButton has aria-current="page"', () => {
    render(<PaginationButton isActive>1</PaginationButton>)
    const button = screen.getByRole('button', { name: '1' })
    expect(button).toHaveAttribute('aria-current', 'page')
  })

  it('inactive PaginationButton does not have aria-current', () => {
    render(<PaginationButton>1</PaginationButton>)
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
    const { container } = render(<PaginationEllipsis>...</PaginationEllipsis>)
    const span = container.querySelector('span[aria-hidden="true"]')
    expect(span).toBeInTheDocument()
  })
})
