import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { Separator } from './separator'

describe('Separator', () => {
  it('renders the separator', () => {
    render(<Separator />)
    const separator = screen.getByRole('separator')
    expect(separator).toBeInTheDocument()
  })

  it('renders horizontal separator by default', () => {
    render(<Separator />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('h-px', 'w-full')
  })

  it('renders vertical separator when orientation is vertical', () => {
    render(<Separator orientation='vertical' />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('h-full', 'w-px')
  })

  it('applies custom className', () => {
    render(<Separator className='custom-class' />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('custom-class')
  })
})
