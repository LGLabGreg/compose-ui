'use client'

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
