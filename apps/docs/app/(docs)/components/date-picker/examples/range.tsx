'use client'

import { Button } from '@lglab/compose-ui/button'
import { Calendar } from '@lglab/compose-ui/calendar'
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@lglab/compose-ui/popover'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function RangeExample() {
  const [range, setRange] = useState<DateRange | undefined>()

  const displayText = range?.from
    ? range.to
      ? `${format(range.from, 'PPP')} - ${format(range.to, 'PPP')}`
      : format(range.from, 'PPP')
    : null

  return (
    <PopoverRoot>
      <PopoverTrigger
        render={(props) => (
          <Button
            {...props}
            variant='outline'
            className='min-w-[200px] justify-start gap-2'
          >
            <CalendarIcon className='size-4' />
            {displayText ?? (
              <span className='text-muted-foreground'>Pick a date range</span>
            )}
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='w-auto p-0'>
            <Calendar
              mode='range'
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
