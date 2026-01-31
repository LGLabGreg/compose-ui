# Form

A native form element with consolidated error handling. Examples include useActionState, Zod schema validation, React Hook Form, and TanStack Form integrations.

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
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot } from '@lglab/compose-ui/form'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { Textarea } from '@lglab/compose-ui/textarea'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const accountTypes = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
  { value: 'developer', label: 'Developer' },
]

const interests = [
  { value: 'technology', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
]

export default function DefaultExample() {
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [loading, setLoading] = React.useState(false)

  return (
    <FormRoot
      className='w-full max-w-md space-y-2'
      errors={errors}
      onFormSubmit={async (formValues) => {
        setLoading(true)
        const serverErrors = await validateForm(formValues)
        setErrors(serverErrors)
        setLoading(false)
      }}
    >
      <FieldRoot name='fullName'>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl required minLength={2} placeholder='John Doe' />
        <FieldError />
      </FieldRoot>

      <FieldRoot name='email'>
        <FieldLabel>Email Address</FieldLabel>
        <FieldControl type='email' required placeholder='john@example.com' />
        <FieldDescription>We will never share your email.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='username'>
        <FieldLabel>Username</FieldLabel>
        <FieldControl
          required
          pattern='[a-z0-9_]+'
          minLength={3}
          maxLength={20}
          placeholder='john_doe'
        />
        <FieldDescription>
          Lowercase letters, numbers, and underscores only.
        </FieldDescription>
        <FieldValidity>
          {(state) => {
            if (state.validity.valueMissing) {
              return <FieldError>Please enter a username.</FieldError>
            }
            if (state.validity.tooShort) {
              return <FieldError>Username must be at least 3 characters.</FieldError>
            }
            if (state.validity.tooLong) {
              return <FieldError>Username must be at most 20 characters.</FieldError>
            }
            if (state.validity.patternMismatch) {
              return (
                <FieldError>
                  Only lowercase letters, numbers, and underscores are allowed.
                </FieldError>
              )
            }
            if (state.error) {
              return <FieldError>{state.error}</FieldError>
            }
            return null
          }}
        </FieldValidity>
        {!!errors.username && <FieldError />}
      </FieldRoot>

      <FieldRoot name='password'>
        <FieldLabel>Password</FieldLabel>
        <FieldControl
          type='password'
          required
          minLength={8}
          placeholder='Enter password'
        />
        <FieldDescription>Must be at least 8 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='country'>
        <FieldLabel nativeLabel={false} render={<div />}>
          Country
        </FieldLabel>
        <SelectRoot items={countries} required>
          <SelectTrigger>
            <SelectValue placeholder='Select country' />
            <SelectIcon>
              <ChevronsUpDown className='size-4' />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {countries.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      <SelectItemText>{label}</SelectItemText>
                      <SelectItemIndicator>
                        <Check className='size-3.5' />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectList>
                <SelectScrollDownArrow />
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </SelectRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='bio'>
        <FieldLabel>Bio</FieldLabel>
        <FieldControl
          render={<Textarea />}
          placeholder='Tell us about yourself...'
          maxLength={500}
        />
        <FieldDescription>Optional. Max 500 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='accountType'>
        <FieldsetRoot
          render={<RadioGroupRoot name='accountType' defaultValue='personal' />}
        >
          <FieldsetLegend>Account Type</FieldsetLegend>
          {accountTypes.map((type) => (
            <FieldItem key={type.value}>
              <FieldLabel>
                <RadioRoot value={type.value}>
                  <RadioIndicator />
                </RadioRoot>
                {type.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='interests'>
        <FieldsetRoot render={<CheckboxGroupRoot defaultValue={[]} />}>
          <FieldsetLegend>Interests</FieldsetLegend>
          {interests.map((interest) => (
            <FieldItem key={interest.value}>
              <FieldLabel>
                <CheckboxRoot value={interest.value}>
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
                {interest.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldDescription>Select at least one interest.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='experience'>
        <FieldsetRoot render={<SliderRoot defaultValue={50} thumbAlignment='edge' />}>
          <div className='flex items-center justify-between text-sm'>
            <FieldsetLegend className='flex-1'>Experience Level</FieldsetLegend>
            <SliderValue className='tabular-nums' />
          </div>
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb aria-label='Experience level' />
            </SliderTrack>
          </SliderControl>
        </FieldsetRoot>
        <FieldDescription>0 = Beginner, 100 = Expert</FieldDescription>
      </FieldRoot>

      <FieldRoot name='newsletter'>
        <FieldItem>
          <FieldLabel className='flex items-center gap-3'>
            <SwitchRoot name='newsletter' defaultChecked>
              <SwitchThumb />
            </SwitchRoot>
            Subscribe to newsletter
          </FieldLabel>
        </FieldItem>
        <FieldDescription>Receive updates and promotions via email.</FieldDescription>
      </FieldRoot>

      <FieldRoot name='terms'>
        <FieldItem>
          <FieldLabel>
            <CheckboxRoot name='terms' required>
              <CheckboxIndicator>
                <Check className='size-3.5' />
              </CheckboxIndicator>
            </CheckboxRoot>
            I agree to the Terms of Service and Privacy Policy
          </FieldLabel>
        </FieldItem>
        <FieldError />
      </FieldRoot>

      <Button disabled={loading} focusableWhenDisabled type='submit' className='w-full'>
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </FormRoot>
  )
}

async function validateForm(
  formValues: Record<string, unknown>,
): Promise<Record<string, string>> {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const errors: Record<string, string> = {}

  const email = formValues.email as string
  const username = formValues.username as string

  // Email validation
  if (email?.endsWith('@example.com')) {
    errors.email = 'Example email addresses are not allowed'
  }

  // Username validation (simulate taken username)
  if (username === 'admin' || username === 'root') {
    errors.username = 'This username is already taken'
  }

  return errors
}
```

### useActionState

```tsx
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot, type FormRootProps } from '@lglab/compose-ui/form'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { Textarea } from '@lglab/compose-ui/textarea'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const accountTypes = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
  { value: 'developer', label: 'Developer' },
]

const interests = [
  { value: 'technology', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
]

interface FormState {
  serverErrors?: FormRootProps['errors']
}

export default function ActionStateExample() {
  const [state, formAction, loading] = React.useActionState<FormState, FormData>(
    submitForm,
    {},
  )

  return (
    <FormRoot
      action={formAction}
      errors={state.serverErrors}
      className='w-full max-w-md space-y-2'
    >
      <FieldRoot name='fullName'>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl required minLength={2} placeholder='John Doe' />
        <FieldError />
      </FieldRoot>

      <FieldRoot name='email'>
        <FieldLabel>Email Address</FieldLabel>
        <FieldControl type='email' required placeholder='john@example.com' />
        <FieldDescription>We will never share your email.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='username'>
        <FieldLabel>Username</FieldLabel>
        <FieldControl
          required
          pattern='[a-z0-9_]+'
          minLength={3}
          maxLength={20}
          placeholder='john_doe'
        />
        <FieldDescription>
          Lowercase letters, numbers, and underscores only.
        </FieldDescription>
        <FieldValidity>
          {(state) => {
            if (state.validity.valueMissing) {
              return <FieldError>Please enter a username.</FieldError>
            }
            if (state.validity.tooShort) {
              return <FieldError>Username must be at least 3 characters.</FieldError>
            }
            if (state.validity.tooLong) {
              return <FieldError>Username must be at most 20 characters.</FieldError>
            }
            if (state.validity.patternMismatch) {
              return (
                <FieldError>
                  Only lowercase letters, numbers, and underscores are allowed.
                </FieldError>
              )
            }
            if (state.error) {
              return <FieldError>{state.error}</FieldError>
            }
            return null
          }}
        </FieldValidity>
        {!!state.serverErrors?.username && <FieldError />}
      </FieldRoot>

      <FieldRoot name='password'>
        <FieldLabel>Password</FieldLabel>
        <FieldControl
          type='password'
          required
          minLength={8}
          placeholder='Enter password'
        />
        <FieldDescription>Must be at least 8 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='country'>
        <FieldLabel nativeLabel={false} render={<div />}>
          Country
        </FieldLabel>
        <SelectRoot items={countries} required>
          <SelectTrigger>
            <SelectValue placeholder='Select country' />
            <SelectIcon>
              <ChevronsUpDown className='size-4' />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {countries.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      <SelectItemText>{label}</SelectItemText>
                      <SelectItemIndicator>
                        <Check className='size-3.5' />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectList>
                <SelectScrollDownArrow />
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </SelectRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='bio'>
        <FieldLabel>Bio</FieldLabel>
        <FieldControl
          render={<Textarea />}
          placeholder='Tell us about yourself...'
          maxLength={500}
        />
        <FieldDescription>Optional. Max 500 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='accountType'>
        <FieldsetRoot
          render={<RadioGroupRoot name='accountType' defaultValue='personal' />}
        >
          <FieldsetLegend>Account Type</FieldsetLegend>
          {accountTypes.map((type) => (
            <FieldItem key={type.value}>
              <FieldLabel>
                <RadioRoot value={type.value}>
                  <RadioIndicator />
                </RadioRoot>
                {type.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='interests'>
        <FieldsetRoot render={<CheckboxGroupRoot defaultValue={[]} />}>
          <FieldsetLegend>Interests</FieldsetLegend>
          {interests.map((interest) => (
            <FieldItem key={interest.value}>
              <FieldLabel>
                <CheckboxRoot value={interest.value}>
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
                {interest.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldDescription>Select at least one interest.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='experience'>
        <FieldsetRoot render={<SliderRoot defaultValue={50} thumbAlignment='edge' />}>
          <div className='flex items-center justify-between text-sm'>
            <FieldsetLegend className='flex-1'>Experience Level</FieldsetLegend>
            <SliderValue className='tabular-nums' />
          </div>
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb aria-label='Experience level' />
            </SliderTrack>
          </SliderControl>
        </FieldsetRoot>
        <FieldDescription>0 = Beginner, 100 = Expert</FieldDescription>
      </FieldRoot>

      <FieldRoot name='newsletter'>
        <FieldItem>
          <FieldLabel className='flex items-center gap-3'>
            <SwitchRoot name='newsletter' defaultChecked>
              <SwitchThumb />
            </SwitchRoot>
            Subscribe to newsletter
          </FieldLabel>
        </FieldItem>
        <FieldDescription>Receive updates and promotions via email.</FieldDescription>
      </FieldRoot>

      <FieldRoot name='terms'>
        <FieldItem>
          <FieldLabel>
            <CheckboxRoot name='terms' required>
              <CheckboxIndicator>
                <Check className='size-3.5' />
              </CheckboxIndicator>
            </CheckboxRoot>
            I agree to the Terms of Service and Privacy Policy
          </FieldLabel>
        </FieldItem>
        <FieldError />
      </FieldRoot>

      <Button disabled={loading} focusableWhenDisabled type='submit' className='w-full'>
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </FormRoot>
  )
}

async function submitForm(_previousState: FormState, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  const email = formData.get('email') as string | null
  const username = formData.get('username') as string | null
  const serverErrors: Record<string, string> = {}

  if (email?.endsWith('@example.com')) {
    serverErrors.email = 'Example email addresses are not allowed'
  }

  if (username === 'admin' || username === 'root') {
    serverErrors.username = 'This username is already taken'
  }

  if (Object.keys(serverErrors).length > 0) {
    return { serverErrors }
  }

  return {}
}
```

### Zod Validation

```tsx
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot, type FormRootProps } from '@lglab/compose-ui/form'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { Textarea } from '@lglab/compose-ui/textarea'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { z } from 'zod'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const accountTypes = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
  { value: 'developer', label: 'Developer' },
]

const interests = [
  { value: 'technology', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
]

const schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .refine((email) => !email.endsWith('@example.com'), {
      message: 'Example email addresses are not allowed',
    }),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-z0-9_]+$/, 'Only lowercase letters, numbers, and underscores are allowed')
    .refine((username) => username !== 'admin' && username !== 'root', {
      message: 'This username is already taken',
    }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  country: z.string().min(1, 'Please select a country'),
  bio: z.string().max(500, 'Bio must be at most 500 characters').optional(),
  accountType: z.enum(['personal', 'business', 'developer']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  experience: z.number().min(0).max(100),
  newsletter: z.boolean(),
  terms: z.literal(true, 'You must agree to the terms'),
})

async function submitForm(formValues: Record<string, unknown>) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

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
  const [loading, setLoading] = React.useState(false)

  return (
    <FormRoot
      className='w-full max-w-md space-y-2'
      errors={errors}
      onFormSubmit={async (formValues) => {
        setLoading(true)
        const response = await submitForm(formValues)
        setErrors(response.errors)
        setLoading(false)
      }}
    >
      <FieldRoot name='fullName'>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl required minLength={2} placeholder='John Doe' />
        <FieldError />
      </FieldRoot>

      <FieldRoot name='email'>
        <FieldLabel>Email Address</FieldLabel>
        <FieldControl type='email' required placeholder='john@example.com' />
        <FieldDescription>We will never share your email.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='username'>
        <FieldLabel>Username</FieldLabel>
        <FieldControl
          required
          pattern='[a-z0-9_]+'
          minLength={3}
          maxLength={20}
          placeholder='john_doe'
        />
        <FieldDescription>
          Lowercase letters, numbers, and underscores only.
        </FieldDescription>
        <FieldValidity>
          {(state) => {
            if (state.validity.valueMissing) {
              return <FieldError>Please enter a username.</FieldError>
            }
            if (state.validity.tooShort) {
              return <FieldError>Username must be at least 3 characters.</FieldError>
            }
            if (state.validity.tooLong) {
              return <FieldError>Username must be at most 20 characters.</FieldError>
            }
            if (state.validity.patternMismatch) {
              return (
                <FieldError>
                  Only lowercase letters, numbers, and underscores are allowed.
                </FieldError>
              )
            }
            if (state.error) {
              return <FieldError>{state.error}</FieldError>
            }
            return null
          }}
        </FieldValidity>
        {!!errors?.username && <FieldError />}
      </FieldRoot>

      <FieldRoot name='password'>
        <FieldLabel>Password</FieldLabel>
        <FieldControl
          type='password'
          required
          minLength={8}
          placeholder='Enter password'
        />
        <FieldDescription>Must be at least 8 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='country'>
        <FieldLabel nativeLabel={false} render={<div />}>
          Country
        </FieldLabel>
        <SelectRoot items={countries} required>
          <SelectTrigger>
            <SelectValue placeholder='Select country' />
            <SelectIcon>
              <ChevronsUpDown className='size-4' />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {countries.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      <SelectItemText>{label}</SelectItemText>
                      <SelectItemIndicator>
                        <Check className='size-3.5' />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectList>
                <SelectScrollDownArrow />
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </SelectRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='bio'>
        <FieldLabel>Bio</FieldLabel>
        <FieldControl
          render={<Textarea />}
          placeholder='Tell us about yourself...'
          maxLength={500}
        />
        <FieldDescription>Optional. Max 500 characters.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='accountType'>
        <FieldsetRoot
          render={<RadioGroupRoot name='accountType' defaultValue='personal' />}
        >
          <FieldsetLegend>Account Type</FieldsetLegend>
          {accountTypes.map((type) => (
            <FieldItem key={type.value}>
              <FieldLabel>
                <RadioRoot value={type.value}>
                  <RadioIndicator />
                </RadioRoot>
                {type.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='interests'>
        <FieldsetRoot render={<CheckboxGroupRoot defaultValue={[]} />}>
          <FieldsetLegend>Interests</FieldsetLegend>
          {interests.map((interest) => (
            <FieldItem key={interest.value}>
              <FieldLabel>
                <CheckboxRoot value={interest.value}>
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
                {interest.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </FieldsetRoot>
        <FieldDescription>Select at least one interest.</FieldDescription>
        <FieldError />
      </FieldRoot>

      <FieldRoot name='experience'>
        <FieldsetRoot render={<SliderRoot defaultValue={50} thumbAlignment='edge' />}>
          <div className='flex items-center justify-between text-sm'>
            <FieldsetLegend className='flex-1'>Experience Level</FieldsetLegend>
            <SliderValue className='tabular-nums' />
          </div>
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb aria-label='Experience level' />
            </SliderTrack>
          </SliderControl>
        </FieldsetRoot>
        <FieldDescription>0 = Beginner, 100 = Expert</FieldDescription>
      </FieldRoot>

      <FieldRoot name='newsletter'>
        <FieldItem>
          <FieldLabel className='flex items-center gap-3'>
            <SwitchRoot name='newsletter' defaultChecked>
              <SwitchThumb />
            </SwitchRoot>
            Subscribe to newsletter
          </FieldLabel>
        </FieldItem>
        <FieldDescription>Receive updates and promotions via email.</FieldDescription>
      </FieldRoot>

      <FieldRoot name='terms'>
        <FieldItem>
          <FieldLabel>
            <CheckboxRoot name='terms' required>
              <CheckboxIndicator>
                <Check className='size-3.5' />
              </CheckboxIndicator>
            </CheckboxRoot>
            I agree to the Terms of Service and Privacy Policy
          </FieldLabel>
        </FieldItem>
        <FieldError />
      </FieldRoot>

      <Button disabled={loading} focusableWhenDisabled type='submit' className='w-full'>
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </FormRoot>
  )
}
```

### React Hook Form

```tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot } from '@lglab/compose-ui/form'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { Textarea } from '@lglab/compose-ui/textarea'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const accountTypes = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
  { value: 'developer', label: 'Developer' },
]

const interests = [
  { value: 'technology', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
]

const schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z
    .email({ error: 'Please enter a valid email address' })
    .refine((email) => !email.endsWith('@example.com'), {
      message: 'Example email addresses are not allowed',
    }),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-z0-9_]+$/, 'Only lowercase letters, numbers, and underscores are allowed')
    .refine((username) => username !== 'admin' && username !== 'root', {
      message: 'This username is already taken',
    }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  country: z.string().min(1, 'Please select a country'),
  bio: z.string().max(500, 'Bio must be at most 500 characters').optional(),
  accountType: z.enum(['personal', 'business', 'developer']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  experience: z.number().min(0).max(100),
  newsletter: z.boolean(),
  terms: z.literal(true, { message: 'You must agree to the terms' }),
})

type FormValues = z.infer<typeof schema>

export default function WithReactHookFormExample() {
  const { control, handleSubmit, formState, setError } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      country: '',
      bio: '',
      accountType: 'personal',
      interests: [],
      experience: 50,
      newsletter: true,
      terms: undefined,
    },
  })

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate server error for specific username
    if (data.username === 'taken_user') {
      return setError('username', {
        type: 'server',
        message: 'This username is already registered',
      })
    }

    // Simulate general server error for specific email
    if (data.email === 'error@test.com') {
      return setError('root.serverError', {
        type: 'server',
        message: 'Unable to create account. Please try again later.',
      })
    }
  }

  return (
    <FormRoot
      aria-label='Create account'
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-md space-y-2'
    >
      <Controller
        name='fullName'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Full Name</FieldLabel>
            <FieldControl
              ref={ref}
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder='John Doe'
            />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='email'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Email Address</FieldLabel>
            <FieldControl
              ref={ref}
              type='email'
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder='john@example.com'
            />
            <FieldDescription>We will never share your email.</FieldDescription>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='username'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Username</FieldLabel>
            <FieldControl
              ref={ref}
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder='john_doe'
            />
            <FieldDescription>
              Lowercase letters, numbers, and underscores only.
            </FieldDescription>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Password</FieldLabel>
            <FieldControl
              ref={ref}
              type='password'
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder='Enter password'
            />
            <FieldDescription>Must be at least 8 characters.</FieldDescription>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='country'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel nativeLabel={false} render={<div />}>
              Country
            </FieldLabel>
            <SelectRoot
              items={countries}
              value={value}
              onValueChange={onChange}
              inputRef={ref}
            >
              <SelectTrigger onBlur={onBlur}>
                <SelectValue placeholder='Select country' />
                <SelectIcon>
                  <ChevronsUpDown className='size-4' />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner>
                  <SelectPopup>
                    <SelectScrollUpArrow />
                    <SelectList>
                      {countries.map(({ label, value: countryValue }) => (
                        <SelectItem key={countryValue} value={countryValue}>
                          <SelectItemText>{label}</SelectItemText>
                          <SelectItemIndicator>
                            <Check className='size-3.5' />
                          </SelectItemIndicator>
                        </SelectItem>
                      ))}
                    </SelectList>
                    <SelectScrollDownArrow />
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </SelectRoot>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='bio'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Bio</FieldLabel>
            <FieldControl
              ref={ref}
              render={<Textarea />}
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder='Tell us about yourself...'
            />
            <FieldDescription>Optional. Max 500 characters.</FieldDescription>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='accountType'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldsetRoot
              render={
                <RadioGroupRoot
                  name='accountType'
                  value={value}
                  onValueChange={onChange}
                  inputRef={ref}
                />
              }
            >
              <FieldsetLegend>Account Type</FieldsetLegend>
              {accountTypes.map((type) => (
                <FieldItem key={type.value}>
                  <FieldLabel>
                    <RadioRoot value={type.value} onBlur={onBlur}>
                      <RadioIndicator />
                    </RadioRoot>
                    {type.label}
                  </FieldLabel>
                </FieldItem>
              ))}
            </FieldsetRoot>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='interests'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldsetRoot
              render={<CheckboxGroupRoot value={value} onValueChange={onChange} />}
            >
              <FieldsetLegend>Interests</FieldsetLegend>
              {interests.map((interest, index) => (
                <FieldItem key={interest.value}>
                  <FieldLabel>
                    <CheckboxRoot
                      value={interest.value}
                      inputRef={index === 0 ? ref : undefined}
                      onBlur={onBlur}
                    >
                      <CheckboxIndicator>
                        <Check className='size-3.5' />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                    {interest.label}
                  </FieldLabel>
                </FieldItem>
              ))}
            </FieldsetRoot>
            <FieldDescription>Select at least one interest.</FieldDescription>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      <Controller
        name='experience'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldsetRoot
              render={
                <SliderRoot
                  value={value}
                  onValueChange={onChange}
                  onValueCommitted={onChange}
                  thumbAlignment='edge'
                />
              }
            >
              <div className='flex items-center justify-between text-sm'>
                <FieldsetLegend className='flex-1'>Experience Level</FieldsetLegend>
                <SliderValue className='tabular-nums' />
              </div>
              <SliderControl>
                <SliderTrack>
                  <SliderIndicator />
                  <SliderThumb
                    aria-label='Experience level'
                    onBlur={onBlur}
                    inputRef={ref}
                  />
                </SliderTrack>
              </SliderControl>
            </FieldsetRoot>
            <FieldDescription>0 = Beginner, 100 = Expert</FieldDescription>
          </FieldRoot>
        )}
      />

      <Controller
        name='newsletter'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldItem>
              <FieldLabel className='flex items-center gap-3'>
                <SwitchRoot
                  checked={value}
                  inputRef={ref}
                  onCheckedChange={onChange}
                  onBlur={onBlur}
                >
                  <SwitchThumb />
                </SwitchRoot>
                Subscribe to newsletter
              </FieldLabel>
            </FieldItem>
            <FieldDescription>Receive updates and promotions via email.</FieldDescription>
          </FieldRoot>
        )}
      />

      <Controller
        name='terms'
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <FieldRoot name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldItem>
              <FieldLabel>
                <CheckboxRoot
                  checked={value ?? false}
                  inputRef={ref}
                  onCheckedChange={onChange}
                  onBlur={onBlur}
                >
                  <CheckboxIndicator>
                    <Check className='size-3.5' />
                  </CheckboxIndicator>
                </CheckboxRoot>
                I agree to the Terms of Service and Privacy Policy
              </FieldLabel>
            </FieldItem>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </FieldRoot>
        )}
      />

      {formState.errors.root?.serverError && (
        <p className='text-sm text-destructive' role='alert'>
          {formState.errors.root.serverError.message}
        </p>
      )}

      <Button
        disabled={formState.isSubmitting}
        focusableWhenDisabled
        type='submit'
        className='w-full'
      >
        {formState.isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>
    </FormRoot>
  )
}
```

### TanStack Form

```tsx
import { Button } from '@lglab/compose-ui/button'
import { CheckboxIndicator, CheckboxRoot } from '@lglab/compose-ui/checkbox'
import { CheckboxGroupRoot } from '@lglab/compose-ui/checkbox-group'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
} from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'
import { FormRoot } from '@lglab/compose-ui/form'
import { RadioIndicator, RadioRoot } from '@lglab/compose-ui/radio'
import { RadioGroupRoot } from '@lglab/compose-ui/radio-group'
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@lglab/compose-ui/slider'
import { SwitchRoot, SwitchThumb } from '@lglab/compose-ui/switch'
import { Textarea } from '@lglab/compose-ui/textarea'
import { DeepKeys, ValidationError, useForm } from '@tanstack/react-form'
import { Check, ChevronsUpDown } from 'lucide-react'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const accountTypes = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
  { value: 'developer', label: 'Developer' },
]

const interests = [
  { value: 'technology', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
]

interface FormValues {
  fullName: string
  email: string
  username: string
  password: string
  country: string
  bio: string
  accountType: 'personal' | 'business' | 'developer'
  interests: string[]
  experience: number
  newsletter: boolean
  terms: boolean
}

const defaultValues: FormValues = {
  fullName: '',
  email: '',
  username: '',
  password: '',
  country: '',
  bio: '',
  accountType: 'personal',
  interests: [],
  experience: 50,
  newsletter: true,
  terms: false,
}

export default function WithTanstackFormExample() {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (value.username === 'taken_user') {
        form.setFieldMeta('username', (prev) => ({
          ...prev,
          errorMap: { onChange: 'This username is already registered' },
        }))
        return
      }
      console.log('Form submitted:', value)
    },
    validators: {
      onChange: ({ value: formValues }) => {
        const errors: Partial<Record<DeepKeys<FormValues>, ValidationError>> = {}

        if (!formValues.fullName || formValues.fullName.length < 2) {
          errors.fullName = 'Full name must be at least 2 characters'
        }

        if (!formValues.email) {
          errors.email = 'Please enter a valid email address'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
          errors.email = 'Please enter a valid email address'
        } else if (formValues.email.endsWith('@example.com')) {
          errors.email = 'Example email addresses are not allowed'
        }

        if (!formValues.username) {
          errors.username = 'Please enter a username'
        } else if (formValues.username.length < 3) {
          errors.username = 'Username must be at least 3 characters'
        } else if (formValues.username.length > 20) {
          errors.username = 'Username must be at most 20 characters'
        } else if (!/^[a-z0-9_]+$/.test(formValues.username)) {
          errors.username = 'Only lowercase letters, numbers, and underscores are allowed'
        } else if (formValues.username === 'admin' || formValues.username === 'root') {
          errors.username = 'This username is already taken'
        }

        if (!formValues.password || formValues.password.length < 8) {
          errors.password = 'Password must be at least 8 characters'
        }

        if (!formValues.country) {
          errors.country = 'Please select a country'
        }

        if (formValues.bio && formValues.bio.length > 500) {
          errors.bio = 'Bio must be at most 500 characters'
        }

        if (formValues.interests.length === 0) {
          errors.interests = 'Please select at least one interest'
        }

        if (!formValues.terms) {
          errors.terms = 'You must agree to the terms'
        }

        return Object.keys(errors).length > 0
          ? { form: errors, fields: errors }
          : undefined
      },
    },
  })

  return (
    <FormRoot
      aria-label='Create account'
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
      className='w-full max-w-md space-y-2'
    >
      <form.Field name='fullName'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel>Full Name</FieldLabel>
              <FieldControl
                value={value}
                onBlur={handleBlur}
                onValueChange={handleChange}
                placeholder='John Doe'
              />
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='email'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel>Email Address</FieldLabel>
              <FieldControl
                type='email'
                value={value}
                onBlur={handleBlur}
                onValueChange={handleChange}
                placeholder='john@example.com'
              />
              <FieldDescription>We will never share your email.</FieldDescription>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='username'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel>Username</FieldLabel>
              <FieldControl
                value={value}
                onBlur={handleBlur}
                onValueChange={handleChange}
                placeholder='john_doe'
              />
              <FieldDescription>
                Lowercase letters, numbers, and underscores only.
              </FieldDescription>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='password'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel>Password</FieldLabel>
              <FieldControl
                type='password'
                value={value}
                onBlur={handleBlur}
                onValueChange={handleChange}
                placeholder='Enter password'
              />
              <FieldDescription>Must be at least 8 characters.</FieldDescription>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='country'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel nativeLabel={false} render={<div />}>
                Country
              </FieldLabel>
              <SelectRoot
                items={countries}
                value={value}
                onValueChange={(v) => handleChange(v ?? '')}
              >
                <SelectTrigger onBlur={handleBlur}>
                  <SelectValue placeholder='Select country' />
                  <SelectIcon>
                    <ChevronsUpDown className='size-4' />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectScrollUpArrow />
                      <SelectList>
                        {countries.map(({ label, value: countryValue }) => (
                          <SelectItem key={countryValue} value={countryValue}>
                            <SelectItemText>{label}</SelectItemText>
                            <SelectItemIndicator>
                              <Check className='size-3.5' />
                            </SelectItemIndicator>
                          </SelectItem>
                        ))}
                      </SelectList>
                      <SelectScrollDownArrow />
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='bio'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldLabel>Bio</FieldLabel>
              <FieldControl
                render={<Textarea />}
                value={value}
                onBlur={handleBlur}
                onValueChange={handleChange}
                placeholder='Tell us about yourself...'
              />
              <FieldDescription>Optional. Max 500 characters.</FieldDescription>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='accountType'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldsetRoot
                render={
                  <RadioGroupRoot
                    name='accountType'
                    value={value}
                    onValueChange={(v) => handleChange(v as FormValues['accountType'])}
                  />
                }
              >
                <FieldsetLegend>Account Type</FieldsetLegend>
                {accountTypes.map((type) => (
                  <FieldItem key={type.value}>
                    <FieldLabel>
                      <RadioRoot value={type.value} onBlur={handleBlur}>
                        <RadioIndicator />
                      </RadioRoot>
                      {type.label}
                    </FieldLabel>
                  </FieldItem>
                ))}
              </FieldsetRoot>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='interests'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldsetRoot
                render={<CheckboxGroupRoot value={value} onValueChange={handleChange} />}
              >
                <FieldsetLegend>Interests</FieldsetLegend>
                {interests.map((interest) => (
                  <FieldItem key={interest.value}>
                    <FieldLabel>
                      <CheckboxRoot value={interest.value} onBlur={handleBlur}>
                        <CheckboxIndicator>
                          <Check className='size-3.5' />
                        </CheckboxIndicator>
                      </CheckboxRoot>
                      {interest.label}
                    </FieldLabel>
                  </FieldItem>
                ))}
              </FieldsetRoot>
              <FieldDescription>Select at least one interest.</FieldDescription>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='experience'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldsetRoot
                render={
                  <SliderRoot
                    value={value}
                    onValueChange={(v) => handleChange(typeof v === 'number' ? v : v[0])}
                    onValueCommitted={(v) =>
                      handleChange(typeof v === 'number' ? v : v[0])
                    }
                    thumbAlignment='edge'
                  />
                }
              >
                <div className='flex items-center justify-between text-sm'>
                  <FieldsetLegend className='flex-1'>Experience Level</FieldsetLegend>
                  <SliderValue className='tabular-nums' />
                </div>
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                    <SliderThumb aria-label='Experience level' onBlur={handleBlur} />
                  </SliderTrack>
                </SliderControl>
              </FieldsetRoot>
              <FieldDescription>0 = Beginner, 100 = Expert</FieldDescription>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='newsletter'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldItem>
                <FieldLabel className='flex items-center gap-3'>
                  <SwitchRoot
                    checked={value}
                    onCheckedChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <SwitchThumb />
                  </SwitchRoot>
                  Subscribe to newsletter
                </FieldLabel>
              </FieldItem>
              <FieldDescription>
                Receive updates and promotions via email.
              </FieldDescription>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Field name='terms'>
        {({ name, state, handleBlur, handleChange }) => {
          const { value, meta } = state
          const { isValid, isTouched, isDirty, errors } = meta
          return (
            <FieldRoot name={name} invalid={!isValid} touched={isTouched} dirty={isDirty}>
              <FieldItem>
                <FieldLabel>
                  <CheckboxRoot
                    checked={value}
                    onCheckedChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <CheckboxIndicator>
                      <Check className='size-3.5' />
                    </CheckboxIndicator>
                  </CheckboxRoot>
                  I agree to the Terms of Service and Privacy Policy
                </FieldLabel>
              </FieldItem>
              <FieldError match={!isValid}>{errors.join(', ')}</FieldError>
            </FieldRoot>
          )
        }}
      </form.Field>

      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => (
          <Button
            disabled={isSubmitting}
            focusableWhenDisabled
            type='submit'
            className='w-full'
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        )}
      </form.Subscribe>
    </FormRoot>
  )
}
```

## Resources

- [Base UI Form Documentation](https://base-ui.com/react/components/form)
- [API Reference](https://base-ui.com/react/components/form#api-reference)
