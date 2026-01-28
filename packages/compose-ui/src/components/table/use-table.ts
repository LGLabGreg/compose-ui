import { type ReactNode, useCallback, useDeferredValue, useMemo, useState } from 'react'

import { cn } from '../../lib/utils'
import { compareValues } from './sort'
import type {
  ColumnDef,
  FilterValues,
  ProcessedColumn,
  SelectionState,
  SortDirection,
  UseTableOptions,
  UseTableReturn,
} from './types'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100]

export function useTable<T>(options: UseTableOptions<T>): UseTableReturn<T> {
  const {
    data,
    columns: columnDefs,
    pagination,
    sort,
    search,
    filters,
    selection: selectionConfig,
  } = options

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

  // Selection state (internal, used when uncontrolled)
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<Set<string | number>>(
    () => new Set(selectionConfig?.defaultSelectedKeys ?? []),
  )

  // Determine if controlled or uncontrolled
  const isControlled = selectionConfig?.selectedKeys !== undefined
  const selectedKeysSet = useMemo(
    () => (isControlled ? new Set(selectionConfig?.selectedKeys) : internalSelectedKeys),
    [isControlled, selectionConfig?.selectedKeys, internalSelectedKeys],
  )

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

  // Selection: compute current page row keys
  const currentPageRowKeys = useMemo(() => {
    if (!selectionConfig) return []
    return rows.map((row) => selectionConfig.rowKey(row))
  }, [rows, selectionConfig])

  // Selection: compute page selection state
  const pageSelectionState = useMemo((): 'all' | 'some' | 'none' => {
    if (!selectionConfig || currentPageRowKeys.length === 0) return 'none'
    const selectedOnPage = currentPageRowKeys.filter((key) => selectedKeysSet.has(key))
    if (selectedOnPage.length === 0) return 'none'
    if (selectedOnPage.length === currentPageRowKeys.length) return 'all'
    return 'some'
  }, [selectionConfig, currentPageRowKeys, selectedKeysSet])

  // Selection: helper to update selection
  const updateSelection = useCallback(
    (newKeys: (string | number)[]) => {
      if (isControlled) {
        selectionConfig?.onSelectionChange?.(newKeys)
      } else {
        setInternalSelectedKeys(new Set(newKeys))
        selectionConfig?.onSelectionChange?.(newKeys)
      }
    },
    [isControlled, selectionConfig],
  )

  const isSelected = useCallback(
    (key: string | number) => selectedKeysSet.has(key),
    [selectedKeysSet],
  )

  const toggleRow = useCallback(
    (key: string | number) => {
      const newKeys = new Set(selectedKeysSet)
      if (newKeys.has(key)) {
        newKeys.delete(key)
      } else {
        newKeys.add(key)
      }
      updateSelection(Array.from(newKeys))
    },
    [selectedKeysSet, updateSelection],
  )

  // Row-based convenience methods that use rowKey internally
  const isRowSelected = useCallback(
    (row: T) => selectedKeysSet.has(selectionConfig!.rowKey(row)),
    [selectedKeysSet, selectionConfig],
  )

  const toggleRowSelection = useCallback(
    (row: T) => toggleRow(selectionConfig!.rowKey(row)),
    [toggleRow, selectionConfig],
  )

  const toggleAllOnPage = useCallback(() => {
    const newKeys = new Set(selectedKeysSet)
    if (pageSelectionState === 'all') {
      // Deselect all on current page
      for (const key of currentPageRowKeys) {
        newKeys.delete(key)
      }
    } else {
      // Select all on current page
      for (const key of currentPageRowKeys) {
        newKeys.add(key)
      }
    }
    updateSelection(Array.from(newKeys))
  }, [selectedKeysSet, pageSelectionState, currentPageRowKeys, updateSelection])

  const clearSelection = useCallback(() => {
    updateSelection([])
  }, [updateSelection])

  // Build selection state object
  const selection: SelectionState<T> | undefined = useMemo(() => {
    if (!selectionConfig) return undefined
    return {
      selectedKeys: Array.from(selectedKeysSet),
      selectedCount: selectedKeysSet.size,
      isSelected,
      toggleRow,
      isRowSelected,
      toggleRowSelection,
      toggleAllOnPage,
      clearSelection,
      pageSelectionState,
      isIndeterminate: pageSelectionState === 'some',
      isAllOnPageSelected: pageSelectionState === 'all',
    }
  }, [
    selectionConfig,
    selectedKeysSet,
    isSelected,
    toggleRow,
    isRowSelected,
    toggleRowSelection,
    toggleAllOnPage,
    clearSelection,
    pageSelectionState,
  ])

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
    selection,
  }
}
