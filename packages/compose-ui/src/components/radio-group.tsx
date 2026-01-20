'use client'

import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// RadioGroupRoot
// ============================================================================

type RadioGroupRootProps = React.ComponentProps<typeof BaseRadioGroup>

const RadioGroupRoot = ({ className, ...props }: RadioGroupRootProps) => {
  return (
    <BaseRadioGroup
      className={cn('flex flex-col items-start gap-2', className)}
      {...props}
    />
  )
}

RadioGroupRoot.displayName = 'RadioGroupRoot'

// ============================================================================
// Exports
// ============================================================================

export { RadioGroupRoot }

export type { RadioGroupRootProps }
