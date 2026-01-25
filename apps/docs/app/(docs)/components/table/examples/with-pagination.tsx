'use client'

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
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'
import { Check, ChevronLeft, ChevronRight, ChevronsUpDown, Ellipsis } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  category: string
}

const products: Product[] = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.round((Math.random() * 200 + 10) * 100) / 100,
  category: ['Electronics', 'Clothing', 'Books', 'Home'][i % 4],
}))

export default function WithPaginationExample() {
  const {
    columns,
    rows,
    totalItems,
    currentPage,
    totalPages,
    pageSize,
    pageSizeOptions,
    onPageChange,
    onPageSizeChange,
  } = useTable(products, {
    columns: {
      id: { header: 'ID', width: 60 },
      name: { header: 'Product Name' },
      price: {
        header: 'Price',
        align: 'right',
        format: (value) => `$${value.toFixed(2)}`,
      },
      category: { header: 'Category' },
    },
    pagination: { pageSize: 10 },
  })

  const pagination = usePagination({
    currentPage,
    totalPages,
    onPageChange,
    pageSize,
    pageSizeOptions,
    onPageSizeChange,
  })

  const pageSizeItems = pageSizeOptions.map((size) => ({
    label: `${size} per page`,
    value: size,
  }))

  return (
    <div className='flex flex-col gap-4 flex-1'>
      <TableRoot>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className={col.headerClassName}
                style={{ width: col.width }}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={String(col.key)} className={col.cellClassName}>
                  {col.renderCell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <div className='flex flex-wrap gap-4 items-center justify-between'>
        <span className='text-sm text-muted-foreground'>
          Showing {(currentPage - 1) * pageSize + 1}-
          {Math.min(currentPage * pageSize, totalItems)} of {totalItems} items
        </span>

        <div className='flex flex-wrap gap-2 items-center'>
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
                      isActive={page === currentPage}
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

          <SelectRoot
            value={pageSize}
            onValueChange={(value) => value && pagination.setPageSize(value)}
            items={pageSizeItems}
          >
            <SelectTrigger aria-label='Select page size' className='min-w-32 min-h-8'>
              <SelectValue placeholder='Page size' />
              <SelectIcon>
                <ChevronsUpDown className='size-4' />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectList>
                    {pageSizeItems.map(({ label, value }) => (
                      <SelectItem key={value} value={value}>
                        <SelectItemText>{label}</SelectItemText>
                        <SelectItemIndicator>
                          <Check className='size-3.5' />
                        </SelectItemIndicator>
                      </SelectItem>
                    ))}
                  </SelectList>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
      </div>
    </div>
  )
}
