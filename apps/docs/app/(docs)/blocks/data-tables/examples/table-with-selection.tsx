'use client'

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
          <TableRoot>
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

          <Separator />
          <div className='px-4 py-3'>
            <p className='text-sm text-muted-foreground'>
              <data value={selectedCount} className='font-medium text-foreground'>
                {selectedCount}
              </data>{' '}
              of <data value={totalItems}>{totalItems}</data> messages selected
            </p>
          </div>
        </CardContent>
      </CardRoot>
    </section>
  )
}
