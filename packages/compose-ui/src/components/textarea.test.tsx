import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Textarea } from './textarea'

describe('Textarea', () => {
  it('renders the textarea', () => {
    render(<Textarea placeholder='Enter text' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const onChange = vi.fn()
    const { user } = render(<Textarea placeholder='Enter text' onChange={onChange} />)
    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'test')
    expect(onChange).toHaveBeenCalled()
  })

  it('applies base styles', () => {
    render(<Textarea placeholder='Enter text' />)
    expect(screen.getByRole('textbox')).toHaveClass('min-h-20', 'py-2', 'rounded-md')
  })

  it('applies custom className', () => {
    render(<Textarea placeholder='Enter text' className='custom-class' />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('supports disabled state', () => {
    render(<Textarea placeholder='Enter text' disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('supports required attribute', () => {
    render(<Textarea placeholder='Enter text' required />)
    expect(screen.getByRole('textbox')).toBeRequired()
  })

  it('supports rows attribute', () => {
    render(<Textarea placeholder='Enter text' rows={5} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5')
  })

  it('supports aria-invalid for error state', () => {
    render(<Textarea placeholder='Enter text' aria-invalid='true' />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('supports aria-describedby for accessibility', () => {
    render(
      <>
        <Textarea placeholder='Enter text' aria-describedby='help-text' />
        <span id='help-text'>Help text</span>
      </>,
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'help-text')
  })
})
