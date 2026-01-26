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

export interface UseTableOptions<T> {
  data: T[]
  columns: ColumnDef<T, keyof T>[]
  pagination?: PaginationConfig
  sort?: { key: keyof T; direction: SortDirection }
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
}
