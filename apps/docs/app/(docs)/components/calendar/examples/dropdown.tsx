'use client'

import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function DropdownExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      captionLayout='dropdown'
      className='rounded-md border border-border'
    />
  )
}
