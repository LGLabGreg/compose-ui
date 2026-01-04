'use client'

import { Button as BaseButton } from '@base-ui/react/button'
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
}

const Button = ({
  className,
  variant,
  size,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

Button.displayName = 'Button'

export { Button }

export type { ButtonProps }
