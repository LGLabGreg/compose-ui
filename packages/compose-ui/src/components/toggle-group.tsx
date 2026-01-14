'use client'

import { Toggle } from '@base-ui/react/toggle'
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import * as React from 'react'

import {
  type ControlSize,
  type ControlVariant,
  controlVariants,
} from '../lib/control-variants'
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
        '[&>button]:rounded-none [&>button:not(:first-of-type)]:-ml-px',
        '[&>button:first-of-type]:rounded-l-md [&>button:last-of-type]:rounded-r-md',
        // Vertical orientation adjustments
        orientation === 'vertical' &&
          '[&>button:not(:first-of-type)]:ml-0 [&>button:not(:first-of-type)]:-mt-px [&>button:first-of-type]:rounded-bl-none [&>button:last-of-type]:rounded-r-none [&>button:first-of-type]:rounded-t-md [&>button:last-of-type]:rounded-b-md',
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
  variant?: ControlVariant
  /** Size of the toggle item */
  size?: ControlSize
}

const ToggleGroupItem = ({
  className,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) => {
  return (
    <Toggle className={cn(controlVariants({ variant, size }), className)} {...props} />
  )
}

ToggleGroupItem.displayName = 'ToggleGroupItem'

// ============================================================================
// Exports
// ============================================================================

export { ToggleGroupRoot, ToggleGroupItem }

export type { ToggleGroupRootProps, ToggleGroupItemProps }
