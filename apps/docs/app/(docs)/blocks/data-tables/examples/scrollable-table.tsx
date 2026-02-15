'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import { Separator } from '@lglab/compose-ui/separator'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'
import { List } from 'lucide-react'

const statusConfig = {
  completed: { variant: 'success' as const, label: 'Completed' },
  processing: { variant: 'warning' as const, label: 'Processing' },
  shipped: { variant: 'info' as const, label: 'Shipped' },
  cancelled: { variant: 'destructive' as const, label: 'Cancelled' },
  pending: { variant: 'secondary' as const, label: 'Pending' },
}

type Status = keyof typeof statusConfig

interface Order {
  id: string
  customer: string
  avatar: string
  product: string
  amount: number
  date: string
  status: Status
}

const orders: Order[] = [
  {
    id: 'ORD-7892',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Headphones Pro',
    amount: 249.99,
    date: '2026-02-14',
    status: 'completed',
  },
  {
    id: 'ORD-7891',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Mechanical Keyboard',
    amount: 174.5,
    date: '2026-02-14',
    status: 'processing',
  },
  {
    id: 'ORD-7890',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'USB-C Hub Adapter',
    amount: 59.99,
    date: '2026-02-13',
    status: 'shipped',
  },
  {
    id: 'ORD-7889',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: '4K Monitor 27"',
    amount: 449.0,
    date: '2026-02-13',
    status: 'completed',
  },
  {
    id: 'ORD-7888',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Ergonomic Mouse',
    amount: 89.95,
    date: '2026-02-12',
    status: 'pending',
  },
  {
    id: 'ORD-7887',
    customer: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Laptop Stand',
    amount: 65.0,
    date: '2026-02-12',
    status: 'cancelled',
  },
  {
    id: 'ORD-7886',
    customer: 'Emma Wilson',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    product: 'Webcam HD',
    amount: 129.0,
    date: '2026-02-11',
    status: 'shipped',
  },
  {
    id: 'ORD-7885',
    customer: 'Noah Brown',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    product: 'Desk Lamp LED',
    amount: 45.99,
    date: '2026-02-11',
    status: 'completed',
  },
  {
    id: 'ORD-7884',
    customer: 'Ava Martinez',
    avatar:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=128&h=128&dpr=2&q=80',
    product: 'Bluetooth Speaker',
    amount: 79.99,
    date: '2026-02-10',
    status: 'processing',
  },
  {
    id: 'ORD-7883',
    customer: 'Ethan Taylor',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80',
    product: 'Phone Stand',
    amount: 24.99,
    date: '2026-02-10',
    status: 'shipped',
  },
  {
    id: 'ORD-7882',
    customer: 'Mia Anderson',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&dpr=2&q=80',
    product: 'Tablet Case',
    amount: 34.5,
    date: '2026-02-09',
    status: 'completed',
  },
  {
    id: 'ORD-7881',
    customer: 'James Thomas',
    avatar:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=128&h=128&dpr=2&q=80',
    product: 'SSD 1TB',
    amount: 119.0,
    date: '2026-02-09',
    status: 'pending',
  },
  {
    id: 'ORD-7880',
    customer: 'Charlotte Jackson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Monitor Arm',
    amount: 89.0,
    date: '2026-02-08',
    status: 'shipped',
  },
  {
    id: 'ORD-7879',
    customer: 'Benjamin White',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Cable Organizer',
    amount: 19.99,
    date: '2026-02-08',
    status: 'completed',
  },
  {
    id: 'ORD-7878',
    customer: 'Amelia Harris',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Charger',
    amount: 49.99,
    date: '2026-02-07',
    status: 'processing',
  },
  {
    id: 'ORD-7877',
    customer: 'Lucas Clark',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: 'Noise Cancelling Headphones',
    amount: 299.0,
    date: '2026-02-07',
    status: 'shipped',
  },
  {
    id: 'ORD-7876',
    customer: 'Harper Lewis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Smart Watch Band',
    amount: 29.99,
    date: '2026-02-06',
    status: 'completed',
  },
  {
    id: 'ORD-7875',
    customer: 'Henry Walker',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Portable Power Bank',
    amount: 59.0,
    date: '2026-02-06',
    status: 'cancelled',
  },
  {
    id: 'ORD-7874',
    customer: 'Evelyn Hall',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    product: 'Keyboard Wrist Rest',
    amount: 22.0,
    date: '2026-02-05',
    status: 'pending',
  },
  {
    id: 'ORD-7873',
    customer: 'Alexander Young',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    product: 'Docking Station',
    amount: 189.0,
    date: '2026-02-05',
    status: 'shipped',
  },
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))

export default function ScrollableTableBlock() {
  const { columns, rows, totalItems } = useTable<Order>({
    data: orders,
    columns: [
      {
        key: 'id',
        header: 'Order',
        cell: (value) => <span className='font-medium'>{value}</span>,
      },
      {
        key: 'customer',
        header: 'Customer',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.customer} />
              <AvatarFallback>
                {row.customer
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.customer}</span>
          </div>
        ),
      },
      { key: 'product', header: 'Product' },
      {
        key: 'date',
        header: 'Date',
        cell: (value) => (
          <span className='whitespace-nowrap'>{formatDate(value as string)}</span>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const status = statusConfig[value as Status]
          return (
            <Badge
              variant={status.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Order status: ${status.label}`}
            >
              {status.label}
            </Badge>
          )
        },
      },
      {
        key: 'amount',
        header: 'Amount',
        cellClassName: 'text-right tabular-nums font-medium',
        cell: (value) => (
          <data value={value as number}>{formatCurrency(value as number)}</data>
        ),
      },
    ],
  })

  return (
    <section className='w-full' aria-labelledby='table-scrollable-body-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle
                id='table-scrollable-body-title'
                className='flex items-center gap-2'
              >
                <List className='size-4' aria-hidden='true' />
                Recent Orders
              </CardTitle>
              <CardDescription>
                Fixed-height table with scrollable body and sticky header.
              </CardDescription>
            </div>
            <p className='text-sm text-muted-foreground'>
              Showing <data value={totalItems}>{totalItems}</data> orders
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <div className='max-h-[400px] overflow-auto'>
            <TableRoot variant='striped' stickyHeader>
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableHead key={col.key} {...col.head} />
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((col) => (
                      <TableCell key={col.key} {...col.cell}>
                        {col.renderCell(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </TableRoot>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
