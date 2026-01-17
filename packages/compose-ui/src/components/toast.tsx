'use client'

import { Toast as BaseToast } from '@base-ui/react/toast'
import * as React from 'react'

import {
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from '../lib/button-variants'
import { cn } from '../lib/utils'

// ============================================================================
// ToastProvider
// ============================================================================

type ToastProviderProps = React.ComponentProps<typeof BaseToast.Provider>

const ToastProvider = (props: ToastProviderProps) => {
  return <BaseToast.Provider {...props} />
}

ToastProvider.displayName = 'ToastProvider'

// ============================================================================
// ToastViewport
// ============================================================================

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

type ToastViewportProps = React.ComponentProps<typeof BaseToast.Viewport> & {
  position?: ToastPosition
}

const ToastViewport = ({
  className,
  position = 'bottom-right',
  ...props
}: ToastViewportProps) => {
  return (
    <BaseToast.Viewport
      data-position={position}
      className={cn(
        'fixed z-50 w-[356px] outline-none',
        // Vertical position
        'data-[position^=bottom]:bottom-4',
        'data-[position^=top]:top-4',
        // Horizontal position
        'data-[position$=right]:right-4',
        'data-[position$=left]:left-4',
        'data-[position$=center]:left-1/2 data-[position$=center]:-translate-x-1/2',
        className,
      )}
      {...props}
    />
  )
}

ToastViewport.displayName = 'ToastViewport'

// ============================================================================
// ToastRoot
// ============================================================================

type ToastRootProps = React.ComponentProps<typeof BaseToast.Root>

const ToastRoot = ({ className, ...props }: ToastRootProps) => {
  return (
    <BaseToast.Root
      className={cn(
        // Base styles
        'group flex w-full flex-col gap-1 rounded-lg border border-border bg-background p-4 shadow-lg',
        'transition-[transform,opacity,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'absolute z-[calc(1000-var(--toast-index))]',
        'h-(--height) select-none',
        // CSS custom properties for stacking
        '[--gap:0.75rem] [--peek:0.75rem]',
        '[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]',
        '[--shrink:calc(1-var(--scale))]',
        '[--height:var(--toast-frontmost-height,var(--toast-height))]',
        // Expanded state height
        'data-expanded:h-(--toast-height)',
        // Ending styles (shared)
        'data-ending-style:opacity-0',
        'data-limited:opacity-0',
        // Gap element for hover interaction
        'after:absolute after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[""]',

        // ===== BOTTOM POSITIONS =====
        'in-data-[position^=bottom]:bottom-0',
        'in-data-[position^=bottom]:origin-bottom',
        'in-data-[position^=bottom]:[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]',
        'in-data-[position^=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]',
        'in-data-[position^=bottom]:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]',
        'in-data-[position^=bottom]:data-starting-style:transform-[translateY(150%)]',
        'in-data-[position^=bottom]:data-ending-style:transform-[translateY(150%)]',
        'in-data-[position^=bottom]:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]',
        'in-data-[position^=bottom]:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]',
        'in-data-[position^=bottom]:after:top-full',

        // ===== TOP POSITIONS =====
        'in-data-[position^=top]:top-0',
        'in-data-[position^=top]:origin-top',
        'in-data-[position^=top]:[--offset-y:calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))]',
        'in-data-[position^=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]',
        'in-data-[position^=top]:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]',
        'in-data-[position^=top]:data-starting-style:transform-[translateY(-150%)]',
        'in-data-[position^=top]:data-ending-style:transform-[translateY(-150%)]',
        'in-data-[position^=top]:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]',
        'in-data-[position^=top]:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]',
        'in-data-[position^=top]:after:bottom-full',

        // ===== HORIZONTAL POSITIONS =====
        'in-data-[position$=right]:right-0',
        'in-data-[position$=left]:left-0',
        'in-data-[position$=center]:left-0 in-data-[position$=center]:right-0',
        // Left/right swipe exit animations
        'data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
        'data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',

        className,
      )}
      {...props}
    />
  )
}

ToastRoot.displayName = 'ToastRoot'

// ============================================================================
// ToastContent
// ============================================================================

type ToastContentProps = React.ComponentProps<typeof BaseToast.Content>

const ToastContent = ({ className, ...props }: ToastContentProps) => {
  return (
    <BaseToast.Content
      className={cn(
        'flex flex-col gap-1 overflow-hidden',
        'transition-opacity duration-250',
        'data-behind:pointer-events-none data-behind:opacity-0',
        'data-expanded:pointer-events-auto data-expanded:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

ToastContent.displayName = 'ToastContent'

// ============================================================================
// ToastTitle
// ============================================================================

type ToastTitleProps = React.ComponentProps<typeof BaseToast.Title>

const ToastTitle = ({ className, ...props }: ToastTitleProps) => {
  return <BaseToast.Title className={cn('font-semibold', className)} {...props} />
}

ToastTitle.displayName = 'ToastTitle'

// ============================================================================
// ToastDescription
// ============================================================================

type ToastDescriptionProps = React.ComponentProps<typeof BaseToast.Description>

const ToastDescription = ({ className, ...props }: ToastDescriptionProps) => {
  return <BaseToast.Description className={cn('text-sm', className)} {...props} />
}

ToastDescription.displayName = 'ToastDescription'

// ============================================================================
// ToastAction
// ============================================================================

type ToastActionProps = React.ComponentProps<typeof BaseToast.Action> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const ToastAction = ({ className, variant, size = 'sm', ...props }: ToastActionProps) => {
  return (
    <BaseToast.Action
      className={cn('w-fit mt-2', buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

ToastAction.displayName = 'ToastAction'

// ============================================================================
// ToastClose
// ============================================================================

type ToastCloseProps = React.ComponentProps<typeof BaseToast.Close>

const ToastClose = ({ className, ...props }: ToastCloseProps) => {
  return (
    <BaseToast.Close
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'absolute right-2 top-2 size-6',
        className,
      )}
      {...props}
    />
  )
}

ToastClose.displayName = 'ToastClose'

// ============================================================================
// ToastPositioner
// ============================================================================

type ToastPositionerProps = React.ComponentProps<typeof BaseToast.Positioner>

const ToastPositioner = ({ className, ...props }: ToastPositionerProps) => {
  return (
    <BaseToast.Positioner
      className={cn(
        'z-50',
        'transition-[top,left,right,bottom,transform]',
        'duration-[0.35s]',
        'ease-[cubic-bezier(0.22,1,0.36,1)]',
        className,
      )}
      {...props}
    />
  )
}

ToastPositioner.displayName = 'ToastPositioner'

// ============================================================================
// Exports
// ============================================================================

// Re-export Toast from Base UI for useToastManager, createToastManager, and other utilities
export { Toast } from '@base-ui/react/toast'

export {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastPositioner,
}

export type {
  ToastPosition,
  ToastProviderProps,
  ToastViewportProps,
  ToastRootProps,
  ToastContentProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastActionProps,
  ToastCloseProps,
  ToastPositionerProps,
}
