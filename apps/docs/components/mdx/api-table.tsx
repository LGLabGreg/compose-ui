'use client'

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'
import type { ReactNode } from 'react'

export interface ApiTableRow {
  name: string
  type: ReactNode
  default?: string
  required?: boolean
  description: string
}

interface ApiTableProps {
  data: ApiTableRow[]
  showRequired?: boolean
  showDefault?: boolean
}

export function ApiTable({
  data,
  showRequired = false,
  showDefault = true,
}: ApiTableProps) {
  return (
    <div className='rounded-md border border-border'>
      <TableRoot variant='bordered'>
        <TableHeader className='bg-muted'>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            {showDefault && <TableHead>Default</TableHead>}
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell className='font-mono text-sm'>
                {row.name}
                {showRequired && row.required && (
                  <span className='text-destructive ml-0.5'>*</span>
                )}
              </TableCell>
              <TableCell className='font-mono text-sm'>{row.type}</TableCell>
              {showDefault && (
                <TableCell className='font-mono text-sm'>{row.default ?? '-'}</TableCell>
              )}
              <TableCell className='text-sm'>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  )
}
