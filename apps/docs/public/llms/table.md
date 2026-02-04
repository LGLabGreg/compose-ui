# Table

A responsive table component with support for variants, alignment, and a useTable hook for declarative column configuration.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { TableRoot } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import { Badge, BadgeVariant } from '@lglab/compose-ui/badge'
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
]

const statusVariants: Record<string, BadgeVariant> = {
  Paid: 'success',
  Pending: 'warning',
  Unpaid: 'destructive',
}

export default function BasicExample() {
  return (
    <TableRoot>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className='font-medium'>{invoice.id}</TableCell>
            <TableCell>
              <Badge
                variant={statusVariants[invoice.status]}
                appearance='outline'
                size='sm'
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
```

### Variants

```tsx
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

export default function VariantsExample() {
  return (
    <div className='flex flex-col w-full gap-8'>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Default</h4>
        <TableRoot className='w-full'>
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
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Striped</h4>
        <TableRoot variant='striped'>
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
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Bordered</h4>
        <div className='rounded-md border border-border'>
          <TableRoot variant='bordered'>
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
        </div>
      </div>
    </div>
  )
}
```

### Compact

```tsx
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
```

### Pagination

```tsx
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
  } = useTable({
    data: products,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Product Name' },
      {
        key: 'price',
        header: 'Price',
        format: (value) => `$${(value as number).toFixed(2)}`,
      },
      { key: 'category', header: 'Category' },
    ],
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
    <div className='flex flex-col w-full gap-4'>
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
```

### Sorting

```tsx
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  useTable,
} from '@lglab/compose-ui/table'

interface Product {
  id: number
  name: string
  price: number
  inStock: boolean
  createdAt: Date
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    inStock: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    name: 'Mouse',
    price: 29.99,
    inStock: true,
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 79.99,
    inStock: false,
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 4,
    name: 'Monitor',
    price: 349.99,
    inStock: true,
    createdAt: new Date('2024-03-05'),
  },
  {
    id: 5,
    name: 'Headphones',
    price: 149.99,
    inStock: false,
    createdAt: new Date('2024-02-28'),
  },
  {
    id: 6,
    name: 'Webcam',
    price: 89.99,
    inStock: true,
    createdAt: new Date('2024-01-22'),
  },
]

