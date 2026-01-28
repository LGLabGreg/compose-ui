'use client'

import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar'
import * as React from 'react'

import {
  type ControlSize,
  type ControlVariant,
  controlVariants,
} from '../lib/control-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ToolbarRoot
// ============================================================================

type ToolbarRootProps = React.ComponentProps<typeof BaseToolbar.Root>

const ToolbarRoot = ({ className, ...props }: ToolbarRootProps) => {
  return (
    <BaseToolbar.Root
      className={cn(
        'flex items-center gap-1 flex-wrap rounded-md border border-border p-1',
        className,
      )}
      {...props}
    />
  )
}

ToolbarRoot.displayName = 'ToolbarRoot'

// ============================================================================
// ToolbarButton
// ============================================================================

type ToolbarButtonProps = React.ComponentProps<typeof BaseToolbar.Button> & {
  /** Visual style of the toolbar button */
  variant?: ControlVariant
  /** Size of the toolbar button */
  size?: ControlSize
}

const ToolbarButton = ({
  className,
  variant = 'ghost',
  size,
  ...props
}: ToolbarButtonProps) => {
  return (
    <BaseToolbar.Button
      className={cn(controlVariants({ variant, size }), className)}
      {...props}
    />
  )
}

ToolbarButton.displayName = 'ToolbarButton'

// ============================================================================
// ToolbarLink
// ============================================================================

type ToolbarLinkProps = React.ComponentProps<typeof BaseToolbar.Link>

const ToolbarLink = ({ className, ...props }: ToolbarLinkProps) => {
  return (
    <BaseToolbar.Link
      className={cn(
        'text-sm text-muted-foreground no-underline hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

ToolbarLink.displayName = 'ToolbarLink'

// ============================================================================
// ToolbarInput
// ============================================================================

type ToolbarInputProps = React.ComponentProps<typeof BaseToolbar.Input>

const ToolbarInput = ({ className, ...props }: ToolbarInputProps) => {
  return (
    <BaseToolbar.Input
      className={cn(
        'h-8 rounded-md border border-border bg-background px-2 text-sm outline-none',
        className,
      )}
      {...props}
    />
  )
}

ToolbarInput.displayName = 'ToolbarInput'

// ============================================================================
// ToolbarGroup
// ============================================================================

type ToolbarGroupProps = React.ComponentProps<typeof BaseToolbar.Group>

const ToolbarGroup = ({ className, ...props }: ToolbarGroupProps) => {
  return (
    <BaseToolbar.Group className={cn('flex items-center gap-1', className)} {...props} />
  )
}

ToolbarGroup.displayName = 'ToolbarGroup'

// ============================================================================
// ToolbarSeparator
// ============================================================================

type ToolbarSeparatorProps = React.ComponentProps<typeof BaseToolbar.Separator>

const ToolbarSeparator = ({ className, ...props }: ToolbarSeparatorProps) => {
  return (
    <BaseToolbar.Separator
      className={cn('mx-1 h-4 w-px shrink-0 bg-border', className)}
      {...props}
    />
  )
}

ToolbarSeparator.displayName = 'ToolbarSeparator'

// ============================================================================
// Exports
// ============================================================================

export {
  ToolbarRoot,
  ToolbarButton,
  ToolbarLink,
  ToolbarInput,
  ToolbarGroup,
  ToolbarSeparator,
}

export type {
  ToolbarRootProps,
  ToolbarButtonProps,
  ToolbarLinkProps,
  ToolbarInputProps,
  ToolbarGroupProps,
  ToolbarSeparatorProps,
}
