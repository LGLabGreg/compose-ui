'use client'

import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Skeleton Variants
// ============================================================================

const skeletonVariants = cva(['bg-skeleton'], {
  variants: {
    animation: {
      pulse: 'animate-pulse',
      shimmer:
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 dark:before:via-white/5 before:to-transparent',
      none: '',
    },
  },
  defaultVariants: {
    animation: 'pulse',
  },
})

export type SkeletonAnimation = 'pulse' | 'shimmer' | 'none'

// ============================================================================
// Skeleton
// ============================================================================

type SkeletonProps = React.ComponentProps<'div'> & {
  /** Animation style for the skeleton */
  animation?: SkeletonAnimation
}

const Skeleton = ({ className, animation, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('rounded-xs', skeletonVariants({ animation }), className)}
      {...props}
    />
  )
}

Skeleton.displayName = 'Skeleton'

// ============================================================================
// Exports
// ============================================================================

export { Skeleton }

export type { SkeletonProps }
