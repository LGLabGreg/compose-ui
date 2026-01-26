import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useTable } from './use-table'

interface TestData {
  id: number
  name: string
  price: number
  active: boolean
  createdAt?: Date
}

const testData: TestData[] = [
  { id: 1, name: 'Item 1', price: 100, active: true },
  { id: 2, name: 'Item 2', price: 200, active: false },
  { id: 3, name: 'Item 3', price: 300, active: true },
]

describe('useTable', () => {
  it('returns rows from data', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [{ key: 'name', header: 'Name' }],
      }),
    )

    expect(result.current.rows).toBe(testData)
  })

  it('returns correct totalItems count', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [{ key: 'name', header: 'Name' }],
      }),
    )

    expect(result.current.totalItems).toBe(3)
  })

  it('processes columns with headers', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          { key: 'name', header: 'Product Name' },
          { key: 'price', header: 'Price' },
        ],
      }),
    )

    expect(result.current.columns).toHaveLength(2)
    expect(result.current.columns[0].head.children).toBe('Product Name')
    expect(result.current.columns[1].head.children).toBe('Price')
  })

  it('renderCell returns raw value by default', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [{ key: 'name', header: 'Name' }],
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('Item 1')
  })

  it('renderCell uses format function when provided', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'price',
            header: 'Price',
            format: (value) => `$${value}`,
          },
        ],
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('$100')
  })

  it('renderCell prioritizes cell over format', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'price',
            header: 'Price',
            format: (value) => `$${value}`,
            cell: (value) => <span data-testid='custom'>{value as number}</span>,
          },
        ],
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toEqual(<span data-testid='custom'>{100}</span>)
  })

  it('format function receives both value and row', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'name',
            header: 'Name',
            format: (value, row) => `${value} (ID: ${row.id})`,
          },
        ],
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toBe('Item 1 (ID: 1)')
  })

  it('cell function receives both value and row', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'name',
            header: 'Name',
            cell: (value, row) => (
              <span>{`${value} - ${row.active ? 'Active' : 'Inactive'}`}</span>
            ),
          },
        ],
      }),
    )

    const cell = result.current.columns[0].renderCell(testData[0])
    expect(cell).toEqual(<span>Item 1 - Active</span>)
  })

  it('handles null values', () => {
    const dataWithNull = [{ id: 1, name: null as unknown as string }]

    const { result } = renderHook(() =>
      useTable({
        data: dataWithNull,
        columns: [{ key: 'name', header: 'Name' }],
      }),
    )

    const cell = result.current.columns[0].renderCell(dataWithNull[0])
    expect(cell).toBe('')
  })

  it('handles undefined values', () => {
    const dataWithUndefined = [{ id: 1, name: undefined as unknown as string }]

    const { result } = renderHook(() =>
      useTable({
        data: dataWithUndefined,
        columns: [{ key: 'name', header: 'Name' }],
      }),
    )

    const cell = result.current.columns[0].renderCell(dataWithUndefined[0])
    expect(cell).toBe('')
  })

  it('applies className to head.className', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'price',
            header: 'Price',
            className: 'text-right',
          },
        ],
      }),
    )

    expect(result.current.columns[0].head.className).toBe('text-right')
  })

  it('applies className to cell.className', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'price',
            header: 'Price',
            className: 'text-center',
          },
        ],
      }),
    )

    expect(result.current.columns[0].cell.className).toBe('text-center')
  })

  it('merges className with headerClassName and cellClassName', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          {
            key: 'price',
            header: 'Price',
            className: 'text-right',
            headerClassName: 'font-bold',
            cellClassName: 'text-green-500',
          },
        ],
      }),
    )

    expect(result.current.columns[0].head.className).toBe('text-right font-bold')
    expect(result.current.columns[0].cell.className).toBe('text-right text-green-500')
  })

  it('passes width through to head.style', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          { key: 'name', header: 'Name', width: 200 },
          { key: 'price', header: 'Price', width: '100px' },
        ],
      }),
    )

    expect(result.current.columns[0].head.style).toEqual({ width: 200 })
    expect(result.current.columns[1].head.style).toEqual({ width: '100px' })
  })

  it('preserves column key', () => {
    const { result } = renderHook(() =>
      useTable({
        data: testData,
        columns: [
          { key: 'name', header: 'Name' },
          { key: 'price', header: 'Price' },
        ],
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
        useTable({
          data: testData,
          columns: [{ key: 'name', header: 'Name' }],
        }),
      )

      expect(result.current.currentPage).toBe(1)
      expect(result.current.totalPages).toBe(1)
      expect(result.current.pageSize).toBe(10)
      expect(result.current.pageSizeOptions).toEqual([10, 25, 50, 100])
    })

    it('returns all rows when pagination not enabled', () => {
      const { result } = renderHook(() =>
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
        }),
      )

      expect(result.current.rows).toHaveLength(25)
      expect(result.current.rows).toBe(paginatedData)
    })

    it('returns rows sliced to current page when pagination enabled', () => {
      const { result } = renderHook(() =>
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.rows).toHaveLength(10)
      expect(result.current.rows[0].id).toBe(1)
      expect(result.current.rows[9].id).toBe(10)
    })

    it('computes totalPages correctly from data length and pageSize', () => {
      const { result } = renderHook(() =>
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.totalPages).toBe(3)
      expect(result.current.totalItems).toBe(25)
    })

    it('onPageChange updates currentPage within bounds', () => {
      const { result } = renderHook(() =>
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
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
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
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
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
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
          useTable({
            data,
            columns: [{ key: 'name', header: 'Name' }],
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
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
          pagination: { pageSize: 5, pageSizeOptions: [5, 15, 30] },
        }),
      )

      expect(result.current.pageSizeOptions).toEqual([5, 15, 30])
      expect(result.current.pageSize).toBe(5)
    })

    it('totalPages is at least 1 even with empty data', () => {
      const { result } = renderHook(() =>
        useTable({
          data: [] as TestData[],
          columns: [{ key: 'name', header: 'Name' }],
          pagination: { pageSize: 10 },
        }),
      )

      expect(result.current.totalPages).toBe(1)
      expect(result.current.rows).toHaveLength(0)
    })
  })

  describe('sorting', () => {
    it('returns default sort values when no sort option provided', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'name', header: 'Name' }],
        }),
      )

      expect(result.current.sortKey).toBeNull()
      expect(result.current.sortDirection).toBe('asc')
    })

    it('uses initial sort config when provided', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'name', header: 'Name' }],
          sort: { key: 'price', direction: 'desc' },
        }),
      )

      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('desc')
      expect(result.current.rows[0].price).toBe(300)
      expect(result.current.rows[2].price).toBe(100)
    })

    it('cycles sort direction asc -> desc -> unsorted', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'name', header: 'Name' }],
        }),
      )

      // First click: ascending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('asc')

      // Second click: descending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('desc')

      // Third click: unsorted
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBeNull()
    })

    it('re-sorts data correctly on multiple consecutive clicks', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'price', header: 'Price' }],
        }),
      )

      // Initial: unsorted (original order)
      expect(result.current.rows.map((r) => r.price)).toEqual([100, 200, 300])

      // First click: ascending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('asc')
      expect(result.current.rows.map((r) => r.price)).toEqual([100, 200, 300])

      // Second click: descending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('desc')
      expect(result.current.rows.map((r) => r.price)).toEqual([300, 200, 100])

      // Third click: unsorted (back to original order)
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBeNull()
      expect(result.current.rows.map((r) => r.price)).toEqual([100, 200, 300])

      // Fourth click: ascending again
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortKey).toBe('price')
      expect(result.current.sortDirection).toBe('asc')
      expect(result.current.rows.map((r) => r.price)).toEqual([100, 200, 300])
    })

    it('updates column sortDirection prop on multiple clicks', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'price', header: 'Price' }],
        }),
      )

      // Initial: not sorted
      expect(result.current.columns[0].head.sortDirection).toBeUndefined()

      // First click: ascending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.columns[0].head.sortDirection).toBe('asc')

      // Second click: descending
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.columns[0].head.sortDirection).toBe('desc')

      // Third click: unsorted
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.columns[0].head.sortDirection).toBeUndefined()
    })

    it('resets to asc when sorting a different column', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [
            { key: 'name', header: 'Name' },
            { key: 'price', header: 'Price' },
          ],
        }),
      )

      act(() => {
        result.current.onSort('price')
      })
      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.sortDirection).toBe('desc')

      act(() => {
        result.current.onSort('name')
      })
      expect(result.current.sortKey).toBe('name')
      expect(result.current.sortDirection).toBe('asc')
    })

    it('sorts numbers correctly', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'price', header: 'Price' }],
          sort: { key: 'price', direction: 'asc' },
        }),
      )

      expect(result.current.rows.map((r) => r.price)).toEqual([100, 200, 300])

      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.rows.map((r) => r.price)).toEqual([300, 200, 100])
    })

    it('sorts strings case-insensitively', () => {
      const data = [
        { id: 1, name: 'banana', price: 1, active: true },
        { id: 2, name: 'Apple', price: 2, active: true },
        { id: 3, name: 'cherry', price: 3, active: true },
      ]

      const { result } = renderHook(() =>
        useTable({
          data,
          columns: [{ key: 'name', header: 'Name' }],
          sort: { key: 'name', direction: 'asc' },
        }),
      )

      expect(result.current.rows.map((r) => r.name)).toEqual([
        'Apple',
        'banana',
        'cherry',
      ])
    })

    it('sorts dates correctly', () => {
      const data: TestData[] = [
        { id: 1, name: 'A', price: 1, active: true, createdAt: new Date('2024-03-01') },
        { id: 2, name: 'B', price: 2, active: true, createdAt: new Date('2024-01-01') },
        { id: 3, name: 'C', price: 3, active: true, createdAt: new Date('2024-02-01') },
      ]

      const { result } = renderHook(() =>
        useTable({
          data,
          columns: [{ key: 'createdAt', header: 'Created' }],
          sort: { key: 'createdAt', direction: 'asc' },
        }),
      )

      expect(result.current.rows.map((r) => r.id)).toEqual([2, 3, 1])
    })

    it('sorts booleans correctly (false < true)', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [{ key: 'active', header: 'Active' }],
          sort: { key: 'active', direction: 'asc' },
        }),
      )

      expect(result.current.rows.map((r) => r.active)).toEqual([false, true, true])
    })

    it('sorts nulls to end regardless of direction', () => {
      const data = [
        { id: 1, name: 'B', price: 100, active: true },
        { id: 2, name: null as unknown as string, price: 200, active: true },
        { id: 3, name: 'A', price: 300, active: true },
      ]

      const { result } = renderHook(() =>
        useTable({
          data,
          columns: [{ key: 'name', header: 'Name' }],
          sort: { key: 'name', direction: 'asc' },
        }),
      )

      expect(result.current.rows.map((r) => r.name)).toEqual(['A', 'B', null])

      act(() => {
        result.current.onSort('name')
      })
      expect(result.current.rows.map((r) => r.name)).toEqual(['B', 'A', null])
    })

    it('column sortable: true enables sorting for that column', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [
            { key: 'name', header: 'Name', sortable: true },
            { key: 'price', header: 'Price' },
          ],
        }),
      )

      expect(result.current.columns[0].head.sortable).toBe(true)
      expect(result.current.columns[0].head.onSort).toBeDefined()
      expect(result.current.columns[1].head.sortable).toBe(false)
      expect(result.current.columns[1].head.onSort).toBeUndefined()
    })

    it('column includes sortDirection when sorted', () => {
      const { result } = renderHook(() =>
        useTable({
          data: testData,
          columns: [
            { key: 'name', header: 'Name' },
            { key: 'price', header: 'Price' },
          ],
          sort: { key: 'price', direction: 'asc' },
        }),
      )

      expect(result.current.columns[0].head.sortDirection).toBeUndefined()
      expect(result.current.columns[1].head.sortDirection).toBe('asc')
    })

    it('sort resets pagination to page 1', () => {
      const paginatedData: TestData[] = Array.from({ length: 25 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        price: (i + 1) * 10,
        active: i % 2 === 0,
      }))

      const { result } = renderHook(() =>
        useTable({
          data: paginatedData,
          columns: [{ key: 'name', header: 'Name' }],
          pagination: { pageSize: 10 },
        }),
      )

      act(() => {
        result.current.onPageChange(2)
      })
      expect(result.current.currentPage).toBe(2)

      act(() => {
        result.current.onSort('price')
      })
      expect(result.current.currentPage).toBe(1)
    })
  })
})
