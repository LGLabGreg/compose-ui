'use client'

import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset'
import * as React from 'react'

import { labelStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'

// ============================================================================
// FieldsetRoot
// ============================================================================

type FieldsetRootProps = React.ComponentProps<typeof BaseFieldset.Root>

const FieldsetRoot = ({ className, ...props }: FieldsetRootProps) => {
  return <BaseFieldset.Root className={cn('flex flex-col gap-2', className)} {...props} />
}

FieldsetRoot.displayName = 'FieldsetRoot'

// ============================================================================
// FieldsetLegend
// ============================================================================

type FieldsetLegendProps = React.ComponentProps<typeof BaseFieldset.Legend>

const FieldsetLegend = ({ className, ...props }: FieldsetLegendProps) => {
  return <BaseFieldset.Legend className={cn('mb-1', labelStyles, className)} {...props} />
}

FieldsetLegend.displayName = 'FieldsetLegend'

// ============================================================================
// Exports
// ============================================================================

export { FieldsetRoot, FieldsetLegend }

export type { FieldsetRootProps, FieldsetLegendProps }
