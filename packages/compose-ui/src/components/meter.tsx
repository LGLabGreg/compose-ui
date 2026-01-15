'use client'

import { Meter as BaseMeter } from '@base-ui/react/meter'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// MeterRoot
// ============================================================================

type MeterRootProps = React.ComponentProps<typeof BaseMeter.Root> & {
  /** Whether to animate the meter from 0 to its value on mount */
  animated?: boolean
}

const MeterRoot = ({ className, animated, value, ...props }: MeterRootProps) => {
  const targetValue = value ?? 0
  const [displayValue, setDisplayValue] = React.useState(animated ? 0 : targetValue)

  React.useEffect(() => {
    if (animated) {
      // Double requestAnimationFrame ensures the initial 0 state is painted
      // before transitioning to the target value
      const timer1 = requestAnimationFrame(() => {
        const timer2 = requestAnimationFrame(() => {
          setDisplayValue(targetValue ?? 0)
        })
        return () => cancelAnimationFrame(timer2)
      })
      return () => cancelAnimationFrame(timer1)
    } else {
      setDisplayValue(targetValue ?? 0)
    }
  }, [animated, targetValue])

  return (
    <BaseMeter.Root className={cn('w-full', className)} value={displayValue} {...props} />
  )
}

MeterRoot.displayName = 'MeterRoot'

// ============================================================================
// MeterTrack
// ============================================================================

type MeterTrackProps = React.ComponentProps<typeof BaseMeter.Track>

const MeterTrack = ({ className, ...props }: MeterTrackProps) => {
  return (
    <BaseMeter.Track
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

MeterTrack.displayName = 'MeterTrack'

// ============================================================================
// MeterIndicator
// ============================================================================

type MeterIndicatorProps = React.ComponentProps<typeof BaseMeter.Indicator>

const MeterIndicator = ({ className, ...props }: MeterIndicatorProps) => {
  return (
    <BaseMeter.Indicator
      className={cn(
        'h-full rounded-full bg-primary transition-all duration-1000 ease-out-expo',
        className,
      )}
      {...props}
    />
  )
}

MeterIndicator.displayName = 'MeterIndicator'

// ============================================================================
// MeterValue
// ============================================================================

type MeterValueProps = React.ComponentProps<typeof BaseMeter.Value>

const MeterValue = ({ className, ...props }: MeterValueProps) => {
  return (
    <BaseMeter.Value
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  )
}

MeterValue.displayName = 'MeterValue'

// ============================================================================
// MeterLabel
// ============================================================================

type MeterLabelProps = React.ComponentProps<typeof BaseMeter.Label>

const MeterLabel = ({ className, ...props }: MeterLabelProps) => {
  return (
    <BaseMeter.Label
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  )
}

MeterLabel.displayName = 'MeterLabel'

// ============================================================================
// Exports
// ============================================================================

export { MeterRoot, MeterTrack, MeterIndicator, MeterValue, MeterLabel }

export type {
  MeterRootProps,
  MeterTrackProps,
  MeterIndicatorProps,
  MeterValueProps,
  MeterLabelProps,
}
