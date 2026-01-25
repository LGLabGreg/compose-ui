'use client'

import * as React from 'react'

import {
  type ControlSize,
  type ControlVariant,
  controlVariants,
} from '../lib/control-variants'
import { cn } from '../lib/utils'

// ============================================================================
// usePagination Hook
// ============================================================================

type PaginationPage = number | 'ellipsis'

type UsePaginationOptions = {
  /** Current active page (1-indexed) */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Number of pages to show on each side of current page (default: 1) */
  siblingCount?: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
}

type UsePaginationReturn = {
  /** Array of page numbers and 'ellipsis' markers */
  pages: PaginationPage[]
  /** Current active page */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Whether navigation to next page is possible */
  canGoNext: boolean
  /** Whether navigation to previous page is possible */
  canGoPrevious: boolean
  /** Navigate to a specific page */
  goToPage: (page: number) => void
  /** Navigate to the next page */
  goToNext: () => void
  /** Navigate to the previous page */
  goToPrevious: () => void
  /** Navigate to the first page */
  goToFirst: () => void
  /** Navigate to the last page */
  goToLast: () => void
}

/**
 * Generate page numbers with ellipsis for pagination display
 */
function computePageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): PaginationPage[] {
  if (totalPages <= 1) return [1]
  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const result: PaginationPage[] = []
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

function usePagination({
  currentPage,
  totalPages,
  siblingCount = 1,
  onPageChange,
}: UsePaginationOptions): UsePaginationReturn {
  const pages = React.useMemo(
    () => computePageRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount],
  )

  return {
    pages,
    currentPage,
    totalPages,
    canGoNext: currentPage < totalPages,
    canGoPrevious: currentPage > 1,
    goToPage: onPageChange,
    goToNext: () => onPageChange(Math.min(currentPage + 1, totalPages)),
    goToPrevious: () => onPageChange(Math.max(currentPage - 1, 1)),
    goToFirst: () => onPageChange(1),
    goToLast: () => onPageChange(totalPages),
  }
}

// ============================================================================
// PaginationRoot
// ============================================================================

type PaginationRootProps = React.ComponentProps<'nav'>

const PaginationRoot = ({ className, ...props }: PaginationRootProps) => {
  return <nav aria-label='pagination' className={className} {...props} />
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
      className={cn('flex flex-row flex-wrap items-center gap-1 w-fit', className)}
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
// PaginationButton (page number button)
// ============================================================================

type PaginationButtonProps = React.ComponentProps<'button'> & {
  /** Whether this button represents the current active page */
  isActive?: boolean
  /** Visual style of the button */
  variant?: ControlVariant
  /** Size of the button */
  size?: ControlSize
}

const PaginationButton = ({
  className,
  isActive,
  variant,
  size = 'icon-sm',
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      type='button'
      aria-current={isActive ? 'page' : undefined}
      className={cn(controlVariants({ variant, size }), className)}
      {...props}
    />
  )
}

PaginationButton.displayName = 'PaginationButton'

// ============================================================================
// PaginationPrevious
// ============================================================================

type PaginationPreviousProps = React.ComponentProps<'button'> & {
  /** Visual style of the button */
  variant?: ControlVariant
  /** Size of the button */
  size?: ControlSize
}

const PaginationPrevious = ({
  className,
  disabled,
  variant,
  size = 'icon-sm',
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
        controlVariants({ variant, size }),
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

type PaginationNextProps = React.ComponentProps<'button'> & {
  /** Visual style of the button */
  variant?: ControlVariant
  /** Size of the button */
  size?: ControlSize
}

const PaginationNext = ({
  className,
  disabled,
  variant,
  size = 'icon-sm',
  children,
  ...props
}: PaginationNextProps) => {
  return (
    <button
      type='button'
      aria-label='Go to next page'
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(
        controlVariants({ variant, size }),
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

PaginationNext.displayName = 'PaginationNext'

// ============================================================================
// PaginationFirst
// ============================================================================

type PaginationFirstProps = React.ComponentProps<'button'> & {
  /** Visual style of the button */
  variant?: ControlVariant
  /** Size of the button */
  size?: ControlSize
}

const PaginationFirst = ({
  className,
  disabled,
  variant,
  size = 'icon-sm',
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
        controlVariants({ variant, size }),
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

type PaginationLastProps = React.ComponentProps<'button'> & {
  /** Visual style of the button */
  variant?: ControlVariant
  /** Size of the button */
  size?: ControlSize
}

const PaginationLast = ({
  className,
  disabled,
  variant,
  size = 'icon-sm',
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
        controlVariants({ variant, size }),
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

type PaginationEllipsisProps = React.ComponentProps<'span'> & {
  /** Size of the ellipsis container */
  size?: ControlSize
}

const PaginationEllipsis = ({
  className,
  size = 'icon-sm',
  ...props
}: PaginationEllipsisProps) => {
  return (
    <span
      aria-hidden='true'
      className={cn(
        controlVariants({ size }),
        'border-transparent bg-transparent shadow-none',
        className,
      )}
      {...props}
    />
  )
}

PaginationEllipsis.displayName = 'PaginationEllipsis'

// ============================================================================
// Exports
// ============================================================================

export {
  // eslint-disable-next-line react-refresh/only-export-components
  usePagination,
  PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
}

export type {
  PaginationPage,
  UsePaginationOptions,
  UsePaginationReturn,
  PaginationRootProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationButtonProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationFirstProps,
  PaginationLastProps,
  PaginationEllipsisProps,
}
