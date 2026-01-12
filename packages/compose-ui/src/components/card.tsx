'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Card Variants
// ============================================================================

const cardVariants = cva('rounded-lg bg-card text-card-foreground transition-colors', {
  variants: {
    variant: {
      default: 'border shadow-sm',
      outline: 'border',
      elevated: 'shadow-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type CardVariant = VariantProps<typeof cardVariants>['variant']

// ============================================================================
// CardRoot
// ============================================================================

type CardRootProps = React.ComponentProps<'article'> & VariantProps<typeof cardVariants>

/**
 * The root container for a card component.
 * Renders as an `<article>` for semantic HTML.
 */
const CardRoot = React.forwardRef<HTMLElement, CardRootProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    )
  },
)

CardRoot.displayName = 'CardRoot'

// ============================================================================
// CardMedia
// ============================================================================

type CardMediaProps = React.ComponentProps<'div'>

/**
 * Container for media content (images, videos) within a card.
 * Use Tailwind aspect-* classes for aspect ratios (e.g., className="aspect-video").
 */
const CardMedia = ({ className, ...props }: CardMediaProps) => {
  return (
    <div
      className={cn(
        'overflow-hidden',
        '[&>img]:h-full [&>img]:w-full [&>img]:object-cover',
        className,
      )}
      {...props}
    />
  )
}

CardMedia.displayName = 'CardMedia'

// ============================================================================
// CardHeader
// ============================================================================

type CardHeaderProps = React.ComponentProps<'header'>

/**
 * Container for the card's header content (title, description).
 */
const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return <header className={cn('flex flex-col gap-1 p-4', className)} {...props} />
}

CardHeader.displayName = 'CardHeader'

// ============================================================================
// CardTitle
// ============================================================================

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type CardTitleProps = React.ComponentProps<'h3'> & {
  /** The heading level to render */
  as?: HeadingLevel
}

/**
 * The card's title. Renders as an `<h3>` by default.
 * Use the `as` prop to change the heading level.
 */
const CardTitle = ({ as: Component = 'h3', className, ...props }: CardTitleProps) => {
  return (
    <Component
      className={cn('text-base font-semibold leading-tight', className)}
      {...props}
    />
  )
}

CardTitle.displayName = 'CardTitle'

// ============================================================================
// CardDescription
// ============================================================================

type CardDescriptionProps = React.ComponentProps<'p'>

/**
 * Secondary text content for the card.
 */
const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return <p className={cn('text-sm', className)} {...props} />
}

CardDescription.displayName = 'CardDescription'

// ============================================================================
// CardContent
// ============================================================================

type CardContentProps = React.ComponentProps<'div'>

/**
 * Container for the main content of the card.
 */
const CardContent = ({ className, ...props }: CardContentProps) => {
  return <div className={cn('p-4 pt-0', className)} {...props} />
}

CardContent.displayName = 'CardContent'

// ============================================================================
// CardSection
// ============================================================================

type CardSectionProps = React.ComponentProps<'section'>

/**
 * A distinct section within a card, useful for multi-section layouts.
 * Use Separator component between sections if visual dividers are needed.
 */
const CardSection = ({ className, ...props }: CardSectionProps) => {
  return <section className={cn('p-4', className)} {...props} />
}

CardSection.displayName = 'CardSection'

// ============================================================================
// CardFooter
// ============================================================================

type CardFooterProps = React.ComponentProps<'footer'>

/**
 * Container for card actions and footer content.
 * Use Separator component above footer if a visual divider is needed.
 */
const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return <footer className={cn('flex items-center p-4', className)} {...props} />
}

CardFooter.displayName = 'CardFooter'

// ============================================================================
// Exports
// ============================================================================

export {
  CardRoot,
  CardMedia,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardSection,
  CardFooter,
}

export type {
  CardRootProps,
  CardMediaProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardSectionProps,
  CardFooterProps,
}
