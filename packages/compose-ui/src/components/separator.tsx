'use client'

import { Separator as BaseSeparator } from '@base-ui/react/separator'
import * as React from 'react'

import { cn } from '../lib/utils'

type SeparatorProps = React.ComponentProps<typeof BaseSeparator>

const Separator = ({
  className,
  orientation = 'horizontal',
  ...props
}: SeparatorProps) => {
  return (
    <BaseSeparator
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
}

Separator.displayName = 'Separator'

export { Separator }

export type { SeparatorProps }
