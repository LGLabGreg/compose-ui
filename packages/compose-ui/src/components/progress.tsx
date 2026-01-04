'use client'

import { Progress as BaseProgress } from '@base-ui/react/progress'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// ProgressRoot
// ============================================================================

type ProgressRootProps = React.ComponentProps<typeof BaseProgress.Root>

const ProgressRoot = ({ className, ...props }: ProgressRootProps) => {
  return <BaseProgress.Root className={cn('w-full', className)} {...props} />
}

ProgressRoot.displayName = 'ProgressRoot'

// ============================================================================
// ProgressTrack
// ============================================================================

type ProgressTrackProps = React.ComponentProps<typeof BaseProgress.Track>

const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  return (
    <BaseProgress.Track
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
        className,
      )}
      {...props}
    />
  )
}

ProgressTrack.displayName = 'ProgressTrack'

// ============================================================================
// ProgressIndicator
// ============================================================================

type ProgressIndicatorProps = React.ComponentProps<typeof BaseProgress.Indicator>

const ProgressIndicator = ({ className, ...props }: ProgressIndicatorProps) => {
  return (
    <BaseProgress.Indicator
      className={cn(
        'h-full rounded-full bg-primary transition-all duration-1000 ease-out-expo',
        className,
      )}
      {...props}
    />
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'

// ============================================================================
// ProgressValue
// ============================================================================

type ProgressValueProps = React.ComponentProps<typeof BaseProgress.Value>

const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  return (
    <BaseProgress.Value
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  )
}

ProgressValue.displayName = 'ProgressValue'

// ============================================================================
// ProgressLabel
// ============================================================================

type ProgressLabelProps = React.ComponentProps<typeof BaseProgress.Label>

const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
  return (
    <BaseProgress.Label
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  )
}

ProgressLabel.displayName = 'ProgressLabel'

// ============================================================================
// Exports
// ============================================================================

export { ProgressRoot, ProgressTrack, ProgressIndicator, ProgressValue, ProgressLabel }

export type {
  ProgressRootProps,
  ProgressTrackProps,
  ProgressIndicatorProps,
  ProgressValueProps,
  ProgressLabelProps,
}
