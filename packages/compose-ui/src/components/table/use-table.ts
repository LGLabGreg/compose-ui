import { type ReactNode, useMemo } from 'react'

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

export function useTable<T>(data: T[], options: UseTableOptions<T>): UseTableReturn<T> {
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
    rows: data,
    totalItems: data.length,
  }
}
