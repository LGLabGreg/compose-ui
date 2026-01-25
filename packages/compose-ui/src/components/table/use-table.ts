import { type ReactNode, useCallback, useMemo, useState } from 'react'

import { cn } from '../../lib/utils'
import type {
  Alignment,
  ColumnDef,
  ProcessedColumn,
  UseTableOptions,
  UseTableReturn,
} from './types'

const alignmentClasses: Record<Alignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100]

export function useTable<T>(data: T[], options: UseTableOptions<T>): UseTableReturn<T> {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(
    options.pagination?.pageSize ?? DEFAULT_PAGE_SIZE,
  )

  const pageSizeOptions = options.pagination?.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS

  const totalItems = data.length
  const totalPages = options.pagination
    ? Math.max(1, Math.ceil(totalItems / pageSize))
    : 1

  const effectivePage = Math.min(currentPage, totalPages)

  const rows = useMemo(() => {
    if (!options.pagination) return data
    const start = (effectivePage - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [data, effectivePage, pageSize, options.pagination])

  const onPageChange = useCallback(
    (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    },
    [totalPages],
  )

  const onPageSizeChange = useCallback((size: number) => {
    setPageSize(size)
    setCurrentPage(1)
  }, [])

  const columns = useMemo(() => {
    const entries = Object.entries(options.columns) as [keyof T, ColumnDef<T>][]
    return entries.map(([key, def]): ProcessedColumn<T> => {
      const renderCell = (row: T): ReactNode => {
        const value = row[key]
        if (def.cell) return def.cell(value, row)
        if (def.format) return def.format(value, row)
        return value == null ? '' : String(value)
      }

      const alignClass = def.align ? alignmentClasses[def.align] : undefined

      return {
        key,
        header: def.header,
        headerClassName: cn(def.headerClassName, alignClass) || undefined,
        cellClassName: cn(def.cellClassName, alignClass) || undefined,
        width: def.width,
        renderCell,
      }
    })
  }, [options.columns])

  return {
    columns,
    rows,
    totalItems,
    currentPage: effectivePage,
    totalPages,
    pageSize,
    pageSizeOptions,
    onPageChange,
    onPageSizeChange,
  }
}
