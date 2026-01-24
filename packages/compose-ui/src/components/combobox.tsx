'use client'

import {
  Combobox as BaseCombobox,
  type ComboboxRootProps as BaseComboboxRootProps,
} from '@base-ui/react/combobox'
import * as React from 'react'

import { inputBaseStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ComboboxRoot
// ============================================================================

function ComboboxRoot<Value, Multiple extends boolean | undefined = false>(
  props: BaseComboboxRootProps<Value, Multiple>,
) {
  return <BaseCombobox.Root {...props} />
}

type ComboboxRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> = BaseComboboxRootProps<Value, Multiple>

ComboboxRoot.displayName = 'ComboboxRoot'

// ============================================================================
// ComboboxValue
// ============================================================================

type ComboboxValueProps = React.ComponentProps<typeof BaseCombobox.Value>

const ComboboxValue = (props: ComboboxValueProps) => {
  return <BaseCombobox.Value {...props} />
}

ComboboxValue.displayName = 'ComboboxValue'

// ============================================================================
// ComboboxIcon
// ============================================================================

type ComboboxIconProps = React.ComponentProps<typeof BaseCombobox.Icon>

const ComboboxIcon = ({ className, ...props }: ComboboxIconProps) => {
  return <BaseCombobox.Icon className={cn('flex', className)} {...props} />
}

ComboboxIcon.displayName = 'ComboboxIcon'

// ============================================================================
// ComboboxInput
// ============================================================================

type ComboboxInputProps = React.ComponentProps<typeof BaseCombobox.Input>

const ComboboxInput = ({ className, ...props }: ComboboxInputProps) => {
  return (
    <BaseCombobox.Input
      className={cn(
        inputBaseStyles,
        'shrink-0',
        'group-[&]/control:w-auto group-[&]/control:flex-1 group-[&]/control:border-0 group-[&]/control:bg-transparent',
        'group-[&]/chips:w-auto group-[&]/chips:min-w-12 group-[&]/chips:flex-1 group-[&]/chips:border-0 group-[&]/chips:bg-transparent group-[&]/chips:h-7',
        className,
      )}
      {...props}
    />
  )
}

ComboboxInput.displayName = 'ComboboxInput'

// ============================================================================
// ComboboxControl
// ============================================================================

type ComboboxControlProps = React.ComponentProps<'div'>

const ComboboxControl = ({ className, ...props }: ComboboxControlProps) => {
  return (
    <div
      className={cn(
        inputBaseStyles,
        'group/control flex items-center p-0 pr-1',
        className,
      )}
      {...props}
    />
  )
}

ComboboxControl.displayName = 'ComboboxControl'

// ============================================================================
// ComboboxClear
// ============================================================================

type ComboboxClearProps = React.ComponentProps<typeof BaseCombobox.Clear>

const ComboboxClear = ({ className, ...props }: ComboboxClearProps) => {
  return (
    <BaseCombobox.Clear
      className={cn(
        'flex h-9 w-6 items-center justify-center rounded bg-transparent p-0 text-muted-foreground hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

ComboboxClear.displayName = 'ComboboxClear'

// ============================================================================
// ComboboxTrigger
// ============================================================================

type ComboboxTriggerProps = React.ComponentProps<typeof BaseCombobox.Trigger>

const ComboboxTrigger = ({ className, ...props }: ComboboxTriggerProps) => {
  return (
    <BaseCombobox.Trigger
      className={cn(
        'flex h-9 w-fit min-w-6 items-center justify-center rounded bg-transparent p-0 text-muted-foreground hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

ComboboxTrigger.displayName = 'ComboboxTrigger'

// ============================================================================
// ComboboxBackdrop
// ============================================================================

type ComboboxBackdropProps = React.ComponentProps<typeof BaseCombobox.Backdrop>

const ComboboxBackdrop = ({ className, ...props }: ComboboxBackdropProps) => {
  return (
    <BaseCombobox.Backdrop
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

ComboboxBackdrop.displayName = 'ComboboxBackdrop'

// ============================================================================
// ComboboxPortal
// ============================================================================

type ComboboxPortalProps = React.ComponentProps<typeof BaseCombobox.Portal>

const ComboboxPortal = (props: ComboboxPortalProps) => {
  return <BaseCombobox.Portal {...props} />
}

ComboboxPortal.displayName = 'ComboboxPortal'

// ============================================================================
// ComboboxPositioner
// ============================================================================

type ComboboxPositionerProps = React.ComponentProps<typeof BaseCombobox.Positioner>

const ComboboxPositioner = ({ className, ...props }: ComboboxPositionerProps) => {
  return (
    <BaseCombobox.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={4}
      {...props}
    />
  )
}

ComboboxPositioner.displayName = 'ComboboxPositioner'

// ============================================================================
// ComboboxPopup
// ============================================================================

type ComboboxPopupProps = React.ComponentProps<typeof BaseCombobox.Popup>

const ComboboxPopup = ({ className, ...props }: ComboboxPopupProps) => {
  return (
    <BaseCombobox.Popup
      className={cn(
        'group flex flex-col min-w-(--anchor-width) max-h-[min(23rem,var(--available-height))] max-w-(--available-width) origin-(--transform-origin) rounded-md bg-background text-foreground shadow-lg shadow-gray-200 border border-border transition-[transform,scale,opacity] duration-100',
        'data-ending-style:scale-95 data-ending-style:opacity-0',
        'data-starting-style:scale-95 data-starting-style:opacity-0',
        'dark:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

ComboboxPopup.displayName = 'ComboboxPopup'

// ============================================================================
// ComboboxList
// ============================================================================

type ComboboxListProps = React.ComponentProps<typeof BaseCombobox.List>

const ComboboxList = ({ className, ...props }: ComboboxListProps) => {
  return (
    <BaseCombobox.List
      className={cn(
        'outline-0 overflow-y-auto scroll-py-2 overscroll-contain flex-1 min-h-0 data-empty:p-0',
        className,
      )}
      {...props}
    />
  )
}

ComboboxList.displayName = 'ComboboxList'

// ============================================================================
// ComboboxEmpty
// ============================================================================

type ComboboxEmptyProps = React.ComponentProps<typeof BaseCombobox.Empty>

const ComboboxEmpty = ({ className, ...props }: ComboboxEmptyProps) => {
  return (
    <BaseCombobox.Empty
      className={cn(
        'shrink-0 p-4 text-sm leading-4 text-muted-foreground empty:m-0 empty:p-0',
        className,
      )}
      {...props}
    />
  )
}

ComboboxEmpty.displayName = 'ComboboxEmpty'

// ============================================================================
// ComboboxItem
// ============================================================================

type ComboboxItemProps = React.ComponentProps<typeof BaseCombobox.Item>

const ComboboxItem = ({ className, ...props }: ComboboxItemProps) => {
  return (
    <BaseCombobox.Item
      className={cn(
        'flex items-center justify-between gap-2 py-2 px-4 text-sm leading-4 outline-none select-none',
        'data-selected:bg-accent data-selected:text-accent-foreground',
        'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

ComboboxItem.displayName = 'ComboboxItem'

// ============================================================================
// ComboboxItemText
// ============================================================================

type ComboboxItemTextProps = React.ComponentProps<'span'>

const ComboboxItemText = ({ className, ...props }: ComboboxItemTextProps) => {
  return <span className={className} {...props} />
}

ComboboxItemText.displayName = 'ComboboxItemText'

// ============================================================================
// ComboboxItemIndicator
// ============================================================================

type ComboboxItemIndicatorProps = React.ComponentProps<typeof BaseCombobox.ItemIndicator>

const ComboboxItemIndicator = ({ className, ...props }: ComboboxItemIndicatorProps) => {
  return <BaseCombobox.ItemIndicator className={className} {...props} />
}

ComboboxItemIndicator.displayName = 'ComboboxItemIndicator'

// ============================================================================
// ComboboxGroup
// ============================================================================

type ComboboxGroupProps = React.ComponentProps<typeof BaseCombobox.Group>

const ComboboxGroup = ({ className, ...props }: ComboboxGroupProps) => {
  return <BaseCombobox.Group className={className} {...props} />
}

ComboboxGroup.displayName = 'ComboboxGroup'

// ============================================================================
// ComboboxGroupLabel
// ============================================================================

type ComboboxGroupLabelProps = React.ComponentProps<typeof BaseCombobox.GroupLabel>

const ComboboxGroupLabel = ({ className, ...props }: ComboboxGroupLabelProps) => {
  return (
    <BaseCombobox.GroupLabel
      className={cn(
        'px-4 py-1.5 text-sm font-semibold sticky top-0 z-1 bg-background',
        className,
      )}
      {...props}
    />
  )
}

ComboboxGroupLabel.displayName = 'ComboboxGroupLabel'

// ============================================================================
// ComboboxCollection
// ============================================================================

type ComboboxCollectionProps = React.ComponentProps<typeof BaseCombobox.Collection>

const ComboboxCollection = (props: ComboboxCollectionProps) => {
  return <BaseCombobox.Collection {...props} />
}

ComboboxCollection.displayName = 'ComboboxCollection'

// ============================================================================
// ComboboxSeparator
// ============================================================================

type ComboboxSeparatorProps = React.ComponentProps<typeof BaseCombobox.Separator>

const ComboboxSeparator = ({ className, ...props }: ComboboxSeparatorProps) => {
  return (
    <BaseCombobox.Separator
      className={cn('my-1 border-t border-border', className)}
      {...props}
    />
  )
}

ComboboxSeparator.displayName = 'ComboboxSeparator'

// ============================================================================
// ComboboxStatus
// ============================================================================

type ComboboxStatusProps = React.ComponentProps<typeof BaseCombobox.Status>

const ComboboxStatus = ({ className, ...props }: ComboboxStatusProps) => {
  return (
    <BaseCombobox.Status
      className={cn(
        'flex items-center gap-2 py-1 px-4 text-sm text-muted-foreground empty:hidden',
        className,
      )}
      {...props}
    />
  )
}

ComboboxStatus.displayName = 'ComboboxStatus'

// ============================================================================
// ComboboxChips
// ============================================================================

type ComboboxChipsProps = React.ComponentProps<typeof BaseCombobox.Chips>

const ComboboxChips = React.forwardRef<HTMLDivElement, ComboboxChipsProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseCombobox.Chips
        ref={ref}
        className={cn(
          inputBaseStyles,
          'group/chips flex flex-wrap items-center gap-1 px-1 py-1 h-auto',
          className,
        )}
        {...props}
      />
    )
  },
)

ComboboxChips.displayName = 'ComboboxChips'

// ============================================================================
// ComboboxChip
// ============================================================================

type ComboboxChipProps = React.ComponentProps<typeof BaseCombobox.Chip>

const ComboboxChip = ({ className, ...props }: ComboboxChipProps) => {
  return (
    <BaseCombobox.Chip
      className={cn(
        'flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-sm text-foreground outline-none cursor-default',
        'data-highlighted:bg-primary data-highlighted:text-primary-foreground',
        'focus-within:bg-primary focus-within:text-primary-foreground',
        className,
      )}
      {...props}
    />
  )
}

ComboboxChip.displayName = 'ComboboxChip'

// ============================================================================
// ComboboxChipRemove
// ============================================================================

type ComboboxChipRemoveProps = React.ComponentProps<typeof BaseCombobox.ChipRemove>

const ComboboxChipRemove = ({ className, ...props }: ComboboxChipRemoveProps) => {
  return (
    <BaseCombobox.ChipRemove
      className={cn(
        'rounded-md p-0.5 text-inherit hover:bg-muted-foreground/20',
        className,
      )}
      {...props}
    />
  )
}

ComboboxChipRemove.displayName = 'ComboboxChipRemove'

// ============================================================================
// ComboboxArrow
// ============================================================================

type ComboboxArrowProps = React.ComponentProps<typeof BaseCombobox.Arrow>

const ComboboxArrow = ({ className, ...props }: ComboboxArrowProps) => {
  return (
    <BaseCombobox.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    />
  )
}

ComboboxArrow.displayName = 'ComboboxArrow'

// ============================================================================
// Exports
// ============================================================================

export {
  BaseCombobox as Combobox,
  ComboboxRoot,
  ComboboxValue,
  ComboboxIcon,
  ComboboxInput,
  ComboboxControl,
  ComboboxClear,
  ComboboxTrigger,
  ComboboxBackdrop,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxList,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxItemText,
  ComboboxItemIndicator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxCollection,
  ComboboxSeparator,
  ComboboxStatus,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxArrow,
}

export type {
  ComboboxRootProps,
  ComboboxValueProps,
  ComboboxIconProps,
  ComboboxInputProps,
  ComboboxControlProps,
  ComboboxClearProps,
  ComboboxTriggerProps,
  ComboboxBackdropProps,
  ComboboxPortalProps,
  ComboboxPositionerProps,
  ComboboxPopupProps,
  ComboboxListProps,
  ComboboxEmptyProps,
  ComboboxItemProps,
  ComboboxItemTextProps,
  ComboboxItemIndicatorProps,
  ComboboxGroupProps,
  ComboboxGroupLabelProps,
  ComboboxCollectionProps,
  ComboboxSeparatorProps,
  ComboboxStatusProps,
  ComboboxChipsProps,
  ComboboxChipProps,
  ComboboxChipRemoveProps,
  ComboboxArrowProps,
}
