'use client'

import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area'
import * as React from 'react'

import { cn } from '../lib/utils'

export type ScrollAreaRootProps = React.ComponentProps<typeof BaseScrollArea.Root>

const ScrollAreaRoot = ({ className, ...props }: ScrollAreaRootProps) => {
  return <BaseScrollArea.Root className={cn('relative', className)} {...props} />
}

ScrollAreaRoot.displayName = 'ScrollArea.Root'

export type ScrollAreaViewportProps = React.ComponentProps<typeof BaseScrollArea.Viewport>

const ScrollAreaViewport = ({ className, ...props }: ScrollAreaViewportProps) => {
  return (
    <BaseScrollArea.Viewport
      className={cn('h-full overscroll-contain pr-3', className)}
      {...props}
    />
  )
}

ScrollAreaViewport.displayName = 'ScrollArea.Viewport'

export type ScrollAreaContentProps = React.ComponentProps<typeof BaseScrollArea.Content>

const ScrollAreaContent = ({ className, ...props }: ScrollAreaContentProps) => {
  return <BaseScrollArea.Content className={cn('min-w-full', className)} {...props} />
}

ScrollAreaContent.displayName = 'ScrollArea.Content'

export type ScrollAreaScrollbarProps = React.ComponentProps<
  typeof BaseScrollArea.Scrollbar
>

const ScrollAreaScrollbar = ({
  className,
  orientation = 'vertical',
  ...props
}: ScrollAreaScrollbarProps) => {
  return (
    <BaseScrollArea.Scrollbar
      className={cn(
        'flex touch-none select-none p-0.5 transition-colors duration-150 ease-out',
        'data-hovering:bg-muted/50',
        orientation === 'vertical' && 'h-full w-2.5',
        orientation === 'horizontal' && 'h-2.5 w-full flex-col',
        className,
      )}
      orientation={orientation}
      {...props}
    />
  )
}

ScrollAreaScrollbar.displayName = 'ScrollArea.Scrollbar'

export type ScrollAreaThumbProps = React.ComponentProps<typeof BaseScrollArea.Thumb>

const ScrollAreaThumb = ({ className, ...props }: ScrollAreaThumbProps) => {
  return (
    <BaseScrollArea.Thumb
      className={cn(
        'relative flex-1 rounded-full bg-border transition-colors',
        'hover:bg-muted-foreground/50',
        className,
      )}
      {...props}
    />
  )
}

ScrollAreaThumb.displayName = 'ScrollArea.Thumb'

export type ScrollAreaCornerProps = React.ComponentProps<typeof BaseScrollArea.Corner>

const ScrollAreaCorner = ({ className, ...props }: ScrollAreaCornerProps) => {
  return <BaseScrollArea.Corner className={cn('bg-muted/50', className)} {...props} />
}

ScrollAreaCorner.displayName = 'ScrollArea.Corner'

export {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}
