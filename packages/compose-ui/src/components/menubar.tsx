'use client'

import { Menu } from '@base-ui/react/menu'
import { Menubar as BaseMenubar } from '@base-ui/react/menubar'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import { buttonVariants } from '../lib/button-variants'
import {
  type ControlSize,
  type ControlVariant,
  controlVariants,
} from '../lib/control-variants'
import { cn } from '../lib/utils'

// ============================================================================
// MenubarRoot
// ============================================================================

type MenubarRootProps = React.ComponentProps<typeof BaseMenubar>

const MenubarRoot = ({ className, ...props }: MenubarRootProps) => {
  return (
    <BaseMenubar
      className={cn(
        'inline-flex',
        // Connected items: collapse borders, round only outer corners
        '[&>button]:rounded-none [&>button:not(:first-of-type)]:-ml-px',
        '[&>button:first-of-type]:rounded-l-md [&>button:last-of-type]:rounded-r-md',
        className,
      )}
      {...props}
    />
  )
}

MenubarRoot.displayName = 'MenubarRoot'

// ============================================================================
// MenubarMenu
// ============================================================================

type MenubarMenuProps = React.ComponentProps<typeof Menu.Root>

const MenubarMenu = (props: MenubarMenuProps) => {
  return <Menu.Root {...props} />
}

MenubarMenu.displayName = 'MenubarMenu'

// ============================================================================
// MenubarTrigger
// ============================================================================

type MenubarTriggerProps = React.ComponentProps<typeof Menu.Trigger> & {
  /** Visual style of the trigger */
  variant?: ControlVariant
  /** Size of the trigger */
  size?: ControlSize
}

const MenubarTrigger = ({ className, variant, size, ...props }: MenubarTriggerProps) => {
  return (
    <Menu.Trigger
      className={cn(controlVariants({ variant, size }), className)}
      {...props}
    />
  )
}

MenubarTrigger.displayName = 'MenubarTrigger'

// ============================================================================
// MenubarPortal
// ============================================================================

type MenubarPortalProps = React.ComponentProps<typeof Menu.Portal>

const MenubarPortal = (props: MenubarPortalProps) => {
  return <Menu.Portal {...props} />
}

MenubarPortal.displayName = 'MenubarPortal'

// ============================================================================
// MenubarPositioner
// ============================================================================

type MenubarPositionerProps = React.ComponentProps<typeof Menu.Positioner>

const MenubarPositioner = ({ className, ...props }: MenubarPositionerProps) => {
  return (
    <Menu.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={8}
      {...props}
    />
  )
}

MenubarPositioner.displayName = 'MenubarPositioner'

// ============================================================================
// MenubarPopup
// ============================================================================

type MenubarPopupProps = React.ComponentProps<typeof Menu.Popup>

const MenubarPopup = ({ className, ...props }: MenubarPopupProps) => {
  return (
    <Menu.Popup
      className={cn(
        'rounded-md bg-background p-1 text-foreground shadow-sm border border-border transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-0 data-starting-style:opacity-0 dark:shadow-none',
        'min-w-[8rem]',
        className,
      )}
      {...props}
    />
  )
}

MenubarPopup.displayName = 'MenubarPopup'

// ============================================================================
// MenubarArrow
// ============================================================================

type MenubarArrowProps = React.ComponentProps<typeof Menu.Arrow>

const MenubarArrow = ({ className, ...props }: MenubarArrowProps) => {
  return (
    <Menu.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </Menu.Arrow>
  )
}

MenubarArrow.displayName = 'MenubarArrow'

// ============================================================================
// MenubarItem
// ============================================================================

type MenubarItemProps = React.ComponentProps<typeof Menu.Item>

const MenubarItem = ({ className, ...props }: MenubarItemProps) => {
  return (
    <Menu.Item
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-start',
        className,
      )}
      {...props}
    />
  )
}

MenubarItem.displayName = 'MenubarItem'

// ============================================================================
// MenubarSeparator
// ============================================================================

type MenubarSeparatorProps = React.ComponentProps<typeof Menu.Separator>

const MenubarSeparator = ({ className, ...props }: MenubarSeparatorProps) => {
  return (
    <Menu.Separator className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
  )
}

MenubarSeparator.displayName = 'MenubarSeparator'

// ============================================================================
// MenubarGroup
// ============================================================================

type MenubarGroupProps = React.ComponentProps<typeof Menu.Group>

const MenubarGroup = ({ className, ...props }: MenubarGroupProps) => {
  return <Menu.Group className={cn(className)} {...props} />
}

MenubarGroup.displayName = 'MenubarGroup'

// ============================================================================
// MenubarGroupLabel
// ============================================================================

type MenubarGroupLabelProps = React.ComponentProps<typeof Menu.GroupLabel>

const MenubarGroupLabel = ({ className, ...props }: MenubarGroupLabelProps) => {
  return (
    <Menu.GroupLabel
      className={cn('px-3 py-1.5 text-sm font-semibold', className)}
      {...props}
    />
  )
}