export default function WithSortingExample() {
  const { columns, rows } = useTable({
    data: products,
    columns: [
      { key: 'id', header: 'ID', width: 60 },
      { key: 'name', header: 'Product Name', sortable: true },
      {
        key: 'price',
        header: 'Price',
        format: (value) => `$${(value as number).toFixed(2)}`,
        sortable: true,
      },
      {
        key: 'inStock',
        header: 'In Stock',
        format: (value) => (value ? 'Yes' : 'No'),
        sortable: true,
      },
      {
        key: 'createdAt',
        header: 'Created',
        format: (value) => (value as Date).toLocaleDateString(),
        sortable: true,
      },
    ],
    sort: { key: 'name', direction: 'asc' },
  })

  return (
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
  )
}
```

### Search

```tsx
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
          {rows.length === 0 ? (
            <TableRow className='hover:bg-transparent'>
              <TableCell
                colSpan={columns.length}
                className='h-24 text-center text-muted-foreground'
              >
                No results found.
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((col) => (
                  <TableCell key={col.key} {...col.cell}>
                    {col.renderCell(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </TableRoot>
      <span className='text-sm text-muted-foreground'>{totalItems} results</span>
    </div>
  )
}
```

### Filters

```tsx
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { Input } from '@lglab/compose-ui/input'
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@lglab/compose-ui/popover'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  containsFilter,
  equalsFilter,
  includesFilter,
  rangeFilter,
  useTable,
} from '@lglab/compose-ui/table'
import { Check, ChevronDown, X } from 'lucide-react'

type Status = 'pending' | 'paid' | 'overdue'

interface Invoice {
  id: string
  customer: string
  email: string
  amount: number
  status: Status
}

const invoices: Invoice[] = [
  {
    id: 'INV-001',
    customer: 'Acme Corp',
    email: 'billing@acme.com',
    amount: 1250,
    status: 'paid',
  },
  {
    id: 'INV-002',
    customer: 'Globex Inc',
    email: 'ap@globex.com',
    amount: 430,
    status: 'pending',
  },
  {
    id: 'INV-003',
    customer: 'Stark Industries',
    email: 'tony@stark.com',
    amount: 890,
    status: 'overdue',
  },
  {
    id: 'INV-004',
    customer: 'Wayne Enterprises',
    email: 'bruce@wayne.com',
    amount: 2100,
    status: 'paid',
  },
  {
    id: 'INV-005',
    customer: 'Umbrella Corp',
    email: 'finance@umbrella.com',
    amount: 560,
    status: 'pending',
  },
  {
    id: 'INV-006',
    customer: 'Cyberdyne Systems',
    email: 'accounts@cyberdyne.com',
    amount: 1800,
    status: 'paid',
  },
  {
    id: 'INV-007',
    customer: 'Oscorp',
    email: 'norman@oscorp.com',
    amount: 340,
    status: 'overdue',
  },
  {
    id: 'INV-008',
    customer: 'LexCorp',
    email: 'lex@lexcorp.com',
    amount: 1500,
    status: 'pending',
  },
]

const statuses: { value: Status; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'paid', label: 'Paid' },
  { value: 'overdue', label: 'Overdue' },
]

const statusVariants: Record<Status, 'warning' | 'success' | 'destructive'> = {
  pending: 'warning',
  paid: 'success',
  overdue: 'destructive',
}

export default function WithFiltersExample() {
  const table = useTable({
    data: invoices,
    columns: [
      { key: 'id', header: 'Invoice', width: 100 },
      { key: 'customer', header: 'Customer' },
      { key: 'email', header: 'Email' },
      {
        key: 'amount',
        header: 'Amount',
        cell: (value) => `$${value.toLocaleString()}`,
      },
      {
        key: 'status',
        header: 'Status',
        width: 100,
        cell: (value) => (
          <Badge
            variant={statusVariants[value as Status]}
            appearance='outline'
            size='sm'
            shape='pill'
          >
            {value}
          </Badge>
        ),
      },
    ],
    filters: {
      status: {
        predicate: includesFilter('status'),
        defaultValue: [],
      },
      amount: {
        predicate: rangeFilter('amount'),
        defaultValue: [0, 2500],
      },
      customer: {
        predicate: containsFilter('customer'),
        defaultValue: '',
      },
      email: {
        predicate: equalsFilter('email'),
        defaultValue: undefined,
      },
    },
  })

  const selectedStatuses = (table.filterValues.status as Status[]) ?? []
  const amountRange = (table.filterValues.amount as [number, number]) ?? [0, 2500]
  const customerSearch = (table.filterValues.customer as string) ?? ''
  const selectedEmail = (table.filterValues.email as string) ?? ''

  return (
    <div className='flex flex-col w-full gap-4'>
      <div className='flex flex-wrap items-center gap-2'>
        {/* Status Filter */}
        <PopoverRoot>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='sm'>
                Status
                {selectedStatuses.length > 0 && (
                  <span className='flex items-center justify-center size-5 rounded-full aspect-square bg-primary text-xs text-primary-foreground'>
                    {selectedStatuses.length}
                  </span>
                )}
                <ChevronDown className='ml-1 size-3.5' />
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner align='start'>
              <PopoverPopup className='min-w-[140px] p-2'>
                <CheckboxGroupRoot
                  value={selectedStatuses}
                  onValueChange={(value) => table.setFilterValue('status', value)}
                >
                  {statuses.map((status) => (
                    <label
                      key={status.value}
                      className='flex items-center gap-2 rounded px-2 py-1 text-sm hover:bg-muted'
                    >
                      <CheckboxRoot value={status.value}>
                        <CheckboxIndicator>
                          <Check className='size-3.5' />
                        </CheckboxIndicator>
                      </CheckboxRoot>
                      {status.label}
                    </label>
                  ))}
                </CheckboxGroupRoot>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>

        {/* Amount Filter */}
        <PopoverRoot>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='sm'>
                Amount: ${amountRange[0]} - ${amountRange[1]}
                <ChevronDown className='ml-1 size-3.5' />
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner align='start'>
              <PopoverPopup className='w-72 p-4'>
                <SliderRoot
                  value={amountRange}
                  min={0}
                  max={2500}
                  step={50}
                  onValueChange={(value) => table.setFilterValue('amount', value)}
                  format={{
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                  }}
                >
                  <div className='mb-2 flex items-center justify-between text-sm'>
                    <span className='font-medium'>Amount</span>
                    <SliderValue className='tabular-nums' />
                  </div>
                  <SliderControl>
                    <SliderTrack>
                      <SliderIndicator />
                      <SliderThumb aria-label='Minimum amount' />
                      <SliderThumb aria-label='Maximum amount' />
                    </SliderTrack>
                  </SliderControl>
                </SliderRoot>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>

        {/* Customer Filter (containsFilter) */}
        <PopoverRoot>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='sm'>
                Customer
                {customerSearch && (
                  <span className='flex items-center justify-center size-5 rounded-full aspect-square bg-primary text-xs text-primary-foreground'>
                    1
                  </span>
                )}
                <ChevronDown className='ml-1 size-3.5' />
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner align='start'>
              <PopoverPopup className='w-64 p-3'>
                <Input
                  placeholder='Search customer...'
                  value={customerSearch}
                  onChange={(e) =>
                    table.setFilterValue('customer', e.target.value || undefined)
                  }
                />
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>

        {/* Email Filter (equalsFilter) */}
        <PopoverRoot>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='sm'>
                Email
                {selectedEmail && (
                  <span className='flex items-center justify-center size-5 rounded-full aspect-square bg-primary text-xs text-primary-foreground'>
                    1
                  </span>
                )}
                <ChevronDown className='ml-1 size-3.5' />
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner align='start'>
              <PopoverPopup className='min-w-[200px] p-2'>
                <RadioGroupRoot
                  value={selectedEmail}
                  onValueChange={(value) =>
                    table.setFilterValue('email', value || undefined)
                  }
                >
                  {invoices.map((invoice) => (
                    <label
                      key={invoice.email}
                      className='flex items-center gap-2 rounded px-2 py-1 text-sm hover:bg-muted'
                    >
                      <RadioRoot value={invoice.email}>
                        <RadioIndicator />
                      </RadioRoot>
                      {invoice.email}
                    </label>
                  ))}
                </RadioGroupRoot>
                {selectedEmail && (
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full mt-2'
                    onClick={() => table.setFilterValue('email', undefined)}
                  >
                    Clear selection
                  </Button>
                )}
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>

        {/* Clear Filters */}
        {table.activeFilterCount > 0 && (
          <Button variant='ghost' size='sm' onClick={table.clearFilters}>
            <X className='size-3.5' />
            Clear filters ({table.activeFilterCount})
          </Button>
        )}
      </div>

      <TableRoot>
        <TableHeader>
          <TableRow>
            {table.columns.map((col) => (
              <TableHead key={col.key} {...col.head} />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.length === 0 ? (
            <TableRow className='hover:bg-transparent'>
              <TableCell
                colSpan={table.columns.length}
                className='h-24 text-center text-muted-foreground'
              >
                No results found.
              </TableCell>
            </TableRow>
          ) : (
            table.rows.map((row) => (
              <TableRow key={row.id}>
                {table.columns.map((col) => (
                  <TableCell key={col.key} {...col.cell}>
                    {col.renderCell(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </TableRoot>

      <span className='text-sm text-muted-foreground'>
        {table.totalItems} {table.totalItems === 1 ? 'result' : 'results'}
      </span>
    </div>
  )
}
```

### Row Selection

```tsx
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
```

### Loading State

```tsx
import { Skeleton } from '@lglab/compose-ui/skeleton'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@lglab/compose-ui/table'

export default function WithLoadingExample() {
  return (
    <TableRoot size='compact'>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, i) => (
          <TableRow key={i} className='hover:bg-transparent'>
            {Array.from({ length: 4 }).map((_, i) => (
              <TableCell key={i}>
                <Skeleton className='h-5 w-full' animation='shimmer' />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
```

## Resources

