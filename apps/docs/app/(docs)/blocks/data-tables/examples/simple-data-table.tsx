'use client'

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
} from '@lglab/compose-ui/table'
import { ShoppingCart } from 'lucide-react'

const statusConfig = {
  completed: { variant: 'success' as const, label: 'Completed' },
  processing: { variant: 'warning' as const, label: 'Processing' },
  shipped: { variant: 'info' as const, label: 'Shipped' },
  cancelled: { variant: 'destructive' as const, label: 'Cancelled' },
  pending: { variant: 'secondary' as const, label: 'Pending' },
}

type Status = keyof typeof statusConfig

const orders = [
  {
    id: 'ORD-7892',
    customer: 'Olivia Martin',
    product: 'Wireless Headphones Pro',
    amount: 249.99,
    date: '2026-02-14',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7891',
    customer: 'Jackson Lee',
    product: 'Mechanical Keyboard',
    amount: 174.5,
    date: '2026-02-14',
    status: 'processing' as Status,
  },
  {
    id: 'ORD-7890',
    customer: 'Isabella Nguyen',
    product: 'USB-C Hub Adapter',
    amount: 59.99,
    date: '2026-02-13',
    status: 'shipped' as Status,
  },
  {
    id: 'ORD-7889',
    customer: 'William Kim',
    product: '4K Monitor 27"',
    amount: 449.0,
    date: '2026-02-13',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7888',
    customer: 'Sofia Davis',
    product: 'Ergonomic Mouse',
    amount: 89.95,
    date: '2026-02-12',
    status: 'pending' as Status,
  },
  {
    id: 'ORD-7887',
    customer: 'Liam Johnson',
    product: 'Laptop Stand',
    amount: 65.0,
    date: '2026-02-12',
    status: 'cancelled' as Status,
  },
  {
    id: 'ORD-7886',
    customer: 'Emma Wilson',
    product: 'Webcam HD 1080p',
    amount: 129.99,
    date: '2026-02-11',
    status: 'shipped' as Status,
  },
  {
    id: 'ORD-7885',
    customer: 'Noah Brown',
    product: 'Desk Lamp LED',
    amount: 42.5,
    date: '2026-02-11',
    status: 'completed' as Status,
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

export default function SimpleDataTableBlock() {
  return (
    <section className='w-full' aria-labelledby='simple-data-table-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='simple-data-table-title' className='flex items-center gap-2'>
                <ShoppingCart className='size-4' aria-hidden='true' />
                Recent Orders
              </CardTitle>
              <CardDescription>
                A list of recent orders and their current status.
              </CardDescription>
            </div>
            <p className='text-sm text-muted-foreground'>
              Showing <data value={orders.length}>{orders.length}</data> orders
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot variant='striped'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className='hidden md:table-cell'>Product</TableHead>
                <TableHead className='hidden sm:table-cell'>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const status = statusConfig[order.status]
                return (
                  <TableRow key={order.id}>
                    <TableCell className='font-medium'>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {order.product}
                    </TableCell>
                    <TableCell className='hidden sm:table-cell'>
                      {formatDate(order.date)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={status.variant}
                        appearance='light'
                        size='sm'
                        shape='pill'
                        aria-label={`Order status: ${status.label}`}
                      >
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-right tabular-nums font-medium'>
                      {formatCurrency(order.amount)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </TableRoot>
        </CardContent>
      </CardRoot>
    </section>
  )
}
