'use client'

import { format } from 'date-fns'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

import { inputBaseStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'
import { Calendar } from './calendar'
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from './popover'

// ============================================================================
// Context
// ============================================================================

interface DateRangePickerContextValue {
  value: DateRange | undefined
  setValue: (range: DateRange | undefined) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const DateRangePickerContext = React.createContext<DateRangePickerContextValue | null>(
  null,
)

function useDateRangePickerContext() {
  const context = React.useContext(DateRangePickerContext)
  if (!context) {
    throw new Error(
      'DateRangePicker sub-components must be used within DateRangePickerRoot',
    )
  }
  return context
}

// ============================================================================
// DateRangePickerRoot
// ============================================================================

type DateRangePickerRootProps = {
  value?: DateRange
  onValueChange?: (range: DateRange | undefined) => void
  defaultValue?: DateRange
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children: React.ReactNode
}

function DateRangePickerRoot({
  value: controlledValue,
  onValueChange,
  defaultValue,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
}: DateRangePickerRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<DateRange | undefined>(
    defaultValue,
  )
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)

  const isControlled = controlledValue !== undefined
  const isOpenControlled = controlledOpen !== undefined

  const value = isControlled ? controlledValue : uncontrolledValue
  const open = isOpenControlled ? controlledOpen : uncontrolledOpen

  const setValue = React.useCallback(
    (range: DateRange | undefined) => {
      if (!isControlled) {
        setUncontrolledValue(range)
      }
      onValueChange?.(range)
    },
    [isControlled, onValueChange],
  )

  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      if (!isOpenControlled) {
        setUncontrolledOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    },
    [isOpenControlled, onOpenChange],
  )

  const contextValue = React.useMemo(
    () => ({ value, setValue, open, setOpen }),
    [value, setValue, open, setOpen],
  )

  return (
    <DateRangePickerContext.Provider value={contextValue}>
      <PopoverRoot open={open} onOpenChange={setOpen}>
        {children}
      </PopoverRoot>
    </DateRangePickerContext.Provider>
  )
}

DateRangePickerRoot.displayName = 'DateRangePickerRoot'

// ============================================================================
// DateRangePickerTrigger
// ============================================================================

type DateRangePickerTriggerProps = {
  className?: string
  placeholder?: string
  formatStr?: string
}

function DateRangePickerTrigger({
  className,
  placeholder = 'Pick a date range',
  formatStr = 'PPP',
}: DateRangePickerTriggerProps) {
  const { value } = useDateRangePickerContext()

  const displayText = React.useMemo(() => {
    if (!value?.from) return null
    if (!value.to) return format(value.from, formatStr)
    return `${format(value.from, formatStr)} - ${format(value.to, formatStr)}`
  }, [value, formatStr])

  return (
    <PopoverTrigger
      className={cn(
        inputBaseStyles,
        'inline-flex items-center justify-start gap-2 min-w-[260px] cursor-pointer',
        !displayText && 'text-muted-foreground',
        className,
      )}
    >
      <CalendarIcon />
      {displayText ?? <span>{placeholder}</span>}
    </PopoverTrigger>
  )
}

DateRangePickerTrigger.displayName = 'DateRangePickerTrigger'

// ============================================================================
// DateRangePickerContent
// ============================================================================

type DateRangePickerContentProps = Omit<
  React.ComponentProps<typeof Calendar>,
  'mode' | 'selected' | 'onSelect'
>

function DateRangePickerContent({
  className,
  numberOfMonths = 2,
  ...props
}: DateRangePickerContentProps) {
  const { value, setValue } = useDateRangePickerContext()

  return (
    <PopoverPortal>
      <PopoverPositioner>
        <PopoverPopup className={cn('w-auto p-0', className)}>
          <Calendar
            mode='range'
            selected={value}
            onSelect={setValue}
            numberOfMonths={numberOfMonths}
            {...props}
          />
        </PopoverPopup>
      </PopoverPositioner>
    </PopoverPortal>
  )
}

DateRangePickerContent.displayName = 'DateRangePickerContent'

// ============================================================================
// CalendarIcon (internal)
// ============================================================================

function CalendarIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  )
}

// ============================================================================
// Exports
// ============================================================================

export { DateRangePickerRoot, DateRangePickerTrigger, DateRangePickerContent }
export type {
  DateRangePickerRootProps,
  DateRangePickerTriggerProps,
  DateRangePickerContentProps,
}
