'use client'

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
  inStock: boolean
  createdAt: Date
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    inStock: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    name: 'Mouse',
    price: 29.99,
    inStock: true,
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 79.99,
    inStock: false,
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 4,
    name: 'Monitor',
    price: 349.99,
    inStock: true,
    createdAt: new Date('2024-03-05'),
  },
  {
    id: 5,
    name: 'Headphones',
    price: 149.99,
    inStock: false,
    createdAt: new Date('2024-02-28'),
  },
  {
    id: 6,
    name: 'Webcam',
    price: 89.99,
    inStock: true,
    createdAt: new Date('2024-01-22'),
  },
]

export default function WithSortingExample() {
  const { columns, rows } = useTable({
    data: products,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Product Name', sortable: true },
      {
        key: 'price',
        header: 'Price',
        format: (value) => `$${(value as number).toFixed(2)}`,
        sortable: true,
      },
      {
        key: 'inStock',
        header: 'In Stock',
        format: (value) => (value ? 'Yes' : 'No'),
        sortable: true,
      },
      {
        key: 'createdAt',
        header: 'Created',
        format: (value) => (value as Date).toLocaleDateString(),
        sortable: true,
      },
    ],
    sort: { key: 'name', direction: 'asc' },
  })

  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={String(col.key)} {...col.head} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((col) => (
              <TableCell key={String(col.key)} {...col.cell}>
                {col.renderCell(row)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
