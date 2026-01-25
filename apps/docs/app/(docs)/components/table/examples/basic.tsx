'use client'

import { Badge, BadgeVariant } from '@lglab/compose-ui/badge'
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
]

const statusVariants: Record<string, BadgeVariant> = {
  Paid: 'success',
  Pending: 'warning',
  Unpaid: 'destructive',
}

export default function BasicExample() {
  return (
    <TableRoot>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead align='right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className='font-medium'>{invoice.id}</TableCell>
            <TableCell>
              <Badge
                variant={statusVariants[invoice.status]}
                appearance='outline'
                size='sm'
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell align='right'>{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
