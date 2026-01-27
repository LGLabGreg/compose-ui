'use client'

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
    <div className='flex flex-col flex-1 gap-4'>
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
                  onValueChange={(v) => table.setFilterValue('status', v)}
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
                  onValueChange={(v) => table.setFilterValue('amount', v)}
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
                  onValueChange={(v) => table.setFilterValue('email', v || undefined)}
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
          {table.rows.map((row) => (
            <TableRow key={row.id}>
              {table.columns.map((col) => (
                <TableCell key={col.key} {...col.cell}>
                  {col.renderCell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <span className='text-sm text-muted-foreground'>
        {table.totalItems} {table.totalItems === 1 ? 'result' : 'results'}
      </span>
    </div>
  )
}
