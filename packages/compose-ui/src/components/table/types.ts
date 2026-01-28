import type { CSSProperties, ReactNode } from 'react'

export type SortDirection = 'asc' | 'desc'

// ============================================================================
// Input Types (what users provide to useTable)
// ============================================================================

export interface ColumnDef<T, K extends keyof T = keyof T> {
  key: K
  header: ReactNode
  format?: (value: T[K], row: T) => string
  cell?: (value: T[K], row: T) => ReactNode
  className?: string
  headerClassName?: string
  cellClassName?: string
  width?: string | number
  sortable?: boolean
}

export interface PaginationConfig {
  pageSize: number
  pageSizeOptions?: number[]
}

export interface SearchConfig<T> {
  keys: (keyof T)[]
}

// Filter predicate: returns true if row should be included
export type FilterPredicate<T, V = unknown> = (row: T, value: V) => boolean

// Filter definition
export interface FilterDef<T, V = unknown> {
  predicate: FilterPredicate<T, V>
  defaultValue?: V
}

// Filter config map: filterId -> FilterDef
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- intentional: each filter can have different value types
export type FiltersConfig<T> = Record<string, FilterDef<T, any>>

// Filter values map: filterId -> current value
export type FilterValues = Record<string, unknown>

// Row key extraction function
export type RowKeyGetter<T> = (row: T) => string | number

// Selection configuration
export interface SelectionConfig<T> {
  rowKey: RowKeyGetter<T>
  defaultSelectedKeys?: (string | number)[]
  selectedKeys?: (string | number)[]
  onSelectionChange?: (keys: (string | number)[]) => void
}

// Selection state returned by useTable
export interface SelectionState<T> {
  selectedKeys: (string | number)[]
  selectedCount: number
  // Key-based methods
  isSelected: (key: string | number) => boolean
  toggleRow: (key: string | number) => void
  // Row-based methods (use rowKey internally)
  isRowSelected: (row: T) => boolean
  toggleRowSelection: (row: T) => void
  toggleAllOnPage: () => void
  clearSelection: () => void
  pageSelectionState: 'all' | 'some' | 'none'
  isIndeterminate: boolean
  isAllOnPageSelected: boolean
}

export interface UseTableOptions<T> {
  data: T[]
  columns: ColumnDef<T, keyof T>[]
  pagination?: PaginationConfig
  sort?: { key: keyof T; direction: SortDirection }
  search?: SearchConfig<T>
  filters?: FiltersConfig<T>
  selection?: SelectionConfig<T>
}

// ============================================================================
// Output Types (what useTable returns)
// ============================================================================

export interface ProcessedColumn<T> {
  key: keyof T
  head: {
    children: ReactNode
    className?: string
    style?: CSSProperties
    sortable: boolean
    sortDirection?: SortDirection
    onSort?: () => void
  }
  cell: {
    className?: string
  }
  renderCell: (row: T) => ReactNode
}

export interface UseTableReturn<T> {
  columns: ProcessedColumn<T>[]
  rows: T[]
  totalItems: number
  currentPage: number
  totalPages: number
  pageSize: number
  pageSizeOptions: number[]
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  sortKey: keyof T | null
  sortDirection: SortDirection
  onSort: (key: keyof T) => void
  searchTerm: string
  onSearchChange: (term: string) => void
  filterValues: FilterValues
  setFilterValue: (filterId: string, value: unknown) => void
  clearFilters: () => void
  activeFilterCount: number
  selection?: SelectionState<T>
}
