'use client'

import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import {
  type TooltipVariant,
  tooltipArrowVariants,
  tooltipPopupVariants,
} from '../lib/tooltip-variants'
import { cn } from '../lib/utils'

// ============================================================================
// TooltipVariantContext
// ============================================================================

const TooltipVariantContext = React.createContext<TooltipVariant>('default')

// ============================================================================
// TooltipProvider
// ============================================================================

type TooltipProviderProps = React.ComponentProps<typeof BaseTooltip.Provider>

const TooltipProvider = (props: TooltipProviderProps) => {
  return <BaseTooltip.Provider {...props} />
}

TooltipProvider.displayName = 'TooltipProvider'

// ============================================================================
// TooltipRoot
// ============================================================================

type TooltipRootProps = React.ComponentProps<typeof BaseTooltip.Root> & {
  variant?: TooltipVariant
}

const TooltipRoot = ({ variant = 'default', ...props }: TooltipRootProps) => {
  return (
    <TooltipVariantContext.Provider value={variant}>
      <BaseTooltip.Root {...props} />
    </TooltipVariantContext.Provider>
  )
}

TooltipRoot.displayName = 'TooltipRoot'

// ============================================================================
// TooltipTrigger
// ============================================================================

type TooltipTriggerProps = React.ComponentProps<typeof BaseTooltip.Trigger>

const TooltipTrigger = ({ className, ...props }: TooltipTriggerProps) => {
  return <BaseTooltip.Trigger className={cn(className)} delay={200} {...props} />
}

TooltipTrigger.displayName = 'TooltipTrigger'

// ============================================================================
// TooltipPortal
// ============================================================================

type TooltipPortalProps = React.ComponentProps<typeof BaseTooltip.Portal>

const TooltipPortal = (props: TooltipPortalProps) => {
  return <BaseTooltip.Portal {...props} />
}

TooltipPortal.displayName = 'TooltipPortal'

// ============================================================================
// TooltipPositioner
// ============================================================================

type TooltipPositionerProps = React.ComponentProps<typeof BaseTooltip.Positioner>

const TooltipPositioner = ({ className, ...props }: TooltipPositionerProps) => {
  return (
    <BaseTooltip.Positioner
      className={cn('z-50 outline-none', className)}
      sideOffset={8}
      {...props}
    />
  )
}

TooltipPositioner.displayName = 'TooltipPositioner'

// ============================================================================
// TooltipPopup
// ============================================================================

type TooltipPopupProps = React.ComponentProps<typeof BaseTooltip.Popup> & {
  variant?: TooltipVariant
}

const TooltipPopup = ({ className, variant, ...props }: TooltipPopupProps) => {
  const contextVariant = React.useContext(TooltipVariantContext)
  const resolvedVariant = variant ?? contextVariant

  return (
    <BaseTooltip.Popup
      className={cn(tooltipPopupVariants({ variant: resolvedVariant }), className)}
      {...props}
    />
  )
}

TooltipPopup.displayName = 'TooltipPopup'

// ============================================================================
// TooltipArrow
// ============================================================================

type TooltipArrowProps = React.ComponentProps<typeof BaseTooltip.Arrow> & {
  variant?: TooltipVariant
}

const TooltipArrow = ({ className, variant, ...props }: TooltipArrowProps) => {
  const contextVariant = React.useContext(TooltipVariantContext)
  const resolvedVariant = variant ?? contextVariant
  const arrowColors = tooltipArrowVariants[resolvedVariant]

  return (
    <BaseTooltip.Arrow
      className={cn(
        'flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg fillClassName={arrowColors.fill} strokeClassName={arrowColors.stroke} />
    </BaseTooltip.Arrow>
  )
}

TooltipArrow.displayName = 'TooltipArrow'

// ============================================================================
// Exports
// ============================================================================

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
}

export type {
  TooltipProviderProps,
  TooltipRootProps,
  TooltipTriggerProps,
  TooltipPortalProps,
  TooltipPositionerProps,
  TooltipPopupProps,
  TooltipArrowProps,
}
