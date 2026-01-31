'use client'

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
