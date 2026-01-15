'use client'

import { Slider as BaseSlider } from '@base-ui/react/slider'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// SliderRoot
// ============================================================================

type SliderRootProps = React.ComponentProps<typeof BaseSlider.Root>

const SliderRoot = ({ className, ...props }: SliderRootProps) => {
  return <BaseSlider.Root className={cn('w-full', className)} {...props} />
}

SliderRoot.displayName = 'SliderRoot'

// ============================================================================
// SliderValue
// ============================================================================

type SliderValueProps = React.ComponentProps<typeof BaseSlider.Value>

const SliderValue = ({ className, ...props }: SliderValueProps) => {
  return (
    <BaseSlider.Value
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  )
}

SliderValue.displayName = 'SliderValue'

// ============================================================================
// SliderControl
// ============================================================================

type SliderControlProps = React.ComponentProps<typeof BaseSlider.Control>

const SliderControl = ({ className, ...props }: SliderControlProps) => {
  return (
    <BaseSlider.Control
      className={cn('flex w-full touch-none items-center py-2 select-none', className)}
      {...props}
    />
  )
}

SliderControl.displayName = 'SliderControl'

// ============================================================================
// SliderTrack
// ============================================================================

type SliderTrackProps = React.ComponentProps<typeof BaseSlider.Track>

const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <BaseSlider.Track
      className={cn('relative h-1.5 w-full rounded-full bg-primary/10', className)}
      {...props}
    />
  )
}

SliderTrack.displayName = 'SliderTrack'

// ============================================================================
// SliderIndicator
// ============================================================================

type SliderIndicatorProps = React.ComponentProps<typeof BaseSlider.Indicator>

const SliderIndicator = ({ className, ...props }: SliderIndicatorProps) => {
  return (
    <BaseSlider.Indicator
      className={cn('rounded-full bg-primary', className)}
      {...props}
    />
  )
}

SliderIndicator.displayName = 'SliderIndicator'

// ============================================================================
// SliderThumb
// ============================================================================

type SliderThumbProps = React.ComponentProps<typeof BaseSlider.Thumb>

const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <BaseSlider.Thumb
      className={cn(
        'size-4 rounded-full bg-background',
        'outline outline-border',
        'shadow-sm',
        'transition-[box-shadow,outline-color] duration-150',
        'hover:outline-primary/50',
        'focus-visible:outline-2 focus-visible:outline-primary',
        'data-dragging:outline-2 data-dragging:outline-primary',
        'data-disabled:opacity-50 data-disabled:pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}

SliderThumb.displayName = 'SliderThumb'

// ============================================================================
// Exports
// ============================================================================

export {
  SliderRoot,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
}

export type {
  SliderRootProps,
  SliderValueProps,
  SliderControlProps,
  SliderTrackProps,
  SliderIndicatorProps,
  SliderThumbProps,
}
