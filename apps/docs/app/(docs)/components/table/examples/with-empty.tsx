'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  EmptyActions,
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from '@lglab/compose-ui/empty'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'
import { Inbox } from 'lucide-react'

export default function WithEmptyExample() {
  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='hover:bg-transparent'>
          <TableCell colSpan={4} className='h-auto p-0'>
            <EmptyRoot size='sm'>
              <EmptyIcon size='sm'>
                <Inbox />
              </EmptyIcon>
              <EmptyTitle as='h3' className='text-base'>
                No invoices found
              </EmptyTitle>
              <EmptyDescription>
                There are no invoices to display. Create your first invoice to get
                started.
              </EmptyDescription>
              <EmptyActions>
                <Button size='sm'>Create invoice</Button>
              </EmptyActions>
            </EmptyRoot>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableRoot>
  )
}
