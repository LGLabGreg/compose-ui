# Data Tables

Pre-configured table patterns for common dashboard data views with search, filters, sorting, pagination, and more.

## Examples

### Simple Data Table

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
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
} from '@lglab/compose-ui/table'
import { ShoppingCart } from 'lucide-react'

const statusConfig = {
  completed: { variant: 'success' as const, label: 'Completed' },
  processing: { variant: 'warning' as const, label: 'Processing' },
  shipped: { variant: 'info' as const, label: 'Shipped' },
  cancelled: { variant: 'destructive' as const, label: 'Cancelled' },
  pending: { variant: 'secondary' as const, label: 'Pending' },
}

type Status = keyof typeof statusConfig

const orders = [
  {
    id: 'ORD-7892',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Headphones Pro',
    amount: 249.99,
    date: '2026-02-14',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7891',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Mechanical Keyboard',
    amount: 174.5,
    date: '2026-02-14',
    status: 'processing' as Status,
  },
  {
    id: 'ORD-7890',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'USB-C Hub Adapter',
    amount: 59.99,
    date: '2026-02-13',
    status: 'shipped' as Status,
  },
  {
    id: 'ORD-7889',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: '4K Monitor 27"',
    amount: 449.0,
    date: '2026-02-13',
    status: 'completed' as Status,
  },
  {
    id: 'ORD-7888',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Ergonomic Mouse',
    amount: 89.95,
    date: '2026-02-12',
    status: 'pending' as Status,
  },
  {
    id: 'ORD-7887',
    customer: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Laptop Stand',
    amount: 65.0,
    date: '2026-02-12',
    status: 'cancelled' as Status,
  },
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))

