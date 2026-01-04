'use client'

import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// Avatar Variants
// ============================================================================

const avatarVariants = cva(
  [
    'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full',
    'bg-muted text-foreground',
    'border-2 border-background',
  ],
  {
    variants: {
      size: {
        sm: 'size-8 text-xs',
        default: 'size-10 text-sm',
        lg: 'size-12 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type AvatarSize = 'sm' | 'default' | 'lg'

// ============================================================================
// AvatarRoot
// ============================================================================

type AvatarRootProps = React.ComponentProps<typeof BaseAvatar.Root> & {
  /** Size of the avatar */
  size?: AvatarSize
}

const AvatarRoot = ({ className, size, ...props }: AvatarRootProps) => {
  return (
    <BaseAvatar.Root className={cn(avatarVariants({ size }), className)} {...props} />
  )
}

AvatarRoot.displayName = 'AvatarRoot'

// ============================================================================
// AvatarImage
// ============================================================================

type AvatarImageProps = React.ComponentProps<typeof BaseAvatar.Image>

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <BaseAvatar.Image
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  )
}

AvatarImage.displayName = 'AvatarImage'

// ============================================================================
// AvatarFallback
// ============================================================================

type AvatarFallbackProps = React.ComponentProps<typeof BaseAvatar.Fallback>

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <BaseAvatar.Fallback
      className={cn(
        'flex h-full w-full items-center justify-center font-medium',
        className,
      )}
      {...props}
    />
  )
}

AvatarFallback.displayName = 'AvatarFallback'

// ============================================================================
// AvatarStack
// ============================================================================

type AvatarStackProps = {
  /** ARIA label for the avatar stack list */
  'aria-label': string
  /** Maximum number of avatars to display before showing overflow indicator */
  maxVisible?: number
  /** Additional CSS classes */
  className?: string
  /** Avatar components to display */
  children: React.ReactNode
}

const AvatarStack = ({
  'aria-label': ariaLabel,
  maxVisible,
  className,
  children,
}: AvatarStackProps) => {
  const childrenArray = React.Children.toArray(children)
  const totalCount = childrenArray.length
  const visibleCount =
    maxVisible !== undefined ? Math.min(maxVisible, totalCount) : totalCount
  const overflowCount = totalCount - visibleCount

  const visibleAvatars = childrenArray.slice(0, visibleCount)

  const inferSizeFromFirstChild = (): AvatarSize => {
    const firstChild = childrenArray[0]
    if (React.isValidElement(firstChild) && firstChild.type === AvatarRoot) {
      const childProps = firstChild.props as unknown as { size?: AvatarSize }
      return childProps.size ?? 'default'
    }
    return 'default'
  }

  const overflowSize = inferSizeFromFirstChild()

  return (
    <ul aria-label={ariaLabel} className={cn('flex -space-x-2', className)}>
      {visibleAvatars.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
      {overflowCount > 0 && (
        <li>
          <span
            className={cn(
              'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full',
              'bg-muted text-foreground border-2 border-background',
              'font-medium',
              avatarVariants({ size: overflowSize }),
            )}
          >
            +{overflowCount}
          </span>
        </li>
      )}
    </ul>
  )
}

AvatarStack.displayName = 'AvatarStack'

// ============================================================================
// Exports
// ============================================================================

export { AvatarRoot, AvatarImage, AvatarFallback, AvatarStack }

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarStackProps }
