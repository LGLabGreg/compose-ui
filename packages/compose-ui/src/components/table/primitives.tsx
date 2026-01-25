'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../lib/utils'
import type { Alignment } from './types'

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

const alignmentClasses: Record<Alignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

type TableHeadProps = React.ComponentProps<'th'> & {
  align?: Alignment
}

const TableHead = ({ className, align, ...props }: TableHeadProps) => {
  return (
    <th
      className={cn(
        'h-10 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        align && alignmentClasses[align],
        className,
      )}
      {...props}
    />
  )
}

TableHead.displayName = 'TableHead'

// ============================================================================
// TableCell
// ============================================================================

type TableCellProps = React.ComponentProps<'td'> & {
  align?: Alignment
}

const TableCell = ({ className, align, ...props }: TableCellProps) => {
  return (
    <td
      className={cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        align && alignmentClasses[align],
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
