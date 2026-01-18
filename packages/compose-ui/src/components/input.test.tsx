import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Input } from './input'

describe('Input', () => {
  it('renders the input', () => {
    render(<Input placeholder='Enter text' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls onValueChange when typing', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <Input placeholder='Enter text' onValueChange={onValueChange} />,
    )
    const input = screen.getByRole('textbox')
    await user.type(input, 'test')
    expect(onValueChange).toHaveBeenCalledWith('test', expect.any(Object))
  })

  it('applies base styles', () => {
    render(<Input placeholder='Enter text' />)
    expect(screen.getByRole('textbox')).toHaveClass('h-9', 'px-3', 'rounded-md')
  })

  it('applies custom className', () => {
    render(<Input placeholder='Enter text' className='custom-class' />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })
})
