'use client'

import { Popover as BasePopover } from '@base-ui/react/popover'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// PopoverRoot
// ============================================================================

type PopoverRootProps = React.ComponentProps<typeof BasePopover.Root>

const PopoverRoot = (props: PopoverRootProps) => {
  return <BasePopover.Root {...props} />
}

PopoverRoot.displayName = 'PopoverRoot'

// ============================================================================
// PopoverTrigger
// ============================================================================

type PopoverTriggerProps = React.ComponentProps<typeof BasePopover.Trigger>

const PopoverTrigger = ({ className, ...props }: PopoverTriggerProps) => {
  return <BasePopover.Trigger className={cn(className)} {...props} />
}

PopoverTrigger.displayName = 'PopoverTrigger'

// ============================================================================
// PopoverPortal
// ============================================================================

type PopoverPortalProps = React.ComponentProps<typeof BasePopover.Portal>

const PopoverPortal = (props: PopoverPortalProps) => {
  return <BasePopover.Portal {...props} />
}

PopoverPortal.displayName = 'PopoverPortal'

// ============================================================================
// PopoverBackdrop
// ============================================================================

type PopoverBackdropProps = React.ComponentProps<typeof BasePopover.Backdrop>

const PopoverBackdrop = ({ className, ...props }: PopoverBackdropProps) => {
  return (
    <BasePopover.Backdrop
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

PopoverBackdrop.displayName = 'PopoverBackdrop'

// ============================================================================
// PopoverPositioner
// ============================================================================

type PopoverPositionerProps = React.ComponentProps<typeof BasePopover.Positioner>

const PopoverPositioner = ({ className, ...props }: PopoverPositionerProps) => {
  return (
    <BasePopover.Positioner
      className={cn(
        'z-50 outline-none',
        'h-(--positioner-height) w-(--positioner-width)',
        'max-w-(--available-width)',
        'transition-[top,left,right,bottom,transform]',
        'duration-[0.35s]',
        'ease-[cubic-bezier(0.22,1,0.36,1)]',
        'data-instant:transition-none',
        className,
      )}
      sideOffset={8}
      {...props}
    />
  )
}

PopoverPositioner.displayName = 'PopoverPositioner'

// ============================================================================
// PopoverPopup
// ============================================================================

type PopoverPopupProps = React.ComponentProps<typeof BasePopover.Popup>

const PopoverPopup = ({ className, ...props }: PopoverPopupProps) => {
  return (
    <BasePopover.Popup
      className={cn(
        'rounded-md bg-background px-4 py-3 text-foreground shadow-sm border relative',
        'h-(--popup-height,auto) w-(--popup-width,auto)',
        'max-w-[500px]',
        'origin-(--transform-origin)',
        'border-border',
        'transition-[transform,scale,opacity]',
        'data-ending-style:scale-90 data-ending-style:opacity-0',
        'data-starting-style:scale-90 data-starting-style:opacity-0',
        'dark:shadow-none',
        'origin-(--transform-origin)',
        className,
      )}
      {...props}
    />
  )
}

PopoverPopup.displayName = 'PopoverPopup'

// ============================================================================
// PopoverArrow
// ============================================================================

type PopoverArrowProps = React.ComponentProps<typeof BasePopover.Arrow>

const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => {
  return (
    <BasePopover.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BasePopover.Arrow>
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

PopoverArrow.displayName = 'PopoverArrow'

// ============================================================================
// PopoverTitle
// ============================================================================

type PopoverTitleProps = React.ComponentProps<typeof BasePopover.Title>

const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => {
  return (
    <BasePopover.Title className={cn('text-sm font-semibold', className)} {...props} />
  )
}

PopoverTitle.displayName = 'PopoverTitle'

// ============================================================================
// PopoverDescription
// ============================================================================

type PopoverDescriptionProps = React.ComponentProps<typeof BasePopover.Description>

const PopoverDescription = ({ className, ...props }: PopoverDescriptionProps) => {
  return <BasePopover.Description className={cn('text-sm', className)} {...props} />
}

PopoverDescription.displayName = 'PopoverDescription'

// ============================================================================
// PopoverClose
// ============================================================================

type PopoverCloseProps = React.ComponentProps<typeof BasePopover.Close>

const PopoverClose = ({ className, ...props }: PopoverCloseProps) => {
  return <BasePopover.Close className={cn(className)} {...props} />
}

PopoverClose.displayName = 'PopoverClose'

// ============================================================================
// PopoverViewport
// ============================================================================

type PopoverViewportProps = React.ComponentProps<typeof BasePopover.Viewport>

const PopoverViewport = ({ className, ...props }: PopoverViewportProps) => {
  return <BasePopover.Viewport className={cn(className)} {...props} />
}

PopoverViewport.displayName = 'PopoverViewport'

// ============================================================================
// Exports
// ============================================================================

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverBackdrop,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
  PopoverViewport,
}

export type {
  PopoverRootProps,
  PopoverTriggerProps,
  PopoverPortalProps,
  PopoverBackdropProps,
  PopoverPositionerProps,
  PopoverPopupProps,
  PopoverArrowProps,
  PopoverTitleProps,
  PopoverDescriptionProps,
  PopoverCloseProps,
  PopoverViewportProps,
}
