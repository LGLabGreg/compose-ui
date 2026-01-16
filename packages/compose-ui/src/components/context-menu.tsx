'use client'

import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import { buttonVariants } from '../lib/button-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ContextMenuRoot
// ============================================================================

type ContextMenuRootProps = React.ComponentProps<typeof BaseContextMenu.Root>

const ContextMenuRoot = (props: ContextMenuRootProps) => {
  return <BaseContextMenu.Root {...props} />
}

ContextMenuRoot.displayName = 'ContextMenuRoot'

// ============================================================================
// ContextMenuTrigger
// ============================================================================

type ContextMenuTriggerProps = React.ComponentProps<typeof BaseContextMenu.Trigger>

const ContextMenuTrigger = ({ className, ...props }: ContextMenuTriggerProps) => {
  return <BaseContextMenu.Trigger className={cn(className)} {...props} />
}

ContextMenuTrigger.displayName = 'ContextMenuTrigger'

// ============================================================================
// ContextMenuPortal
// ============================================================================

type ContextMenuPortalProps = React.ComponentProps<typeof BaseContextMenu.Portal>

const ContextMenuPortal = (props: ContextMenuPortalProps) => {
  return <BaseContextMenu.Portal {...props} />
}

ContextMenuPortal.displayName = 'ContextMenuPortal'

// ============================================================================
// ContextMenuPositioner
// ============================================================================

type ContextMenuPositionerProps = React.ComponentProps<typeof BaseContextMenu.Positioner>

const ContextMenuPositioner = ({ className, ...props }: ContextMenuPositionerProps) => {
  return (
    <BaseContextMenu.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={3}
      {...props}
    />
  )
}

ContextMenuPositioner.displayName = 'ContextMenuPositioner'

// ============================================================================
// ContextMenuPopup
// ============================================================================

type ContextMenuPopupProps = React.ComponentProps<typeof BaseContextMenu.Popup>

const ContextMenuPopup = ({ className, ...props }: ContextMenuPopupProps) => {
  return (
    <BaseContextMenu.Popup
      className={cn(
        'rounded-md bg-background p-1 text-foreground shadow-sm border border-border transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-0 data-starting-style:opacity-0 dark:shadow-none',
        'min-w-[8rem]',
        className,
      )}
      {...props}
    />
  )
}

ContextMenuPopup.displayName = 'ContextMenuPopup'

// ============================================================================
// ContextMenuArrow
// ============================================================================

type ContextMenuArrowProps = React.ComponentProps<typeof BaseContextMenu.Arrow>

const ContextMenuArrow = ({ className, ...props }: ContextMenuArrowProps) => {
  return (
    <BaseContextMenu.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BaseContextMenu.Arrow>
  )
}

ContextMenuArrow.displayName = 'ContextMenuArrow'

// ============================================================================
// ContextMenuItem
// ============================================================================

type ContextMenuItemProps = React.ComponentProps<typeof BaseContextMenu.Item>

const ContextMenuItem = ({ className, ...props }: ContextMenuItemProps) => {
  return (
    <BaseContextMenu.Item
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-start',
        className,
      )}
      {...props}
    />
  )
}

ContextMenuItem.displayName = 'ContextMenuItem'

// ============================================================================
// ContextMenuSeparator
// ============================================================================

type ContextMenuSeparatorProps = React.ComponentProps<typeof BaseContextMenu.Separator>

