'use client'

import { Field as BaseField } from '@base-ui/react/field'
import * as React from 'react'

import {
  descriptionStyles,
  errorStyles,
  fieldItemStyles,
  fieldRootStyles,
  inputBaseStyles,
  labelStyles,
} from '../lib/form-variants'
import { cn } from '../lib/utils'

// ============================================================================
// FieldRoot
// ============================================================================

type FieldRootProps = React.ComponentProps<typeof BaseField.Root>

const FieldRoot = ({ className, ...props }: FieldRootProps) => {
  return <BaseField.Root className={cn(fieldRootStyles, className)} {...props} />
}

FieldRoot.displayName = 'FieldRoot'

// ============================================================================
// FieldLabel
// ============================================================================

type FieldLabelProps = React.ComponentProps<typeof BaseField.Label>

const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  return <BaseField.Label className={cn(labelStyles, className)} {...props} />
}

FieldLabel.displayName = 'FieldLabel'

// ============================================================================
// FieldControl
// ============================================================================

type FieldControlProps = React.ComponentProps<typeof BaseField.Control>

const FieldControl = ({ className, ...props }: FieldControlProps) => {
  return <BaseField.Control className={cn(inputBaseStyles, className)} {...props} />
}

FieldControl.displayName = 'FieldControl'

// ============================================================================
// FieldDescription
// ============================================================================

type FieldDescriptionProps = React.ComponentProps<typeof BaseField.Description>

const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  return <BaseField.Description className={cn(descriptionStyles, className)} {...props} />
}

FieldDescription.displayName = 'FieldDescription'

// ============================================================================
// FieldError
// ============================================================================

type FieldErrorProps = React.ComponentProps<typeof BaseField.Error>

const FieldError = ({ className, ...props }: FieldErrorProps) => {
  return <BaseField.Error className={cn(errorStyles, className)} {...props} />
}

FieldError.displayName = 'FieldError'

// ============================================================================
// FieldItem
// ============================================================================

type FieldItemProps = React.ComponentProps<typeof BaseField.Item>

const FieldItem = ({ className, ...props }: FieldItemProps) => {
  return <BaseField.Item className={cn(fieldItemStyles, className)} {...props} />
}

FieldItem.displayName = 'FieldItem'

// ============================================================================
// FieldValidity
// ============================================================================

type FieldValidityProps = React.ComponentProps<typeof BaseField.Validity>

const FieldValidity = (props: FieldValidityProps) => {
  return <BaseField.Validity {...props} />
}

FieldValidity.displayName = 'FieldValidity'

// ============================================================================
// Exports
// ============================================================================

export {
  FieldRoot,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldValidity,
}

export type {
  FieldRootProps,
  FieldLabelProps,
  FieldControlProps,
  FieldDescriptionProps,
  FieldErrorProps,
  FieldItemProps,
  FieldValidityProps,
}
