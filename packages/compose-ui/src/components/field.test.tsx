import { screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
  FieldValidity,
} from './field'
import { FormRoot } from './form'
import { Input } from './input'

describe('Field', () => {
  it('renders complete field with label, input, and description', () => {
    render(
      <FieldRoot>
        <FieldLabel>Email</FieldLabel>
        <FieldControl render={<Input />} />
        <FieldDescription>Enter your email address</FieldDescription>
      </FieldRoot>,
    )

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Enter your email address')).toBeInTheDocument()
  })

  it('associates label with control for accessibility', () => {
    render(
      <FieldRoot>
        <FieldLabel>Username</FieldLabel>
        <FieldControl render={<Input />} />
      </FieldRoot>,
    )

    const input = screen.getByRole('textbox')
    const label = screen.getByText('Username')

    expect(label).toHaveAttribute('for', input.id)
  })

  it('displays error when invalid', async () => {
    render(
      <FieldRoot invalid>
        <FieldLabel>Email</FieldLabel>
        <FieldControl render={<Input type='email' />} />
        <FieldError match={true}>Please enter a valid email</FieldError>
      </FieldRoot>,
    )

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('disabled state propagates to all parts', () => {
    render(
      <FieldRoot disabled>
        <FieldLabel>Name</FieldLabel>
        <FieldControl render={<Input />} />
      </FieldRoot>,
    )

    const input = screen.getByRole('textbox')
    const label = screen.getByText('Name')

    expect(input).toBeDisabled()
    expect(label).toHaveAttribute('data-disabled', '')
  })

  it('applies custom className to parts', () => {
    render(
      <FieldRoot className='custom-root'>
        <FieldLabel className='custom-label'>Email</FieldLabel>
        <FieldControl render={<Input className='custom-input' />} />
        <FieldDescription className='custom-description'>Enter email</FieldDescription>
      </FieldRoot>,
    )

    expect(screen.getByRole('textbox').closest('.custom-root')).toBeInTheDocument()
    expect(screen.getByText('Email')).toHaveClass('custom-label')
    expect(screen.getByRole('textbox')).toHaveClass('custom-input')
    expect(screen.getByText('Enter email')).toHaveClass('custom-description')
  })

  describe('FieldValidity', () => {
    it('renders valueMissing custom message when required field is empty', async () => {
      const { user } = render(
        <FormRoot>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl required />
            <FieldValidity>
              {(state) => {
                if (state.validity.valueMissing) {
                  return (
                    <FieldError data-testid='error'>Please enter a username.</FieldError>
                  )
                }
                return null
              }}
            </FieldValidity>
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>,
      )

      // Initially no error shown
      expect(screen.queryByTestId('error')).not.toBeInTheDocument()

      // Submit empty form - valueMissing
      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await waitFor(() => {
        expect(screen.getByTestId('error')).toHaveTextContent('Please enter a username.')
      })
    })

    it('renders patternMismatch custom message when pattern does not match', async () => {
      const { user } = render(
        <FormRoot>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl required pattern='[a-z]+' defaultValue='ABC123' />
            <FieldValidity>
              {(state) => {
                if (state.validity.patternMismatch) {
                  return (
                    <FieldError data-testid='error'>
                      Only lowercase letters allowed
                    </FieldError>
                  )
                }
                return null
              }}
            </FieldValidity>
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>,
      )

      // Initially no error shown (not touched)
      expect(screen.queryByTestId('error')).not.toBeInTheDocument()

      // Submit with invalid pattern
      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await waitFor(() => {
        expect(screen.getByTestId('error')).toHaveTextContent(
          'Only lowercase letters allowed',
        )
      })
    })

    it('provides validity state object with expected shape', async () => {
      let capturedError = ''
      let capturedErrors: string[] = []
      let capturedValidity: { valid: boolean | null; valueMissing: boolean } | null = null

      const { user } = render(
        <FormRoot>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl required />
            <FieldValidity>
              {(state) => {
                capturedError = state.error
                capturedErrors = state.errors
                capturedValidity = state.validity
                if (state.validity.valueMissing) {
                  return <FieldError data-testid='error'>Required</FieldError>
                }
                return <div data-testid='valid'>Valid</div>
              }}
            </FieldValidity>
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>,
      )

      // Initially shows valid (not yet submitted)
      expect(screen.getByTestId('valid')).toBeInTheDocument()

      // Submit to trigger validation
      await user.click(screen.getByRole('button', { name: 'Submit' }))

      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument()
      })

      // Verify state has expected shape - note: error contains native validation message
      expect(capturedValidity).toMatchObject({
        valueMissing: true,
        valid: false,
      })
      // Native validation provides error message
      expect(capturedError).toBeTruthy()
      expect(capturedErrors.length).toBeGreaterThan(0)
    })

    it('does NOT receive server errors in state.error (Base UI limitation)', async () => {
      // This documents a Base UI limitation:
      // Server errors from FormRoot.errors prop are NOT passed to FieldValidity's state.error
      // The field gets marked as invalid (data-invalid), but state.error remains empty
      let capturedError = ''
      let capturedErrors: string[] = []

      render(
        <FormRoot errors={{ username: 'Username is already taken' }}>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl defaultValue='admin' />
            <FieldValidity>
              {(state) => {
                capturedError = state.error
                capturedErrors = state.errors
                // state.error will be empty even though there's a server error
                if (state.error) {
                  return (
                    <FieldError data-testid='validity-error'>{state.error}</FieldError>
                  )
                }
                return <div data-testid='no-error'>No error in state</div>
              }}
            </FieldValidity>
          </FieldRoot>
        </FormRoot>,
      )

      // Wait for render
      await waitFor(() => {
        expect(screen.getByTestId('no-error')).toBeInTheDocument()
      })

      // FieldValidity does NOT receive server errors
      expect(capturedError).toBe('')
      expect(capturedErrors).toEqual([])

      // The "no error" message shows because state.error is empty
      expect(screen.queryByTestId('validity-error')).not.toBeInTheDocument()
    })

    it('handles multiple validation states with priority order', async () => {
      const { user } = render(
        <FormRoot>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl required pattern='[a-z0-9_]+' minLength={3} maxLength={20} />
            <FieldValidity>
              {(state) => {
                // Priority order matters - check most specific first
                if (state.validity.valueMissing) {
                  return (
                    <FieldError data-testid='error'>Please enter a username.</FieldError>
                  )
                }
                if (state.validity.tooShort) {
                  return (
                    <FieldError data-testid='error'>
                      Username must be at least 3 characters.
                    </FieldError>
                  )
                }
                if (state.validity.tooLong) {
                  return (
                    <FieldError data-testid='error'>
                      Username must be at most 20 characters.
                    </FieldError>
                  )
                }
                if (state.validity.patternMismatch) {
                  return (
                    <FieldError data-testid='error'>
                      Only lowercase letters, numbers, and underscores allowed.
                    </FieldError>
                  )
                }
                return null
              }}
            </FieldValidity>
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>,
      )

      // Test valueMissing (empty field)
      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await waitFor(() => {
        expect(screen.getByTestId('error')).toHaveTextContent('Please enter a username.')
      })

      // Test patternMismatch (invalid characters)
      const input = screen.getByRole('textbox')
      await user.type(input, 'INVALID!')
      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await waitFor(() => {
        expect(screen.getByTestId('error')).toHaveTextContent(
          'Only lowercase letters, numbers, and underscores allowed.',
        )
      })

      // Test valid input (no error)
      await user.clear(input)
      await user.type(input, 'valid_user')
      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await waitFor(() => {
        expect(screen.queryByTestId('error')).not.toBeInTheDocument()
      })
    })
  })
})
