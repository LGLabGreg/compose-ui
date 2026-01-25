import { renderHook } from '@testing-library/react'
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
})
