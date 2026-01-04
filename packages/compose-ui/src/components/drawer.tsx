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
// DrawerRoot
// ============================================================================

type DrawerRootProps = React.ComponentProps<typeof BaseDialog.Root>

const DrawerRoot = (props: DrawerRootProps) => {
  return <BaseDialog.Root {...props} />
}

DrawerRoot.displayName = 'DrawerRoot'

// ============================================================================
// DrawerTrigger
// ============================================================================

type DrawerTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the trigger button */
  size?: ButtonSize
}

const DrawerTrigger = ({ className, variant, size, ...props }: DrawerTriggerProps) => {
  return (
    <BaseDialog.Trigger
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DrawerTrigger.displayName = 'DrawerTrigger'

// ============================================================================
// DrawerPortal
// ============================================================================

type DrawerPortalProps = React.ComponentProps<typeof BaseDialog.Portal>

const DrawerPortal = (props: DrawerPortalProps) => {
  return <BaseDialog.Portal {...props} />
}

DrawerPortal.displayName = 'DrawerPortal'

// ============================================================================
// DrawerBackdrop
// ============================================================================

type DrawerBackdropProps = React.ComponentProps<typeof BaseDialog.Backdrop>

const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
  return (
    <BaseDialog.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
        'transition-opacity duration-300',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

DrawerBackdrop.displayName = 'DrawerBackdrop'

// ============================================================================
// DrawerPopup
// ============================================================================

const drawerPopupVariants = cva(
  [
    'fixed z-50 flex flex-col bg-background p-6 shadow-lg',
    'transition-transform duration-300 ease-out',
    'scale-[calc(1-0.1*var(--nested-dialogs))]',
    'data-[nested-dialog-open]:after:absolute data-[nested-dialog-open]:after:inset-0 data-[nested-dialog-open]:after:rounded-[inherit] data-[nested-dialog-open]:after:bg-black/5',
  ],
  {
    variants: {
      side: {
        top: [
          'inset-x-0 top-0 border-b border-border',
          'data-starting-style:-translate-y-full',
          'data-ending-style:-translate-y-full',
        ],
        right: [
          'inset-y-0 right-0 h-full w-sm max-w-full border-l border-border',
          'data-starting-style:translate-x-full',
          'data-ending-style:translate-x-full',
        ],
        bottom: [
          'inset-x-0 bottom-0 border-t border-border',
          'data-starting-style:translate-y-full',
          'data-ending-style:translate-y-full',
        ],
        left: [
          'inset-y-0 left-0 h-full w-sm max-w-full border-r border-border',
          'data-starting-style:-translate-x-full',
          'data-ending-style:-translate-x-full',
        ],
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

type DrawerPopupProps = React.ComponentProps<typeof BaseDialog.Popup> & {
  /** Side from which the drawer slides in */
  side?: 'top' | 'right' | 'bottom' | 'left'
}

const DrawerPopup = ({ className, side, ...props }: DrawerPopupProps) => {
  return (
    <BaseDialog.Popup
      className={cn(drawerPopupVariants({ side }), className)}
      {...props}
    />
  )
}

DrawerPopup.displayName = 'DrawerPopup'

// ============================================================================
// DrawerTitle
// ============================================================================

type DrawerTitleProps = React.ComponentProps<typeof BaseDialog.Title>

const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

DrawerTitle.displayName = 'DrawerTitle'

// ============================================================================
// DrawerDescription
// ============================================================================

type DrawerDescriptionProps = React.ComponentProps<typeof BaseDialog.Description>

const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => {
  return <BaseDialog.Description className={cn('', className)} {...props} />
}

DrawerDescription.displayName = 'DrawerDescription'

// ============================================================================
// DrawerClose
// ============================================================================

type DrawerCloseProps = React.ComponentProps<typeof BaseDialog.Close> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the close button */
  size?: ButtonSize
}

const DrawerClose = ({ className, variant, size, ...props }: DrawerCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn(buttonVariants({ variant: variant ?? 'outline', size }), className)}
      {...props}
    />
  )
}

DrawerClose.displayName = 'DrawerClose'

// ============================================================================
// DrawerHeader (Utility Component)
// ============================================================================

type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
}

DrawerHeader.displayName = 'DrawerHeader'

// ============================================================================
// DrawerContent (Utility Component)
// ============================================================================

type DrawerContentProps = React.HTMLAttributes<HTMLDivElement>

const DrawerContent = ({ className, ...props }: DrawerContentProps) => {
  return <div className={cn('py-5', className)} {...props} />
}

DrawerContent.displayName = 'DrawerContent'

// ============================================================================
// DrawerFooter (Utility Component)
// ============================================================================

type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => {
  return <div className={cn('', className)} {...props} />
}

DrawerFooter.displayName = 'DrawerFooter'

// ============================================================================
// Exports
// ============================================================================

export {
  DrawerRoot,
  DrawerTrigger,
  DrawerPortal,
  DrawerBackdrop,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
}

export type {
  DrawerRootProps,
  DrawerTriggerProps,
  DrawerPortalProps,
  DrawerBackdropProps,
  DrawerPopupProps,
  DrawerTitleProps,
  DrawerDescriptionProps,
  DrawerCloseProps,
  DrawerHeaderProps,
  DrawerContentProps,
  DrawerFooterProps,
}
