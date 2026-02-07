'use client'

import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function RangeExample() {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <Calendar
      mode='range'
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className='rounded-md border border-border'
    />
  )
}
