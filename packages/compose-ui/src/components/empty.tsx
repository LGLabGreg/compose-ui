'use client'

import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// EmptyRoot Variants
// ============================================================================

const emptyRootVariants = cva(
  'relative flex flex-col flex-1 items-center justify-center overflow-hidden text-center',
  {
    variants: {
      size: {
        sm: 'gap-2 px-4 py-6',
        md: 'gap-3 px-6 py-10',
        lg: 'gap-4 px-8 py-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type EmptySize = 'sm' | 'md' | 'lg'

// ============================================================================
// EmptyRoot
// ============================================================================

type EmptyRootProps = React.ComponentProps<'div'> & {
  /** Size of the empty state */
  size?: EmptySize
}

const EmptyRoot = ({ className, size, ...props }: EmptyRootProps) => {
  return (
    <div
      data-slot='empty-root'
      className={cn(emptyRootVariants({ size }), className)}
      {...props}
    />
  )
}

EmptyRoot.displayName = 'EmptyRoot'

// ============================================================================
// EmptyBackground
// ============================================================================

type EmptyBackgroundProps = React.ComponentProps<'div'>

const EmptyBackground = ({ className, ...props }: EmptyBackgroundProps) => {
  return (
    <div
      data-slot='empty-background'
      aria-hidden='true'
      className={cn('pointer-events-none absolute inset-0', className)}
      {...props}
    />
  )
}

EmptyBackground.displayName = 'EmptyBackground'

// ============================================================================
// EmptyIcon Variants
// ============================================================================

const emptyIconVariants = cva(
  'relative z-10 flex items-center justify-center rounded-lg bg-muted/50 text-muted-foreground',
  {
    variants: {
      size: {
        sm: 'size-10 [&_svg]:size-5',
        md: 'size-12 [&_svg]:size-6',
        lg: 'size-14 [&_svg]:size-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type EmptyIconSize = 'sm' | 'md' | 'lg'

// ============================================================================
// EmptyIcon
// ============================================================================

type EmptyIconProps = React.ComponentProps<'div'> & {
  /** Size of the icon container */
  size?: EmptyIconSize
}

const EmptyIcon = ({ className, size, ...props }: EmptyIconProps) => {
  return (
    <div
      data-slot='empty-icon'
      className={cn(emptyIconVariants({ size }), className)}
      {...props}
    />
  )
}

EmptyIcon.displayName = 'EmptyIcon'

// ============================================================================
// EmptyTitle
// ============================================================================

type EmptyTitleProps<T extends React.ElementType = 'h2'> = {
  as?: T
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentProps<T>, 'as' | 'className' | 'children'>

const EmptyTitle = <T extends React.ElementType = 'h2'>({
  as,
  className,
  ...props
}: EmptyTitleProps<T>) => {
  const Component = as || 'h2'
  return (
    <Component
      data-slot='empty-title'
      className={cn('relative z-10 text-lg font-semibold tracking-tight', className)}
      {...props}
    />
  )
}

EmptyTitle.displayName = 'EmptyTitle'

// ============================================================================
// EmptyDescription
// ============================================================================

type EmptyDescriptionProps = React.ComponentProps<'p'>

const EmptyDescription = ({ className, ...props }: EmptyDescriptionProps) => {
  return (
    <p
      data-slot='empty-description'
      className={cn('relative z-10 max-w-sm text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

EmptyDescription.displayName = 'EmptyDescription'

// ============================================================================
// EmptyActions
// ============================================================================

type EmptyActionsProps = React.ComponentProps<'div'>

const EmptyActions = ({ className, ...props }: EmptyActionsProps) => {
  return (
    <div
      data-slot='empty-actions'
      className={cn('relative z-10 flex items-center gap-2 mt-2', className)}
      {...props}
    />
  )
}

EmptyActions.displayName = 'EmptyActions'

// ============================================================================
// Exports
// ============================================================================

export {
  EmptyRoot,
  EmptyBackground,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
}

export type {
  EmptyRootProps,
  EmptyBackgroundProps,
  EmptyIconProps,
  EmptyTitleProps,
  EmptyDescriptionProps,
  EmptyActionsProps,
}
