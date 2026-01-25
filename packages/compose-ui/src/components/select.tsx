'use client'

import {
  Select as BaseSelect,
  type SelectRootProps as BaseSelectRootProps,
} from '@base-ui/react/select'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import { cn } from '../lib/utils'

// ============================================================================
// SelectRoot
// ============================================================================

function SelectRoot<Value, Multiple extends boolean | undefined = false>(
  props: BaseSelectRootProps<Value, Multiple>,
) {
  return <BaseSelect.Root {...props} />
}

type SelectRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> = BaseSelectRootProps<Value, Multiple>

SelectRoot.displayName = 'SelectRoot'

// ============================================================================
// SelectTrigger
// ============================================================================

type SelectTriggerProps = React.ComponentProps<typeof BaseSelect.Trigger>

const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
  return (
    <BaseSelect.Trigger
      className={cn(
        'flex min-h-9 min-w-40 items-center justify-between gap-3 rounded-md border border-border bg-background px-3.5 pr-3 text-base text-foreground shadow-xs select-none hover:bg-muted data-popup-open:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

SelectTrigger.displayName = 'SelectTrigger'

// ============================================================================
// SelectValue
// ============================================================================

type SelectValueProps = React.ComponentProps<typeof BaseSelect.Value>

const SelectValue = ({ className, ...props }: SelectValueProps) => {
  return (
    <BaseSelect.Value
      className={cn('data-placeholder:text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

SelectValue.displayName = 'SelectValue'

// ============================================================================
// SelectIcon
// ============================================================================

type SelectIconProps = React.ComponentProps<typeof BaseSelect.Icon>

const SelectIcon = ({ className, ...props }: SelectIconProps) => {
  return <BaseSelect.Icon className={cn('flex', className)} {...props} />
}

SelectIcon.displayName = 'SelectIcon'

// ============================================================================
// SelectBackdrop
// ============================================================================

type SelectBackdropProps = React.ComponentProps<typeof BaseSelect.Backdrop>

const SelectBackdrop = ({ className, ...props }: SelectBackdropProps) => {
  return (
    <BaseSelect.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
        'transition-opacity duration-200',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

SelectBackdrop.displayName = 'SelectBackdrop'

// ============================================================================
// SelectPortal
// ============================================================================

type SelectPortalProps = React.ComponentProps<typeof BaseSelect.Portal>

const SelectPortal = (props: SelectPortalProps) => {
  return <BaseSelect.Portal {...props} />
}

SelectPortal.displayName = 'SelectPortal'

// ============================================================================
// SelectPositioner
// ============================================================================

type SelectPositionerProps = React.ComponentProps<typeof BaseSelect.Positioner>

const SelectPositioner = ({ className, ...props }: SelectPositionerProps) => {
  return (
    <BaseSelect.Positioner
      className={cn('outline-none select-none z-50', className)}
      sideOffset={8}
      {...props}
    />
  )
}

SelectPositioner.displayName = 'SelectPositioner'

// ============================================================================
// SelectPopup
// ============================================================================

type SelectPopupProps = React.ComponentProps<typeof BaseSelect.Popup>

const SelectPopup = ({ className, ...props }: SelectPopupProps) => {
  return (
    <BaseSelect.Popup
      className={cn(
        'group min-w-(--anchor-width) origin-(--transform-origin) bg-clip-padding rounded-md bg-background text-foreground shadow-lg shadow-gray-200 border border-border transition-[transform,scale,opacity]',
        'data-ending-style:scale-90 data-ending-style:opacity-0',
        'data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-ending-style:transition-none',
        'data-starting-style:scale-90 data-starting-style:opacity-0',
        'data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none',
        'dark:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

SelectPopup.displayName = 'SelectPopup'

// ============================================================================
// SelectList
// ============================================================================

type SelectListProps = React.ComponentProps<typeof BaseSelect.List>

const SelectList = ({ className, ...props }: SelectListProps) => {
  return (
    <BaseSelect.List
      className={cn(
        'relative py-1 scroll-py-6 overflow-y-auto max-h-(--available-height)',
        className,
      )}
      {...props}
    />
  )
}

SelectList.displayName = 'SelectList'

// ============================================================================
// SelectArrow
// ============================================================================

type SelectArrowProps = React.ComponentProps<typeof BaseSelect.Arrow>

const SelectArrow = ({ className, ...props }: SelectArrowProps) => {
  return (
    <BaseSelect.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BaseSelect.Arrow>
  )
}

SelectArrow.displayName = 'SelectArrow'

// ============================================================================
// SelectItem
// ============================================================================

type SelectItemProps = React.ComponentProps<typeof BaseSelect.Item>

const SelectItem = ({ className, ...props }: SelectItemProps) => {
  return (
    <BaseSelect.Item
      className={cn(
        'flex items-center justify-between gap-2 py-1.5 px-4 text-sm outline-none select-none',
        'data-selected:bg-accent data-selected:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

SelectItem.displayName = 'SelectItem'

// ============================================================================
// SelectItemText
// ============================================================================

type SelectItemTextProps = React.ComponentProps<typeof BaseSelect.ItemText>

const SelectItemText = ({ className, ...props }: SelectItemTextProps) => {
  return (
    <BaseSelect.ItemText className={cn('col-start-2 text-sm', className)} {...props} />
  )
}

SelectItemText.displayName = 'SelectItemText'

// ============================================================================
// SelectItemIndicator
// ============================================================================

type SelectItemIndicatorProps = React.ComponentProps<typeof BaseSelect.ItemIndicator>

const SelectItemIndicator = ({ className, ...props }: SelectItemIndicatorProps) => {
  return <BaseSelect.ItemIndicator className={cn('col-start-1', className)} {...props} />
}

SelectItemIndicator.displayName = 'SelectItemIndicator'

// ============================================================================
// SelectGroup
// ============================================================================

type SelectGroupProps = React.ComponentProps<typeof BaseSelect.Group>

const SelectGroup = ({ className, ...props }: SelectGroupProps) => {
  return <BaseSelect.Group className={cn(className)} {...props} />
}

SelectGroup.displayName = 'SelectGroup'

// ============================================================================
// SelectGroupLabel
// ============================================================================

type SelectGroupLabelProps = React.ComponentProps<typeof BaseSelect.GroupLabel>

const SelectGroupLabel = ({ className, ...props }: SelectGroupLabelProps) => {
  return (
    <BaseSelect.GroupLabel
      className={cn('px-3 py-1.5 text-sm font-semibold', className)}
      {...props}
    />
  )
}

SelectGroupLabel.displayName = 'SelectGroupLabel'

// ============================================================================
// SelectScrollUpArrow
// ============================================================================

type SelectScrollUpArrowProps = React.ComponentProps<typeof BaseSelect.ScrollUpArrow>

const SelectScrollUpArrow = ({ className, ...props }: SelectScrollUpArrowProps) => {
  return (
    <BaseSelect.ScrollUpArrow
      className={cn(
        'top-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-background text-center text-xs before:absolute data-[side=none]:before:-top-full before:left-0 before:h-full before:w-full before:content-[""]',
        className,
      )}
      {...props}
    />
  )
}

SelectScrollUpArrow.displayName = 'SelectScrollUpArrow'

// ============================================================================
// SelectScrollDownArrow
// ============================================================================

type SelectScrollDownArrowProps = React.ComponentProps<typeof BaseSelect.ScrollDownArrow>

const SelectScrollDownArrow = ({ className, ...props }: SelectScrollDownArrowProps) => {
  return (
    <BaseSelect.ScrollDownArrow
      className={cn(
        'bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-background text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[""] bottom-0 data-[side=none]:before:-bottom-full',
        className,
      )}
      {...props}
    />
  )
}

SelectScrollDownArrow.displayName = 'SelectScrollDownArrow'

// ============================================================================
// SelectSeparator
// ============================================================================

type SelectSeparatorProps = React.ComponentProps<typeof BaseSelect.Separator>

const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  return (
    <BaseSelect.Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

SelectSeparator.displayName = 'SelectSeparator'

// ============================================================================
// Exports
// ============================================================================

export {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectBackdrop,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectList,
  SelectArrow,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectGroupLabel,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
  SelectSeparator,
}

export type {
  SelectRootProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectIconProps,
  SelectBackdropProps,
  SelectPortalProps,
  SelectPositionerProps,
  SelectPopupProps,
  SelectListProps,
  SelectArrowProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectItemIndicatorProps,
  SelectGroupProps,
  SelectGroupLabelProps,
  SelectScrollUpArrowProps,
  SelectScrollDownArrowProps,
  SelectSeparatorProps,
}
