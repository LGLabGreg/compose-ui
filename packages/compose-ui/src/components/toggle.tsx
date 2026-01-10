'use client'

import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import * as React from 'react'

import {
  type ToggleSize,
  type ToggleVariant,
  toggleVariants,
} from '../lib/toggle-variants'
import { cn } from '../lib/utils'

// ============================================================================
// Toggle
// ============================================================================

type ToggleProps = React.ComponentProps<typeof BaseToggle> & {
  /** Visual style of the toggle */
  variant?: ToggleVariant
  /** Size of the toggle */
  size?: ToggleSize
}

const Toggle = ({ className, variant, size, ...props }: ToggleProps) => {
  return (
    <BaseToggle className={cn(toggleVariants({ variant, size }), className)} {...props} />
  )
}

Toggle.displayName = 'Toggle'

// ============================================================================
// Exports
// ============================================================================

export { Toggle }

export type { ToggleProps }
