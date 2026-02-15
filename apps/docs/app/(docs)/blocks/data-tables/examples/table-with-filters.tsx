'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import {
  CardContent,
  CardDescription,
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
import { Check, ChevronDown, Filter, ListTodo, X } from 'lucide-react'

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
  const table = useTable<Task>({
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
            <span>{row.assignee}</span>
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

  const selectedStatuses = (table.filterValues.status as Status[]) ?? []
  const selectedPriorities = (table.filterValues.priority as Priority[]) ?? []

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
                    <Filter className='size-3.5' aria-hidden='true' />
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
                      onValueChange={(value) => table.setFilterValue('status', value)}
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
                    <Filter className='size-3.5' aria-hidden='true' />
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
                      onValueChange={(value) => table.setFilterValue('priority', value)}
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

            {table.activeFilterCount > 0 && (
              <Button variant='ghost' size='sm' onClick={table.clearFilters}>
                <X className='size-3.5' aria-hidden='true' />
                Clear filters ({table.activeFilterCount})
              </Button>
            )}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='p-0'>
          <TableRoot>
            <TableHeader>
              <TableRow>
                {table.columns.map((col) => (
                  <TableHead key={col.key} {...col.head} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.rows.length > 0 ? (
                table.rows.map((row) => (
                  <TableRow key={row.id}>
                    {table.columns.map((col) => (
                      <TableCell key={col.key} {...col.cell}>
                        {col.renderCell(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className='hover:bg-transparent'>
                  <TableCell colSpan={table.columns.length}>
                    <EmptyRoot size='sm'>
                      <EmptyIcon size='sm'>
                        <Filter />
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

          <Separator />
          <div className='px-4 py-3'>
            <p className='text-sm text-muted-foreground'>
              Showing{' '}
              <data value={table.totalItems} className='font-medium text-foreground'>
                {table.totalItems}
              </data>{' '}
              of <data value={tasks.length}>{tasks.length}</data> tasks
            </p>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
