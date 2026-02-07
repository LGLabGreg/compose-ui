'use client'

import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function MultipleExample() {
  const [dates, setDates] = useState<Date[] | undefined>()

  return (
    <Calendar
      mode='multiple'
      selected={dates}
      onSelect={setDates}
      className='rounded-md border border-border'
    />
  )
}
