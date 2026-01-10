'use client'

import { Toggle } from '@base-ui/react/toggle'
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import * as React from 'react'

import {
  type ToggleSize,
  type ToggleVariant,
  toggleVariants,
} from '../lib/toggle-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ToggleGroupRoot
// ============================================================================

type ToggleGroupRootProps = React.ComponentProps<typeof BaseToggleGroup>

const ToggleGroupRoot = ({ className, orientation, ...props }: ToggleGroupRootProps) => {
  return (
    <BaseToggleGroup
      orientation={orientation}
      className={cn(
        'inline-flex',
        orientation === 'vertical' && 'flex-col',
        // Connected items: collapse borders, round only outer corners
        '*:rounded-none [&>*:not(:first-child)]:-ml-px',
        '[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md',
        // Vertical orientation adjustments
        orientation === 'vertical' &&
          '[&>*:not(:first-child)]:ml-0 [&>*:not(:first-child)]:-mt-px [&>*:first-child]:rounded-bl-none [&>*:last-child]:rounded-r-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md',
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
  /** Visual style of the toggle item */
  variant?: ToggleVariant
  /** Size of the toggle item */
  size?: ToggleSize
}

const ToggleGroupItem = ({
  className,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) => {
  return (
    <Toggle
      className={cn(
        toggleVariants({ variant, size }),
        // Ghost variant in toggle-group: add borders, no background when pressed
        variant === 'ghost' && 'border border-border',
        className,
      )}
      {...props}
    />
  )
}

ToggleGroupItem.displayName = 'ToggleGroupItem'

// ============================================================================
// Exports
// ============================================================================

export { ToggleGroupRoot, ToggleGroupItem }

export type { ToggleGroupRootProps, ToggleGroupItemProps }
