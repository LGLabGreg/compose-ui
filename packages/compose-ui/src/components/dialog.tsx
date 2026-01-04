'use client'

import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import {
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from '../lib/button-variants'
import { cn } from '../lib/utils'

// ============================================================================
// DialogRoot
// ============================================================================

type DialogRootProps = React.ComponentProps<typeof BaseDialog.Root>

const DialogRoot = (props: DialogRootProps) => {
  return <BaseDialog.Root {...props} />
}

DialogRoot.displayName = 'DialogRoot'

// ============================================================================
// DialogTrigger
// ============================================================================

type DialogTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the trigger button */
  size?: ButtonSize
}

const DialogTrigger = ({ className, variant, size, ...props }: DialogTriggerProps) => {
  return (
    <BaseDialog.Trigger
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DialogTrigger.displayName = 'DialogTrigger'

// ============================================================================
// DialogPortal
// ============================================================================

type DialogPortalProps = React.ComponentProps<typeof BaseDialog.Portal>

const DialogPortal = (props: DialogPortalProps) => {
  return <BaseDialog.Portal {...props} />
}

DialogPortal.displayName = 'DialogPortal'

// ============================================================================
// DialogBackdrop
// ============================================================================

type DialogBackdropProps = React.ComponentProps<typeof BaseDialog.Backdrop>

const DialogBackdrop = ({ className, ...props }: DialogBackdropProps) => {
  return (
    <BaseDialog.Backdrop
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

DialogBackdrop.displayName = 'DialogBackdrop'

// ============================================================================
// DialogPopup
// ============================================================================

const dialogPopupVariants = cva(
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

type DialogPopupProps = React.ComponentProps<typeof BaseDialog.Popup> & {
  /** Size of the dialog popup */
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
}

const DialogPopup = ({ className, size, ...props }: DialogPopupProps) => {
  return (
    <BaseDialog.Popup
      className={cn(dialogPopupVariants({ size }), className)}
      {...props}
    />
  )
}

DialogPopup.displayName = 'DialogPopup'

// ============================================================================
// DialogTitle
// ============================================================================

type DialogTitleProps = React.ComponentProps<typeof BaseDialog.Title>

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

DialogTitle.displayName = 'DialogTitle'

// ============================================================================
// DialogDescription
// ============================================================================

type DialogDescriptionProps = React.ComponentProps<typeof BaseDialog.Description>

const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return <BaseDialog.Description className={cn('mt-2', className)} {...props} />
}

DialogDescription.displayName = 'DialogDescription'

// ============================================================================
// DialogClose
// ============================================================================

type DialogCloseProps = React.ComponentProps<typeof BaseDialog.Close> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the close button */
  size?: ButtonSize
}

const DialogClose = ({ className, variant, size, ...props }: DialogCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn(buttonVariants({ variant: variant ?? 'outline', size }), className)}
      {...props}
    />
  )
}

DialogClose.displayName = 'DialogClose'

// ============================================================================
// DialogHeader (Utility Component)
// ============================================================================

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return <div className={cn('flex flex-col space-y-1 mb-5', className)} {...props} />
}

DialogHeader.displayName = 'DialogHeader'

// ============================================================================
// DialogFooter (Utility Component)
// ============================================================================

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>

const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn(
        'mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

DialogFooter.displayName = 'DialogFooter'

// ============================================================================
// Exports
// ============================================================================

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
}

export type {
  DialogRootProps,
  DialogTriggerProps,
  DialogPortalProps,
  DialogBackdropProps,
  DialogPopupProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
  DialogHeaderProps,
  DialogFooterProps,
}
