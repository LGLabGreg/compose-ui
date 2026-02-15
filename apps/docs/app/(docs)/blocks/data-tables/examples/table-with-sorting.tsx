'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
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
import { Building2 } from 'lucide-react'

type Department = 'engineering' | 'design' | 'marketing' | 'sales' | 'finance'

interface Employee {
  id: number
  name: string
  avatar: string
  title: string
  department: Department
  salary: number
  startDate: string
}

const departmentConfig: Record<
  Department,
  { variant: 'info' | 'success' | 'warning' | 'destructive' | 'secondary'; label: string }
> = {
  engineering: { variant: 'info', label: 'Engineering' },
  design: { variant: 'success', label: 'Design' },
  marketing: { variant: 'warning', label: 'Marketing' },
  sales: { variant: 'destructive', label: 'Sales' },
  finance: { variant: 'secondary', label: 'Finance' },
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    title: 'Senior Engineer',
    department: 'engineering',
    salary: 145000,
    startDate: '2021-03-15',
  },
  {
    id: 2,
    name: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    title: 'Product Designer',
    department: 'design',
    salary: 125000,
    startDate: '2022-07-01',
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    title: 'Marketing Manager',
    department: 'marketing',
    salary: 118000,
    startDate: '2020-11-20',
  },
  {
    id: 4,
    name: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    title: 'Engineering Lead',
    department: 'engineering',
    salary: 175000,
    startDate: '2019-06-10',
  },
  {
    id: 5,
    name: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    title: 'Sales Director',
    department: 'sales',
    salary: 155000,
    startDate: '2020-01-08',
  },
  {
    id: 6,
    name: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    title: 'Financial Analyst',
    department: 'finance',
    salary: 98000,
    startDate: '2023-02-14',
  },
  {
    id: 7,
    name: 'Emma Wilson',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    title: 'UX Researcher',
    department: 'design',
    salary: 112000,
    startDate: '2022-09-05',
  },
  {
    id: 8,
    name: 'Noah Brown',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    title: 'Account Executive',
    department: 'sales',
    salary: 105000,
    startDate: '2023-05-22',
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))

export default function TableWithSortingBlock() {
  const { columns, rows, totalItems } = useTable<Employee>({
    data: employees,
    columns: [
      {
        key: 'name',
        header: 'Employee',
        sortable: true,
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.name} />
              <AvatarFallback>{getInitials(row.name)}</AvatarFallback>
            </AvatarRoot>
            <div className='flex flex-col'>
              <span className='font-medium'>{row.name}</span>
              <span className='text-xs text-muted-foreground'>{row.title}</span>
            </div>
          </div>
        ),
      },
      {
        key: 'department',
        header: 'Department',
        sortable: true,
        cell: (value) => {
          const dept = departmentConfig[value as Department]
          return (
            <Badge
              variant={dept.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Department: ${dept.label}`}
            >
              {dept.label}
            </Badge>
          )
        },
      },
      {
        key: 'salary',
        header: 'Salary',
        sortable: true,
        cellClassName: 'tabular-nums font-medium',
        cell: (value) => formatCurrency(value as number),
      },
      {
        key: 'startDate',
        header: 'Start Date',
        sortable: true,
        cell: (value) => formatDate(value as string),
      },
    ],
    sort: { key: 'salary', direction: 'desc' },
  })

  return (
    <section className='w-full' aria-labelledby='table-with-sorting-title'>
      <CardRoot>
        <CardHeader>
          <div className='space-y-1'>
            <CardTitle id='table-with-sorting-title' className='flex items-center gap-2'>
              <Building2 className='size-4' aria-hidden='true' />
              Employee Directory
            </CardTitle>
            <CardDescription>Click column headers to sort the table.</CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot variant='striped'>
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
        </CardContent>
        <Separator />
        <CardFooter>
          <p className='text-sm text-muted-foreground'>
            <data value={totalItems} className='font-medium text-foreground'>
              {totalItems}
            </data>{' '}
            employees
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
