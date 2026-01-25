'use client'

import { Badge } from '@lglab/compose-ui/badge'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'

interface Product {
  id: number
  name: string
  price: number
  stock: number
  active: boolean
}

const products: Product[] = [
  { id: 1, name: 'Laptop Pro', price: 1299.99, stock: 15, active: true },
  { id: 2, name: 'Wireless Mouse', price: 49.99, stock: 150, active: true },
  { id: 3, name: 'USB-C Hub', price: 79.99, stock: 0, active: false },
  { id: 4, name: 'Mechanical Keyboard', price: 159.99, stock: 45, active: true },
]

export default function WithHookExample() {
  const { columns, rows } = useTable(products, {
    columns: {
      name: {
        header: 'Product',
        cellClassName: 'font-medium',
      },
      price: {
        header: 'Price',
        format: (value) => `$${value.toFixed(2)}`,
      },
      stock: {
        header: 'Stock',
        cell: (value) => (
          <span className={value === 0 ? 'text-red-500' : ''}>
            {value === 0 ? 'Out of stock' : value}
          </span>
        ),
      },
      active: {
        header: 'Status',
        align: 'center',
        cell: (value) => (
          <Badge
            variant={value ? 'success' : 'secondary'}
            appearance='light'
            shape='pill'
            size='sm'
          >
            {value ? 'Active' : 'Inactive'}
          </Badge>
        ),
      },
    },
  })

  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key} className={col.headerClassName}>
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((col) => (
              <TableCell key={col.key} className={col.cellClassName}>
                {col.renderCell(row)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
