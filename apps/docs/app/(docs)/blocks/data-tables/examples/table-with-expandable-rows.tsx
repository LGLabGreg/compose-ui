'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
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
import { ChevronRight, Package } from 'lucide-react'
import { Fragment } from 'react'

import { cn } from '@/lib/utils'

type Status = 'delivered' | 'shipped' | 'processing' | 'cancelled'

interface OrderItem {
  name: string
  sku: string
  quantity: number
  unitPrice: number
}

interface Order {
  id: string
  customer: string
  avatar: string
  status: Status
  total: number
  date: string
  items: OrderItem[]
  shippingAddress: string
  paymentMethod: string
  trackingNumber: string | null
}

const statusConfig: Record<
  Status,
  { variant: 'success' | 'info' | 'warning' | 'destructive'; label: string }
> = {
  delivered: { variant: 'success', label: 'Delivered' },
  shipped: { variant: 'info', label: 'Shipped' },
  processing: { variant: 'warning', label: 'Processing' },
  cancelled: { variant: 'destructive', label: 'Cancelled' },
}

const orders: Order[] = [
  {
    id: 'ORD-9201',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    status: 'delivered',
    total: 487.96,
    date: '2026-02-14',
    items: [
      { name: 'Wireless Headphones Pro', sku: 'WHP-001', quantity: 1, unitPrice: 249.99 },
      { name: 'USB-C Charging Cable', sku: 'UCC-034', quantity: 2, unitPrice: 18.99 },
      { name: 'Headphone Stand', sku: 'HPS-012', quantity: 1, unitPrice: 199.99 },
    ],
    shippingAddress: '350 Fifth Ave, New York, NY 10118',
    paymentMethod: 'Visa ending in 4242',
    trackingNumber: '1Z999AA10123456784',
  },
  {
    id: 'ORD-9200',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    status: 'shipped',
    total: 174.5,
    date: '2026-02-13',
    items: [
      { name: 'Mechanical Keyboard', sku: 'MKB-087', quantity: 1, unitPrice: 149.5 },
      { name: 'Keycap Set', sku: 'KCS-015', quantity: 1, unitPrice: 25.0 },
    ],
    shippingAddress: '1600 Amphitheatre Pkwy, Mountain View, CA 94043',
    paymentMethod: 'Mastercard ending in 8888',
    trackingNumber: '1Z999AA10123456785',
  },
  {
    id: 'ORD-9199',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    status: 'processing',
    total: 329.97,
    date: '2026-02-13',
    items: [
      { name: '27" 4K Monitor', sku: 'MON-027', quantity: 1, unitPrice: 299.99 },
      { name: 'HDMI Cable 6ft', sku: 'HDM-006', quantity: 1, unitPrice: 14.99 },
      { name: 'Monitor Arm Mount', sku: 'MAM-001', quantity: 1, unitPrice: 14.99 },
    ],
    shippingAddress: '1 Apple Park Way, Cupertino, CA 95014',
    paymentMethod: 'Apple Pay',
    trackingNumber: null,
  },
  {
    id: 'ORD-9198',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    status: 'delivered',
    total: 89.99,
    date: '2026-02-12',
    items: [{ name: 'Ergonomic Mouse', sku: 'ERM-042', quantity: 1, unitPrice: 89.99 }],
    shippingAddress: '410 Terry Ave N, Seattle, WA 98109',
    paymentMethod: 'PayPal',
    trackingNumber: '1Z999AA10123456786',
  },
  {
    id: 'ORD-9197',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    status: 'cancelled',
    total: 599.98,
    date: '2026-02-11',
    items: [
      { name: 'Standing Desk Frame', sku: 'SDF-001', quantity: 1, unitPrice: 449.99 },
      { name: 'Desk Mat XL', sku: 'DMX-003', quantity: 1, unitPrice: 49.99 },
      { name: 'Cable Management Kit', sku: 'CMK-010', quantity: 2, unitPrice: 24.99 },
      { name: 'Desk Shelf Riser', sku: 'DSR-005', quantity: 1, unitPrice: 25.02 },
    ],
    shippingAddress: '1 Hacker Way, Menlo Park, CA 94025',
    paymentMethod: 'Visa ending in 1234',
    trackingNumber: null,
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
    new Date(date),
  )

function OrderDetail({ order }: { order: Order }) {
  return (
    <div
      role='group'
      aria-label={`Details for order ${order.id}`}
      className='grid gap-6 px-4 py-3 md:px-8 md:py-6 md:grid-cols-[1fr_2fr]'
    >
      <div className='space-y-3 text-sm'>
        <div>
          <span className='text-muted-foreground'>Ship to</span>
          <p className='font-medium'>{order.shippingAddress}</p>
        </div>
        <div>
          <span className='text-muted-foreground'>Payment</span>
          <p className='font-medium'>{order.paymentMethod}</p>
        </div>
        <div>
          <span className='text-muted-foreground'>Tracking</span>
          <p className='font-medium'>
            {order.trackingNumber ?? (
              <span className='text-muted-foreground italic'>Pending</span>
            )}
          </p>
        </div>
      </div>

      <div role='group' aria-label='Order line items'>
        <div className='space-y-2'>
          {order.items.map((item) => {
            const lineTotal = item.unitPrice * item.quantity
            return (
              <div
                key={item.sku}
                className='flex items-center justify-between gap-4 text-sm'
              >
                <div className='min-w-0'>
                  <span className='font-medium'>{item.name}</span>
                  <span className='text-muted-foreground ml-2'>x{item.quantity}</span>
                </div>
                <data value={lineTotal} className='shrink-0 tabular-nums'>
                  {formatCurrency(lineTotal)}
                </data>
              </div>
            )
          })}
          <Separator />
          <div className='flex items-center justify-between text-sm font-semibold'>
            <span>Total</span>
            <data value={order.total} className='tabular-nums'>
              {formatCurrency(order.total)}
            </data>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TableWithExpandableRowsBlock() {
  const { columns, rows, totalItems, expansion } = useTable<Order>({
    data: orders,
    columns: [
      {
        key: 'id',
        header: 'Order',
        cell: (value) => <span className='font-medium'>{value as string}</span>,
      },
      {
        key: 'customer',
        header: 'Customer',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.customer} />
              <AvatarFallback>{getInitials(row.customer)}</AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.customer}</span>
          </div>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const config = statusConfig[value as Status]
          return (
            <Badge
              variant={config.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Status: ${config.label}`}
            >
              {config.label}
            </Badge>
          )
        },
      },
      {
        key: 'total',
        header: 'Total',
        cellClassName: 'text-right tabular-nums',
        headerClassName: 'text-right',
        cell: (value) => (
          <data value={value as number}>{formatCurrency(value as number)}</data>
        ),
      },
      {
        key: 'date',
        header: 'Date',
        cellClassName: 'hidden sm:table-cell whitespace-nowrap',
        headerClassName: 'hidden sm:table-cell',
        cell: (value) => formatDate(value as string),
      },
    ],
    expansion: { rowKey: (row) => row.id },
  })

  return (
    <section className='w-full' aria-labelledby='expandable-rows-title'>
      <CardRoot>
        <CardHeader>
          <div className='space-y-1'>
            <CardTitle id='expandable-rows-title' className='flex items-center gap-2'>
              <Package className='size-4' aria-hidden='true' />
              Recent Orders
            </CardTitle>
            <CardDescription>
              Click a row to expand order details and line items.
            </CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableHead className='w-10' />
                {columns.map((col) => (
                  <TableHead key={col.key} {...col.head} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow
                    className='cursor-pointer'
                    onClick={() => expansion?.toggleRowExpansion(row)}
                  >
                    <TableCell>
                      <Button
                        variant='ghost'
                        size='icon-sm'
                        aria-expanded={expansion?.isRowExpanded(row)}
                        aria-controls={`detail-${row.id}`}
                        aria-label={`Toggle details for order ${row.id}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          expansion?.toggleRowExpansion(row)
                        }}
                      >
                        <ChevronRight
                          className={cn(
                            'size-4 text-muted-foreground transition-transform duration-200',
                            expansion?.isRowExpanded(row) && 'rotate-90',
                          )}
                          aria-hidden='true'
                        />
                      </Button>
                    </TableCell>
                    {columns.map((col) => (
                      <TableCell key={col.key} {...col.cell}>
                        {col.renderCell(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                  {expansion?.isRowExpanded(row) && (
                    <TableRow
                      id={`detail-${row.id}`}
                      className='bg-muted/30 hover:bg-muted/30'
                    >
                      <TableCell colSpan={columns.length + 1} className='p-0'>
                        <OrderDetail order={row} />
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </TableRoot>
        </CardContent>

        <Separator />

        <CardFooter>
          <p className='text-sm text-muted-foreground'>
            <data value={totalItems} className='font-medium text-foreground'>
              {totalItems}
            </data>{' '}
            orders
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
