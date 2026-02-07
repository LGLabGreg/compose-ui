'use client'

import { Calendar } from '@lglab/compose-ui/calendar'
import { useState } from 'react'

export default function DefaultExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border border-border'
      footer={
        date
          ? `${date?.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}.`
          : 'Please pick a date.'
      }
    />
  )
}
