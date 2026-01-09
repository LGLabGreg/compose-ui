'use client'

import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import * as React from 'react'

import { type ToggleSize, toggleVariants } from '../lib/toggle-variants'
import { cn } from '../lib/utils'

// ============================================================================
// Toggle
// ============================================================================

type ToggleProps = React.ComponentProps<typeof BaseToggle> & {
  /** Size of the toggle */
  size?: ToggleSize
}

const Toggle = ({ className, size, ...props }: ToggleProps) => {
  return <BaseToggle className={cn(toggleVariants({ size }), className)} {...props} />
}

Toggle.displayName = 'Toggle'

// ============================================================================
// Exports
// ============================================================================

export { Toggle }

export type { ToggleProps }
