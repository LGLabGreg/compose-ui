'use client'

import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// CheckboxGroupRoot
// ============================================================================

type CheckboxGroupRootProps = React.ComponentProps<typeof BaseCheckboxGroup>

const CheckboxGroupRoot = ({ className, ...props }: CheckboxGroupRootProps) => {
  return (
    <BaseCheckboxGroup
      className={cn('flex flex-col items-start gap-2', className)}
      {...props}
    />
  )
}

CheckboxGroupRoot.displayName = 'CheckboxGroupRoot'

// ============================================================================
// Exports
// ============================================================================

export { CheckboxGroupRoot }

export type { CheckboxGroupRootProps }
