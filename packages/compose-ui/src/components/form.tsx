'use client'

import { Form as BaseForm } from '@base-ui/react/form'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// FormRoot
// ============================================================================

type FormRootProps = React.ComponentProps<typeof BaseForm>

const FormRoot = ({ className, ...props }: FormRootProps) => {
  return <BaseForm className={cn('flex flex-col gap-4', className)} {...props} />
}

FormRoot.displayName = 'FormRoot'

// ============================================================================
// Exports
// ============================================================================

export { FormRoot }

export type { FormRootProps }
