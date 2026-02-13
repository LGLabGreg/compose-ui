'use client'

import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu'
import * as React from 'react'

import { ArrowSvg } from '../lib/arrow-svg'
import { cn } from '../lib/utils'

// ============================================================================
// Shared Styles
// ============================================================================

const rootItemStyles = [
  'inline-flex items-center justify-center rounded-md text-sm font-medium outline-none select-none',
  'h-9 px-3 py-2',
  'transition-colors',
  'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
  'focus:bg-accent focus:text-accent-foreground',
]

const submenuItemStyles = [
  'group-data-content/content:block group-data-content/content:h-auto group-data-content/content:w-auto group-data-content/content:p-2',
  'group-data-content/content:hover:bg-accent group-data-content/content:hover:text-accent-foreground',
]

// ============================================================================
// NavigationMenuRoot
// ============================================================================

type NavigationMenuRootProps = React.ComponentProps<typeof BaseNavigationMenu.Root>

const NavigationMenuRoot = ({ className, ...props }: NavigationMenuRootProps) => {
  return <BaseNavigationMenu.Root className={cn('min-w-max', className)} {...props} />
}

NavigationMenuRoot.displayName = 'NavigationMenuRoot'

// ============================================================================
// NavigationMenuList
// ============================================================================

type NavigationMenuListProps = React.ComponentProps<typeof BaseNavigationMenu.List>

const NavigationMenuList = ({ className, ...props }: NavigationMenuListProps) => {
  return (
    <BaseNavigationMenu.List
      className={cn('flex items-center gap-1 relative', className)}
      {...props}
    />
  )
}

NavigationMenuList.displayName = 'NavigationMenuList'

// ============================================================================
// NavigationMenuItem
// ============================================================================

type NavigationMenuItemProps = React.ComponentProps<typeof BaseNavigationMenu.Item>

const NavigationMenuItem = ({ className, ...props }: NavigationMenuItemProps) => {
  return <BaseNavigationMenu.Item className={cn(className)} {...props} />
}

NavigationMenuItem.displayName = 'NavigationMenuItem'

// ============================================================================
// NavigationMenuTrigger
// ============================================================================

type NavigationMenuTriggerProps = React.ComponentProps<typeof BaseNavigationMenu.Trigger>