const ContextMenuSeparator = ({ className, ...props }: ContextMenuSeparatorProps) => {
  return (
    <BaseContextMenu.Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

ContextMenuSeparator.displayName = 'ContextMenuSeparator'

// ============================================================================
// ContextMenuGroup
// ============================================================================

type ContextMenuGroupProps = React.ComponentProps<typeof BaseContextMenu.Group>

const ContextMenuGroup = ({ className, ...props }: ContextMenuGroupProps) => {
  return <BaseContextMenu.Group className={cn(className)} {...props} />
}

ContextMenuGroup.displayName = 'ContextMenuGroup'

// ============================================================================
// ContextMenuGroupLabel
// ============================================================================

type ContextMenuGroupLabelProps = React.ComponentProps<typeof BaseContextMenu.GroupLabel>

const ContextMenuGroupLabel = ({ className, ...props }: ContextMenuGroupLabelProps) => {
  return (
    <BaseContextMenu.GroupLabel
      className={cn('px-3 py-1.5 text-sm font-semibold', className)}
      {...props}
    />
  )
}

ContextMenuGroupLabel.displayName = 'ContextMenuGroupLabel'

// ============================================================================
// ContextMenuRadioGroup
// ============================================================================

type ContextMenuRadioGroupProps = React.ComponentProps<typeof BaseContextMenu.RadioGroup>

const ContextMenuRadioGroup = ({ className, ...props }: ContextMenuRadioGroupProps) => {
  return <BaseContextMenu.RadioGroup className={cn(className)} {...props} />
}

ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup'

// ============================================================================
// ContextMenuRadioItem
// ============================================================================

type ContextMenuRadioItemProps = React.ComponentProps<typeof BaseContextMenu.RadioItem>

const ContextMenuRadioItem = ({ className, ...props }: ContextMenuRadioItemProps) => {
  return (
    <BaseContextMenu.RadioItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'

// ============================================================================
// ContextMenuCheckboxItem
// ============================================================================

type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof BaseContextMenu.CheckboxItem
>

const ContextMenuCheckboxItem = ({
  className,
  ...props
}: ContextMenuCheckboxItemProps) => {
  return (
    <BaseContextMenu.CheckboxItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'

// ============================================================================
// ContextMenuRadioItemIndicator
// ============================================================================

type ContextMenuRadioItemIndicatorProps = React.ComponentProps<
  typeof BaseContextMenu.RadioItemIndicator
>

const ContextMenuRadioItemIndicator = ({
  className,
  ...props
}: ContextMenuRadioItemIndicatorProps) => {
  return (
    <BaseContextMenu.RadioItemIndicator
      className={cn('col-start-1', className)}
      {...props}
    />
  )
}

ContextMenuRadioItemIndicator.displayName = 'ContextMenuRadioItemIndicator'

// ============================================================================
// ContextMenuCheckboxItemIndicator
// ============================================================================

type ContextMenuCheckboxItemIndicatorProps = React.ComponentProps<
  typeof BaseContextMenu.CheckboxItemIndicator
>

const ContextMenuCheckboxItemIndicator = ({
  className,
  ...props
}: ContextMenuCheckboxItemIndicatorProps) => {
  return (
    <BaseContextMenu.CheckboxItemIndicator
      className={cn('col-start-1', className)}
      {...props}
    />
  )
}

ContextMenuCheckboxItemIndicator.displayName = 'ContextMenuCheckboxItemIndicator'

// ============================================================================
// ContextMenuCheckboxItemLabel
// ============================================================================

type ContextMenuCheckboxItemLabelProps = React.ComponentProps<'span'>

const ContextMenuCheckboxItemLabel = ({
  className,
  ...props
}: ContextMenuCheckboxItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

ContextMenuCheckboxItemLabel.displayName = 'ContextMenuCheckboxItemLabel'

// ============================================================================
// ContextMenuRadioItemLabel
// ============================================================================

type ContextMenuRadioItemLabelProps = React.ComponentProps<'span'>

const ContextMenuRadioItemLabel = ({
  className,
  ...props
}: ContextMenuRadioItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

ContextMenuRadioItemLabel.displayName = 'ContextMenuRadioItemLabel'

// ============================================================================
// ContextMenuSubmenuTrigger
// ============================================================================

type ContextMenuSubmenuTriggerProps = React.ComponentProps<
  typeof BaseContextMenu.SubmenuTrigger
>

const ContextMenuSubmenuTrigger = ({
  className,
  ...props
}: ContextMenuSubmenuTriggerProps) => {
  return (
    <BaseContextMenu.SubmenuTrigger
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-between',
        className,
      )}
      {...props}
    />
  )
}

ContextMenuSubmenuTrigger.displayName = 'ContextMenuSubmenuTrigger'

// ============================================================================
// ContextMenuSubmenuRoot
// ============================================================================

type ContextMenuSubmenuRootProps = React.ComponentProps<
  typeof BaseContextMenu.SubmenuRoot
>

const ContextMenuSubmenuRoot = (props: ContextMenuSubmenuRootProps) => {
  return <BaseContextMenu.SubmenuRoot {...props} />
}

ContextMenuSubmenuRoot.displayName = 'ContextMenuSubmenuRoot'

// ============================================================================
// Exports
// ============================================================================

export {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuArrow,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuRadioItemLabel,
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuCheckboxItemLabel,
  ContextMenuSubmenuTrigger,
  ContextMenuSubmenuRoot,
}

export type {
  ContextMenuRootProps,
  ContextMenuTriggerProps,
  ContextMenuPortalProps,
  ContextMenuPositionerProps,
  ContextMenuPopupProps,
  ContextMenuArrowProps,
  ContextMenuItemProps,
  ContextMenuSeparatorProps,
  ContextMenuGroupProps,
  ContextMenuGroupLabelProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuRadioItemIndicatorProps,
  ContextMenuRadioItemLabelProps,
  ContextMenuCheckboxItemProps,
  ContextMenuCheckboxItemIndicatorProps,
  ContextMenuCheckboxItemLabelProps,
  ContextMenuSubmenuTriggerProps,
  ContextMenuSubmenuRootProps,
}
