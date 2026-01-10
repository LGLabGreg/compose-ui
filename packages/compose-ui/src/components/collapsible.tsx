'use client'

import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// CollapsibleRoot
// ============================================================================

type CollapsibleRootProps = React.ComponentProps<typeof BaseCollapsible.Root>

const CollapsibleRoot = ({ className, ...props }: CollapsibleRootProps) => {
  return <BaseCollapsible.Root className={cn('w-full', className)} {...props} />
}

CollapsibleRoot.displayName = 'CollapsibleRoot'

// ============================================================================
// CollapsibleTrigger
// ============================================================================

type CollapsibleTriggerProps = React.ComponentProps<typeof BaseCollapsible.Trigger>

const CollapsibleTrigger = ({ className, ...props }: CollapsibleTriggerProps) => {
  return (
    <BaseCollapsible.Trigger
      className={cn('flex items-center justify-between font-medium', className)}
      {...props}
    />
  )
}

CollapsibleTrigger.displayName = 'CollapsibleTrigger'

// ============================================================================
// CollapsiblePanel
// ============================================================================

type CollapsiblePanelProps = React.ComponentProps<typeof BaseCollapsible.Panel>

const CollapsiblePanel = ({ className, ...props }: CollapsiblePanelProps) => {
  return (
    <BaseCollapsible.Panel
      className={cn(
        '[&[hidden]:not([hidden="until-found"])]:hidden h-(--collapsible-panel-height)',
        'overflow-hidden duration-200 transition-all ease-out',
        'data-ending-style:h-0',
        'data-starting-style:h-0',
        className,
      )}
      {...props}
    />
  )
}

CollapsiblePanel.displayName = 'CollapsiblePanel'

// ============================================================================
// Exports
// ============================================================================

export { CollapsibleRoot, CollapsibleTrigger, CollapsiblePanel }

export type { CollapsibleRootProps, CollapsibleTriggerProps, CollapsiblePanelProps }
