'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================
// Context for position and index
// ============================================
const TimelineContext = React.createContext<{
  position: 'left' | 'right' | 'alternate' | 'center'
}>({
  position: 'left',
})

const TimelineItemContext = React.createContext<{ index: number }>({ index: 0 })

// ============================================
// 1. TimelineRoot
// ============================================
const timelineVariants = cva('flex flex-col list-none m-0 p-0', {
  variants: {
    position: {
      left: 'gap-6',
      right: 'gap-6',
      alternate: 'gap-0',
      center: 'gap-0',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})

interface TimelineRootProps
  extends React.ComponentProps<'ol'>, VariantProps<typeof timelineVariants> {}

const TimelineRoot = ({ className, position, children, ...props }: TimelineRootProps) => {
  const timelinePosition = position ?? 'left'

  // Wrap children to inject index for each TimelineItem
  // Non-element children (null, strings, etc.) are passed through unchanged
  const childrenWithIndex = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return (
        <TimelineItemContext.Provider value={{ index }}>
          {child}
        </TimelineItemContext.Provider>
      )
    }
    return child
  })

  return (
    <TimelineContext.Provider value={{ position: timelinePosition }}>
      <ol
        role='list'
        data-slot='timeline'
        data-position={timelinePosition}
        className={cn(timelineVariants({ position: timelinePosition }), className)}
        {...props}
      >
        {childrenWithIndex}
      </ol>
    </TimelineContext.Provider>
  )
}
TimelineRoot.displayName = 'TimelineRoot'

// ============================================
// 2. TimelineItem
// ============================================
const TimelineItem = ({ className, children, ...props }: React.ComponentProps<'li'>) => {
  const { position } = React.useContext(TimelineContext)
  const { index } = React.useContext(TimelineItemContext)

  // Determine if this item should be on the right side
  const isRight = position === 'right' || (position === 'alternate' && index % 2 === 1)

  // Center mode - special layout with line in the middle
  if (position === 'center') {
    const isEven = index % 2 === 0
    return (
      <li
        role='listitem'
        data-slot='timeline-item'
        data-position={isEven ? 'left' : 'right'}
        className={cn('relative m-0 grid grid-cols-[1fr_auto_1fr] gap-4 p-0', className)}
        {...props}
      >
        {children}
      </li>
    )
  }

  return (
    <li
      role='listitem'
      data-slot='timeline-item'
      data-position={isRight ? 'right' : 'left'}
      className={cn(
        'relative m-0 flex gap-4 p-0',
        position === 'alternate' && 'justify-center',
        isRight && 'flex-row-reverse',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  )
}
TimelineItem.displayName = 'TimelineItem'

// ============================================
// 3. TimelineMarker
// ============================================
const timelineMarkerVariants = cva(
  'relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        default: 'border border-border bg-background',
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
        warning: 'bg-warning text-white',
        destructive: 'bg-destructive text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const variantLabels = {
  default: 'Event',
  primary: 'Important',
  success: 'Completed',
  warning: 'Warning',
  destructive: 'Error',
}

interface TimelineMarkerProps
  extends React.ComponentProps<'div'>, VariantProps<typeof timelineMarkerVariants> {
  icon?: React.ReactNode
}

const TimelineMarker = ({
  className,
  variant,
  icon,
  children,
  ...props
}: TimelineMarkerProps) => {
  const { position } = React.useContext(TimelineContext)

  return (
    <div
      className={cn(
        'relative flex flex-col items-center',
        position === 'center' && 'justify-start',
      )}
    >
      {children ? (
        <div
          data-slot='timeline-marker'
          className={cn(
            'relative z-10 flex shrink-0 items-center justify-center',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      ) : (
        <div
          data-slot='timeline-marker'
          className={cn(timelineMarkerVariants({ variant }), className)}
          aria-label={variantLabels[variant ?? 'default']}
          role='status'
          {...props}
        >
          {icon ? (
            <div className='flex size-3 items-center justify-center text-current'>
              {icon}
            </div>
          ) : (
            <div className={cn('size-2 rounded-full bg-current')} />
          )}
        </div>
      )}
      {/* Line */}
      <div
        className='border-l border-border absolute -top-4 -bottom-4 left-1/2 -translate-x-1/2 [li:first-child_&]:top-6 [li:last-child_&]:bottom-auto [li:last-child_&]:h-full'
        data-slot='timeline-line'
        aria-hidden='true'
      />
    </div>
  )
}
TimelineMarker.displayName = 'TimelineMarker'

// ============================================
// 4. TimelineContent
// ============================================
const TimelineContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const { position } = React.useContext(TimelineContext)
  const { index } = React.useContext(TimelineItemContext)

  const isRight = position === 'right' || (position === 'alternate' && index % 2 === 1)

  // Center mode uses grid layout
  if (position === 'center') {
    const isEven = index % 2 === 0
    return (
      <div
        data-slot='timeline-content'
        className={cn(
          'flex flex-col gap-1 pb-6',
          isEven ? 'text-right' : 'text-left',
          className,
        )}
        {...props}
      />
    )
  }

  return (
    <div
      data-slot='timeline-content'
      className={cn(
        'flex flex-1 flex-col gap-1 pb-4',
        position === 'alternate' && 'w-1/2 pb-8',
        position === 'alternate' && (isRight ? 'text-right' : 'text-left'),
        className,
      )}
      {...props}
    />
  )
}
TimelineContent.displayName = 'TimelineContent'

// ============================================
// 5. TimelineSpacer
// ============================================
const TimelineSpacer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot='timeline-spacer'
      className={cn('min-w-0 flex-1', className)}
      {...props}
    />
  )
}
TimelineSpacer.displayName = 'TimelineSpacer'

// ============================================
// 6. TimelineTitle
// ============================================
const TimelineTitle = ({ className, ...props }: React.ComponentProps<'p'>) => {
  return (
    <p
      data-slot='timeline-title'
      className={cn('leading-none font-medium', className)}
      {...props}
    />
  )
}
TimelineTitle.displayName = 'TimelineTitle'

// ============================================
// 7. TimelineDescription
// ============================================
const TimelineDescription = ({ className, ...props }: React.ComponentProps<'p'>) => {
  return (
    <p
      data-slot='timeline-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}
TimelineDescription.displayName = 'TimelineDescription'

// ============================================
// 8. TimelineTime
// ============================================
const TimelineTime = ({ className, ...props }: React.ComponentProps<'time'>) => {
  return (
    <time
      data-slot='timeline-time'
      className={cn('text-muted-foreground text-xs', className)}
      {...props}
    />
  )
}
TimelineTime.displayName = 'TimelineTime'

// ============================================
// Export
// ============================================
export {
  TimelineRoot,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineSpacer,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
}

export type { TimelineRootProps, TimelineMarkerProps }
