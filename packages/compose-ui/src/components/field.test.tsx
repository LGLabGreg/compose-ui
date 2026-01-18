import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from './field'
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
})
