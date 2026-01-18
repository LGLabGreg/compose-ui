# Form

A native form element with consolidated error handling.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { FormRoot } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import { FieldControl, FieldError, FieldItem, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot } from '@lglab/compose-ui/form'
import { Check } from 'lucide-react'
import * as React from 'react'

const notificationOptions = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'push', label: 'Push' },
]

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
        const url = formData.get('url') as string
        const notifications = formData.getAll('notifications') as string[]

        setLoading(true)
        const serverErrors = await submitForm(url, notifications)
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
      <FieldRoot name='notifications'>
        <FieldsetRoot render={<CheckboxGroupRoot />}>
          <FieldsetLegend>Notifications</FieldsetLegend>
          {notificationOptions.map((option) => (
            <FieldItem key={option.value}>
              <FieldLabel>
                <CheckboxRoot name='notifications' value={option.value}>
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
                {option.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldError />
      </FieldRoot>
      <Button disabled={loading} focusableWhenDisabled type='submit'>
        Submit
      </Button>
    </FormRoot>
  )
}

async function submitForm(url: string, notifications: string[]) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  const errors: Record<string, string> = {}

  try {
    const parsedUrl = new URL(url)
    if (parsedUrl.hostname.endsWith('example.com')) {
      errors.url = 'The example domain is not allowed'
    }
  } catch {
    errors.url = 'This is not a valid URL'
  }

  return errors
}
```

### Server Action

```tsx
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
```

### With Zod Validation

```tsx
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
```

## Resources

- [Base UI Form Documentation](https://base-ui.com/react/components/form)
- [API Reference](https://base-ui.com/react/components/form#api-reference)
