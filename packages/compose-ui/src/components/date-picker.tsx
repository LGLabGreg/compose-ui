'use client'

import { format } from 'date-fns'
import * as React from 'react'

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

interface DatePickerContextValue {
  value: Date | undefined
  setValue: (date: Date | undefined) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const DatePickerContext = React.createContext<DatePickerContextValue | null>(null)

function useDatePickerContext() {
  const context = React.useContext(DatePickerContext)
  if (!context) {
    throw new Error('DatePicker sub-components must be used within DatePickerRoot')
  }
  return context
}

// ============================================================================
// DatePickerRoot
// ============================================================================

type DatePickerRootProps = {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  defaultValue?: Date
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children: React.ReactNode
}

function DatePickerRoot({
  value: controlledValue,
  onValueChange,
  defaultValue,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
}: DatePickerRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<Date | undefined>(
    defaultValue,
  )
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)

  const isControlled = controlledValue !== undefined
  const isOpenControlled = controlledOpen !== undefined

  const value = isControlled ? controlledValue : uncontrolledValue
  const open = isOpenControlled ? controlledOpen : uncontrolledOpen

  const setValue = React.useCallback(
    (date: Date | undefined) => {
      if (!isControlled) {
        setUncontrolledValue(date)
      }
      onValueChange?.(date)
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
    <DatePickerContext.Provider value={contextValue}>
      <PopoverRoot open={open} onOpenChange={setOpen}>
        {children}
      </PopoverRoot>
    </DatePickerContext.Provider>
  )
}

DatePickerRoot.displayName = 'DatePickerRoot'

// ============================================================================
// DatePickerTrigger
// ============================================================================

type DatePickerTriggerProps = {
  className?: string
  placeholder?: string
  formatStr?: string
}

function DatePickerTrigger({
  className,
  placeholder = 'Pick a date',
  formatStr = 'PPP',
}: DatePickerTriggerProps) {
  const { value } = useDatePickerContext()

  return (
    <PopoverTrigger
      className={cn(
        inputBaseStyles,
        'inline-flex items-center justify-start gap-2 min-w-[200px] cursor-pointer',
        !value && 'text-muted-foreground',
        className,
      )}
    >
      <CalendarIcon />
      {value ? format(value, formatStr) : <span>{placeholder}</span>}
    </PopoverTrigger>
  )
}

DatePickerTrigger.displayName = 'DatePickerTrigger'

// ============================================================================
// DatePickerContent
// ============================================================================

type DatePickerContentProps = Omit<
  React.ComponentProps<typeof Calendar>,
  'mode' | 'selected' | 'onSelect'
>

function DatePickerContent({ className, ...props }: DatePickerContentProps) {
  const { value, setValue, setOpen } = useDatePickerContext()

  return (
    <PopoverPortal>
      <PopoverPositioner>
        <PopoverPopup className={cn('w-auto p-0', className)}>
          <Calendar
            mode='single'
            selected={value}
            onSelect={(date) => {
              setValue(date)
              if (date) {
                setOpen(false)
              }
            }}
            {...props}
          />
        </PopoverPopup>
      </PopoverPositioner>
    </PopoverPortal>
  )
}

DatePickerContent.displayName = 'DatePickerContent'

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

export { DatePickerRoot, DatePickerTrigger, DatePickerContent }
export type { DatePickerRootProps, DatePickerTriggerProps, DatePickerContentProps }
