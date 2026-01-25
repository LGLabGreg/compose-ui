import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useTable } from './use-table'

interface TestData {
  id: number
  name: string
  price: number
  active: boolean
}

const testData: TestData[] = [
  { id: 1, name: 'Item 1', price: 100, active: true },
  { id: 2, name: 'Item 2', price: 200, active: false },
  { id: 3, name: 'Item 3', price: 300, active: true },
]

describe('useTable', () => {
  it('returns rows from data', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: { header: 'Name' },
        },
      }),
    )

    expect(result.current.rows).toBe(testData)
  })

  it('returns correct totalItems count', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: { header: 'Name' },
        },
      }),
    )

    expect(result.current.totalItems).toBe(3)
  })

  it('processes columns with headers', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: { header: 'Product Name' },
          price: { header: 'Price' },
        },
      }),
    )

    expect(result.current.columns).toHaveLength(2)
    expect(result.current.columns[0].header).toBe('Product Name')
    expect(result.current.columns[1].header).toBe('Price')
  })

  it('renderCell returns raw value by default', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: { header: 'Name' },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('Item 1')
  })

  it('renderCell uses format function when provided', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          price: {
            header: 'Price',
            format: (value) => `$${value}`,
          },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('$100')
  })

  it('renderCell prioritizes cell over format', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          price: {
            header: 'Price',
            format: (value) => `$${value}`,
            cell: (value) => <span data-testid='custom'>{value}</span>,
          },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toEqual(<span data-testid='custom'>{100}</span>)
  })

  it('format function receives both value and row', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: {
            header: 'Name',
            format: (value, row) => `${value} (ID: ${row.id})`,
          },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('Item 1 (ID: 1)')
  })

  it('cell function receives both value and row', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: {
            header: 'Name',
            cell: (value, row) => (
              <span>{`${value} - ${row.active ? 'Active' : 'Inactive'}`}</span>
            ),
          },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toEqual(<span>Item 1 - Active</span>)
  })

  it('handles null values', () => {
    const dataWithNull = [{ id: 1, name: null as unknown as string }]

    const { result } = renderHook(() =>
      useTable(dataWithNull, {
        columns: {
          name: { header: 'Name' },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(dataWithNull[0])
    expect(cell).toBe('')
  })

  it('handles undefined values', () => {
    const dataWithUndefined = [{ id: 1, name: undefined as unknown as string }]

    const { result } = renderHook(() =>
      useTable(dataWithUndefined, {
        columns: {
          name: { header: 'Name' },
        },
      }),
    )

    const cell = result.current.columns[0].renderCell(dataWithUndefined[0])
    expect(cell).toBe('')
  })

  it('applies alignment class to headerClassName', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          price: {
            header: 'Price',
            align: 'right',
          },
        },
      }),
    )

    expect(result.current.columns[0].headerClassName).toBe('text-right')
  })

  it('applies alignment class to cellClassName', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          price: {
            header: 'Price',
            align: 'center',
          },
        },
      }),
    )

    expect(result.current.columns[0].cellClassName).toBe('text-center')
  })

  it('merges custom className with alignment', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          price: {
            header: 'Price',
            align: 'right',
            headerClassName: 'font-bold',
            cellClassName: 'text-green-500',
          },
        },
      }),
    )

    expect(result.current.columns[0].headerClassName).toBe('font-bold text-right')
    expect(result.current.columns[0].cellClassName).toBe('text-green-500 text-right')
  })

  it('passes width through to column', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: {
            header: 'Name',
            width: 200,
          },
          price: {
            header: 'Price',
            width: '100px',
          },
        },
      }),
    )

    expect(result.current.columns[0].width).toBe(200)
    expect(result.current.columns[1].width).toBe('100px')
  })

  it('preserves column key', () => {
    const { result } = renderHook(() =>
      useTable(testData, {
        columns: {
          name: { header: 'Name' },
          price: { header: 'Price' },
        },
      }),
    )

    expect(result.current.columns[0].key).toBe('name')
    expect(result.current.columns[1].key).toBe('price')
  })

  describe('pagination', () => {
    const paginatedData: TestData[] = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      price: (i + 1) * 10,
      active: i % 2 === 0,
    }))

    it('returns default pagination values when no config', () => {
      const { result } = renderHook(() =>
        useTable(testData, {
          columns: { name: { header: 'Name' } },
        }),
      )

      expect(result.current.currentPage).toBe(1)
      expect(result.current.totalPages).toBe(1)
      expect(result.current.pageSize).toBe(10)
      expect(result.current.pageSizeOptions).toEqual([10, 25, 50, 100])
    })

    it('returns all rows when pagination not enabled', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
        }),
      )

      expect(result.current.rows).toHaveLength(25)
      expect(result.current.rows).toBe(paginatedData)
    })

    it('returns rows sliced to current page when pagination enabled', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.rows).toHaveLength(10)
      expect(result.current.rows[0].id).toBe(1)
      expect(result.current.rows[9].id).toBe(10)
    })

    it('computes totalPages correctly from data length and pageSize', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.totalPages).toBe(3)
      expect(result.current.totalItems).toBe(25)
    })

    it('onPageChange updates currentPage within bounds', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      act(() => {
        result.current.onPageChange(2)
      })

      expect(result.current.currentPage).toBe(2)
      expect(result.current.rows[0].id).toBe(11)

      act(() => {
        result.current.onPageChange(3)
      })

      expect(result.current.currentPage).toBe(3)
      expect(result.current.rows).toHaveLength(5)
      expect(result.current.rows[0].id).toBe(21)
    })

    it('onPageChange clamps to valid range', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      act(() => {
        result.current.onPageChange(100)
      })
      expect(result.current.currentPage).toBe(3)

      act(() => {
        result.current.onPageChange(0)
      })
      expect(result.current.currentPage).toBe(1)

      act(() => {
        result.current.onPageChange(-5)
      })
      expect(result.current.currentPage).toBe(1)
    })

    it('onPageSizeChange updates pageSize and resets to page 1', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      act(() => {
        result.current.onPageChange(2)
      })
      expect(result.current.currentPage).toBe(2)

      act(() => {
        result.current.onPageSizeChange(25)
      })

      expect(result.current.pageSize).toBe(25)
      expect(result.current.currentPage).toBe(1)
      expect(result.current.totalPages).toBe(1)
      expect(result.current.rows).toHaveLength(25)
    })

    it('page adjusts to last valid page when data shrinks below current page', () => {
      const initialData = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        price: (i + 1) * 10,
        active: true,
      }))

      const { result, rerender } = renderHook(
        ({ data }) =>
          useTable(data, {
            columns: { name: { header: 'Name' } },
            pagination: { pageSize: 10 },
          }),
        { initialProps: { data: initialData } },
      )

      act(() => {
        result.current.onPageChange(5)
      })
      expect(result.current.currentPage).toBe(5)

      const smallerData = initialData.slice(0, 15)
      rerender({ data: smallerData })

      expect(result.current.currentPage).toBe(2)
      expect(result.current.totalPages).toBe(2)
    })

    it('custom pageSizeOptions are returned when provided', () => {
      const { result } = renderHook(() =>
        useTable(paginatedData, {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 5, pageSizeOptions: [5, 15, 30] },
        }),
      )

      expect(result.current.pageSizeOptions).toEqual([5, 15, 30])
      expect(result.current.pageSize).toBe(5)
    })

    it('totalPages is at least 1 even with empty data', () => {
      const { result } = renderHook(() =>
        useTable([] as TestData[], {
          columns: { name: { header: 'Name' } },
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.totalPages).toBe(1)
      expect(result.current.rows).toHaveLength(0)
    })
  })
})
