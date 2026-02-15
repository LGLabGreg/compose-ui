'use client'

import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
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
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Ellipsis,
  Package,
} from 'lucide-react'

type Category = 'electronics' | 'clothing' | 'home' | 'sports' | 'books'

interface Product {
  id: number
  name: string
  sku: string
  category: Category
  price: number
  stock: number
}

const categoryConfig: Record<
  Category,
  { variant: 'info' | 'success' | 'warning' | 'destructive' | 'secondary'; label: string }
> = {
  electronics: { variant: 'info', label: 'Electronics' },
  clothing: { variant: 'success', label: 'Clothing' },
  home: { variant: 'warning', label: 'Home' },
  sports: { variant: 'destructive', label: 'Sports' },
  books: { variant: 'secondary', label: 'Books' },
}

const categories: Category[] = ['electronics', 'clothing', 'home', 'sports', 'books']

const productNames: Record<Category, string[]> = {
  electronics: [
    'Wireless Earbuds',
    'USB-C Cable',
    'Power Bank',
    'Smart Watch',
    'Bluetooth Speaker',
    'Webcam HD',
  ],
  clothing: [
    'Cotton T-Shirt',
    'Denim Jacket',
    'Running Shoes',
    'Wool Beanie',
    'Linen Shorts',
    'Rain Jacket',
  ],
  home: [
    'Desk Lamp',
    'Throw Pillow',
    'Wall Clock',
    'Ceramic Vase',
    'Candle Set',
    'Door Mat',
  ],
  sports: [
    'Yoga Mat',
    'Jump Rope',
    'Resistance Bands',
    'Water Bottle',
    'Gym Bag',
    'Foam Roller',
  ],
  books: [
    'Design Patterns',
    'Clean Code',
    'The Pragmatic Programmer',
    'Refactoring',
    'Domain-Driven Design',
    'Algorithms',
  ],
}

const products: Product[] = Array.from({ length: 30 }, (_, i) => {
  const category = categories[i % 5]
  const nameIndex = Math.floor(i / 5) % productNames[category].length
  return {
    id: i + 1,
    name: productNames[category][nameIndex],
    sku: `SKU-${String(1000 + i).padStart(4, '0')}`,
    category,
    price: Math.round((10 + Math.random() * 190) * 100) / 100,
    stock: Math.floor(Math.random() * 200),
  }
})

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

export default function TableWithPaginationBlock() {
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
  } = useTable<Product>({
    data: products,
    columns: [
      { key: 'sku', header: 'SKU', width: 110, cellClassName: 'font-medium' },
      { key: 'name', header: 'Product' },
      {
        key: 'category',
        header: 'Category',
        cell: (value) => {
          const { variant, label } = categoryConfig[value as Category]
          return (
            <Badge
              variant={variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Category: ${label}`}
            >
              {label}
            </Badge>
          )
        },
      },
      {
        key: 'price',
        header: 'Price',
        cellClassName: 'text-right tabular-nums',
        headerClassName: 'text-right',
        cell: (value) => formatCurrency(value as number),
      },
      {
        key: 'stock',
        header: 'Stock',
        cellClassName: 'text-right tabular-nums',
        headerClassName: 'text-right',
        cell: (value) => {
          const stock = value as number
          return (
            <span className={stock < 20 ? 'text-destructive font-medium' : ''}>
              {stock}
            </span>
          )
        },
      },
    ],
    pagination: { pageSize: 5, pageSizeOptions: [5, 10, 25, 50] },
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

  const rangeStart = (currentPage - 1) * pageSize + 1
  const rangeEnd = Math.min(currentPage * pageSize, totalItems)

  return (
    <section className='w-full' aria-labelledby='table-with-pagination-title'>
      <CardRoot>
        <CardHeader>
          <div className='space-y-1'>
            <CardTitle
              id='table-with-pagination-title'
              className='flex items-center gap-2'
            >
              <Package className='size-4' aria-hidden='true' />
              Product Inventory
            </CardTitle>
            <CardDescription>Browse and manage your product catalog.</CardDescription>
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
        <CardFooter className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-sm text-muted-foreground'>
            Showing{' '}
            <data value={rangeStart} className='font-medium text-foreground'>
              {rangeStart}
            </data>
            –
            <data value={rangeEnd} className='font-medium text-foreground'>
              {rangeEnd}
            </data>{' '}
            of <data value={totalItems}>{totalItems}</data> products
          </p>

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
        </CardFooter>
      </CardRoot>
    </section>
  )
}
