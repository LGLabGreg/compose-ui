'use client'

import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import {
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from '../lib/button-variants'
import { cn } from '../lib/utils'

// ============================================================================
// AlertDialogRoot
// ============================================================================

type AlertDialogRootProps = React.ComponentProps<typeof BaseAlertDialog.Root>

const AlertDialogRoot = (props: AlertDialogRootProps) => {
  return <BaseAlertDialog.Root {...props} />
}

AlertDialogRoot.displayName = 'AlertDialogRoot'

// ============================================================================
// AlertDialogTrigger
// ============================================================================

type AlertDialogTriggerProps = React.ComponentProps<typeof BaseAlertDialog.Trigger> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the trigger button */
  size?: ButtonSize
}

const AlertDialogTrigger = ({
  className,
  variant,
  size,
  ...props
}: AlertDialogTriggerProps) => {
  return (
    <BaseAlertDialog.Trigger
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

AlertDialogTrigger.displayName = 'AlertDialogTrigger'

// ============================================================================
// AlertDialogPortal
// ============================================================================

type AlertDialogPortalProps = React.ComponentProps<typeof BaseAlertDialog.Portal>

const AlertDialogPortal = (props: AlertDialogPortalProps) => {
  return <BaseAlertDialog.Portal {...props} />
}

AlertDialogPortal.displayName = 'AlertDialogPortal'

// ============================================================================
// AlertDialogBackdrop
// ============================================================================

type AlertDialogBackdropProps = React.ComponentProps<typeof BaseAlertDialog.Backdrop>

const AlertDialogBackdrop = ({ className, ...props }: AlertDialogBackdropProps) => {
  return (
    <BaseAlertDialog.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
        'transition-opacity duration-200',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

AlertDialogBackdrop.displayName = 'AlertDialogBackdrop'

// ============================================================================
// AlertDialogViewport
// ============================================================================

type AlertDialogViewportProps = React.ComponentProps<typeof BaseAlertDialog.Viewport>

const AlertDialogViewport = ({ className, ...props }: AlertDialogViewportProps) => {
  return (
    <BaseAlertDialog.Viewport
      className={cn('fixed inset-0 z-50 flex items-center justify-center p-4', className)}
      {...props}
    />
  )
}

AlertDialogViewport.displayName = 'AlertDialogViewport'

// ============================================================================
// AlertDialogPopup
// ============================================================================

const alertDialogPopupVariants = cva(
  [
    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'w-full max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-background p-6 shadow-lg',
    'transition-all duration-200',
    'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
    'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
    'top-[calc(50%+1.25rem*var(--nested-dialogs))] scale-[calc(1-0.1*var(--nested-dialogs))]',
    'data-[nested-dialog-open]:after:absolute data-[nested-dialog-open]:after:inset-0 data-[nested-dialog-open]:after:rounded-[inherit] data-[nested-dialog-open]:after:bg-black/5',
  ],
  {
    variants: {
      size: {
        sm: 'w-sm',
        default: 'w-lg',
        lg: 'w-2xl',
        xl: 'w-4xl',
        full: 'h-[calc(100vh-2rem)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type AlertDialogPopupProps = React.ComponentProps<typeof BaseAlertDialog.Popup> & {
  /** Size of the alert dialog popup */
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
}

const AlertDialogPopup = ({ className, size, ...props }: AlertDialogPopupProps) => {
  return (
    <BaseAlertDialog.Popup
      className={cn(alertDialogPopupVariants({ size }), className)}
      {...props}
    />
  )
}

AlertDialogPopup.displayName = 'AlertDialogPopup'

// ============================================================================
// AlertDialogTitle
// ============================================================================

type AlertDialogTitleProps = React.ComponentProps<typeof BaseAlertDialog.Title>

const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
  return (
    <BaseAlertDialog.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

AlertDialogTitle.displayName = 'AlertDialogTitle'

// ============================================================================
// AlertDialogDescription
// ============================================================================

type AlertDialogDescriptionProps = React.ComponentProps<
  typeof BaseAlertDialog.Description
>

const AlertDialogDescription = ({ className, ...props }: AlertDialogDescriptionProps) => {
  return <BaseAlertDialog.Description className={cn('mt-2', className)} {...props} />
}

AlertDialogDescription.displayName = 'AlertDialogDescription'

// ============================================================================
// AlertDialogClose
// ============================================================================

type AlertDialogCloseProps = React.ComponentProps<typeof BaseAlertDialog.Close> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the close button */
  size?: ButtonSize
}

const AlertDialogClose = ({
  className,
  variant,
  size,
  ...props
}: AlertDialogCloseProps) => {
  return (
    <BaseAlertDialog.Close
      className={cn(buttonVariants({ variant: variant ?? 'outline', size }), className)}
      {...props}
    />
  )
}

AlertDialogClose.displayName = 'AlertDialogClose'

// ============================================================================
// Exports
// ============================================================================

// Re-export AlertDialog from Base UI for createHandle() and other utilities
export { AlertDialog } from '@base-ui/react/alert-dialog'

export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogViewport,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
}

export type {
  AlertDialogRootProps,
  AlertDialogTriggerProps,
  AlertDialogPortalProps,
  AlertDialogBackdropProps,
  AlertDialogViewportProps,
  AlertDialogPopupProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCloseProps,
}
