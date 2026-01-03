'use client'

import { Button as BaseButton } from '@base-ui/react/button'
import { LoaderCircle } from 'lucide-react'
import * as React from 'react'

import {
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from '../lib/button-variants'
import { cn } from '../lib/utils'

type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Show loading state */
  loading?: boolean
  /** Content to show when loading */
  loadingText?: string
}

const Button = ({
  className,
  variant,
  size,
  loading = false,
  loadingText,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <LoaderCircle className='animate-spin' />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </BaseButton>
  )
}

Button.displayName = 'Button'

export { Button }

export type { ButtonProps }
