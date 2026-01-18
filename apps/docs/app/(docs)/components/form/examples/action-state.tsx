'use client'

import { Button } from '@lglab/compose-ui/button'
import { FieldControl, FieldError, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FormRoot, type FormRootProps } from '@lglab/compose-ui/form'
import * as React from 'react'

interface FormState {
  serverErrors?: FormRootProps['errors']
}

export default function ActionStateExample() {
  const [state, formAction, loading] = React.useActionState<FormState, FormData>(
    submitForm,
    {},
  )

  return (
    <FormRoot action={formAction} errors={state.serverErrors} className='w-full max-w-64'>
      <FieldRoot name='username'>
        <FieldLabel>Username</FieldLabel>
        <FieldControl required defaultValue='admin' placeholder='e.g. alice132' />
        <FieldError />
      </FieldRoot>
      <Button type='submit' disabled={loading} focusableWhenDisabled>
        Submit
      </Button>
    </FormRoot>
  )
}

async function submitForm(_previousState: FormState, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  try {
    const username = formData.get('username') as string | null

    if (username === 'admin') {
      return {
        success: false,
        serverErrors: { username: "'admin' is reserved for system use" },
      }
    }

    const success = Math.random() > 0.5

    if (!success) {
      return {
        serverErrors: { username: `${username} is unavailable` },
      }
    }
  } catch {
    return { serverErrors: { username: 'A server error has occurred' } }
  }

  return {}
}
