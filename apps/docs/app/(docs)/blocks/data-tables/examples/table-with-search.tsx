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
import {
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from '@lglab/compose-ui/empty'
import { GroupAddon, GroupRoot } from '@lglab/compose-ui/group'
import { Input } from '@lglab/compose-ui/input'
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
import { Search, Users } from 'lucide-react'

const roleConfig = {
  admin: { variant: 'destructive' as const, label: 'Admin' },
  editor: { variant: 'info' as const, label: 'Editor' },
  viewer: { variant: 'secondary' as const, label: 'Viewer' },
  billing: { variant: 'warning' as const, label: 'Billing' },
}

type Role = keyof typeof roleConfig

interface Customer {
  name: string
  avatar: string
  email: string
  company: string
  role: Role
  lastActive: string
}

const customers: Customer[] = [
  {
    name: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    email: 'olivia@acmecorp.com',
    company: 'Acme Corp',
    role: 'admin',
    lastActive: '2 hours ago',
  },
  {
    name: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    email: 'jackson@globex.io',
    company: 'Globex Inc',
    role: 'editor',
    lastActive: '5 hours ago',
  },
  {
    name: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    email: 'isabella@initech.com',
    company: 'Initech',
    role: 'viewer',
    lastActive: '1 day ago',
  },
  {
    name: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    email: 'william@hooli.dev',
    company: 'Hooli',
    role: 'admin',
    lastActive: '3 hours ago',
  },
  {
    name: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    email: 'sofia@piedpiper.com',
    company: 'Pied Piper',
    role: 'billing',
    lastActive: '12 hours ago',
  },
  {
    name: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    email: 'liam@acmecorp.com',
    company: 'Acme Corp',
    role: 'editor',
    lastActive: '2 days ago',
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

export default function TableWithSearchBlock() {
  const { columns, rows, totalItems, searchTerm, onSearchChange } = useTable<Customer>({
    data: customers,
    columns: [
      {
        key: 'name',
        header: 'Name',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.name} />
              <AvatarFallback>{getInitials(row.name)}</AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.name}</span>
          </div>
        ),
      },
      { key: 'email', header: 'Email' },
      { key: 'company', header: 'Company' },
      {
        key: 'role',
        header: 'Role',
        cell: (value) => {
          const role = roleConfig[value as Role]
          return (
            <Badge
              variant={role.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Role: ${role.label}`}
            >
              {role.label}
            </Badge>
          )
        },
      },
      { key: 'lastActive', header: 'Last Active' },
    ],
    search: { keys: ['name', 'email', 'company', 'role'] },
  })

  return (
    <section className='w-full' aria-labelledby='table-with-search-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='table-with-search-title' className='flex items-center gap-2'>
                <Users className='size-4' aria-hidden='true' />
                Team Members
              </CardTitle>
              <CardDescription>Search and manage your team directory.</CardDescription>
            </div>
            <GroupRoot className='w-full sm:w-64'>
              <GroupAddon size='icon'>
                <Search aria-hidden='true' />
              </GroupAddon>
              <Input
                placeholder='Search team members'
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label='Search team members'
              />
            </GroupRoot>
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
              {rows.length > 0 ? (
                rows.map((row) => (
                  <TableRow key={row.email}>
                    {columns.map((col) => (
                      <TableCell key={col.key} {...col.cell}>
                        {col.renderCell(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className='hover:bg-transparent'>
                  <TableCell colSpan={columns.length}>
                    <EmptyRoot size='sm'>
                      <EmptyIcon size='sm'>
                        <Search />
                      </EmptyIcon>
                      <EmptyTitle>No members found</EmptyTitle>
                      <EmptyDescription>
                        No results matching &ldquo;{searchTerm}&rdquo;. Try a different
                        search term.
                      </EmptyDescription>
                    </EmptyRoot>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </TableRoot>
        </CardContent>

        {searchTerm && rows.length > 0 && (
          <>
            <Separator />
            <CardFooter className='justify-between'>
              <p className='text-sm text-muted-foreground'>
                Showing{' '}
                <data value={totalItems} className='font-medium text-foreground'>
                  {totalItems}
                </data>{' '}
                of <data value={customers.length}>{customers.length}</data> members
              </p>
              <Button variant='ghost' size='sm' onClick={() => onSearchChange('')}>
                Clear search
              </Button>
            </CardFooter>
          </>
        )}
      </CardRoot>
    </section>
  )
}
