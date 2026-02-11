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
        'h-full rounded-full bg-primary transition-all duration-500 ease-out-expo',
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
// ProgressCircle
// ============================================================================

type ProgressCircleProps = {
  value?: number | null
  min?: number
  max?: number
  size?: number
  strokeWidth?: number
  className?: string
  trackClassName?: string
  children?: React.ReactNode
}

const indeterminateKeyframes = `
@keyframes progress-circle-spin {
  0% { stroke-dashoffset: var(--pc-circumference); transform: rotate(0deg); }
  50% { stroke-dashoffset: calc(var(--pc-circumference) * 0.25); transform: rotate(180deg); }
  100% { stroke-dashoffset: var(--pc-circumference); transform: rotate(720deg); }
}
`

const ProgressCircle = ({
  value = 0,
  min = 0,
  max = 100,
  size = 120,
  strokeWidth = 8,
  className,
  trackClassName,
  children,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  const isIndeterminate = value === null
  const percentage = isIndeterminate ? 0 : ((value - min) / (max - min)) * 100
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {isIndeterminate && <style>{indeterminateKeyframes}</style>}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill='none'
        strokeWidth={strokeWidth}
        className={cn('stroke-primary/20', trackClassName)}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill='none'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeDasharray={circumference}
        strokeDashoffset={isIndeterminate ? circumference : offset}
        className={cn(
          'origin-center stroke-primary',
          !isIndeterminate && 'transition-[stroke-dashoffset] duration-500 ease-out-expo',
          className,
        )}
        style={
          isIndeterminate
            ? ({
                '--pc-circumference': circumference,
                transformOrigin: 'center',
                animation: 'progress-circle-spin 1.4s ease-in-out infinite',
              } as React.CSSProperties)
            : { transform: 'rotate(-90deg)', transformOrigin: 'center' }
        }
      />
      {children && (
        <foreignObject x={0} y={0} width={size} height={size}>
          <div className='flex h-full w-full items-center justify-center'>{children}</div>
        </foreignObject>
      )}
    </svg>
  )
}

ProgressCircle.displayName = 'ProgressCircle'

// ============================================================================
// Exports
// ============================================================================

export {
  ProgressRoot,
  ProgressTrack,
  ProgressIndicator,
  ProgressValue,
  ProgressLabel,
  ProgressCircle,
}

export type {
  ProgressRootProps,
  ProgressTrackProps,
  ProgressIndicatorProps,
  ProgressValueProps,
  ProgressLabelProps,
  ProgressCircleProps,
}
