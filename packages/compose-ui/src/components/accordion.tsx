'use client'

import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// AccordionRoot
// ============================================================================

type AccordionRootProps = React.ComponentProps<typeof BaseAccordion.Root>

const AccordionRoot = ({ className, ...props }: AccordionRootProps) => {
  return <BaseAccordion.Root className={cn('w-full', className)} {...props} />
}

AccordionRoot.displayName = 'AccordionRoot'

// ============================================================================
// AccordionItem
// ============================================================================

type AccordionItemProps = React.ComponentProps<typeof BaseAccordion.Item>

const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  return (
    <BaseAccordion.Item
      className={cn('border-b border-border last:border-b-0', className)}
      {...props}
    />
  )
}

AccordionItem.displayName = 'AccordionItem'

// ============================================================================
// AccordionHeader
// ============================================================================

type AccordionHeaderProps = React.ComponentProps<typeof BaseAccordion.Header>

const AccordionHeader = ({ className, ...props }: AccordionHeaderProps) => {
  return <BaseAccordion.Header className={cn('flex', className)} {...props} />
}

AccordionHeader.displayName = 'AccordionHeader'

// ============================================================================
// AccordionTrigger
// ============================================================================

type AccordionTriggerProps = React.ComponentProps<typeof BaseAccordion.Trigger>

const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
  return (
    <BaseAccordion.Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-3 font-medium',
        'transition-all duration-200',
        'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'data-disabled:pointer-events-none data-disabled:opacity-80',
        '[&[data-panel-open]_svg:last-child]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
    </BaseAccordion.Trigger>
  )
}

AccordionTrigger.displayName = 'AccordionTrigger'

// ============================================================================
// AccordionPanel
// ============================================================================

type AccordionPanelProps = React.ComponentProps<typeof BaseAccordion.Panel>

const AccordionPanel = ({ className, ...props }: AccordionPanelProps) => {
  return (
    <BaseAccordion.Panel
      className={cn(
        'overflow-hidden duration-200 h-(--accordion-panel-height) transition-height ease-out data-ending-style:h-0 data-starting-style:h-0',
        className,
      )}
      {...props}
    />
  )
}

AccordionPanel.displayName = 'AccordionPanel'

// ============================================================================
// Exports
// ============================================================================

export { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionPanel }

export type {
  AccordionRootProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionTriggerProps,
  AccordionPanelProps,
}
