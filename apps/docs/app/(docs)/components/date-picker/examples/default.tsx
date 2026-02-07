'use client'

import {
  DatePickerContent,
  DatePickerRoot,
  DatePickerTrigger,
} from '@lglab/compose-ui/date-picker'

export default function DefaultExample() {
  return (
    <DatePickerRoot>
      <DatePickerTrigger placeholder='Pick a date' />
      <DatePickerContent />
    </DatePickerRoot>
  )
}
