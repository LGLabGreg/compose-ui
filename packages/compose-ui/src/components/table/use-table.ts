import { type ReactNode, useCallback, useDeferredValue, useMemo, useState } from 'react'

import { cn } from '../../lib/utils'
import { compareValues } from './sort'
import type {
  ColumnDef,
  FilterValues,
  ProcessedColumn,
  SortDirection,
  UseTableOptions,
  UseTableReturn,
} from './types'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100]

export function useTable<T>(options: UseTableOptions<T>): UseTableReturn<T> {
  const { data, columns: columnDefs, pagination, sort, search, filters } = options

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(pagination?.pageSize ?? DEFAULT_PAGE_SIZE)
  const [sortState, setSortState] = useState<{
    key: keyof T | null
    direction: SortDirection
  }>({
    key: sort?.key ?? null,
    direction: sort?.direction ?? 'asc',
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [filterValues, setFilterValues] = useState<FilterValues>(() => {
    if (!filters) return {}
    const initial: FilterValues = {}
    for (const [id, def] of Object.entries(filters)) {
      if (def.defaultValue !== undefined) {
        initial[id] = def.defaultValue
      }
    }
    return initial
  })

  const sortKey = sortState.key
  const sortDirection = sortState.direction
  const debouncedSearchTerm = useDeferredValue(searchTerm)

  const pageSizeOptions = pagination?.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS

  // Step 1: Apply filters
  const filteredByFilters = useMemo(() => {
    if (!filters) return data
    return data.filter((row) => {
      for (const [id, def] of Object.entries(filters)) {
        const value = filterValues[id]
        if (value === undefined) continue
        if (!def.predicate(row, value)) return false
      }
      return true
    })
  }, [data, filters, filterValues])

  // Step 2: Apply search
  const filteredData = useMemo(() => {
    if (!search || !debouncedSearchTerm) return filteredByFilters
    const term = debouncedSearchTerm.toLowerCase()
    return filteredByFilters.filter((row) =>
      search.keys.some((key) => String(row[key]).toLowerCase().includes(term)),
    )
  }, [filteredByFilters, debouncedSearchTerm, search])

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData
    return [...filteredData].sort((a, b) =>
      compareValues(a[sortKey], b[sortKey], sortDirection),
    )
  }, [filteredData, sortKey, sortDirection])

  const totalItems = sortedData.length
  const totalPages = pagination ? Math.max(1, Math.ceil(totalItems / pageSize)) : 1

  const effectivePage = Math.min(currentPage, totalPages)

  const rows = useMemo(() => {
    if (!pagination) return sortedData
    const start = (effectivePage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, effectivePage, pageSize, pagination])

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

  const onSort = useCallback((key: keyof T) => {
    setSortState((prev) => {
      if (prev.key !== key) {
        return { key, direction: 'asc' }
      }
      if (prev.direction === 'asc') {
        return { key, direction: 'desc' }
      }
      return { key: null, direction: 'asc' }
    })
    setCurrentPage(1)
  }, [])

  const onSearchChange = useCallback((term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }, [])

  const setFilterValue = useCallback((id: string, value: unknown) => {
    setFilterValues((prev) => ({ ...prev, [id]: value }))
    setCurrentPage(1)
  }, [])

  const clearFilters = useCallback(() => {
    setFilterValues({})
    setCurrentPage(1)
  }, [])

  const activeFilterCount = useMemo(
    () =>
      Object.values(filterValues).filter(
        (v) =>
          v !== undefined &&
          v !== null &&
          !(Array.isArray(v) && v.length === 0) &&
          v !== '',
      ).length,
    [filterValues],
  )

  const columns = useMemo(() => {
    return columnDefs.map((def: ColumnDef<T, keyof T>): ProcessedColumn<T> => {
      const key = def.key
      const sortable = def.sortable ?? false
      const isSorted = sortKey === key

      const renderCell = (row: T): ReactNode => {
        const value = row[key]
        if (def.cell) return def.cell(value, row)
        if (def.format) return def.format(value, row)
        return value == null ? '' : String(value)
      }

      return {
        key,
        head: {
          children: def.header,
          className: cn(def.className, def.headerClassName) || undefined,
          style: def.width ? { width: def.width } : undefined,
          sortable,
          sortDirection: isSorted ? sortDirection : undefined,
          onSort: sortable ? () => onSort(key) : undefined,
        },
        cell: {
          className: cn(def.className, def.cellClassName) || undefined,
        },
        renderCell,
      }
    })
  }, [columnDefs, sortKey, sortDirection, onSort])

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
    sortKey,
    sortDirection,
    onSort,
    searchTerm,
    onSearchChange,
    filterValues,
    setFilterValue,
    clearFilters,
    activeFilterCount,
  }
}
