'use client'

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
