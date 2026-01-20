'use client'

import { Radio as BaseRadio } from '@base-ui/react/radio'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// RadioRoot
// ============================================================================

type RadioRootProps = React.ComponentProps<typeof BaseRadio.Root>

const RadioRoot = ({ className, ...props }: RadioRootProps) => {
  return (
    <BaseRadio.Root
      className={cn(
        'flex size-5 items-center justify-center rounded-full border border-input bg-transparent',
        'transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'data-checked:border-primary data-checked:bg-primary',
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

RadioRoot.displayName = 'RadioRoot'

// ============================================================================
// RadioIndicator
// ============================================================================

type RadioIndicatorProps = React.ComponentProps<typeof BaseRadio.Indicator>

const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  return (
    <BaseRadio.Indicator
      className={cn(
        'size-2 rounded-full bg-primary-foreground',
        'data-unchecked:hidden',
        className,
      )}
      {...props}
    />
  )
}

RadioIndicator.displayName = 'RadioIndicator'

// ============================================================================
// Exports
// ============================================================================

export { RadioRoot, RadioIndicator }

export type { RadioRootProps, RadioIndicatorProps }
