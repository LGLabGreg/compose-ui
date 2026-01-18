'use client'

import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// CheckboxRoot
// ============================================================================

type CheckboxRootProps = React.ComponentProps<typeof BaseCheckbox.Root>

const CheckboxRoot = ({ className, ...props }: CheckboxRootProps) => {
  return (
    <BaseCheckbox.Root
      className={cn(
        'flex size-5 items-center justify-center rounded-sm border border-input bg-transparent',
        'transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground',
        'data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground',
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

CheckboxRoot.displayName = 'CheckboxRoot'

// ============================================================================
// CheckboxIndicator
// ============================================================================

type CheckboxIndicatorProps = React.ComponentProps<typeof BaseCheckbox.Indicator>

const CheckboxIndicator = ({ className, children, ...props }: CheckboxIndicatorProps) => {
  return (
    <BaseCheckbox.Indicator
      className={cn('flex items-center justify-center data-unchecked:hidden', className)}
      {...props}
    >
      {children}
    </BaseCheckbox.Indicator>
  )
}

CheckboxIndicator.displayName = 'CheckboxIndicator'

// ============================================================================
// Exports
// ============================================================================

export { CheckboxRoot, CheckboxIndicator }

export type { CheckboxRootProps, CheckboxIndicatorProps }
