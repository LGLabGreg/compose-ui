'use client'

import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Toggle
// ============================================================================

type ToggleProps = React.ComponentProps<typeof BaseToggle>

const Toggle = ({ className, ...props }: ToggleProps) => {
  return (
    <BaseToggle
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium',
        'h-9 min-w-9 px-2.5',
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
        'border border-border bg-background hover:bg-muted shadow-xs',
        'transition-all duration-150',
        'data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground data-pressed:shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

Toggle.displayName = 'Toggle'

// ============================================================================
// Exports
// ============================================================================

export { Toggle }

export type { ToggleProps }
