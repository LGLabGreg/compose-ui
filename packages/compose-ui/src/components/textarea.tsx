'use client'

import * as React from 'react'

import { inputBaseStyles } from '../lib/form-variants'
import { cn } from '../lib/utils'

type TextareaProps = React.ComponentProps<'textarea'>

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(inputBaseStyles, 'h-auto min-h-20 py-2', className)}
      {...props}
    />
  )
}

Textarea.displayName = 'Textarea'

export { Textarea }

export type { TextareaProps }
