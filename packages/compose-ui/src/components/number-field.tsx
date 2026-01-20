'use client'

import { NumberField as BaseNumberField } from '@base-ui/react/number-field'
import * as React from 'react'

import { fieldRootStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'

// ============================================================================
// NumberFieldRoot
// ============================================================================

type NumberFieldRootProps = React.ComponentProps<typeof BaseNumberField.Root>

const NumberFieldRoot = ({ className, ...props }: NumberFieldRootProps) => {
  return <BaseNumberField.Root className={cn(fieldRootStyles, className)} {...props} />
}

NumberFieldRoot.displayName = 'NumberFieldRoot'

// ============================================================================
// NumberFieldScrubArea
// ============================================================================

type NumberFieldScrubAreaProps = React.ComponentProps<typeof BaseNumberField.ScrubArea>

const NumberFieldScrubArea = ({ className, ...props }: NumberFieldScrubAreaProps) => {
  return (
    <BaseNumberField.ScrubArea
      className={cn('cursor-ew-resize select-none', className)}
      {...props}
    />
  )
}

NumberFieldScrubArea.displayName = 'NumberFieldScrubArea'

// ============================================================================
// NumberFieldScrubAreaCursor
// ============================================================================

type NumberFieldScrubAreaCursorProps = React.ComponentProps<
  typeof BaseNumberField.ScrubAreaCursor
>

const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  return (
    <BaseNumberField.ScrubAreaCursor
      className={cn('drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] filter', className)}
      {...props}
    />
  )
}

NumberFieldScrubAreaCursor.displayName = 'NumberFieldScrubAreaCursor'

// ============================================================================
// NumberFieldGroup
// ============================================================================

type NumberFieldGroupProps = React.ComponentProps<typeof BaseNumberField.Group>

const NumberFieldGroup = ({ className, ...props }: NumberFieldGroupProps) => {
  return <BaseNumberField.Group className={cn('flex', className)} {...props} />
}

NumberFieldGroup.displayName = 'NumberFieldGroup'

// ============================================================================
// NumberFieldInput
// ============================================================================

type NumberFieldInputProps = React.ComponentProps<typeof BaseNumberField.Input>

const NumberFieldInput = ({ className, ...props }: NumberFieldInputProps) => {
  return (
    <BaseNumberField.Input
      className={cn(
        'h-9 w-24 border-t border-b border-border bg-transparent text-center text-base text-foreground tabular-nums outline-none',
        className,
      )}
      {...props}
    />
  )
}

NumberFieldInput.displayName = 'NumberFieldInput'

// ============================================================================
// NumberFieldDecrement
// ============================================================================

type NumberFieldDecrementProps = React.ComponentProps<typeof BaseNumberField.Decrement>

const NumberFieldDecrement = ({ className, ...props }: NumberFieldDecrementProps) => {
  return (
    <BaseNumberField.Decrement
      className={cn(
        'flex size-9 items-center justify-center rounded-l-md border border-border bg-background text-foreground select-none transition-colors hover:bg-muted active:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

NumberFieldDecrement.displayName = 'NumberFieldDecrement'

// ============================================================================
// NumberFieldIncrement
// ============================================================================

type NumberFieldIncrementProps = React.ComponentProps<typeof BaseNumberField.Increment>

const NumberFieldIncrement = ({ className, ...props }: NumberFieldIncrementProps) => {
  return (
    <BaseNumberField.Increment
      className={cn(
        'flex size-9 items-center justify-center rounded-r-md border border-border bg-background text-foreground select-none transition-colors hover:bg-muted active:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

NumberFieldIncrement.displayName = 'NumberFieldIncrement'

// ============================================================================
// Exports
// ============================================================================

export {
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
}

export type {
  NumberFieldRootProps,
  NumberFieldScrubAreaProps,
  NumberFieldScrubAreaCursorProps,
  NumberFieldGroupProps,
  NumberFieldInputProps,
  NumberFieldDecrementProps,
  NumberFieldIncrementProps,
}
