'use client'

import {
  type AutocompleteRootProps,
  Autocomplete as BaseAutocomplete,
} from '@base-ui/react/autocomplete'
import * as React from 'react'

import { inputBaseStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'

// ============================================================================
// AutocompleteRoot
// ============================================================================

const AutocompleteRoot = BaseAutocomplete.Root

// ============================================================================
// AutocompleteInput
// ============================================================================

type AutocompleteInputProps = React.ComponentProps<typeof BaseAutocomplete.Input>

const AutocompleteInput = ({ className, ...props }: AutocompleteInputProps) => {
  return <BaseAutocomplete.Input className={cn(inputBaseStyles, className)} {...props} />
}

AutocompleteInput.displayName = 'AutocompleteInput'

// ============================================================================
// AutocompletePortal
// ============================================================================

type AutocompletePortalProps = React.ComponentProps<typeof BaseAutocomplete.Portal>

const AutocompletePortal = (props: AutocompletePortalProps) => {
  return <BaseAutocomplete.Portal {...props} />
}

AutocompletePortal.displayName = 'AutocompletePortal'

// ============================================================================
// AutocompletePositioner
// ============================================================================

type AutocompletePositionerProps = React.ComponentProps<
  typeof BaseAutocomplete.Positioner
>

const AutocompletePositioner = ({ className, ...props }: AutocompletePositionerProps) => {
  return (
    <BaseAutocomplete.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={4}
      {...props}
    />
  )
}

AutocompletePositioner.displayName = 'AutocompletePositioner'

// ============================================================================
// AutocompletePopup
// ============================================================================

type AutocompletePopupProps = React.ComponentProps<typeof BaseAutocomplete.Popup>

const AutocompletePopup = ({ className, ...props }: AutocompletePopupProps) => {
  return (
    <BaseAutocomplete.Popup
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

AutocompletePopup.displayName = 'AutocompletePopup'

// ============================================================================
// AutocompleteEmpty
// ============================================================================

type AutocompleteEmptyProps = React.ComponentProps<typeof BaseAutocomplete.Empty>

const AutocompleteEmpty = ({ className, ...props }: AutocompleteEmptyProps) => {
  return (
    <BaseAutocomplete.Empty
      className={cn(
        'shrink-0 p-4 text-sm leading-4 text-muted-foreground empty:m-0 empty:p-0',
        className,
      )}
      {...props}
    />
  )
}

AutocompleteEmpty.displayName = 'AutocompleteEmpty'

// ============================================================================
// AutocompleteList
// ============================================================================

type AutocompleteListProps = React.ComponentProps<typeof BaseAutocomplete.List>

const AutocompleteList = ({ className, ...props }: AutocompleteListProps) => {
  return (
    <BaseAutocomplete.List
      className={cn(
        'outline-0 overflow-y-auto scroll-py-2 overscroll-contain flex-1 min-h-0 data-empty:p-0',
        className,
      )}
      {...props}
    />
  )
}

AutocompleteList.displayName = 'AutocompleteList'

// ============================================================================
// AutocompleteItem
// ============================================================================

type AutocompleteItemProps = React.ComponentProps<typeof BaseAutocomplete.Item>

const AutocompleteItem = ({ className, ...props }: AutocompleteItemProps) => {
  return (
    <BaseAutocomplete.Item
      className={cn(
        'flex items-center gap-2 py-2 px-4 text-sm leading-4 outline-none select-none',
        'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

AutocompleteItem.displayName = 'AutocompleteItem'

// ============================================================================
// AutocompleteStatus
// ============================================================================

type AutocompleteStatusProps = React.ComponentProps<typeof BaseAutocomplete.Status>

const AutocompleteStatus = ({ className, ...props }: AutocompleteStatusProps) => {
  return (
    <BaseAutocomplete.Status
      className={cn(
        'flex items-center gap-2 py-2 px-4 text-sm text-muted-foreground empty:hidden',
        className,
      )}
      {...props}
    />
  )
}

AutocompleteStatus.displayName = 'AutocompleteStatus'

// ============================================================================
// AutocompleteGroup
// ============================================================================

type AutocompleteGroupProps = React.ComponentProps<typeof BaseAutocomplete.Group>

const AutocompleteGroup = ({ className, ...props }: AutocompleteGroupProps) => {
  return <BaseAutocomplete.Group className={className} {...props} />
}

AutocompleteGroup.displayName = 'AutocompleteGroup'

// ============================================================================
// AutocompleteGroupLabel
// ============================================================================

type AutocompleteGroupLabelProps = React.ComponentProps<
  typeof BaseAutocomplete.GroupLabel
>

const AutocompleteGroupLabel = ({ className, ...props }: AutocompleteGroupLabelProps) => {
  return (
    <BaseAutocomplete.GroupLabel
      className={cn(
        'px-4 py-1.5 text-sm font-semibold sticky top-0 z-1 bg-background',
        className,
      )}
      {...props}
    />
  )
}

AutocompleteGroupLabel.displayName = 'AutocompleteGroupLabel'

// ============================================================================
// AutocompleteCollection
// ============================================================================

type AutocompleteCollectionProps = React.ComponentProps<
  typeof BaseAutocomplete.Collection
>

const AutocompleteCollection = (props: AutocompleteCollectionProps) => {
  return <BaseAutocomplete.Collection {...props} />
}

AutocompleteCollection.displayName = 'AutocompleteCollection'

// ============================================================================
// AutocompleteSeparator
// ============================================================================

type AutocompleteSeparatorProps = React.ComponentProps<typeof BaseAutocomplete.Separator>

const AutocompleteSeparator = ({ className, ...props }: AutocompleteSeparatorProps) => {
  return (
    <BaseAutocomplete.Separator
      className={cn('my-1 border-t border-border', className)}
      {...props}
    />
  )
}

AutocompleteSeparator.displayName = 'AutocompleteSeparator'

// ============================================================================
// Exports
// ============================================================================

export {
  BaseAutocomplete as Autocomplete,
  AutocompleteRoot,
  AutocompleteInput,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteStatus,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteSeparator,
}

export type {
  AutocompleteRootProps,
  AutocompleteInputProps,
  AutocompletePortalProps,
  AutocompletePositionerProps,
  AutocompletePopupProps,
  AutocompleteEmptyProps,
  AutocompleteListProps,
  AutocompleteItemProps,
  AutocompleteStatusProps,
  AutocompleteGroupProps,
  AutocompleteGroupLabelProps,
  AutocompleteCollectionProps,
  AutocompleteSeparatorProps,
}
