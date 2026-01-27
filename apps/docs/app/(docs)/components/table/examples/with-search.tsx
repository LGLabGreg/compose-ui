'use client'

import { FieldControl, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Input } from '@lglab/compose-ui/input'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', role: 'Moderator' },
  { id: 5, name: 'Edward Norton', email: 'edward@example.com', role: 'User' },
  { id: 6, name: 'Fiona Apple', email: 'fiona@example.com', role: 'Admin' },
]

export default function WithSearchExample() {
  const { columns, rows, totalItems, searchTerm, onSearchChange } = useTable({
    data: users,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
    ],
    search: { keys: ['name', 'email'] },
  })

  return (
    <div className='flex flex-col w-full gap-2'>
      <FieldRoot className='w-[250px]'>
        <FieldLabel>Search users by name or email</FieldLabel>
        <FieldControl
          render={
            <Input
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          }
        />
      </FieldRoot>
      <TableRoot>
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
      <span className='text-sm text-muted-foreground'>{totalItems} results</span>
    </div>
  )
}
