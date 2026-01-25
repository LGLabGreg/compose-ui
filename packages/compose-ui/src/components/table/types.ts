import type { ReactNode } from 'react'

export type Alignment = 'left' | 'center' | 'right'

export interface ColumnDef<T, K extends keyof T = keyof T> {
  header: string
  format?: (value: T[K], row: T) => string
  cell?: (value: T[K], row: T) => ReactNode
  align?: Alignment
  headerClassName?: string
  cellClassName?: string
  width?: string | number
}

export type ColumnsConfig<T> = {
  [K in keyof T]?: ColumnDef<T, K>
}

export interface PaginationConfig {
  pageSize: number
  pageSizeOptions?: number[]
}

export interface UseTableOptions<T> {
  columns: ColumnsConfig<T>
  pagination?: PaginationConfig
}

export interface ProcessedColumn<T> {
  key: keyof T
  header: string
  headerClassName: string | undefined
  cellClassName: string | undefined
  width: string | number | undefined
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
}
