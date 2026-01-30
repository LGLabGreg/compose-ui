import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
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

describe('Form', () => {
  it('renders a form element', () => {
    render(
      <FormRoot data-testid='form'>
        <FieldRoot name='name'>
          <FieldLabel>Name</FieldLabel>
          <FieldControl placeholder='Enter name' />
        </FieldRoot>
      </FormRoot>,
    )

    expect(screen.getByTestId('form')).toBeInTheDocument()
    expect(screen.getByTestId('form').tagName).toBe('FORM')
  })

  it('handles form submission with onSubmit', async () => {
    const user = userEvent.setup()
    const handleSubmit = vi.fn((e: React.FormEvent<HTMLFormElement>) =>
      e.preventDefault(),
    )

    render(
      <FormRoot onSubmit={handleSubmit}>
        <FieldRoot name='email'>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type='email' defaultValue='test@example.com' />
        </FieldRoot>
        <Button type='submit'>Submit</Button>
      </FormRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(handleSubmit).toHaveBeenCalled()
  })

  it('calls onFormSubmit with form values and event info on valid submission', async () => {
    const user = userEvent.setup()
    const handleFormSubmit = vi.fn()

    render(
      <FormRoot onFormSubmit={handleFormSubmit}>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl defaultValue='testuser' />
        </FieldRoot>
        <FieldRoot name='email'>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type='email' defaultValue='test@example.com' />
        </FieldRoot>
        <Button type='submit'>Submit</Button>
      </FormRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalled()
    })

    // onFormSubmit receives (formValues, { event, reason })
    const [formValues] = handleFormSubmit.mock.calls[0]
    expect(formValues).toMatchObject({
      username: 'testuser',
      email: 'test@example.com',
    })
  })

  it('displays external errors passed via errors prop', async () => {
    render(
      <FormRoot errors={{ url: 'Invalid URL format' }}>
        <FieldRoot name='url'>
          <FieldLabel>URL</FieldLabel>
          <FieldControl type='url' />
          <FieldError />
        </FieldRoot>
      </FormRoot>,
    )

    await waitFor(() => {
      expect(screen.getByText('Invalid URL format')).toBeInTheDocument()
    })
  })

  it('clears errors when errors prop is updated to empty object', async () => {
    function TestComponent() {
      const [errors, setErrors] = React.useState<Record<string, string>>({
        username: 'Username is taken',
      })

      return (
        <FormRoot errors={errors}>
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl defaultValue='admin' />
            <FieldError />
          </FieldRoot>
          <Button type='button' onClick={() => setErrors({})}>
            Clear Errors
          </Button>
        </FormRoot>
      )
    }

    const { user } = render(<TestComponent />)

    // Error should be displayed initially
    await waitFor(() => {
      expect(screen.getByText('Username is taken')).toBeInTheDocument()
    })

    // Clear errors
    await user.click(screen.getByRole('button', { name: 'Clear Errors' }))

    // Error should be gone
    await waitFor(() => {
      expect(screen.queryByText('Username is taken')).not.toBeInTheDocument()
    })
  })

  it('applies custom className', () => {
    render(
      <FormRoot className='custom-form' data-testid='form'>
        <FieldRoot name='test'>
          <FieldControl />
        </FieldRoot>
      </FormRoot>,
    )

    expect(screen.getByTestId('form')).toHaveClass('custom-form')
  })

  it('composes with Field components for complete form structure', () => {
    render(
      <FormRoot>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl placeholder='Enter username' />
        </FieldRoot>
        <FieldRoot name='email'>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type='email' placeholder='Enter email' />
        </FieldRoot>
      </FormRoot>,
    )

    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
  })

  it('displays server error with fallback FieldError when no match siblings exist', async () => {
    render(
      <FormRoot errors={{ username: 'Server validation failed' }}>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl defaultValue='test' />
          <FieldError />
        </FieldRoot>
      </FormRoot>,
    )

    await waitFor(() => {
      expect(screen.getByText('Server validation failed')).toBeInTheDocument()
    })
  })

  it('displays server error with match={true} FieldError', async () => {
    render(
      <FormRoot errors={{ username: 'Username taken' }}>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl defaultValue='admin' />
          <FieldError match={true}>Username taken</FieldError>
        </FieldRoot>
      </FormRoot>,
    )

    await waitFor(() => {
      expect(screen.getByText('Username taken')).toBeInTheDocument()
    })
  })

  it('server error takes priority over match={false} in FieldError', async () => {
    // This documents Base UI behavior: formError || match === true
    // means server errors ALWAYS show, regardless of match prop
    render(
      <FormRoot errors={{ username: 'Username is taken' }}>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl defaultValue='admin' />
          <FieldError match={false} />
        </FieldRoot>
      </FormRoot>,
    )

    // Server error shows even though match={false}
    await waitFor(() => {
      expect(screen.getByText('Username is taken')).toBeInTheDocument()
    })
  })

  it('conditionally renders FieldError for server errors only', async () => {
    // This is the recommended pattern from default.tsx:
    // {!!errors.username && <FieldError />}
    function TestComponent() {
      const [errors, setErrors] = React.useState<Record<string, string>>({})

      return (
        <FormRoot
          errors={errors}
          onFormSubmit={() => {
            setErrors({ username: 'This username is already taken' })
          }}
        >
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl defaultValue='admin' />
            <FieldDescription>Enter a unique username</FieldDescription>
            {!!errors.username && <FieldError data-testid='server-error' />}
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>
      )
    }

    const { user } = render(<TestComponent />)

    // Initially no server error
    expect(screen.queryByTestId('server-error')).not.toBeInTheDocument()

    // Submit to trigger server validation
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    // Server error should now be displayed
    await waitFor(() => {
      expect(screen.getByTestId('server-error')).toHaveTextContent(
        'This username is already taken',
      )
    })
  })

  it('displays only the valueMissing error when field is empty and required', async () => {
    const user = userEvent.setup()

    render(
      <FormRoot>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <FieldControl required minLength={3} />
          <FieldError match='valueMissing'>Username is required.</FieldError>
          <FieldError match='tooShort'>
            Username must be at least 3 characters.
          </FieldError>
          <FieldError />
        </FieldRoot>
        <Button type='submit'>Submit</Button>
      </FormRoot>,
    )

    // Submit with empty field to trigger validation
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(screen.getByText('Username is required.')).toBeInTheDocument()
    })

    // Other errors should NOT be displayed
    expect(
      screen.queryByText('Username must be at least 3 characters.'),
    ).not.toBeInTheDocument()
  })

  it('FieldValidity combined with conditional server error pattern', async () => {
    // This tests the exact pattern from default.tsx:
    // - FieldValidity for custom native validation messages
    // - Conditional FieldError for server errors
    function TestComponent() {
      const [errors, setErrors] = React.useState<Record<string, string>>({})

      return (
        <FormRoot
          errors={errors}
          onFormSubmit={(formValues) => {
            const username = formValues.username as string
            if (username === 'admin') {
              setErrors({ username: 'This username is already taken' })
            } else {
              setErrors({})
            }
          }}
        >
          <FieldRoot name='username'>
            <FieldLabel>Username</FieldLabel>
            <FieldControl required pattern='[a-z0-9_]+' minLength={3} />
            <FieldValidity>
              {(state) => {
                if (state.validity.valueMissing) {
                  return (
                    <FieldError data-testid='native-error'>
                      Please enter a username.
                    </FieldError>
                  )
                }
                if (state.validity.patternMismatch) {
                  return (
                    <FieldError data-testid='native-error'>
                      Only lowercase letters, numbers, and underscores allowed.
                    </FieldError>
                  )
                }
                return null
              }}
            </FieldValidity>
            {!!errors.username && <FieldError data-testid='server-error' />}
          </FieldRoot>
          <Button type='submit'>Submit</Button>
        </FormRoot>
      )
    }

    const { user } = render(<TestComponent />)

    // Test 1: Native validation (valueMissing)
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    await waitFor(() => {
      expect(screen.getByTestId('native-error')).toHaveTextContent(
        'Please enter a username.',
      )
    })
    expect(screen.queryByTestId('server-error')).not.toBeInTheDocument()

    // Test 2: Valid input triggers server validation
    const input = screen.getByRole('textbox')
    await user.type(input, 'admin')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(screen.getByTestId('server-error')).toHaveTextContent(
        'This username is already taken',
      )
    })
  })
})
