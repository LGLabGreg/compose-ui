'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../lib/utils'
import type { SortDirection } from './types'

// ============================================================================
// Table Variants
// ============================================================================

const tableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: '',
      striped: '[&_tbody_tr:nth-child(even)]:bg-muted/50',
      bordered:
        '[&_th:not(:last-child)]:border-r [&_td:not(:last-child)]:border-r [&_th]:border-border [&_td]:border-border',
    },
  },
  defaultVariants: { variant: 'default' },
})

export type TableVariant = VariantProps<typeof tableVariants>['variant']

// ============================================================================
// TableRoot
// ============================================================================

type TableRootProps = React.ComponentProps<'table'> & VariantProps<typeof tableVariants>

const TableRoot = ({ className, variant, ...props }: TableRootProps) => {
  return (
    <div className='relative w-full overflow-x-auto'>
      <table className={cn(tableVariants({ variant }), className)} {...props} />
    </div>
  )
}

TableRoot.displayName = 'TableRoot'

// ============================================================================
// TableHeader
// ============================================================================

type TableHeaderProps = React.ComponentProps<'thead'>

const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}

TableHeader.displayName = 'TableHeader'

// ============================================================================
// TableBody
// ============================================================================

type TableBodyProps = React.ComponentProps<'tbody'>

const TableBody = ({ className, ...props }: TableBodyProps) => {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

TableBody.displayName = 'TableBody'

// ============================================================================
// TableFooter
// ============================================================================

type TableFooterProps = React.ComponentProps<'tfoot'>

const TableFooter = ({ className, ...props }: TableFooterProps) => {
  return (
    <tfoot
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

TableFooter.displayName = 'TableFooter'

// ============================================================================
// TableRow
// ============================================================================

type TableRowProps = React.ComponentProps<'tr'> & {
  selected?: boolean
}

const TableRow = ({ className, selected, ...props }: TableRowProps) => {
  return (
    <tr
      data-selected={selected || undefined}
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-selected:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

TableRow.displayName = 'TableRow'

// ============================================================================
// TableHead
// ============================================================================

const ariaSortValues: Record<SortDirection, 'ascending' | 'descending'> = {
  asc: 'ascending',
  desc: 'descending',
}

type TableHeadProps = React.ComponentProps<'th'> & {
  sortable?: boolean
  sortDirection?: SortDirection
  onSort?: () => void
}

const SortIcon = ({ direction }: { direction?: SortDirection }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='ml-1 inline-block'
      aria-hidden='true'
    >
      {direction === 'asc' ? (
        <path d='m18 15-6-6-6 6' />
      ) : direction === 'desc' ? (
        <path d='m6 9 6 6 6-6' />
      ) : (
        <>
          <path d='m7 15 5 5 5-5' />
          <path d='m7 9 5-5 5 5' />
        </>
      )}
    </svg>
  )
}

const TableHead = ({
  className,
  sortable,
  sortDirection,
  onSort,
  children,
  ...props
}: TableHeadProps) => {
  const isInteractive = sortable && onSort

  const handleClick = () => {
    if (isInteractive) onSort()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onSort()
    }
  }

  return (
    <th
      className={cn(
        'h-10 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        isInteractive &&
          'cursor-pointer select-none hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
        className,
      )}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? 'columnheader button' : undefined}
      aria-sort={sortDirection ? ariaSortValues[sortDirection] : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span className='inline-flex items-center'>
        {children}
        {sortable && <SortIcon direction={sortDirection} />}
      </span>
    </th>
  )
}

TableHead.displayName = 'TableHead'

// ============================================================================
// TableCell
// ============================================================================

type TableCellProps = React.ComponentProps<'td'>

const TableCell = ({ className, ...props }: TableCellProps) => {
  return (
    <td
      className={cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

TableCell.displayName = 'TableCell'

// ============================================================================
// TableCaption
// ============================================================================

type TableCaptionProps = React.ComponentProps<'caption'> & {
  position?: 'top' | 'bottom'
}

const TableCaption = ({
  className,
  position = 'bottom',
  ...props
}: TableCaptionProps) => {
  return (
    <caption
      className={cn(
        'mt-4 text-sm text-muted-foreground',
        position === 'top' && 'caption-top mb-4 mt-0',
        className,
      )}
      {...props}
    />
  )
}

TableCaption.displayName = 'TableCaption'

// ============================================================================
// Exports
// ============================================================================

export {
  TableRoot,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}

export type {
  TableRootProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps,
}
