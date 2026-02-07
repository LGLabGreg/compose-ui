'use client'

import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Alert Variants
// ============================================================================

const alertVariants = cva(
  ['relative flex w-full gap-3 rounded-lg p-4', '[&_svg]:shrink-0'],
  {
    variants: {
      variant: {
        default: '',
        destructive: '',
        success: '',
        warning: '',
        info: '',
      },
      appearance: {
        default: '',
        outline: 'border',
        filled: '',
      },
      size: {
        sm: 'gap-2 p-3 text-xs [&_svg]:size-4',
        md: 'gap-3 p-4 text-sm [&_svg]:size-5',
        lg: 'gap-4 p-5 text-base [&_svg]:size-6',
      },
    },
    compoundVariants: [
      // Default appearance - light bg + colored text
      {
        variant: 'default',
        appearance: 'default',
        class: 'bg-primary/10 text-primary',
      },
      {
        variant: 'destructive',
        appearance: 'default',
        class: 'bg-destructive/10 text-destructive',
      },
      {
        variant: 'success',
        appearance: 'default',
        class: 'bg-success/10 text-success',
      },
      {
        variant: 'warning',
        appearance: 'default',
        class: 'bg-warning/10 text-warning',
      },
      {
        variant: 'info',
        appearance: 'default',
        class: 'bg-info/10 text-info',
      },
      // Outline appearance - variant-colored border at 50% + light bg
      {
        variant: 'default',
        appearance: 'outline',
        class: 'border-primary/50 bg-primary/10 text-primary',
      },
      {
        variant: 'destructive',
        appearance: 'outline',
        class: 'border-destructive/50 bg-destructive/10 text-destructive',
      },
      {
        variant: 'success',
        appearance: 'outline',
        class: 'border-success/50 bg-success/10 text-success',
      },
      {
        variant: 'warning',
        appearance: 'outline',
        class: 'border-warning/50 bg-warning/10 text-warning',
      },
      {
        variant: 'info',
        appearance: 'outline',
        class: 'border-info/50 bg-info/10 text-info',
      },
      // Filled appearance - solid bg + white text
      {
        variant: 'default',
        appearance: 'filled',
        class: 'bg-primary text-primary-foreground',
      },
      {
        variant: 'destructive',
        appearance: 'filled',
        class: 'bg-destructive text-white',
      },
      {
        variant: 'success',
        appearance: 'filled',
        class: 'bg-success text-white',
      },
      {
        variant: 'warning',
        appearance: 'filled',
        class: 'bg-warning text-white',
      },
      {
        variant: 'info',
        appearance: 'filled',
        class: 'bg-info text-white',
      },
    ],
    defaultVariants: {
      variant: 'default',
      appearance: 'default',
      size: 'md',
    },
  },
)

export type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info'

export type AlertAppearance = 'default' | 'outline' | 'filled'

export type AlertSize = 'sm' | 'md' | 'lg'

// ============================================================================
// Alert
// ============================================================================

type AlertProps = React.ComponentProps<'div'> & {
  /** Color variant */
  variant?: AlertVariant
  /** Visual appearance style */
  appearance?: AlertAppearance
  /** Size of the alert */
  size?: AlertSize
}

const Alert = ({
  className,
  variant,
  appearance,
  size,
  role = 'alert',
  ...props
}: AlertProps) => {
  return (
    <div
      role={role}
      className={cn(alertVariants({ variant, appearance, size }), className)}
      {...props}
    />
  )
}

Alert.displayName = 'Alert'

// ============================================================================
// AlertIcon
// ============================================================================

type AlertIconProps = React.ComponentProps<'span'>

const AlertIcon = ({ className, ...props }: AlertIconProps) => {
  return (
    <span
      data-slot='alert-icon'
      className={cn('flex shrink-0 items-center', className)}
      {...props}
    />
  )
}

AlertIcon.displayName = 'AlertIcon'

// ============================================================================
// AlertContent
// ============================================================================

type AlertContentProps = React.ComponentProps<'div'>

const AlertContent = ({ className, ...props }: AlertContentProps) => {
  return (
    <div
      data-slot='alert-content'
      className={cn('flex-1 space-y-1', className)}
      {...props}
    />
  )
}

AlertContent.displayName = 'AlertContent'

// ============================================================================
// AlertTitle
// ============================================================================

type AlertTitleProps = React.ComponentProps<'h5'>

const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  return (
    <h5
      data-slot='alert-title'
      className={cn('font-semibold leading-tight tracking-tight', className)}
      {...props}
    />
  )
}

AlertTitle.displayName = 'AlertTitle'

// ============================================================================
// AlertDescription
// ============================================================================

type AlertDescriptionProps = React.ComponentProps<'div'>

const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => {
  return (
    <div
      data-slot='alert-description'
      className={cn('text-sm opacity-90 [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
}

AlertDescription.displayName = 'AlertDescription'

// ============================================================================
// AlertAction
// ============================================================================

type AlertActionProps = React.ComponentProps<'div'>

const AlertAction = ({ className, ...props }: AlertActionProps) => {
  return (
    <div
      data-slot='alert-action'
      className={cn('ms-auto flex shrink-0 items-center gap-2', className)}
      {...props}
    />
  )
}

AlertAction.displayName = 'AlertAction'

// ============================================================================
// AlertClose
// ============================================================================

type AlertCloseProps = React.ComponentProps<'button'>

const AlertClose = ({ className, ...props }: AlertCloseProps) => {
  return (
    <button
      data-slot='alert-close'
      type='button'
      className={cn(
        'ms-auto inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md p-1 opacity-60 transition-opacity hover:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

AlertClose.displayName = 'AlertClose'

// ============================================================================
// Exports
// ============================================================================

export {
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertAction,
  AlertClose,
}

export type {
  AlertProps,
  AlertIconProps,
  AlertContentProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertActionProps,
  AlertCloseProps,
}
