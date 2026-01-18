'use client'

import { Button } from '@lglab/compose-ui/button'
import { FieldControl, FieldError, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FormRoot } from '@lglab/compose-ui/form'
import * as React from 'react'

export default function DefaultExample() {
  const [errors, setErrors] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  return (
    <FormRoot
      className='w-full max-w-64'
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const value = formData.get('url') as string

        setLoading(true)
        const response = await submitForm(value)
        const serverErrors = {
          url: response.error,
        }

        setErrors(serverErrors)
        setLoading(false)
      }}
    >
      <FieldRoot name='url'>
        <FieldLabel>Homepage</FieldLabel>
        <FieldControl
          type='url'
          required
          defaultValue='https://example.com'
          placeholder='https://example.com'
          pattern='https?://.*'
        />
        <FieldError />
      </FieldRoot>
      <Button disabled={loading} focusableWhenDisabled type='submit'>
        Submit
      </Button>
    </FormRoot>
  )
}

async function submitForm(value: string) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  try {
    const url = new URL(value)

    if (url.hostname.endsWith('example.com')) {
      return { error: 'The example domain is not allowed' }
    }
  } catch {
    return { error: 'This is not a valid URL' }
  }

  return { success: true }
}