export default function SimpleDataTableBlock() {
  return (
    <section className='w-full' aria-labelledby='simple-data-table-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle id='simple-data-table-title' className='flex items-center gap-2'>
                <ShoppingCart className='size-4' aria-hidden='true' />
                Recent Orders
              </CardTitle>
              <CardDescription>
                A list of recent orders and their current status.
              </CardDescription>
            </div>
            <p className='text-sm text-muted-foreground'>
              Showing <data value={orders.length}>{orders.length}</data> orders
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot variant='striped'>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const status = statusConfig[order.status]
                return (
                  <TableRow key={order.id}>
                    <TableCell className='font-medium'>{order.id}</TableCell>
                    <TableCell>
                      <div className='flex items-center gap-2'>
                        <AvatarRoot size='sm'>
                          <AvatarImage src={order.avatar} alt={order.customer} />
                          <AvatarFallback>
                            {order.customer
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </AvatarRoot>
                        <span className='font-medium'>{order.customer}</span>
                      </div>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {formatDate(order.date)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={status.variant}
                        appearance='outline'
                        size='sm'
                        shape='pill'
                        aria-label={`Order status: ${status.label}`}
                      >
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-right tabular-nums font-medium'>
                      {formatCurrency(order.amount)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </TableRoot>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Table with Search

```tsx
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
```

### Table with Filters

```tsx
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
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import {
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from '@lglab/compose-ui/empty'
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@lglab/compose-ui/popover'
import { Separator } from '@lglab/compose-ui/separator'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  includesFilter,
  useTable,
} from '@lglab/compose-ui/table'
import { Check, ChevronDown, FilterX, Flag, ListChecks, ListTodo, X } from 'lucide-react'

type Priority = 'critical' | 'high' | 'medium' | 'low'
type Status = 'in_progress' | 'todo' | 'done' | 'in_review' | 'blocked'

interface Task {
  id: string
  name: string
  assignee: string
  avatar: string
  priority: Priority
  status: Status
  dueDate: string
}

const priorityConfig: Record<
  Priority,
  { variant: 'destructive' | 'warning' | 'info' | 'secondary'; label: string }
> = {
  critical: { variant: 'destructive', label: 'Critical' },
  high: { variant: 'warning', label: 'High' },
  medium: { variant: 'info', label: 'Medium' },
  low: { variant: 'secondary', label: 'Low' },
}

const statusConfig: Record<
  Status,
  { variant: 'info' | 'secondary' | 'success' | 'warning' | 'destructive'; label: string }
> = {
  in_progress: { variant: 'info', label: 'In Progress' },
  todo: { variant: 'secondary', label: 'To Do' },
  done: { variant: 'success', label: 'Done' },
  in_review: { variant: 'warning', label: 'In Review' },
  blocked: { variant: 'destructive', label: 'Blocked' },
}

const priorities: { value: Priority; label: string }[] = [
  { value: 'critical', label: 'Critical' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
]

const statuses: { value: Status; label: string }[] = [
  { value: 'todo', label: 'To Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'in_review', label: 'In Review' },
  { value: 'done', label: 'Done' },
  { value: 'blocked', label: 'Blocked' },
]

const tasks: Task[] = [
  {
    id: 'TASK-4012',
    name: 'Migrate auth to OAuth 2.0',
    assignee: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    priority: 'critical',
    status: 'in_progress',
    dueDate: '2026-02-18',
  },
  {
    id: 'TASK-4013',
    name: 'Add dark mode support',
    assignee: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'in_review',
    dueDate: '2026-02-20',
  },
  {
    id: 'TASK-4014',
    name: 'Fix pagination bug on mobile',
    assignee: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'todo',
    dueDate: '2026-02-17',
  },
  {
    id: 'TASK-4015',
    name: 'Write API documentation',
    assignee: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    priority: 'medium',
    status: 'in_progress',
    dueDate: '2026-02-22',
  },
  {
    id: 'TASK-4016',
    name: 'Optimize image loading',
    assignee: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    priority: 'medium',
    status: 'done',
    dueDate: '2026-02-15',
  },
  {
    id: 'TASK-4017',
    name: 'Update onboarding flow',
    assignee: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    priority: 'low',
    status: 'todo',
    dueDate: '2026-02-25',
  },
  {
    id: 'TASK-4018',
    name: 'Set up CI/CD pipeline',
    assignee: 'Emma Wilson',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    priority: 'critical',
    status: 'blocked',
    dueDate: '2026-02-16',
  },
  {
    id: 'TASK-4019',
    name: 'Redesign settings page',
    assignee: 'Noah Brown',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    priority: 'low',
    status: 'done',
    dueDate: '2026-02-14',
  },
  {
    id: 'TASK-4020',
    name: 'Add export to CSV feature',
    assignee: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    priority: 'medium',
    status: 'in_review',
    dueDate: '2026-02-19',
  },
  {
    id: 'TASK-4021',
    name: 'Implement rate limiting',
    assignee: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'todo',
    dueDate: '2026-02-21',
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
    new Date(date),
  )

export default function TableWithFiltersBlock() {
  const {
    columns,
    rows,
    totalItems,
    filterValues,
    setFilterValue,
    activeFilterCount,
    clearFilters,
  } = useTable<Task>({
    data: tasks,
    columns: [
      { key: 'id', header: 'Task', width: 110, cellClassName: 'font-medium' },
      { key: 'name', header: 'Name' },
      {
        key: 'assignee',
        header: 'Assignee',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.assignee} />
              <AvatarFallback>{getInitials(row.assignee)}</AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.assignee}</span>
          </div>
        ),
      },
      {
        key: 'priority',
        header: 'Priority',
        cell: (value) => {
          const p = priorityConfig[value as Priority]
          return (
            <Badge
              variant={p.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Priority: ${p.label}`}
            >
              {p.label}
            </Badge>
          )
        },
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const s = statusConfig[value as Status]
          return (
            <Badge
              variant={s.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Status: ${s.label}`}
            >
              {s.label}
            </Badge>
          )
        },
      },
      {
        key: 'dueDate',
        header: 'Due',
        cell: (value) => formatDate(value as string),
      },
    ],
    filters: {
      status: {
        predicate: includesFilter('status'),
        defaultValue: [],
      },
      priority: {
        predicate: includesFilter('priority'),
        defaultValue: [],
      },
    },
  })

  const selectedStatuses = (filterValues.status as Status[]) ?? []
  const selectedPriorities = (filterValues.priority as Priority[]) ?? []

  return (
    <section className='w-full' aria-labelledby='table-with-filters-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle
                id='table-with-filters-title'
                className='flex items-center gap-2'
              >
                <ListTodo className='size-4' aria-hidden='true' />
                Project Tasks
              </CardTitle>
              <CardDescription>Filter tasks by status and priority.</CardDescription>
            </div>
          </div>

          <div
            className='flex flex-wrap items-center gap-2 mt-3'
            role='group'
            aria-label='Table filters'
          >
            <PopoverRoot>
              <PopoverTrigger
                render={(props) => (
                  <Button {...props} variant='outline' size='sm'>
                    <ListChecks className='size-3.5' aria-hidden='true' />
                    Status
                    {selectedStatuses.length > 0 && (
                      <span className='flex items-center justify-center size-5 rounded-full aspect-square bg-primary text-xs text-primary-foreground'>
                        {selectedStatuses.length}
                      </span>
                    )}
                    <ChevronDown className='size-3.5' aria-hidden='true' />
                  </Button>
                )}
              />
              <PopoverPortal>
                <PopoverPositioner align='start'>
                  <PopoverPopup className='min-w-[160px] p-2.5'>
                    <CheckboxGroupRoot
                      value={selectedStatuses}
                      onValueChange={(value) => setFilterValue('status', value)}
                    >
                      {statuses.map((s) => (
                        <label key={s.value} className='flex items-center gap-2 text-sm'>
                          <CheckboxRoot value={s.value}>
                            <CheckboxIndicator>
                              <Check className='size-3.5' />
                            </CheckboxIndicator>
                          </CheckboxRoot>
                          {s.label}
                        </label>
                      ))}
                    </CheckboxGroupRoot>
                  </PopoverPopup>
                </PopoverPositioner>
              </PopoverPortal>
            </PopoverRoot>

            <PopoverRoot>
              <PopoverTrigger
                render={(props) => (
                  <Button {...props} variant='outline' size='sm'>
                    <Flag className='size-3.5' aria-hidden='true' />
                    Priority
                    {selectedPriorities.length > 0 && (
                      <span className='flex items-center justify-center size-5 rounded-full aspect-square bg-primary text-xs text-primary-foreground'>
                        {selectedPriorities.length}
                      </span>
                    )}
                    <ChevronDown className='size-3.5' aria-hidden='true' />
                  </Button>
                )}
              />
              <PopoverPortal>
                <PopoverPositioner align='start'>
                  <PopoverPopup className='min-w-[140px] p-2.5'>
                    <CheckboxGroupRoot
                      value={selectedPriorities}
                      onValueChange={(value) => setFilterValue('priority', value)}
                    >
                      {priorities.map((p) => (
                        <label key={p.value} className='flex items-center gap-2 text-sm'>
                          <CheckboxRoot value={p.value}>
                            <CheckboxIndicator>
                              <Check className='size-3.5' />
                            </CheckboxIndicator>
                          </CheckboxRoot>
                          {p.label}
                        </label>
                      ))}
                    </CheckboxGroupRoot>
                  </PopoverPopup>
                </PopoverPositioner>
              </PopoverPortal>
            </PopoverRoot>

            {activeFilterCount > 0 && (
              <Button variant='ghost' size='sm' onClick={clearFilters}>
                <X className='size-3.5' aria-hidden='true' />
                Clear filters ({activeFilterCount})
              </Button>
            )}
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
                  <TableRow key={row.id}>
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
                        <FilterX />
                      </EmptyIcon>
                      <EmptyTitle>No tasks match filters</EmptyTitle>
                      <EmptyDescription>
                        Try adjusting your filters or clear them to see all tasks.
                      </EmptyDescription>
                    </EmptyRoot>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </TableRoot>
        </CardContent>
        <Separator />
        <CardFooter>
          <p className='text-sm text-muted-foreground'>
            Showing{' '}
            <data value={totalItems} className='font-medium text-foreground'>
              {totalItems}
            </data>{' '}
            of <data value={tasks.length}>{tasks.length}</data> tasks
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
```

### Table with Pagination

```tsx
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
```

### Table with Selection

```tsx
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
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
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
import { Archive, Check, Mail, Minus, Star, Trash2 } from 'lucide-react'

type Label = 'work' | 'personal' | 'updates' | 'promotions' | 'social'

interface Email {
  id: number
  from: string
  subject: string
  date: string
  label: Label
}

const labelConfig: Record<
  Label,
  { variant: 'info' | 'success' | 'warning' | 'destructive' | 'secondary'; label: string }
> = {
  work: { variant: 'info', label: 'Work' },
  personal: { variant: 'success', label: 'Personal' },
  updates: { variant: 'warning', label: 'Updates' },
  promotions: { variant: 'destructive', label: 'Promotions' },
  social: { variant: 'secondary', label: 'Social' },
}

const emails: Email[] = [
  {
    id: 1,
    from: 'Sarah Chen',
    subject: 'Q1 budget review — final numbers attached',
    date: 'Feb 15',
    label: 'work',
  },
  {
    id: 2,
    from: 'GitHub',
    subject: 'New release: compose-ui v3.2.0',
    date: 'Feb 15',
    label: 'updates',
  },
  {
    id: 3,
    from: 'Marcus Rivera',
    subject: 'Weekend hiking trip plans',
    date: 'Feb 14',
    label: 'personal',
  },
  {
    id: 4,
    from: 'Stripe',
    subject: 'Your February invoice is ready',
    date: 'Feb 14',
    label: 'updates',
  },
  {
    id: 5,
    from: 'LinkedIn',
    subject: '5 new people viewed your profile',
    date: 'Feb 14',
    label: 'social',
  },
  {
    id: 6,
    from: 'Amy Park',
    subject: 'Design review feedback for dashboard',
    date: 'Feb 13',
    label: 'work',
  },
  {
    id: 7,
    from: 'Vercel',
    subject: 'Your deployment is live',
    date: 'Feb 13',
    label: 'updates',
  },
  {
    id: 8,
    from: 'BrandCo',
    subject: '50% off all items — ends today!',
    date: 'Feb 13',
    label: 'promotions',
  },
  {
    id: 9,
    from: 'David Kim',
    subject: 'Re: Project timeline update',
    date: 'Feb 12',
    label: 'work',
  },
  {
    id: 10,
    from: 'Figma',
    subject: 'Someone commented on your file',
    date: 'Feb 12',
    label: 'social',
  },
]

export default function TableWithSelectionBlock() {
  const { columns, rows, totalItems, selection } = useTable<Email>({
    data: emails,
    columns: [
      {
        key: 'from',
        header: 'From',
        cellClassName: 'font-medium',
      },
      { key: 'subject', header: 'Subject' },
      {
        key: 'label',
        header: 'Label',
        cell: (value) => {
          const { variant, label } = labelConfig[value as Label]
          return (
            <Badge
              variant={variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Label: ${label}`}
            >
              {label}
            </Badge>
          )
        },
      },
      { key: 'date', header: 'Date', width: 90 },
    ],
    selection: {
      rowKey: (row) => row.id,
    },
  })

  const selectedCount = selection?.selectedCount ?? 0

  return (
    <section className='w-full' aria-labelledby='table-with-selection-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <div className='space-y-1'>
              <CardTitle
                id='table-with-selection-title'
                className='flex items-center gap-2'
              >
                <Mail className='size-4' aria-hidden='true' />
                Inbox
              </CardTitle>
              <CardDescription>Select messages to perform bulk actions.</CardDescription>
            </div>
            {selectedCount > 0 && (
              <div
                className='flex flex-wrap items-center gap-2'
                role='group'
                aria-label='Bulk actions'
              >
                <span className='text-sm font-medium'>{selectedCount} selected</span>
                <Separator orientation='vertical' className='h-4' />
                <Button variant='outline' size='sm'>
                  <Archive className='size-3.5' aria-hidden='true' />
                  Archive
                </Button>
                <Button variant='outline' size='sm'>
                  <Star className='size-3.5' aria-hidden='true' />
                  Star
                </Button>
                <Button variant='destructive' size='sm'>
                  <Trash2 className='size-3.5' aria-hidden='true' />
                  Delete
                </Button>
              </div>
            )}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot variant='striped'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-10'>
                  <CheckboxRoot
                    checked={selection?.isAllOnPageSelected}
                    indeterminate={selection?.isIndeterminate}
                    onCheckedChange={() => selection?.toggleAllOnPage()}
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
                {columns.map((col) => (
                  <TableHead key={col.key} {...col.head} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-selected={selection?.isRowSelected(row) || undefined}
                  className='data-selected:bg-muted/50'
                >
                  <TableCell className='w-10'>
                    <CheckboxRoot
                      checked={selection?.isRowSelected(row)}
                      onCheckedChange={() => selection?.toggleRowSelection(row)}
                    >
                      <CheckboxIndicator>
                        <Check className='size-3.5' />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </TableCell>
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
            <data value={selectedCount} className='font-medium text-foreground'>
              {selectedCount}
            </data>{' '}
            of <data value={totalItems}>{totalItems}</data> messages selected
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
```

### Table with Sorting

```tsx
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
```

### Table with Actions

```tsx
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
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui/menu'
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
  CheckCircle2,
  Copy,
  ExternalLink,
  Headphones,
  MoreHorizontal,
  PenLine,
  RotateCcw,
  Trash2,
} from 'lucide-react'

type Priority = 'urgent' | 'high' | 'medium' | 'low'
type Status = 'open' | 'in_progress' | 'resolved' | 'closed'

interface Ticket {
  id: string
  subject: string
  customer: string
  avatar: string
  priority: Priority
  status: Status
  assignee: string
  assigneeAvatar: string
  createdAt: string
}

const priorityConfig: Record<
  Priority,
  { variant: 'destructive' | 'warning' | 'info' | 'secondary'; label: string }
> = {
  urgent: { variant: 'destructive', label: 'Urgent' },
  high: { variant: 'warning', label: 'High' },
  medium: { variant: 'info', label: 'Medium' },
  low: { variant: 'secondary', label: 'Low' },
}

const statusConfig: Record<
  Status,
  { variant: 'warning' | 'info' | 'success' | 'secondary'; label: string }
> = {
  open: { variant: 'warning', label: 'Open' },
  in_progress: { variant: 'info', label: 'In Progress' },
  resolved: { variant: 'success', label: 'Resolved' },
  closed: { variant: 'secondary', label: 'Closed' },
}

const tickets: Ticket[] = [
  {
    id: 'TK-4521',
    subject: 'Cannot access billing dashboard',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    priority: 'urgent',
    status: 'open',
    assignee: 'Sarah Chen',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-15',
  },
  {
    id: 'TK-4520',
    subject: 'Export CSV not working for large datasets',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'in_progress',
    assignee: 'Marcus Rivera',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-14',
  },
  {
    id: 'TK-4519',
    subject: 'Feature request: dark mode for reports',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    priority: 'low',
    status: 'open',
    assignee: 'Amy Park',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-14',
  },
  {
    id: 'TK-4518',
    subject: 'Two-factor authentication setup failing',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'in_progress',
    assignee: 'Sarah Chen',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-13',
  },
  {
    id: 'TK-4517',
    subject: 'Incorrect timezone in email notifications',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    priority: 'medium',
    status: 'resolved',
    assignee: 'Marcus Rivera',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-12',
  },
  {
    id: 'TK-4516',
    subject: 'API rate limit exceeded on integration',
    customer: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    priority: 'medium',
    status: 'open',
    assignee: 'Amy Park',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-12',
  },
  {
    id: 'TK-4515',
    subject: 'Mobile app crashes on profile page',
    customer: 'Emma Wilson',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    priority: 'urgent',
    status: 'in_progress',
    assignee: 'Sarah Chen',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-11',
  },
  {
    id: 'TK-4514',
    subject: 'Password reset email not received',
    customer: 'Noah Brown',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    priority: 'high',
    status: 'closed',
    assignee: 'Marcus Rivera',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80',
    createdAt: '2026-02-10',
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))

function TicketActions({ ticket }: { ticket: Ticket }) {
  const isResolvable = ticket.status === 'open' || ticket.status === 'in_progress'

  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button
            {...props}
            variant='ghost'
            size='icon-sm'
            aria-label={`Actions for ticket ${ticket.id}`}
          >
            <MoreHorizontal className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner side='bottom' align='end'>
          <MenuPopup>
            <MenuItem>
              <ExternalLink className='size-4' aria-hidden='true' />
              View details
            </MenuItem>
            <MenuItem>
              <PenLine className='size-4' aria-hidden='true' />
              Edit ticket
            </MenuItem>
            <MenuItem>
              <Copy className='size-4' aria-hidden='true' />
              Copy ID
            </MenuItem>
            <MenuSeparator />
            {isResolvable ? (
              <MenuItem>
                <CheckCircle2 className='size-4' aria-hidden='true' />
                Mark resolved
              </MenuItem>
            ) : (
              <MenuItem>
                <RotateCcw className='size-4' aria-hidden='true' />
                Reopen ticket
              </MenuItem>
            )}
            <MenuSeparator />
            <MenuItem className='text-destructive'>
              <Trash2 className='size-4' aria-hidden='true' />
              Delete ticket
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}

export default function TableWithActionsBlock() {
  const { columns, rows, totalItems } = useTable<Ticket>({
    data: tickets,
    columns: [
      {
        key: 'subject',
        header: 'Ticket',
        cell: (_value, row) => (
          <div className='flex flex-col'>
            <span className='font-medium'>{row.subject}</span>
            <span className='text-xs text-muted-foreground'>{row.id}</span>
          </div>
        ),
      },
      {
        key: 'customer',
        header: 'Customer',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.customer} />
              <AvatarFallback>{getInitials(row.customer)}</AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.customer}</span>
          </div>
        ),
      },
      {
        key: 'priority',
        header: 'Priority',
        cellClassName: 'hidden md:table-cell',
        headerClassName: 'hidden md:table-cell',
        cell: (value) => {
          const config = priorityConfig[value as Priority]
          return (
            <Badge
              variant={config.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Priority: ${config.label}`}
            >
              {config.label}
            </Badge>
          )
        },
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const config = statusConfig[value as Status]
          return (
            <Badge
              variant={config.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Status: ${config.label}`}
            >
              {config.label}
            </Badge>
          )
        },
      },
      {
        key: 'assignee',
        header: 'Assignee',
        cellClassName: 'hidden lg:table-cell',
        headerClassName: 'hidden lg:table-cell',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.assigneeAvatar} alt={row.assignee} />
              <AvatarFallback>{getInitials(row.assignee)}</AvatarFallback>
            </AvatarRoot>
            <span>{row.assignee}</span>
          </div>
        ),
      },
      {
        key: 'createdAt',
        header: 'Created',
        cellClassName: 'hidden sm:table-cell whitespace-nowrap',
        headerClassName: 'hidden sm:table-cell',
        cell: (value) => formatDate(value as string),
      },
    ],
  })

  return (
    <section className='w-full' aria-labelledby='table-with-actions-title'>
      <CardRoot>
        <CardHeader>
          <div className='space-y-1'>
            <CardTitle id='table-with-actions-title' className='flex items-center gap-2'>
              <Headphones className='size-4' aria-hidden='true' />
              Support Tickets
            </CardTitle>
            <CardDescription>
              Manage and respond to customer support requests.
            </CardDescription>
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
                <TableHead className='w-12'>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} className='group'>
                  {columns.map((col) => (
                    <TableCell key={col.key} {...col.cell}>
                      {col.renderCell(row)}
                    </TableCell>
                  ))}
                  <TableCell>
                    <TicketActions ticket={row} />
                  </TableCell>
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
            tickets
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
```

### Table with Expandable Rows

```tsx
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
import { ChevronRight, Package } from 'lucide-react'
import { Fragment } from 'react'

