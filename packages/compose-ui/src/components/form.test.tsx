import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
import { FieldControl, FieldError, FieldLabel, FieldRoot } from './field'
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
    const handleSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())

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
})
