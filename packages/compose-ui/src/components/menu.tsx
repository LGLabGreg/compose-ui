'use client'

import { Menu as BaseMenu } from '@base-ui/react/menu'
import * as React from 'react'

import { buttonVariants } from '../lib/button-variants'
import { cn } from '../lib/utils'

// ============================================================================
// MenuRoot
// ============================================================================

type MenuRootProps = React.ComponentProps<typeof BaseMenu.Root>

const MenuRoot = (props: MenuRootProps) => {
  return <BaseMenu.Root {...props} />
}

MenuRoot.displayName = 'MenuRoot'

// ============================================================================
// MenuTrigger
// ============================================================================

type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>

const MenuTrigger = ({ className, ...props }: MenuTriggerProps) => {
  return <BaseMenu.Trigger className={cn(className)} {...props} />
}

MenuTrigger.displayName = 'MenuTrigger'

// ============================================================================
// MenuPortal
// ============================================================================

type MenuPortalProps = React.ComponentProps<typeof BaseMenu.Portal>

const MenuPortal = (props: MenuPortalProps) => {
  return <BaseMenu.Portal {...props} />
}

MenuPortal.displayName = 'MenuPortal'

// ============================================================================
// MenuPositioner
// ============================================================================

type MenuPositionerProps = React.ComponentProps<typeof BaseMenu.Positioner>

const MenuPositioner = ({ className, ...props }: MenuPositionerProps) => {
  return (
    <BaseMenu.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={8}
      {...props}
    />
  )
}

MenuPositioner.displayName = 'MenuPositioner'

// ============================================================================
// MenuPopup
// ============================================================================

type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Popup>

const MenuPopup = ({ className, ...props }: MenuPopupProps) => {
  return (
    <BaseMenu.Popup
      className={cn(
        'rounded-md bg-background p-1 text-foreground shadow-sm shadow-gray-200 border border-border transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-0 data-starting-style:opacity-0 dark:shadow-none',
        'min-w-[8rem]',
        className,
      )}
      {...props}
    />
  )
}

MenuPopup.displayName = 'MenuPopup'

// ============================================================================
// MenuArrow
// ============================================================================

type MenuArrowProps = React.ComponentProps<typeof BaseMenu.Arrow>

const MenuArrow = ({ className, ...props }: MenuArrowProps) => {
  return (
    <BaseMenu.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BaseMenu.Arrow>
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

MenuArrow.displayName = 'MenuArrow'

// ============================================================================
// MenuItem
// ============================================================================

type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item>

const MenuItem = ({ className, ...props }: MenuItemProps) => {
  return (
    <BaseMenu.Item
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-start',
        className,
      )}
      {...props}
    />
  )
}

MenuItem.displayName = 'MenuItem'

// ============================================================================
// MenuSeparator
// ============================================================================

type MenuSeparatorProps = React.ComponentProps<typeof BaseMenu.Separator>

