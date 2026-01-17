'use client'

import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import { cn } from '../lib/utils'

// ============================================================================
// PreviewCardRoot
// ============================================================================

type PreviewCardRootProps = React.ComponentProps<typeof BasePreviewCard.Root>

const PreviewCardRoot = (props: PreviewCardRootProps) => {
  return <BasePreviewCard.Root {...props} />
}

PreviewCardRoot.displayName = 'PreviewCardRoot'

// ============================================================================
// PreviewCardTrigger
// ============================================================================

type PreviewCardTriggerProps = React.ComponentProps<typeof BasePreviewCard.Trigger>

const PreviewCardTrigger = ({ className, ...props }: PreviewCardTriggerProps) => {
  return <BasePreviewCard.Trigger className={cn('underline', className)} {...props} />
}

PreviewCardTrigger.displayName = 'PreviewCardTrigger'

// ============================================================================
// PreviewCardPortal
// ============================================================================

type PreviewCardPortalProps = React.ComponentProps<typeof BasePreviewCard.Portal>

const PreviewCardPortal = (props: PreviewCardPortalProps) => {
  return <BasePreviewCard.Portal {...props} />
}

PreviewCardPortal.displayName = 'PreviewCardPortal'

// ============================================================================
// PreviewCardBackdrop
// ============================================================================

type PreviewCardBackdropProps = React.ComponentProps<typeof BasePreviewCard.Backdrop>

const PreviewCardBackdrop = ({ className, ...props }: PreviewCardBackdropProps) => {
  return (
    <BasePreviewCard.Backdrop
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

PreviewCardBackdrop.displayName = 'PreviewCardBackdrop'

// ============================================================================
// PreviewCardPositioner
// ============================================================================

type PreviewCardPositionerProps = React.ComponentProps<typeof BasePreviewCard.Positioner>

const PreviewCardPositioner = ({ className, ...props }: PreviewCardPositionerProps) => {
  return (
    <BasePreviewCard.Positioner
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

PreviewCardPositioner.displayName = 'PreviewCardPositioner'

// ============================================================================
// PreviewCardPopup
// ============================================================================

type PreviewCardPopupProps = React.ComponentProps<typeof BasePreviewCard.Popup>

const PreviewCardPopup = ({ className, ...props }: PreviewCardPopupProps) => {
  return (
    <BasePreviewCard.Popup
      className={cn(
        'rounded-md bg-background px-4 py-3 text-foreground shadow-sm border relative',
        'h-(--popup-height,auto) w-(--popup-width,auto)',
        'max-w-[320px]',
        'origin-(--transform-origin)',
        'border-border',
        'transition-[transform,scale,opacity]',
        'data-ending-style:scale-90 data-ending-style:opacity-0',
        'data-starting-style:scale-90 data-starting-style:opacity-0',
        'dark:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

PreviewCardPopup.displayName = 'PreviewCardPopup'

// ============================================================================
// PreviewCardArrow
// ============================================================================

type PreviewCardArrowProps = React.ComponentProps<typeof BasePreviewCard.Arrow>

const PreviewCardArrow = ({ className, ...props }: PreviewCardArrowProps) => {
  return (
    <BasePreviewCard.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-14px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-11px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BasePreviewCard.Arrow>
  )
}

PreviewCardArrow.displayName = 'PreviewCardArrow'

// ============================================================================
// Exports
// ============================================================================

export {
  PreviewCardRoot,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
}

export type {
  PreviewCardRootProps,
  PreviewCardTriggerProps,
  PreviewCardPortalProps,
  PreviewCardBackdropProps,
  PreviewCardPositionerProps,
  PreviewCardPopupProps,
  PreviewCardArrowProps,
}
