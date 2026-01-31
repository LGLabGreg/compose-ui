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
