'use client'

import { Button } from '@lglab/compose-ui/button'
import { FieldControl, FieldError, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FormRoot, type FormRootProps } from '@lglab/compose-ui/form'
import * as React from 'react'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce
    .number({ message: 'Age must be a number' })
    .positive('Age must be a positive number'),
})

async function submitForm(formValues: Record<string, unknown>) {
  const result = schema.safeParse(formValues)

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
    }
  }

  return {
    errors: {},
  }
}

export default function WithZodExample() {
  const [errors, setErrors] = React.useState<FormRootProps['errors']>({})

  return (
    <FormRoot
      className='w-full max-w-64'
      errors={errors}
      onFormSubmit={async (formValues) => {
        const response = await submitForm(formValues)
        setErrors(response.errors)
      }}
    >
      <FieldRoot name='name'>
        <FieldLabel>Name</FieldLabel>
        <FieldControl placeholder='Enter name' />
        <FieldError />
      </FieldRoot>
      <FieldRoot name='age'>
        <FieldLabel>Age</FieldLabel>
        <FieldControl placeholder='Enter age' />
        <FieldError />
      </FieldRoot>
      <Button type='submit'>Submit</Button>
    </FormRoot>
  )
}
