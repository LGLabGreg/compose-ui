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
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
  { name: 'Diana Prince', email: 'diana@example.com', role: 'Editor' },
]

export default function VariantsExample() {
  return (
    <div className='flex flex-col flex-1 gap-8'>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Default</h4>
        <TableRoot className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Striped</h4>
        <TableRoot variant='striped'>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Bordered</h4>
        <div className='rounded-md border border-border'>
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </div>
      </div>
    </div>
  )
}
