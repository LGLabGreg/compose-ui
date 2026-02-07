'use client'

import {
  DateRangePickerContent,
  DateRangePickerRoot,
  DateRangePickerTrigger,
} from '@lglab/compose-ui/date-range-picker'

export default function DefaultExample() {
  return (
    <DateRangePickerRoot>
      <DateRangePickerTrigger placeholder='Pick a date range' />
      <DateRangePickerContent />
    </DateRangePickerRoot>
  )
}
