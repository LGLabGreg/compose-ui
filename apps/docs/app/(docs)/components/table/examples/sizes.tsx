'use client'

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'

const data = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    department: 'Engineering',
  },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User', department: 'Marketing' },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'User',
    department: 'Sales',
  },
  {
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Editor',
    department: 'Design',
  },
]

export default function SizesExample() {
  return (
    <TableRoot size='compact'>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.email}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.department}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
