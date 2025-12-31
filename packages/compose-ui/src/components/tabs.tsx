'use client'

import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// TabsRoot
// ============================================================================

export type TabsRootProps = React.ComponentProps<typeof BaseTabs.Root>

const TabsRoot = ({ className, ...props }: TabsRootProps) => {
  return <BaseTabs.Root className={cn('flex flex-col', className)} {...props} />
}

TabsRoot.displayName = 'Tabs.Root'

// ============================================================================
// TabsList
// ============================================================================

const tabsListVariants = cva(
  ['relative inline-flex w-fit items-center gap-1', 'rounded-lg bg-muted p-1'],
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

export type TabsListProps = React.ComponentProps<typeof BaseTabs.List> & {
  /** Orientation of the tabs list */
  orientation?: 'horizontal' | 'vertical'
}

const TabsList = ({ className, orientation = 'horizontal', ...props }: TabsListProps) => {
  return (
    <BaseTabs.List
      className={cn(tabsListVariants({ orientation }), className)}
      {...props}
    />
  )
}

TabsList.displayName = 'Tabs.List'

// ============================================================================
// TabsTab
// ============================================================================

const tabsTabVariants = cva(
  [
    'relative z-10 inline-flex items-center justify-center whitespace-nowrap',
    'rounded-md px-3 py-1.5 text-sm font-medium',
    'transition-all duration-200',
    'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-70',
    'text-foreground/80',
    'data-[active]:text-foreground',
    'hover:text-foreground',
  ],
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-xs',
        default: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type TabsTabProps = React.ComponentProps<typeof BaseTabs.Tab> & {
  /** Size of the tab */
  size?: 'sm' | 'default' | 'lg'
}

const TabsTab = ({ className, size, ...props }: TabsTabProps) => {
  return <BaseTabs.Tab className={cn(tabsTabVariants({ size }), className)} {...props} />
}

TabsTab.displayName = 'Tabs.Tab'

// ============================================================================
// TabsIndicator
// ============================================================================

const tabsIndicatorVariants = cva(
  ['absolute rounded-md bg-background shadow-sm', 'transition-all duration-200 ease-out'],
  {
    variants: {
      orientation: {
        horizontal:
          'bottom-1 top-1 left-[var(--active-tab-left)] w-[var(--active-tab-width)]',
        vertical:
          'left-1 right-1 top-[var(--active-tab-top)] h-[var(--active-tab-height)]',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

export type TabsIndicatorProps = React.ComponentProps<typeof BaseTabs.Indicator> & {
  /** Orientation of the indicator (should match the tabs list orientation) */
  orientation?: 'horizontal' | 'vertical'
}

const TabsIndicator = ({
  className,
  orientation = 'horizontal',
  ...props
}: TabsIndicatorProps) => {
  return (
    <BaseTabs.Indicator
      className={cn(tabsIndicatorVariants({ orientation }), className)}
      {...props}
    />
  )
}

TabsIndicator.displayName = 'Tabs.Indicator'

// ============================================================================
// TabsPanel
// ============================================================================

export type TabsPanelProps = React.ComponentProps<typeof BaseTabs.Panel>

const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  return (
    <BaseTabs.Panel
      className={cn(
        'mt-2 ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  )
}

TabsPanel.displayName = 'Tabs.Panel'

// ============================================================================
// Exports
// ============================================================================

export { TabsRoot, TabsList, TabsTab, TabsIndicator, TabsPanel }
