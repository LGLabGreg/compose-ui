'use client'

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
