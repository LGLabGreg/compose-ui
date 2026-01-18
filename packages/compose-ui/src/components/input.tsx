'use client'

import { Input as BaseInput } from '@base-ui/react/input'
import * as React from 'react'

import { inputBaseStyles } from '../lib/input-variants'
import { cn } from '../lib/utils'

type InputProps = React.ComponentProps<typeof BaseInput>

const Input = ({ className, ...props }: InputProps) => {
  return <BaseInput className={cn(inputBaseStyles, className)} {...props} />
}

Input.displayName = 'Input'

export { Input }

export type { InputProps }
