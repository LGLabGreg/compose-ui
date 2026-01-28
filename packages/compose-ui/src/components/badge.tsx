'use client'

import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Badge Variants
// ============================================================================

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5 whitespace-nowrap font-medium leading-none transition-colors',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: '',
        secondary: '',
        destructive: '',
        success: '',
        warning: '',
        info: '',
      },
      appearance: {
        default: '',
        outline: 'border',
        light: '',
        ghost: '',
      },
      size: {
        sm: 'text-xs px-2 h-5 min-w-5 [&_svg]:size-3',
        md: 'text-xs px-2.5 h-6 min-w-6 [&_svg]:size-3.5',
        lg: 'text-sm px-3 h-7 min-w-7 [&_svg]:size-4',
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-md',
      },
    },
    compoundVariants: [
      // Default appearance (solid) - full color bg, white text
      {
        variant: 'default',
        appearance: 'default',
        class: 'bg-primary text-primary-foreground',
      },
      {
        variant: 'secondary',
        appearance: 'default',
        class: 'bg-secondary text-secondary-foreground',
      },
      {
        variant: 'destructive',
        appearance: 'default',
        class: 'bg-destructive text-white',
      },
      {
        variant: 'success',
        appearance: 'default',
        class: 'bg-success text-white',
      },
      {
        variant: 'warning',
        appearance: 'default',
        class: 'bg-warning text-white',
      },
      {
        variant: 'info',
        appearance: 'default',
        class: 'bg-info text-white',
      },
      // Light appearance - 10% bg, colored text
      {
        variant: 'default',
        appearance: 'light',
        class: 'bg-primary/10 text-primary',
      },
      {
        variant: 'secondary',
        appearance: 'light',
        class: 'bg-secondary text-secondary-foreground',
      },
      {
        variant: 'destructive',
        appearance: 'light',
        class: 'bg-destructive/10 text-destructive',
      },
      {
        variant: 'success',
        appearance: 'light',
        class: 'bg-success/10 text-success',
      },
      {
        variant: 'warning',
        appearance: 'light',
        class: 'bg-warning/10 text-warning',
      },
      {
        variant: 'info',
        appearance: 'light',
        class: 'bg-info/10 text-info',
      },
      // Outline appearance - border + 10% bg, colored text
      {
        variant: 'default',
        appearance: 'outline',
        class: 'border-primary bg-primary/10 text-primary',
      },
      {
        variant: 'secondary',
        appearance: 'outline',
        class: 'bg-secondary border-border text-foreground',
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
      // Ghost appearance - just colored text
      {
        variant: 'default',
        appearance: 'ghost',
        class: 'text-primary',
      },
      {
        variant: 'secondary',
        appearance: 'ghost',
        class: 'text-secondary-foreground',
      },
      {
        variant: 'destructive',
        appearance: 'ghost',
        class: 'text-destructive',
      },
      {
        variant: 'success',
        appearance: 'ghost',
        class: 'text-success',
      },
      {
        variant: 'warning',
        appearance: 'ghost',
        class: 'text-warning',
      },
      {
        variant: 'info',
        appearance: 'ghost',
        class: 'text-info',
      },
    ],
    defaultVariants: {
      variant: 'default',
      appearance: 'default',
      size: 'md',
      shape: 'rounded',
    },
  },
)

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info'

export type BadgeAppearance = 'default' | 'outline' | 'light' | 'ghost'

export type BadgeSize = 'sm' | 'md' | 'lg'

export type BadgeShape = 'pill' | 'rounded'

// ============================================================================
// Badge
// ============================================================================

type BadgeProps = React.ComponentProps<'span'> & {
  /** Visual style variant */
  variant?: BadgeVariant
  /** Appearance style */
  appearance?: BadgeAppearance
  /** Size of the badge */
  size?: BadgeSize
  /** Shape of the badge */
  shape?: BadgeShape
}

const Badge = ({ className, variant, appearance, size, shape, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(badgeVariants({ variant, appearance, size, shape }), className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

// ============================================================================
// BadgeDot
// ============================================================================

type BadgeDotProps = React.ComponentProps<'span'>

const BadgeDot = ({ className, ...props }: BadgeDotProps) => {
  return (
    <span
      data-slot='badge-dot'
      className={cn('size-2 rounded-full bg-[currentColor]', className)}
      {...props}
    />
  )
}

BadgeDot.displayName = 'BadgeDot'

// ============================================================================
// BadgeButton
// ============================================================================

type BadgeButtonProps = React.ComponentProps<'button'>

const BadgeButton = ({ className, ...props }: BadgeButtonProps) => {
  return (
    <button
      data-slot='badge-button'
      type='button'
      className={cn(
        'cursor-pointer transition-all inline-flex items-center justify-center leading-none size-3.5 [&>svg]:opacity-100! [&>svg]:size-3.5! p-0 rounded-md -me-0.5 opacity-60 hover:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

BadgeButton.displayName = 'BadgeButton'

// ============================================================================
// Exports
// ============================================================================

export { Badge, BadgeDot, BadgeButton }

export type { BadgeProps, BadgeDotProps, BadgeButtonProps }
