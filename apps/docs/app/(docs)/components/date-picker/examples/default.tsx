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

export default function DefaultExample() {
  const [date, setDate] = useState<Date | undefined>()
  const [open, setOpen] = useState(false)

  return (
    <PopoverRoot open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={(props) => (
          <Button
            {...props}
            variant='outline'
            className='min-w-[200px] justify-start gap-2'
          >
            <CalendarIcon className='size-4' />
            {date ? (
              format(date, 'PPP')
            ) : (
              <span className='text-muted-foreground'>Pick a date</span>
            )}
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={(d) => {
                setDate(d)
                if (d) setOpen(false)
              }}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