const NavigationMenuTrigger = ({ className, ...props }: NavigationMenuTriggerProps) => {
  return (
    <BaseNavigationMenu.Trigger
      className={cn(
        rootItemStyles,
        submenuItemStyles,
        'group gap-1',
        'group-data-content/content:inline-flex group-data-content/content:w-full group-data-content/content:justify-between',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

// ============================================================================
// NavigationMenuIcon
// ============================================================================

type NavigationMenuIconProps = React.ComponentProps<typeof BaseNavigationMenu.Icon>

const NavigationMenuIcon = ({ className, ...props }: NavigationMenuIconProps) => {
  return (
    <BaseNavigationMenu.Icon
      className={cn(
        'transition-transform duration-200 ease-in-out',
        'group-data-popup-open:rotate-180',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuIcon.displayName = 'NavigationMenuIcon'

// ============================================================================
// NavigationMenuContent
// ============================================================================

type NavigationMenuContentProps = React.ComponentProps<typeof BaseNavigationMenu.Content>

const NavigationMenuContent = ({ className, ...props }: NavigationMenuContentProps) => {
  return (
    <BaseNavigationMenu.Content
      data-content
      className={cn(
        'group/content',
        'w-[calc(100vw-40px)] h-full p-2 xs:w-max xs:min-w-[400px] xs:w-max',
        'transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        'data-starting-style:data-[activation-direction=left]:translate-x-[-50%] data-starting-style:data-[activation-direction=right]:translate-x-[50%]',
        'data-ending-style:data-[activation-direction=left]:translate-x-[50%] data-ending-style:data-[activation-direction=right]:translate-x-[-50%]',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuContent.displayName = 'NavigationMenuContent'

// ============================================================================
// NavigationMenuLink
// ============================================================================

type NavigationMenuLinkProps = React.ComponentProps<typeof BaseNavigationMenu.Link>

const NavigationMenuLink = ({ className, ...props }: NavigationMenuLinkProps) => {
  return (
    <BaseNavigationMenu.Link
      className={cn(
        rootItemStyles,
        submenuItemStyles,
        'data-active:bg-accent data-active:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuLink.displayName = 'NavigationMenuLink'

// ============================================================================
// NavigationMenuPortal
// ============================================================================

type NavigationMenuPortalProps = React.ComponentProps<typeof BaseNavigationMenu.Portal>

const NavigationMenuPortal = (props: NavigationMenuPortalProps) => {
  return <BaseNavigationMenu.Portal {...props} />
}

NavigationMenuPortal.displayName = 'NavigationMenuPortal'

// ============================================================================
// NavigationMenuPositioner
// ============================================================================

type NavigationMenuPositionerProps = React.ComponentProps<
  typeof BaseNavigationMenu.Positioner
>

const NavigationMenuPositioner = ({
  className,
  sideOffset = 10,
  collisionPadding = { top: 5, bottom: 5, left: 20, right: 20 },
  ...props
}: NavigationMenuPositionerProps) => {
  return (
    <BaseNavigationMenu.Positioner
      className={cn(
        'z-50 box-border',
        'h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)',
        'transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'data-instant:transition-none',
        // Gap element to maintain hover when moving to popup
        "before:absolute before:content-['']",
        'data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5',
        'data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5',
        'data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5',
        'data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5',
        className,
      )}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      {...props}
    />
  )
}

NavigationMenuPositioner.displayName = 'NavigationMenuPositioner'

// ============================================================================
// NavigationMenuPopup
// ============================================================================

type NavigationMenuPopupProps = React.ComponentProps<typeof BaseNavigationMenu.Popup>

const NavigationMenuPopup = ({ className, ...props }: NavigationMenuPopupProps) => {
  return (
    <BaseNavigationMenu.Popup
      className={cn(
        'relative rounded-lg border border-border bg-background shadow-lg',
        'h-(--popup-height) w-(--popup-width)',
        'origin-(--transform-origin)',
        'transition-[opacity,transform,width,height,scale] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'data-starting-style:scale-90 data-starting-style:opacity-0',
        'data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuPopup.displayName = 'NavigationMenuPopup'

// ============================================================================
// NavigationMenuViewport
// ============================================================================

type NavigationMenuViewportProps = React.ComponentProps<
  typeof BaseNavigationMenu.Viewport
>

const NavigationMenuViewport = ({ className, ...props }: NavigationMenuViewportProps) => {
  return (
    <BaseNavigationMenu.Viewport
      className={cn('relative h-full w-full overflow-hidden', className)}
      {...props}
    />
  )
}

NavigationMenuViewport.displayName = 'NavigationMenuViewport'

// ============================================================================
// NavigationMenuArrow
// ============================================================================

type NavigationMenuArrowProps = React.ComponentProps<typeof BaseNavigationMenu.Arrow>

const NavigationMenuArrow = ({ className, ...props }: NavigationMenuArrowProps) => {
  return (
    <BaseNavigationMenu.Arrow
      className={cn(
        'flex transition-[left] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-14px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180',
        className,
      )}
      {...props}
    >
      <ArrowSvg />
    </BaseNavigationMenu.Arrow>
  )
}

NavigationMenuArrow.displayName = 'NavigationMenuArrow'

// ============================================================================
// NavigationMenuBackdrop
// ============================================================================

type NavigationMenuBackdropProps = React.ComponentProps<
  typeof BaseNavigationMenu.Backdrop
>

const NavigationMenuBackdrop = ({ className, ...props }: NavigationMenuBackdropProps) => {
  return (
    <BaseNavigationMenu.Backdrop
      className={cn(
        'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
        'transition-opacity duration-200',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

NavigationMenuBackdrop.displayName = 'NavigationMenuBackdrop'

// ============================================================================
// Exports
// ============================================================================

export {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuViewport,
  NavigationMenuArrow,
  NavigationMenuBackdrop,
}

export type {
  NavigationMenuRootProps,
  NavigationMenuListProps,
  NavigationMenuItemProps,
  NavigationMenuTriggerProps,
  NavigationMenuIconProps,
  NavigationMenuContentProps,
  NavigationMenuLinkProps,
  NavigationMenuPortalProps,
  NavigationMenuPositionerProps,
  NavigationMenuPopupProps,
  NavigationMenuViewportProps,
  NavigationMenuArrowProps,
  NavigationMenuBackdropProps,
}
