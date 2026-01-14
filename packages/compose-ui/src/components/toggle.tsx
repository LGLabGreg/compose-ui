'use client'

import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import * as React from 'react'

import {
  type ControlSize,
  type ControlVariant,
  controlVariants,
} from '../lib/control-variants'
import { cn } from '../lib/utils'

// ============================================================================
// Toggle
// ============================================================================

type ToggleProps = React.ComponentProps<typeof BaseToggle> & {
  /** Visual style of the toggle */
  variant?: ControlVariant
  /** Size of the toggle */
  size?: ControlSize
}

const Toggle = ({ className, variant, size, ...props }: ToggleProps) => {
  return (
    <BaseToggle
      className={cn(controlVariants({ variant, size }), className)}
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