import { cn } from '@/lib/utils'

type Status = 'delivered' | 'shipped' | 'processing' | 'cancelled'

interface OrderItem {
  name: string
  sku: string
  quantity: number
  unitPrice: number
}

interface Order {
  id: string
  customer: string
  avatar: string
  status: Status
  total: number
  date: string
  items: OrderItem[]
  shippingAddress: string
  paymentMethod: string
  trackingNumber: string | null
}

const statusConfig: Record<
  Status,
  { variant: 'success' | 'info' | 'warning' | 'destructive'; label: string }
> = {
  delivered: { variant: 'success', label: 'Delivered' },
  shipped: { variant: 'info', label: 'Shipped' },
  processing: { variant: 'warning', label: 'Processing' },
  cancelled: { variant: 'destructive', label: 'Cancelled' },
}

const orders: Order[] = [
  {
    id: 'ORD-9201',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    status: 'delivered',
    total: 487.96,
    date: '2026-02-14',
    items: [
      { name: 'Wireless Headphones Pro', sku: 'WHP-001', quantity: 1, unitPrice: 249.99 },
      { name: 'USB-C Charging Cable', sku: 'UCC-034', quantity: 2, unitPrice: 18.99 },
      { name: 'Headphone Stand', sku: 'HPS-012', quantity: 1, unitPrice: 199.99 },
    ],
    shippingAddress: '350 Fifth Ave, New York, NY 10118',
    paymentMethod: 'Visa ending in 4242',
    trackingNumber: '1Z999AA10123456784',
  },
  {
    id: 'ORD-9200',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    status: 'shipped',
    total: 174.5,
    date: '2026-02-13',
    items: [
      { name: 'Mechanical Keyboard', sku: 'MKB-087', quantity: 1, unitPrice: 149.5 },
      { name: 'Keycap Set', sku: 'KCS-015', quantity: 1, unitPrice: 25.0 },
    ],
    shippingAddress: '1600 Amphitheatre Pkwy, Mountain View, CA 94043',
    paymentMethod: 'Mastercard ending in 8888',
    trackingNumber: '1Z999AA10123456785',
  },
  {
    id: 'ORD-9199',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    status: 'processing',
    total: 329.97,
    date: '2026-02-13',
    items: [
      { name: '27" 4K Monitor', sku: 'MON-027', quantity: 1, unitPrice: 299.99 },
      { name: 'HDMI Cable 6ft', sku: 'HDM-006', quantity: 1, unitPrice: 14.99 },
      { name: 'Monitor Arm Mount', sku: 'MAM-001', quantity: 1, unitPrice: 14.99 },
    ],
    shippingAddress: '1 Apple Park Way, Cupertino, CA 95014',
    paymentMethod: 'Apple Pay',
    trackingNumber: null,
  },
  {
    id: 'ORD-9198',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    status: 'delivered',
    total: 89.99,
    date: '2026-02-12',
    items: [{ name: 'Ergonomic Mouse', sku: 'ERM-042', quantity: 1, unitPrice: 89.99 }],
    shippingAddress: '410 Terry Ave N, Seattle, WA 98109',
    paymentMethod: 'PayPal',
    trackingNumber: '1Z999AA10123456786',
  },
  {
    id: 'ORD-9197',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    status: 'cancelled',
    total: 599.98,
    date: '2026-02-11',
    items: [
      { name: 'Standing Desk Frame', sku: 'SDF-001', quantity: 1, unitPrice: 449.99 },
      { name: 'Desk Mat XL', sku: 'DMX-003', quantity: 1, unitPrice: 49.99 },
      { name: 'Cable Management Kit', sku: 'CMK-010', quantity: 2, unitPrice: 24.99 },
      { name: 'Desk Shelf Riser', sku: 'DSR-005', quantity: 1, unitPrice: 25.02 },
    ],
    shippingAddress: '1 Hacker Way, Menlo Park, CA 94025',
    paymentMethod: 'Visa ending in 1234',
    trackingNumber: null,
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
    new Date(date),
  )

function OrderDetail({ order }: { order: Order }) {
  return (
    <div
      role='group'
      aria-label={`Details for order ${order.id}`}
      className='grid gap-6 px-4 py-3 md:px-8 md:py-6 md:grid-cols-[1fr_2fr]'
    >
      <div className='space-y-3 text-sm'>
        <div>
          <span className='text-muted-foreground'>Ship to</span>
          <p className='font-medium'>{order.shippingAddress}</p>
        </div>
        <div>
          <span className='text-muted-foreground'>Payment</span>
          <p className='font-medium'>{order.paymentMethod}</p>
        </div>
        <div>
          <span className='text-muted-foreground'>Tracking</span>
          <p className='font-medium'>
            {order.trackingNumber ?? (
              <span className='text-muted-foreground italic'>Pending</span>
            )}
          </p>
        </div>
      </div>

      <div role='group' aria-label='Order line items'>
        <div className='space-y-2'>
          {order.items.map((item) => {
            const lineTotal = item.unitPrice * item.quantity
            return (
              <div
                key={item.sku}
                className='flex items-center justify-between gap-4 text-sm'
              >
                <div className='min-w-0'>
                  <span className='font-medium'>{item.name}</span>
                  <span className='text-muted-foreground ml-2'>x{item.quantity}</span>
                </div>
                <data value={lineTotal} className='shrink-0 tabular-nums'>
                  {formatCurrency(lineTotal)}
                </data>
              </div>
            )
          })}
          <Separator />
          <div className='flex items-center justify-between text-sm font-semibold'>
            <span>Total</span>
            <data value={order.total} className='tabular-nums'>
              {formatCurrency(order.total)}
            </data>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TableWithExpandableRowsBlock() {
  const { columns, rows, totalItems, expansion } = useTable<Order>({
    data: orders,
    columns: [
      {
        key: 'id',
        header: 'Order',
        cell: (value) => <span className='font-medium'>{value as string}</span>,
      },
      {
        key: 'customer',
        header: 'Customer',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.customer} />
              <AvatarFallback>{getInitials(row.customer)}</AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.customer}</span>
          </div>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const config = statusConfig[value as Status]
          return (
            <Badge
              variant={config.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Status: ${config.label}`}
            >
              {config.label}
            </Badge>
          )
        },
      },
      {
        key: 'total',
        header: 'Total',
        cellClassName: 'text-right tabular-nums',
        headerClassName: 'text-right',
        cell: (value) => (
          <data value={value as number}>{formatCurrency(value as number)}</data>
        ),
      },
      {
        key: 'date',
        header: 'Date',
        cellClassName: 'hidden sm:table-cell whitespace-nowrap',
        headerClassName: 'hidden sm:table-cell',
        cell: (value) => formatDate(value as string),
      },
    ],
    expansion: { rowKey: (row) => row.id },
  })

  return (
    <section className='w-full' aria-labelledby='expandable-rows-title'>
      <CardRoot>
        <CardHeader>
          <div className='space-y-1'>
            <CardTitle id='expandable-rows-title' className='flex items-center gap-2'>
              <Package className='size-4' aria-hidden='true' />
              Recent Orders
            </CardTitle>
            <CardDescription>
              Click a row to expand order details and line items.
            </CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableHead className='w-10' />
                {columns.map((col) => (
                  <TableHead key={col.key} {...col.head} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow
                    className='cursor-pointer'
                    onClick={() => expansion?.toggleRowExpansion(row)}
                  >
                    <TableCell>
                      <Button
                        variant='ghost'
                        size='icon-sm'
                        aria-expanded={expansion?.isRowExpanded(row)}
                        aria-controls={`detail-${row.id}`}
                        aria-label={`Toggle details for order ${row.id}`}
                        onClick={() => {
                          expansion?.toggleRowExpansion(row)
                        }}
                      >
                        <ChevronRight
                          className={cn(
                            'size-4 text-muted-foreground transition-transform duration-200',
                            expansion?.isRowExpanded(row) && 'rotate-90',
                          )}
                          aria-hidden='true'
                        />
                      </Button>
                    </TableCell>
                    {columns.map((col) => (
                      <TableCell key={col.key} {...col.cell}>
                        {col.renderCell(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                  {expansion?.isRowExpanded(row) && (
                    <TableRow
                      id={`detail-${row.id}`}
                      className='bg-muted/30 hover:bg-muted/30'
                    >
                      <TableCell colSpan={columns.length + 1} className='p-0'>
                        <OrderDetail order={row} />
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
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
            orders
          </p>
        </CardFooter>
      </CardRoot>
    </section>
  )
}
```

### Scrollable Table

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
import {
  CardContent,
  CardDescription,
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
import { List } from 'lucide-react'

const statusConfig = {
  completed: { variant: 'success' as const, label: 'Completed' },
  processing: { variant: 'warning' as const, label: 'Processing' },
  shipped: { variant: 'info' as const, label: 'Shipped' },
  cancelled: { variant: 'destructive' as const, label: 'Cancelled' },
  pending: { variant: 'secondary' as const, label: 'Pending' },
}

type Status = keyof typeof statusConfig

interface Order {
  id: string
  customer: string
  avatar: string
  product: string
  amount: number
  date: string
  status: Status
}

const orders: Order[] = [
  {
    id: 'ORD-7892',
    customer: 'Olivia Martin',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Headphones Pro',
    amount: 249.99,
    date: '2026-02-14',
    status: 'completed',
  },
  {
    id: 'ORD-7891',
    customer: 'Jackson Lee',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Mechanical Keyboard',
    amount: 174.5,
    date: '2026-02-14',
    status: 'processing',
  },
  {
    id: 'ORD-7890',
    customer: 'Isabella Nguyen',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'USB-C Hub Adapter',
    amount: 59.99,
    date: '2026-02-13',
    status: 'shipped',
  },
  {
    id: 'ORD-7889',
    customer: 'William Kim',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: '4K Monitor 27"',
    amount: 449.0,
    date: '2026-02-13',
    status: 'completed',
  },
  {
    id: 'ORD-7888',
    customer: 'Sofia Davis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Ergonomic Mouse',
    amount: 89.95,
    date: '2026-02-12',
    status: 'pending',
  },
  {
    id: 'ORD-7887',
    customer: 'Liam Johnson',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Laptop Stand',
    amount: 65.0,
    date: '2026-02-12',
    status: 'cancelled',
  },
  {
    id: 'ORD-7886',
    customer: 'Emma Wilson',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    product: 'Webcam HD',
    amount: 129.0,
    date: '2026-02-11',
    status: 'shipped',
  },
  {
    id: 'ORD-7885',
    customer: 'Noah Brown',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    product: 'Desk Lamp LED',
    amount: 45.99,
    date: '2026-02-11',
    status: 'completed',
  },
  {
    id: 'ORD-7884',
    customer: 'Ava Martinez',
    avatar:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=128&h=128&dpr=2&q=80',
    product: 'Bluetooth Speaker',
    amount: 79.99,
    date: '2026-02-10',
    status: 'processing',
  },
  {
    id: 'ORD-7883',
    customer: 'Ethan Taylor',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80',
    product: 'Phone Stand',
    amount: 24.99,
    date: '2026-02-10',
    status: 'shipped',
  },
  {
    id: 'ORD-7882',
    customer: 'Mia Anderson',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&dpr=2&q=80',
    product: 'Tablet Case',
    amount: 34.5,
    date: '2026-02-09',
    status: 'completed',
  },
  {
    id: 'ORD-7881',
    customer: 'James Thomas',
    avatar:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=128&h=128&dpr=2&q=80',
    product: 'SSD 1TB',
    amount: 119.0,
    date: '2026-02-09',
    status: 'pending',
  },
  {
    id: 'ORD-7880',
    customer: 'Charlotte Jackson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80',
    product: 'Monitor Arm',
    amount: 89.0,
    date: '2026-02-08',
    status: 'shipped',
  },
  {
    id: 'ORD-7879',
    customer: 'Benjamin White',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    product: 'Cable Organizer',
    amount: 19.99,
    date: '2026-02-08',
    status: 'completed',
  },
  {
    id: 'ORD-7878',
    customer: 'Amelia Harris',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80',
    product: 'Wireless Charger',
    amount: 49.99,
    date: '2026-02-07',
    status: 'processing',
  },
  {
    id: 'ORD-7877',
    customer: 'Lucas Clark',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80',
    product: 'Noise Cancelling Headphones',
    amount: 299.0,
    date: '2026-02-07',
    status: 'shipped',
  },
  {
    id: 'ORD-7876',
    customer: 'Harper Lewis',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80',
    product: 'Smart Watch Band',
    amount: 29.99,
    date: '2026-02-06',
    status: 'completed',
  },
  {
    id: 'ORD-7875',
    customer: 'Henry Walker',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    product: 'Portable Power Bank',
    amount: 59.0,
    date: '2026-02-06',
    status: 'cancelled',
  },
  {
    id: 'ORD-7874',
    customer: 'Evelyn Hall',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&dpr=2&q=80',
    product: 'Keyboard Wrist Rest',
    amount: 22.0,
    date: '2026-02-05',
    status: 'pending',
  },
  {
    id: 'ORD-7873',
    customer: 'Alexander Young',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80',
    product: 'Docking Station',
    amount: 189.0,
    date: '2026-02-05',
    status: 'shipped',
  },
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))

export default function ScrollableTableBlock() {
  const { columns, rows, totalItems } = useTable<Order>({
    data: orders,
    columns: [
      {
        key: 'id',
        header: 'Order',
        cell: (value) => <span className='font-medium'>{value}</span>,
      },
      {
        key: 'customer',
        header: 'Customer',
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm'>
              <AvatarImage src={row.avatar} alt={row.customer} />
              <AvatarFallback>
                {row.customer
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </AvatarRoot>
            <span className='font-medium'>{row.customer}</span>
          </div>
        ),
      },
      { key: 'product', header: 'Product' },
      {
        key: 'date',
        header: 'Date',
        cell: (value) => (
          <span className='whitespace-nowrap'>{formatDate(value as string)}</span>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const status = statusConfig[value as Status]
          return (
            <Badge
              variant={status.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Order status: ${status.label}`}
            >
              {status.label}
            </Badge>
          )
        },
      },
      {
        key: 'amount',
        header: 'Amount',
        cellClassName: 'text-right tabular-nums font-medium',
        cell: (value) => (
          <data value={value as number}>{formatCurrency(value as number)}</data>
        ),
      },
    ],
  })

  return (
    <section className='w-full' aria-labelledby='table-scrollable-body-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1'>
              <CardTitle
                id='table-scrollable-body-title'
                className='flex items-center gap-2'
              >
                <List className='size-4' aria-hidden='true' />
                Recent Orders
              </CardTitle>
              <CardDescription>
                Fixed-height table with scrollable body and sticky header.
              </CardDescription>
            </div>
            <p className='text-sm text-muted-foreground'>
              Showing <data value={totalItems}>{totalItems}</data> orders
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <div className='max-h-[400px] overflow-auto'>
            <TableRoot variant='striped' stickyHeader>
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
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
```

### Full Data Table

```tsx
import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge, BadgeDot } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { GroupAddon, GroupRoot } from '@lglab/compose-ui/group'
import { Input } from '@lglab/compose-ui/input'
import {
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui/menu'
import { MeterIndicator, MeterRoot, MeterTrack } from '@lglab/compose-ui/meter'
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
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@lglab/compose-ui/popover'
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
  includesFilter,
  useTable,
} from '@lglab/compose-ui/table'
import {
  Archive,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Copy,
  DollarSign,
  Ellipsis,
  ExternalLink,
  FilterX,
  Heart,
  Minus,
  MoreHorizontal,
  Pencil,
  Search,
  Trash2,
  Users,
} from 'lucide-react'

type Status = 'active' | 'churned' | 'trial' | 'paused'
type Plan = 'enterprise' | 'business' | 'starter' | 'free'

interface Customer {
  id: string
  name: string
  email: string
  avatar: string
  country: string
  flag: string
  plan: Plan
  health: number
  mrr: number
  status: Status
  lastActive: string
}

const statusConfig: Record<
  Status,
  { variant: 'success' | 'destructive' | 'info' | 'warning'; label: string }
> = {
  active: { variant: 'success', label: 'Active' },
  churned: { variant: 'destructive', label: 'Churned' },
  trial: { variant: 'info', label: 'Trial' },
  paused: { variant: 'warning', label: 'Paused' },
}

const planConfig: Record<
  Plan,
  { variant: 'default' | 'info' | 'warning' | 'secondary'; label: string }
> = {
  enterprise: { variant: 'default', label: 'Enterprise' },
  business: { variant: 'info', label: 'Business' },
  starter: { variant: 'warning', label: 'Starter' },
  free: { variant: 'secondary', label: 'Free' },
}

const statuses: { value: Status; label: string }[] = [
  { value: 'active', label: 'Active' },
  { value: 'trial', label: 'Trial' },
  { value: 'paused', label: 'Paused' },
  { value: 'churned', label: 'Churned' },
]

const plans: { value: Plan; label: string }[] = [
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'business', label: 'Business' },
  { value: 'starter', label: 'Starter' },
  { value: 'free', label: 'Free' },
]

const customers: Customer[] = [
  {
    id: 'CUS-001',
    name: 'Acme Corp',
    email: 'billing@acme.com',
    avatar:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&dpr=2&q=80',
    country: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    plan: 'enterprise',
    health: 92,
    mrr: 12500,
    status: 'active',
    lastActive: '2026-02-15T14:30:00',
  },
  {
    id: 'CUS-002',
    name: 'Globex Ltd',
    email: 'admin@globex.co.uk',
    avatar:
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=128&h=128&dpr=2&q=80',
    country: 'United Kingdom',
    flag: '\u{1F1EC}\u{1F1E7}',
    plan: 'business',
    health: 78,
    mrr: 4200,
    status: 'active',
    lastActive: '2026-02-15T09:15:00',
  },
  {
    id: 'CUS-003',
    name: 'Initech GmbH',
    email: 'info@initech.de',
    avatar:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&h=128&dpr=2&q=80',
    country: 'Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
    plan: 'enterprise',
    health: 45,
    mrr: 8900,
    status: 'paused',
    lastActive: '2026-02-10T16:20:00',
  },
  {
    id: 'CUS-004',
    name: 'Soylent SAS',
    email: 'contact@soylent.fr',
    avatar:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=128&h=128&dpr=2&q=80',
    country: 'France',
    flag: '\u{1F1EB}\u{1F1F7}',
    plan: 'starter',
    health: 65,
    mrr: 990,
    status: 'active',
    lastActive: '2026-02-14T11:45:00',
  },
  {
    id: 'CUS-005',
    name: 'Umbrella Inc',
    email: 'support@umbrella.jp',
    avatar:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=128&h=128&dpr=2&q=80',
    country: 'Japan',
    flag: '\u{1F1EF}\u{1F1F5}',
    plan: 'business',
    health: 88,
    mrr: 6300,
    status: 'active',
    lastActive: '2026-02-15T07:00:00',
  },
  {
    id: 'CUS-006',
    name: 'Cyberdyne Pty',
    email: 'hello@cyberdyne.com.au',
    avatar:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=128&h=128&dpr=2&q=80',
    country: 'Australia',
    flag: '\u{1F1E6}\u{1F1FA}',
    plan: 'starter',
    health: 31,
    mrr: 490,
    status: 'churned',
    lastActive: '2026-01-22T13:10:00',
  },
  {
    id: 'CUS-007',
    name: 'Stark Tech',
    email: 'ops@starktech.ca',
    avatar:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=128&h=128&dpr=2&q=80',
    country: 'Canada',
    flag: '\u{1F1E8}\u{1F1E6}',
    plan: 'enterprise',
    health: 95,
    mrr: 15800,
    status: 'active',
    lastActive: '2026-02-15T12:00:00',
  },
  {
    id: 'CUS-008',
    name: 'Wayne Corp',
    email: 'billing@wayne.com.br',
    avatar:
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=128&h=128&dpr=2&q=80',
    country: 'Brazil',
    flag: '\u{1F1E7}\u{1F1F7}',
    plan: 'free',
    health: 52,
    mrr: 0,
    status: 'trial',
    lastActive: '2026-02-13T18:30:00',
  },
  {
    id: 'CUS-009',
    name: 'Oscorp AB',
    email: 'admin@oscorp.se',
    avatar:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=128&h=128&dpr=2&q=80',
    country: 'Sweden',
    flag: '\u{1F1F8}\u{1F1EA}',
    plan: 'business',
    health: 71,
    mrr: 3400,
    status: 'active',
    lastActive: '2026-02-14T15:20:00',
  },
  {
    id: 'CUS-010',
    name: 'LexCorp SA',
    email: 'finance@lexcorp.co.za',
    avatar:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=128&h=128&dpr=2&q=80',
    country: 'South Africa',
    flag: '\u{1F1FF}\u{1F1E6}',
    plan: 'starter',
    health: 58,
    mrr: 790,
    status: 'active',
    lastActive: '2026-02-12T10:05:00',
  },
  {
    id: 'CUS-011',
    name: 'Massive Dynamic',
    email: 'team@massive.co',
    avatar:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=128&h=128&dpr=2&q=80',
    country: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    plan: 'enterprise',
    health: 84,
    mrr: 11200,
    status: 'active',
    lastActive: '2026-02-15T10:30:00',
  },
  {
    id: 'CUS-012',
    name: 'Pied Piper',
    email: 'hello@piedpiper.io',
    avatar:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=128&h=128&dpr=2&q=80',
    country: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    plan: 'business',
    health: 73,
    mrr: 5100,
    status: 'active',
    lastActive: '2026-02-14T08:45:00',
  },
  {
    id: 'CUS-013',
    name: 'Hooli BV',
    email: 'billing@hooli.nl',
    avatar:
      'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=128&h=128&dpr=2&q=80',
    country: 'Netherlands',
    flag: '\u{1F1F3}\u{1F1F1}',
    plan: 'enterprise',
    health: 39,
    mrr: 9800,
    status: 'paused',
    lastActive: '2026-02-05T14:00:00',
  },
  {
    id: 'CUS-014',
    name: 'Dunder Mifflin',
    email: 'info@dundermifflin.com',
    avatar:
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=128&h=128&dpr=2&q=80',
    country: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    plan: 'free',
    health: 25,
    mrr: 0,
    status: 'churned',
    lastActive: '2026-01-15T09:00:00',
  },
  {
    id: 'CUS-015',
    name: 'Wonka Ltd',
    email: 'accounts@wonka.co.uk',
    avatar:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=128&h=128&dpr=2&q=80',
    country: 'United Kingdom',
    flag: '\u{1F1EC}\u{1F1E7}',
    plan: 'business',
    health: 81,
    mrr: 4700,
    status: 'active',
    lastActive: '2026-02-15T11:20:00',
  },
  {
    id: 'CUS-016',
    name: 'Tyrell Corp',
    email: 'contact@tyrell.sg',
    avatar:
      'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=128&h=128&dpr=2&q=80',
    country: 'Singapore',
    flag: '\u{1F1F8}\u{1F1EC}',
    plan: 'business',
    health: 67,
    mrr: 3900,
    status: 'trial',
    lastActive: '2026-02-13T16:45:00',
  },
  {
    id: 'CUS-017',
    name: 'Weyland Ind',
    email: 'admin@weyland.kr',
    avatar:
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=128&h=128&dpr=2&q=80',
    country: 'South Korea',
    flag: '\u{1F1F0}\u{1F1F7}',
    plan: 'enterprise',
    health: 90,
    mrr: 13400,
    status: 'active',
    lastActive: '2026-02-15T06:30:00',
  },
  {
    id: 'CUS-018',
    name: 'Primatech SpA',
    email: 'info@primatech.it',
    avatar:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=128&h=128&dpr=2&q=80',
    country: 'Italy',
    flag: '\u{1F1EE}\u{1F1F9}',
    plan: 'starter',
    health: 44,
    mrr: 690,
    status: 'paused',
    lastActive: '2026-02-08T12:15:00',
  },
  {
    id: 'CUS-019',
    name: 'Rekall SA',
    email: 'hello@rekall.es',
    avatar:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=128&h=128&dpr=2&q=80',
    country: 'Spain',
    flag: '\u{1F1EA}\u{1F1F8}',
    plan: 'free',
    health: 15,
    mrr: 0,
    status: 'churned',
    lastActive: '2026-01-03T08:00:00',
  },
  {
    id: 'CUS-020',
    name: 'Nakatomi AG',
    email: 'ops@nakatomi.ch',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80',
    country: 'Switzerland',
    flag: '\u{1F1E8}\u{1F1ED}',
    plan: 'enterprise',
    health: 97,
    mrr: 18200,
    status: 'active',
    lastActive: '2026-02-15T13:00:00',
  },
]

const formatCurrency = (value: number) =>
  value === 0
    ? '$0'
    : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value)

const healthColor = (score: number) => {
  if (score >= 70) return 'bg-success'
  if (score >= 40) return 'bg-warning'
  return 'bg-destructive'
}

const healthText = (score: number) => {
  if (score >= 70) return 'text-success'
  if (score >= 40) return 'text-warning'
  return 'text-destructive'
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

function CustomerActions({ customer }: { customer: Customer }) {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button
            {...props}
            variant='ghost'
            size='icon-sm'
            aria-label={`Actions for ${customer.name}`}
          >
            <MoreHorizontal className='size-4' aria-hidden='true' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner align='end'>
          <MenuPopup>
            <MenuGroup>
              <MenuGroupLabel>{customer.name}</MenuGroupLabel>
              <MenuItem>
                <ExternalLink className='size-4' aria-hidden='true' />
                View profile
              </MenuItem>
              <MenuItem>
                <Pencil className='size-4' aria-hidden='true' />
                Edit details
              </MenuItem>
              <MenuItem>
                <Copy className='size-4' aria-hidden='true' />
                Copy ID
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuItem className='text-destructive'>
              <Trash2 className='size-4' aria-hidden='true' />
              Delete customer
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}

function FilterPopover({
  label,
  icon: Icon,
  options,
  values,
  onChange,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  options: { value: string; label: string }[]
  values: string[]
  onChange: (values: string[]) => void
}) {
  const count = values.length
  return (
    <PopoverRoot>
      <PopoverTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='sm'>
            <Icon className='size-3.5' aria-hidden='true' />
            {label}
            {count > 0 && (
              <span className='ml-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground'>
                {count}
              </span>
            )}
            <ChevronDown className='size-3' aria-hidden='true' />
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='w-36 p-3'>
            <CheckboxGroupRoot value={values} onValueChange={onChange}>
              <div className='space-y-2'>
                {options.map((opt) => (
                  <label
                    key={opt.value}
                    className='flex items-center gap-2 text-sm cursor-pointer'
                  >
                    <CheckboxRoot value={opt.value}>
                      <CheckboxIndicator>
                        <Check className='size-3.5' />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                    {opt.label}
                  </label>
                ))}
              </div>
            </CheckboxGroupRoot>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}

export default function FullDataTableBlock() {
  const {
    columns,
    rows,
    totalItems,
    searchTerm,
    onSearchChange,
    filterValues,
    setFilterValue,
    clearFilters,
    activeFilterCount,
    currentPage,
    totalPages,
    pageSize,
    pageSizeOptions,
    onPageChange,
    onPageSizeChange,
    selection,
  } = useTable<Customer>({
    data: customers,
    columns: [
      {
        key: 'name',
        header: 'Customer',
        sortable: true,
        cell: (_value, row) => (
          <div className='flex items-center gap-2'>
            <AvatarRoot size='sm' className='rounded-md'>
              <AvatarImage src={row.avatar} alt={row.name} />
              <AvatarFallback>{getInitials(row.name)}</AvatarFallback>
            </AvatarRoot>
            <div className='min-w-0'>
              <p className='font-medium truncate'>{row.name}</p>
              <p className='text-xs text-muted-foreground truncate'>{row.email}</p>
            </div>
          </div>
        ),
      },
      {
        key: 'country',
        header: 'Country',
        cellClassName: 'hidden lg:table-cell',
        headerClassName: 'hidden lg:table-cell',
        cell: (_value, row) => (
          <span className='inline-flex items-center gap-1.5'>
            <span aria-hidden='true' className='text-lg'>
              {row.flag}
            </span>
            <span className='truncate'>{row.country}</span>
          </span>
        ),
      },
      {
        key: 'plan',
        header: 'Plan',
        cellClassName: 'hidden md:table-cell',
        headerClassName: 'hidden md:table-cell',
        cell: (value) => {
          const config = planConfig[value as Plan]
          return (
            <Badge
              variant={config.variant}
              appearance='light'
              size='sm'
              shape='pill'
              aria-label={`Plan: ${config.label}`}
            >
              {config.label}
            </Badge>
          )
        },
      },
      {
        key: 'health',
        header: 'Health',
        sortable: true,
        cell: (value) => {
          const score = value as number
          return (
            <div className='flex items-center gap-2'>
              <MeterRoot
                value={score}
                aria-label={`Health score: ${score}`}
                className='w-12'
              >
                <MeterTrack className='h-1.5'>
                  <MeterIndicator className={healthColor(score)} />
                </MeterTrack>
              </MeterRoot>
              <span className={`text-xs font-semibold tabular-nums ${healthText(score)}`}>
                {score}
              </span>
            </div>
          )
        },
      },
      {
        key: 'mrr',
        header: 'MRR',
        sortable: true,
        cellClassName: 'text-right tabular-nums font-medium',
        headerClassName: 'text-right',
        cell: (value) => {
          const mrr = value as number
          return <data value={mrr}>{formatCurrency(mrr)}</data>
        },
      },
      {
        key: 'status',
        header: 'Status',
        cell: (value) => {
          const config = statusConfig[value as Status]
          return (
            <Badge
              variant={config.variant}
              appearance='outline'
              size='sm'
              shape='pill'
              aria-label={`Status: ${config.label}`}
            >
              <BadgeDot />
              {config.label}
            </Badge>
          )
        },
      },
    ],
    search: { keys: ['name', 'email', 'country'] },
    filters: {
      status: {
        predicate: includesFilter('status'),
        defaultValue: [],
      },
      plan: {
        predicate: includesFilter('plan'),
        defaultValue: [],
      },
    },
    sort: { key: 'mrr', direction: 'desc' },
    pagination: { pageSize: 10, pageSizeOptions: [5, 10, 20] },
    selection: { rowKey: (row) => row.id },
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

  const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1
  const rangeEnd = Math.min(currentPage * pageSize, totalItems)
  const selectedCount = selection?.selectedCount ?? 0

  return (
    <section className='w-full' aria-labelledby='full-data-table-title'>
      <CardRoot>
        <CardHeader>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <div className='space-y-1'>
                <CardTitle id='full-data-table-title' className='flex items-center gap-2'>
                  <Users className='size-4' aria-hidden='true' />
                  Customers
                </CardTitle>
                <CardDescription>
                  Manage your customer accounts, health scores, and revenue.
                </CardDescription>
              </div>
              <GroupRoot className='w-full sm:w-64'>
                <GroupAddon size='icon'>
                  <Search aria-hidden='true' />
                </GroupAddon>
                <Input
                  placeholder='Search customers...'
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  aria-label='Search customers'
                />
              </GroupRoot>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              <FilterPopover
                label='Status'
                icon={Heart}
                options={statuses}
                values={(filterValues.status as string[]) ?? []}
                onChange={(v) => setFilterValue('status', v)}
              />
              <FilterPopover
                label='Plan'
                icon={DollarSign}
                options={plans}
                values={(filterValues.plan as string[]) ?? []}
                onChange={(v) => setFilterValue('plan', v)}
              />
              {activeFilterCount > 0 && (
                <Button variant='ghost' size='sm' onClick={clearFilters}>
                  <FilterX className='size-3.5' aria-hidden='true' />
                  Clear filters
                </Button>
              )}

              {selectedCount > 0 && (
                <>
                  <Separator orientation='vertical' className='h-4 mx-1' />
                  <div
                    className='flex flex-wrap items-center gap-2'
                    role='group'
                    aria-label='Bulk actions'
                  >
                    <span className='text-sm font-medium'>
                      <data value={selectedCount}>{selectedCount}</data> selected
                    </span>
                    <Button variant='outline' size='sm'>
                      <Archive className='size-3.5' aria-hidden='true' />
                      Archive
                    </Button>
                    <Button variant='destructive' size='sm'>
                      <Trash2 className='size-3.5' aria-hidden='true' />
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot variant='striped'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-10'>
                  <CheckboxRoot
                    checked={selection?.isAllOnPageSelected}
                    indeterminate={selection?.isIndeterminate}
                    onCheckedChange={() => selection?.toggleAllOnPage()}
                    aria-label='Select all on page'
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
                {columns.map((col) => (
                  <TableHead key={col.key} {...col.head} />
                ))}
                <TableHead className='w-10'>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  className='group data-selected:bg-muted/50'
                  data-selected={selection?.isRowSelected(row) || undefined}
                >
                  <TableCell>
                    <CheckboxRoot
                      checked={selection?.isRowSelected(row)}
                      onCheckedChange={() => selection?.toggleRowSelection(row)}
                      aria-label={`Select ${row.name}`}
                    >
                      <CheckboxIndicator>
                        <Check className='size-3.5' />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell key={col.key} {...col.cell}>
                      {col.renderCell(row)}
                    </TableCell>
                  ))}
                  <TableCell>
                    <CustomerActions customer={row} />
                  </TableCell>
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
            {'\u2013'}
            <data value={rangeEnd} className='font-medium text-foreground'>
              {rangeEnd}
            </data>{' '}
            of <data value={totalItems}>{totalItems}</data> customers
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
```

