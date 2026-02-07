import { useRender } from '@base-ui/react/use-render'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// BreadcrumbRoot
// ============================================================================

type BreadcrumbRootProps = React.ComponentProps<'nav'>

const BreadcrumbRoot = ({ className, children, ...props }: BreadcrumbRootProps) => {
  return (
    <nav aria-label='Breadcrumb' className={className} {...props}>
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground wrap-break-word sm:gap-2.5',
        )}
      >
        {children}
      </ol>
    </nav>
  )
}

BreadcrumbRoot.displayName = 'BreadcrumbRoot'

// ============================================================================
// BreadcrumbItem
// ============================================================================

type BreadcrumbItemProps = React.ComponentProps<'li'>

const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />
}

BreadcrumbItem.displayName = 'BreadcrumbItem'

// ============================================================================
// BreadcrumbLink
// ============================================================================

type BreadcrumbLinkProps = useRender.ComponentProps<'a'>

const BreadcrumbLink = ({ className, render, ...props }: BreadcrumbLinkProps) => {
  return useRender({
    render,
    props: {
      ...props,
      className: cn(
        'flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground',
        className,
      ),
    },
    defaultTagName: 'a',
  })
}

BreadcrumbLink.displayName = 'BreadcrumbLink'

// ============================================================================
// BreadcrumbPage
// ============================================================================

type BreadcrumbPageProps = React.ComponentProps<'span'>

const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => {
  return (
    <span
      aria-current='page'
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  )
}

BreadcrumbPage.displayName = 'BreadcrumbPage'

// ============================================================================
// BreadcrumbSeparator
// ============================================================================

type BreadcrumbSeparatorProps = React.ComponentProps<'li'>

const BreadcrumbSeparator = ({
  className,
  children,
  ...props
}: BreadcrumbSeparatorProps) => {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? '/'}
    </li>
  )
}

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

// ============================================================================
// BreadcrumbEllipsis
// ============================================================================

type BreadcrumbEllipsisProps = React.ComponentProps<'li'>

const BreadcrumbEllipsis = ({
  className,
  children,
  ...props
}: BreadcrumbEllipsisProps) => {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      {children ?? '...'}
    </li>
  )
}

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

// ============================================================================
// Exports
// ============================================================================

export {
  BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

export type {
  BreadcrumbRootProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
  BreadcrumbEllipsisProps,
}