MenubarGroupLabel.displayName = 'MenubarGroupLabel'

// ============================================================================
// MenubarRadioGroup
// ============================================================================

type MenubarRadioGroupProps = React.ComponentProps<typeof Menu.RadioGroup>

const MenubarRadioGroup = ({ className, ...props }: MenubarRadioGroupProps) => {
  return <Menu.RadioGroup className={cn(className)} {...props} />
}

MenubarRadioGroup.displayName = 'MenubarRadioGroup'

// ============================================================================
// MenubarRadioItem
// ============================================================================

type MenubarRadioItemProps = React.ComponentProps<typeof Menu.RadioItem>

const MenubarRadioItem = ({ className, ...props }: MenubarRadioItemProps) => {
  return (
    <Menu.RadioItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

MenubarRadioItem.displayName = 'MenubarRadioItem'

// ============================================================================
// MenubarCheckboxItem
// ============================================================================

type MenubarCheckboxItemProps = React.ComponentProps<typeof Menu.CheckboxItem>

const MenubarCheckboxItem = ({ className, ...props }: MenubarCheckboxItemProps) => {
  return (
    <Menu.CheckboxItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

MenubarCheckboxItem.displayName = 'MenubarCheckboxItem'

// ============================================================================
// MenubarRadioItemIndicator
// ============================================================================

type MenubarRadioItemIndicatorProps = React.ComponentProps<typeof Menu.RadioItemIndicator>

const MenubarRadioItemIndicator = ({
  className,
  ...props
}: MenubarRadioItemIndicatorProps) => {
  return <Menu.RadioItemIndicator className={cn('col-start-1', className)} {...props} />
}

MenubarRadioItemIndicator.displayName = 'MenubarRadioItemIndicator'

// ============================================================================
// MenubarCheckboxItemIndicator
// ============================================================================

type MenubarCheckboxItemIndicatorProps = React.ComponentProps<
  typeof Menu.CheckboxItemIndicator
>

const MenubarCheckboxItemIndicator = ({
  className,
  ...props
}: MenubarCheckboxItemIndicatorProps) => {
  return (
    <Menu.CheckboxItemIndicator className={cn('col-start-1', className)} {...props} />
  )
}

MenubarCheckboxItemIndicator.displayName = 'MenubarCheckboxItemIndicator'

// ============================================================================
// MenubarCheckboxItemLabel
// ============================================================================

type MenubarCheckboxItemLabelProps = React.ComponentProps<'span'>

const MenubarCheckboxItemLabel = ({
  className,
  ...props
}: MenubarCheckboxItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

MenubarCheckboxItemLabel.displayName = 'MenubarCheckboxItemLabel'

// ============================================================================
// MenubarRadioItemLabel
// ============================================================================

type MenubarRadioItemLabelProps = React.ComponentProps<'span'>

const MenubarRadioItemLabel = ({ className, ...props }: MenubarRadioItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

MenubarRadioItemLabel.displayName = 'MenubarRadioItemLabel'

// ============================================================================
// MenubarSubmenuTrigger
// ============================================================================

type MenubarSubmenuTriggerProps = React.ComponentProps<typeof Menu.SubmenuTrigger>

const MenubarSubmenuTrigger = ({ className, ...props }: MenubarSubmenuTriggerProps) => {
  return (
    <Menu.SubmenuTrigger
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-between',
        className,
      )}
      {...props}
    />
  )
}

MenubarSubmenuTrigger.displayName = 'MenubarSubmenuTrigger'

// ============================================================================
// MenubarSubmenuRoot
// ============================================================================

type MenubarSubmenuRootProps = React.ComponentProps<typeof Menu.SubmenuRoot>

const MenubarSubmenuRoot = (props: MenubarSubmenuRootProps) => {
  return <Menu.SubmenuRoot {...props} />
}

MenubarSubmenuRoot.displayName = 'MenubarSubmenuRoot'

// ============================================================================
// Exports
// ============================================================================

export {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarPositioner,
  MenubarPopup,
  MenubarArrow,
  MenubarItem,
  MenubarSeparator,
  MenubarGroup,
  MenubarGroupLabel,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRadioItemIndicator,
  MenubarRadioItemLabel,
  MenubarCheckboxItem,
  MenubarCheckboxItemIndicator,
  MenubarCheckboxItemLabel,
  MenubarSubmenuTrigger,
  MenubarSubmenuRoot,
}

export type {
  MenubarRootProps,
  MenubarMenuProps,
  MenubarTriggerProps,
  MenubarPortalProps,
  MenubarPositionerProps,
  MenubarPopupProps,
  MenubarArrowProps,
  MenubarItemProps,
  MenubarSeparatorProps,
  MenubarGroupProps,
  MenubarGroupLabelProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarRadioItemIndicatorProps,
  MenubarRadioItemLabelProps,
  MenubarCheckboxItemProps,
  MenubarCheckboxItemIndicatorProps,
  MenubarCheckboxItemLabelProps,
  MenubarSubmenuTriggerProps,
  MenubarSubmenuRootProps,
}