const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
  return (
    <BaseMenu.Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

MenuSeparator.displayName = 'MenuSeparator'

// ============================================================================
// MenuGroup
// ============================================================================

type MenuGroupProps = React.ComponentProps<typeof BaseMenu.Group>

const MenuGroup = ({ className, ...props }: MenuGroupProps) => {
  return <BaseMenu.Group className={cn(className)} {...props} />
}

MenuGroup.displayName = 'MenuGroup'

// ============================================================================
// MenuGroupLabel
// ============================================================================

type MenuGroupLabelProps = React.ComponentProps<typeof BaseMenu.GroupLabel>

const MenuGroupLabel = ({ className, ...props }: MenuGroupLabelProps) => {
  return (
    <BaseMenu.GroupLabel
      className={cn('px-3 py-1.5 text-sm font-semibold', className)}
      {...props}
    />
  )
}

MenuGroupLabel.displayName = 'MenuGroupLabel'

// ============================================================================
// MenuRadioGroup
// ============================================================================

type MenuRadioGroupProps = React.ComponentProps<typeof BaseMenu.RadioGroup>

const MenuRadioGroup = ({ className, ...props }: MenuRadioGroupProps) => {
  return <BaseMenu.RadioGroup className={cn(className)} {...props} />
}

MenuRadioGroup.displayName = 'MenuRadioGroup'

// ============================================================================
// MenuRadioItem
// ============================================================================

type MenuRadioItemProps = React.ComponentProps<typeof BaseMenu.RadioItem>

const MenuRadioItem = ({ className, ...props }: MenuRadioItemProps) => {
  return (
    <BaseMenu.RadioItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

MenuRadioItem.displayName = 'MenuRadioItem'

// ============================================================================
// MenuCheckboxItem
// ============================================================================

type MenuCheckboxItemProps = React.ComponentProps<typeof BaseMenu.CheckboxItem>

const MenuCheckboxItem = ({ className, ...props }: MenuCheckboxItemProps) => {
  return (
    <BaseMenu.CheckboxItem
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'grid grid-cols-[0.75rem_1fr] gap-2',
        className,
      )}
      {...props}
    />
  )
}

MenuCheckboxItem.displayName = 'MenuCheckboxItem'

// ============================================================================
// MenuRadioItemIndicator
// ============================================================================

type MenuRadioItemIndicatorProps = React.ComponentProps<
  typeof BaseMenu.RadioItemIndicator
>

const MenuRadioItemIndicator = ({ className, ...props }: MenuRadioItemIndicatorProps) => {
  return (
    <BaseMenu.RadioItemIndicator className={cn('col-start-1', className)} {...props} />
  )
}

MenuRadioItemIndicator.displayName = 'MenuRadioItemIndicator'

// ============================================================================
// MenuCheckboxItemIndicator
// ============================================================================

type MenuCheckboxItemIndicatorProps = React.ComponentProps<
  typeof BaseMenu.CheckboxItemIndicator
>

const MenuCheckboxItemIndicator = ({
  className,
  ...props
}: MenuCheckboxItemIndicatorProps) => {
  return (
    <BaseMenu.CheckboxItemIndicator className={cn('col-start-1', className)} {...props} />
  )
}

MenuCheckboxItemIndicator.displayName = 'MenuCheckboxItemIndicator'

// ============================================================================
// MenuCheckboxItemLabel
// ============================================================================

type MenuCheckboxItemLabelProps = React.ComponentProps<'span'>

const MenuCheckboxItemLabel = ({ className, ...props }: MenuCheckboxItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

MenuCheckboxItemLabel.displayName = 'MenuCheckboxItemLabel'

// ============================================================================
// MenuRadioItemLabel
// ============================================================================

type MenuRadioItemLabelProps = React.ComponentProps<'span'>

const MenuRadioItemLabel = ({ className, ...props }: MenuRadioItemLabelProps) => {
  return <span className={cn('col-start-2', className)} {...props} />
}

MenuRadioItemLabel.displayName = 'MenuRadioItemLabel'

// ============================================================================
// MenuSubmenuTrigger
// ============================================================================

type MenuSubmenuTriggerProps = React.ComponentProps<typeof BaseMenu.SubmenuTrigger>

const MenuSubmenuTrigger = ({ className, ...props }: MenuSubmenuTriggerProps) => {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'flex justify-start',
        className,
      )}
      {...props}
    />
  )
}

MenuSubmenuTrigger.displayName = 'MenuSubmenuTrigger'

// ============================================================================
// MenuSubmenuRoot
// ============================================================================

type MenuSubmenuRootProps = React.ComponentProps<typeof BaseMenu.SubmenuRoot>

const MenuSubmenuRoot = (props: MenuSubmenuRootProps) => {
  return <BaseMenu.SubmenuRoot {...props} />
}

MenuSubmenuRoot.displayName = 'MenuSubmenuRoot'

// ============================================================================
// Exports
// ============================================================================

export {
  MenuRoot,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRadioItemLabel,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuCheckboxItemLabel,
  MenuSubmenuTrigger,
  MenuSubmenuRoot,
}

export type {
  MenuRootProps,
  MenuTriggerProps,
  MenuPortalProps,
  MenuPositionerProps,
  MenuPopupProps,
  MenuArrowProps,
  MenuItemProps,
  MenuSeparatorProps,
  MenuGroupProps,
  MenuGroupLabelProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuRadioItemIndicatorProps,
  MenuRadioItemLabelProps,
  MenuCheckboxItemProps,
  MenuCheckboxItemIndicatorProps,
  MenuCheckboxItemLabelProps,
  MenuSubmenuTriggerProps,
  MenuSubmenuRootProps,
}
