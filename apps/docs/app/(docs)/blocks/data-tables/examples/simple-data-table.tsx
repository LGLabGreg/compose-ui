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
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Headphones Pro',
    amount: 249.99,
    date: '2026-02-14',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7891',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Mechanical Keyboard',
    amount: 174.5,
    date: '2026-02-14',
    status: 'processing' as Status,
  },
  {
    id: 'ORD-7890',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'USB-C Hub Adapter',
    amount: 59.99,
    date: '2026-02-13',
    status: 'shipped' as Status,
  },
  {
    id: 'ORD-7889',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: '4K Monitor 27"',
    amount: 449.0,
    date: '2026-02-13',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7888',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Ergonomic Mouse',
    amount: 89.95,
    date: '2026-02-12',
    status: 'pending' as Status,
  },
  {
    id: 'ORD-7887',
    customer: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Laptop Stand',
    amount: 65.0,
    date: '2026-02-12',
    status: 'cancelled' as Status,
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
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
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
                    <TableCell>
                      <div className='flex items-center gap-2'>
                        <AvatarRoot size='sm'>
                          <AvatarImage src={order.avatar} alt={order.customer} />
                          <AvatarFallback>
                            {order.customer
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </AvatarRoot>
                        <span className='font-medium'>{order.customer}</span>
                      </div>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell className='whitespace-nowrap'>
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
