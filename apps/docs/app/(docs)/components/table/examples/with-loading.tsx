'use client'

import { Skeleton } from '@lglab/compose-ui/skeleton'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'

export default function WithLoadingExample() {
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
        {Array.from({ length: 5 }).map((_, i) => (
          <TableRow key={i} className='hover:bg-transparent'>
            {Array.from({ length: 4 }).map((_, i) => (
              <TableCell key={i}>
                <Skeleton className='h-5 w-full' animation='shimmer' />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
