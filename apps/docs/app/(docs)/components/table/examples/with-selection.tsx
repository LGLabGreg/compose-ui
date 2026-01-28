'use client'

import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui/alert-dialog'
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import {
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  usePagination,
} from '@lglab/compose-ui/pagination'
import { Separator } from '@lglab/compose-ui/separator'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'
import { useTable } from '@lglab/compose-ui/table'
import { Check, ChevronLeft, ChevronRight, Ellipsis, Minus, Trash2 } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin' },
  { id: 6, name: 'Frank Garcia', email: 'frank@example.com', role: 'Viewer' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor' },
  { id: 8, name: 'Henry Wilson', email: 'henry@example.com', role: 'Viewer' },
  { id: 9, name: 'Ivy Chen', email: 'ivy@example.com', role: 'Admin' },
  { id: 10, name: 'Jack Taylor', email: 'jack@example.com', role: 'Editor' },
  { id: 11, name: 'Karen Davis', email: 'karen@example.com', role: 'Viewer' },
  { id: 12, name: 'Leo Anderson', email: 'leo@example.com', role: 'Editor' },
]

export default function WithSelectionExample() {
  const table = useTable({
    data: users,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', width: 100 },
    ],
    pagination: { pageSize: 5 },
    selection: {
      rowKey: (row) => row.id,
    },
  })

  const pagination = usePagination({
    currentPage: table.currentPage,
    totalPages: table.totalPages,
    onPageChange: table.onPageChange,
  })

  return (
    <div className='flex flex-col w-full gap-4'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-2 py-3 px-5 bg-muted rounded-md'>
        <span className='text-sm font-medium'>
          {table.selection?.selectedCount} row
          {table.selection?.selectedCount !== 1 ? 's' : ''} selected
        </span>
        <Separator className='hidden sm:block h-4 mx-2' orientation='vertical' />

        <Button
          variant='outline'
          size='sm'
          disabled={table.selection?.selectedCount === 0}
          onClick={table.selection?.clearSelection}
        >
          Clear selection
        </Button>
        <AlertDialogRoot>
          <AlertDialogTrigger
            disabled={table.selection?.selectedCount === 0}
            size='sm'
            variant='destructive'
          >
            <Trash2 className='size-3.5 mr-1' />
            Delete selected
          </AlertDialogTrigger>
          <AlertDialogPortal>
            <AlertDialogBackdrop />
            <AlertDialogPopup>
              <AlertDialogTitle>Delete selected rows</AlertDialogTitle>
              <AlertDialogDescription className='text-sm'>
                Selected IDs: {Array.from(table.selection?.selectedKeys ?? []).join(', ')}
              </AlertDialogDescription>
              <div className='mt-6 flex justify-end gap-2'>
                <AlertDialogClose>Cancel</AlertDialogClose>
                <AlertDialogClose variant='destructive'>Delete</AlertDialogClose>
              </div>
            </AlertDialogPopup>
          </AlertDialogPortal>
        </AlertDialogRoot>
      </div>

      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableHead className='w-10'>
              <CheckboxRoot
                checked={table.selection?.isAllOnPageSelected}
                indeterminate={table.selection?.isIndeterminate}
                onCheckedChange={() => table.selection?.toggleAllOnPage()}
              >
                <CheckboxIndicator
                  render={(props, state) => (
                    <span {...props}>
                      {state.indeterminate ? (
                        <Minus className='size-3.5' />
                      ) : (
                        <Check className='size-3.5' />
                      )}
                    </span>
                  )}
                />
              </CheckboxRoot>
            </TableHead>
            {table.columns.map((col) => (
              <TableHead key={col.key} {...col.head} />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((row) => (
            <TableRow
              key={row.id}
              data-selected={table.selection?.isRowSelected(row) || undefined}
              className='data-selected:bg-muted/50'
            >
              <TableCell className='w-10'>
                <CheckboxRoot
                  checked={table.selection?.isRowSelected(row)}
                  onCheckedChange={() => table.selection?.toggleRowSelection(row)}
                >
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </TableCell>
              {table.columns.map((col) => (
                <TableCell key={col.key} {...col.cell}>
                  {col.renderCell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <div className='flex flex-wrap gap-4 items-center justify-between'>
        <span className='text-sm text-muted-foreground'>
          Showing {(table.currentPage - 1) * table.pageSize + 1}-
          {Math.min(table.currentPage * table.pageSize, table.totalItems)} of{' '}
          {table.totalItems} users
        </span>

        <PaginationRoot>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={pagination.goToPrevious}
                disabled={!pagination.canGoPrevious}
              >
                <ChevronLeft className='size-4' />
              </PaginationPrevious>
            </PaginationItem>

            {pagination.pages.map((page, i) => (
              <PaginationItem key={i}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis>
                    <Ellipsis className='size-4' />
                  </PaginationEllipsis>
                ) : (
                  <PaginationButton
                    isActive={page === table.currentPage}
                    onClick={() => pagination.goToPage(page)}
                  >
                    {page}
                  </PaginationButton>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={pagination.goToNext}
                disabled={!pagination.canGoNext}
              >
                <ChevronRight className='size-4' />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      </div>
    </div>
  )
}
