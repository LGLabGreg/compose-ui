'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Pagination Variants
// ============================================================================

const paginationLinkVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    'hover:bg-accent hover:text-accent-foreground',
    'focus-visible:outline-none',
  ],
  {
    variants: {
      isActive: {
        true: 'bg-accent text-accent-foreground',
        false: '',
      },
      size: {
        default: 'h-9 w-9',
        sm: 'h-8 w-8 text-xs',
        lg: 'h-10 w-10',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      isActive: false,
      size: 'default',
    },
  },
)

const paginationButtonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    'hover:bg-accent hover:text-accent-foreground',
    'focus-visible:outline-none',
  ],
  {
    variants: {
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-6',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

// ============================================================================
// Utility Function
// ============================================================================

/**
 * Generate page numbers with ellipsis for pagination display
 * @param currentPage - Current active page (1-indexed)
 * @param totalPages - Total number of pages
 * @param siblingCount - Number of pages to show on each side of current page (default: 1)
 * @returns Array of page numbers and 'ellipsis' strings
 */
export function getPageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
): (number | 'ellipsis')[] {
  if (totalPages <= 1) return [1]
  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const result: (number | 'ellipsis')[] = []
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftEllipsis = leftSiblingIndex > 2
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1

  // Always show first page
  result.push(1)

  if (shouldShowLeftEllipsis) {
    result.push('ellipsis')
  }

  // Add pages around current page (excluding first and last which are handled separately)
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    if (i !== 1 && i !== totalPages) {
      result.push(i)
    }
  }

  if (shouldShowRightEllipsis) {
    result.push('ellipsis')
  }

  // Always show last page
  if (totalPages > 1) {
    result.push(totalPages)
  }

  return result
}

// ============================================================================
// PaginationRoot
// ============================================================================

type PaginationRootProps = React.ComponentProps<'nav'>

const PaginationRoot = ({ className, ...props }: PaginationRootProps) => {
  return (
    <nav
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

PaginationRoot.displayName = 'PaginationRoot'

// ============================================================================
// PaginationContent
// ============================================================================

type PaginationContentProps = React.ComponentProps<'ul'>

const PaginationContent = ({ className, ...props }: PaginationContentProps) => {
  return (
    <ul
      role='list'
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

PaginationContent.displayName = 'PaginationContent'

// ============================================================================
// PaginationItem
// ============================================================================

type PaginationItemProps = React.ComponentProps<'li'>

const PaginationItem = ({ className, ...props }: PaginationItemProps) => {
  return <li className={cn('', className)} {...props} />
}

PaginationItem.displayName = 'PaginationItem'

// ============================================================================
// PaginationLink
// ============================================================================

type PaginationLinkProps = React.ComponentProps<'button'> &
  VariantProps<typeof paginationLinkVariants> & {
    /** Whether this link represents the current active page */
    isActive?: boolean
  }

const PaginationLink = ({ className, isActive, size, ...props }: PaginationLinkProps) => {
  return (
    <button
      type='button'
      aria-current={isActive ? 'page' : undefined}
      className={cn(paginationLinkVariants({ isActive, size }), className)}
      {...props}
    />
  )
}

PaginationLink.displayName = 'PaginationLink'

// ============================================================================
// PaginationPrevious
// ============================================================================

type PaginationPreviousProps = React.ComponentProps<'button'> &
  VariantProps<typeof paginationButtonVariants>

const PaginationPrevious = ({
  className,
  disabled,
  size,
  children,
  ...props
}: PaginationPreviousProps) => {
  return (
    <button
      type='button'
      aria-label='Go to previous page'
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(
        paginationButtonVariants({ size }),
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

PaginationPrevious.displayName = 'PaginationPrevious'

// ============================================================================
// PaginationNext
// ============================================================================

type PaginationNextProps = React.ComponentProps<'button'> &
  VariantProps<typeof paginationButtonVariants>

const PaginationNext = ({ className, disabled, size, ...props }: PaginationNextProps) => {
  return (
    <button
      type='button'
      aria-label='Go to next page'
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(
        paginationButtonVariants({ size }),
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    />
  )
}

PaginationNext.displayName = 'PaginationNext'

// ============================================================================
// PaginationFirst
// ============================================================================

type PaginationFirstProps = React.ComponentProps<'button'> &
  VariantProps<typeof paginationButtonVariants>

const PaginationFirst = ({
  className,
  disabled,
  size,
  children,
  ...props
}: PaginationFirstProps) => {
  return (
    <button
      type='button'
      aria-label='Go to first page'
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(
        paginationButtonVariants({ size }),
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

PaginationFirst.displayName = 'PaginationFirst'

// ============================================================================
// PaginationLast
// ============================================================================

type PaginationLastProps = React.ComponentProps<'button'> &
  VariantProps<typeof paginationButtonVariants>

const PaginationLast = ({
  className,
  disabled,
  size,
  children,
  ...props
}: PaginationLastProps) => {
  return (
    <button
      type='button'
      aria-label='Go to last page'
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(
        paginationButtonVariants({ size }),
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

PaginationLast.displayName = 'PaginationLast'

// ============================================================================
// PaginationEllipsis
// ============================================================================

type PaginationEllipsisProps = React.ComponentProps<'span'>

const PaginationEllipsis = ({ className, ...props }: PaginationEllipsisProps) => {
  return (
    <span
      aria-hidden='true'
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      ...
    </span>
  )
}

PaginationEllipsis.displayName = 'PaginationEllipsis'

// ============================================================================
// Exports
// ============================================================================

export {
  PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
}

export type {
  PaginationRootProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationFirstProps,
  PaginationLastProps,
  PaginationEllipsisProps,
}
