'use client'

import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// DialogRoot
// ============================================================================

export type DialogRootProps = React.ComponentProps<typeof BaseDialog.Root>

const DialogRoot = (props: DialogRootProps) => {
  return <BaseDialog.Root {...props} />
}

DialogRoot.displayName = 'Dialog.Root'

// ============================================================================
// DialogTrigger
// ============================================================================

const dialogTriggerVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-all',
    'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        default: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type DialogTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger> & {
  /** Visual style variant */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  /** Size of the trigger button */
  size?: 'sm' | 'default' | 'lg'
}

const DialogTrigger = ({ className, variant, size, ...props }: DialogTriggerProps) => {
  return (
    <BaseDialog.Trigger
      className={cn(dialogTriggerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DialogTrigger.displayName = 'Dialog.Trigger'

// ============================================================================
// DialogPortal
// ============================================================================

export type DialogPortalProps = React.ComponentProps<typeof BaseDialog.Portal>

const DialogPortal = (props: DialogPortalProps) => {
  return <BaseDialog.Portal {...props} />
}

DialogPortal.displayName = 'Dialog.Portal'

// ============================================================================
// DialogBackdrop
// ============================================================================

export type DialogBackdropProps = React.ComponentProps<typeof BaseDialog.Backdrop>

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

DialogBackdrop.displayName = 'Dialog.Backdrop'

// ============================================================================
// DialogPopup
// ============================================================================

const dialogPopupVariants = cva(
  [
    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'w-full max-w-lg rounded-lg border border-border bg-background p-6 shadow-lg',
    'outline-none',
    'transition-all duration-200',
    'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
    'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        default: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type DialogPopupProps = React.ComponentProps<typeof BaseDialog.Popup> & {
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

DialogPopup.displayName = 'Dialog.Popup'

// ============================================================================
// DialogTitle
// ============================================================================

export type DialogTitleProps = React.ComponentProps<typeof BaseDialog.Title>

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

DialogTitle.displayName = 'Dialog.Title'

// ============================================================================
// DialogDescription
// ============================================================================

export type DialogDescriptionProps = React.ComponentProps<typeof BaseDialog.Description>

const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return (
    <BaseDialog.Description
      className={cn('mt-2 text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

DialogDescription.displayName = 'Dialog.Description'

// ============================================================================
// DialogClose
// ============================================================================

const dialogCloseVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-all',
    'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        default: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-6',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  },
)

export type DialogCloseProps = React.ComponentProps<typeof BaseDialog.Close> & {
  /** Visual style variant */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  /** Size of the close button */
  size?: 'sm' | 'default' | 'lg'
}

const DialogClose = ({ className, variant, size, ...props }: DialogCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn(dialogCloseVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DialogClose.displayName = 'Dialog.Close'

// ============================================================================
// DialogHeader (Utility Component)
// ============================================================================

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
}

DialogHeader.displayName = 'Dialog.Header'

// ============================================================================
// DialogFooter (Utility Component)
// ============================================================================

export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>

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

DialogFooter.displayName = 'Dialog.Footer'

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
