'use client'

import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
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
        className,
      )}
      {...props}
    >
      {children}
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
