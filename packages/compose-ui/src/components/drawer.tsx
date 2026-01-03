'use client'

import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// DrawerRoot
// ============================================================================

export type DrawerRootProps = React.ComponentProps<typeof BaseDialog.Root>

const DrawerRoot = (props: DrawerRootProps) => {
  return <BaseDialog.Root {...props} />
}

DrawerRoot.displayName = 'Drawer.Root'

// ============================================================================
// DrawerTrigger
// ============================================================================

const drawerTriggerVariants = cva(
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
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type DrawerTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger> & {
  /** Visual style variant */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  /** Size of the trigger button */
  size?: 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
}

const DrawerTrigger = ({ className, variant, size, ...props }: DrawerTriggerProps) => {
  return (
    <BaseDialog.Trigger
      className={cn(drawerTriggerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DrawerTrigger.displayName = 'Drawer.Trigger'

// ============================================================================
// DrawerPortal
// ============================================================================

export type DrawerPortalProps = React.ComponentProps<typeof BaseDialog.Portal>

const DrawerPortal = (props: DrawerPortalProps) => {
  return <BaseDialog.Portal {...props} />
}

DrawerPortal.displayName = 'Drawer.Portal'

// ============================================================================
// DrawerBackdrop
// ============================================================================

export type DrawerBackdropProps = React.ComponentProps<typeof BaseDialog.Backdrop>

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

DrawerBackdrop.displayName = 'Drawer.Backdrop'

// ============================================================================
// DrawerPopup
// ============================================================================

const drawerPopupVariants = cva(
  [
    'fixed z-50 flex flex-col bg-background p-6 shadow-lg',
    'outline-none',
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

export type DrawerPopupProps = React.ComponentProps<typeof BaseDialog.Popup> & {
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

DrawerPopup.displayName = 'Drawer.Popup'

// ============================================================================
// DrawerTitle
// ============================================================================

export type DrawerTitleProps = React.ComponentProps<typeof BaseDialog.Title>

const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

DrawerTitle.displayName = 'Drawer.Title'

// ============================================================================
// DrawerDescription
// ============================================================================

export type DrawerDescriptionProps = React.ComponentProps<typeof BaseDialog.Description>

const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => {
  return <BaseDialog.Description className={cn('', className)} {...props} />
}

DrawerDescription.displayName = 'Drawer.Description'

// ============================================================================
// DrawerClose
// ============================================================================

const drawerCloseVariants = cva(
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
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  },
)

export type DrawerCloseProps = React.ComponentProps<typeof BaseDialog.Close> & {
  /** Visual style variant */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  /** Size of the close button */
  size?: 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
}

const DrawerClose = ({ className, variant, size, ...props }: DrawerCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn(drawerCloseVariants({ variant, size }), className)}
      {...props}
    />
  )
}

DrawerClose.displayName = 'Drawer.Close'

// ============================================================================
// DrawerHeader (Utility Component)
// ============================================================================

export type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
}

DrawerHeader.displayName = 'Drawer.Header'

// ============================================================================
// DrawerContent (Utility Component)
// ============================================================================

export type DrawerContentProps = React.HTMLAttributes<HTMLDivElement>

const DrawerContent = ({ className, ...props }: DrawerContentProps) => {
  return <div className={cn('py-5', className)} {...props} />
}

DrawerContent.displayName = 'Drawer.Content'

// ============================================================================
// DrawerFooter (Utility Component)
// ============================================================================

export type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => {
  return <div className={cn('', className)} {...props} />
}

DrawerFooter.displayName = 'Drawer.Footer'

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
