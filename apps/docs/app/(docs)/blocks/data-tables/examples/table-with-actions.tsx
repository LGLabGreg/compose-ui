'use client'

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
