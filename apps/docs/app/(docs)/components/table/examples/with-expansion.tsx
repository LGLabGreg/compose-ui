'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'
import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'

import { cn } from '@/lib/utils'

interface User {
  id: number
  name: string
  email: string
  role: string
  department: string
  location: string
  phone: string
}

const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    department: 'Engineering',
    location: 'San Francisco, CA',
    phone: '(415) 555-0101',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Editor',
    department: 'Marketing',
    location: 'New York, NY',
    phone: '(212) 555-0102',
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol@example.com',
    role: 'Viewer',
    department: 'Design',
    location: 'Austin, TX',
    phone: '(512) 555-0103',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david@example.com',
    role: 'Editor',
    department: 'Engineering',
    location: 'Seattle, WA',
    phone: '(206) 555-0104',
  },
  {
    id: 5,
    name: 'Eva Martinez',
    email: 'eva@example.com',
    role: 'Admin',
    department: 'Operations',
    location: 'Chicago, IL',
    phone: '(312) 555-0105',
  },
]

export default function WithExpansionExample() {
  const { columns, rows, expansion } = useTable({
    data: users,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', width: 100 },
    ],
    expansion: {
      rowKey: (row) => row.id,
    },
  })

  return (
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
            <TableRow>
              <TableCell className='w-10'>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  aria-expanded={expansion?.isRowExpanded(row)}
                  aria-controls={`detail-${row.id}`}
                  aria-label={`Toggle details for ${row.name}`}
                  onClick={() => expansion?.toggleRowExpansion(row)}
                >
                  <ChevronRight
                    className={cn(
                      'size-4 transition-transform duration-200',
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
              <TableRow id={`detail-${row.id}`} className='bg-muted/30 hover:bg-muted/30'>
                <TableCell colSpan={columns.length + 1} className='py-3'>
                  <div
                    role='group'
                    aria-label={`Details for ${row.name}`}
                    className='grid grid-cols-3 gap-4 text-sm pl-10'
                  >
                    <div>
                      <span className='text-muted-foreground'>Department</span>
                      <p className='font-medium'>{row.department}</p>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Location</span>
                      <p className='font-medium'>{row.location}</p>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Phone</span>
                      <p className='font-medium'>{row.phone}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        ))}
      </TableBody>
    </TableRoot>
  )
}
