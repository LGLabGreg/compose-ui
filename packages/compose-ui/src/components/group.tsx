'use client'

import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// GroupRoot
// ============================================================================

const groupRootVariants = cva(['inline-flex', '[&>*:focus-within]:z-10 [&>*]:relative'], {
  variants: {
    orientation: {
      horizontal: [
        '[&>*]:rounded-none',
        '[&>*:first-child]:rounded-l-md',
        '[&>*:last-child]:rounded-r-md',
        '[&>*:not(:first-child)]:border-l-0',
      ],
      vertical: [
        'flex-col',
        '[&>*]:rounded-none',
        '[&>*:not(:last-child)]:shadow-none',
        '[&>*:first-child]:rounded-t-md',
        '[&>*:last-child]:rounded-b-md',
        '[&>*:not(:first-child)]:border-t-0',
      ],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type GroupRootProps = React.ComponentProps<'div'> & {
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical'
}

const GroupRoot = ({
  className,
  orientation = 'horizontal',
  ...props
}: GroupRootProps) => {
  return (
    <div
      role='group'
      className={cn(groupRootVariants({ orientation }), className)}
      {...props}
    />
  )
}

GroupRoot.displayName = 'GroupRoot'

// ============================================================================
// GroupAddon
// ============================================================================

type GroupAddonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost'
type GroupAddonSize = 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

const groupAddonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-muted-foreground',
    'border [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground border-primary',
        secondary: 'bg-secondary text-secondary-foreground border-secondary',
        destructive: 'bg-destructive text-white border-destructive',
        ghost: 'border-border',
      },
      size: {
        sm: 'h-8 px-2.5 text-xs [&_svg]:size-3.5',
        default: 'h-9 px-3 text-sm [&_svg]:size-4',
        lg: 'h-10 px-3.5 text-base [&_svg]:size-5',
        icon: 'size-9 aspect-square [&_svg]:size-4',
        'icon-sm': 'size-8 aspect-square [&_svg]:size-3.5',
        'icon-lg': 'size-10 aspect-square [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'default',
    },
  },
)

type GroupAddonProps = React.ComponentProps<'div'> & {
  /** Visual style variant */
  variant?: GroupAddonVariant
  /** Size of the addon */
  size?: GroupAddonSize
}

const GroupAddon = ({ className, variant, size, ...props }: GroupAddonProps) => {
  return (
    <div
      data-slot='group-addon'
      className={cn(groupAddonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

GroupAddon.displayName = 'GroupAddon'

// ============================================================================
// Exports
// ============================================================================

export { GroupRoot, GroupAddon }

export type { GroupRootProps, GroupAddonProps, GroupAddonVariant, GroupAddonSize }
