'use client'

import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import * as React from 'react'

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

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-background'
      />
      <path
        d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
        className='fill-border'
      />
    </svg>
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
