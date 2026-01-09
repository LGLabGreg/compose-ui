'use client'

import { Toggle } from '@base-ui/react/toggle'
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import * as React from 'react'

import { type ToggleSize, toggleVariants } from '../lib/toggle-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ToggleGroupRoot
// ============================================================================

type ToggleGroupRootProps = React.ComponentProps<typeof BaseToggleGroup>

const ToggleGroupRoot = ({ className, ...props }: ToggleGroupRootProps) => {
  return (
    <BaseToggleGroup
      className={cn(
        'inline-flex items-center gap-[2px] p-[3px] rounded-md border bg-muted/50',
        className,
      )}
      {...props}
    />
  )
}

ToggleGroupRoot.displayName = 'ToggleGroupRoot'

// ============================================================================
// ToggleGroupItem
// ============================================================================

type ToggleGroupItemProps = React.ComponentProps<typeof Toggle> & {
  /** Size of the toggle item */
  size?: ToggleSize
}

const ToggleGroupItem = ({ className, size, ...props }: ToggleGroupItemProps) => {
  return <Toggle className={cn(toggleVariants({ size }), className)} {...props} />
}

ToggleGroupItem.displayName = 'ToggleGroupItem'

// ============================================================================
// Exports
// ============================================================================

export { ToggleGroupRoot, ToggleGroupItem }

export type { ToggleGroupRootProps, ToggleGroupItemProps }
