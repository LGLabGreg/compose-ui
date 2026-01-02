import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'

describe('Button', () => {
  it('renders the button', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<Button onClick={onClick}>Click</Button>)
    await user.click(screen.getByRole('button', { name: 'Click' }))
    expect(onClick).toHaveBeenCalled()
  })

  describe('variants', () => {
    it('renders default variant', () => {
      render(<Button variant='default'>Default</Button>)
      expect(screen.getByRole('button')).toHaveClass('bg-primary')
    })

    it('renders secondary variant', () => {
      render(<Button variant='secondary'>Secondary</Button>)
      expect(screen.getByRole('button')).toHaveClass('bg-secondary')
    })

    it('renders outline variant', () => {
      render(<Button variant='outline'>Outline</Button>)
      expect(screen.getByRole('button')).toHaveClass('border', 'bg-background')
    })

    it('renders ghost variant', () => {
      render(<Button variant='ghost'>Ghost</Button>)
      expect(screen.getByRole('button')).toHaveClass('hover:bg-accent')
    })

    it('renders destructive variant', () => {
      render(<Button variant='destructive'>Destructive</Button>)
      expect(screen.getByRole('button')).toHaveClass('bg-destructive')
    })

    it('renders link variant', () => {
      render(<Button variant='link'>Link</Button>)
      expect(screen.getByRole('button')).toHaveClass('text-primary', 'hover:underline')
    })
  })
})
