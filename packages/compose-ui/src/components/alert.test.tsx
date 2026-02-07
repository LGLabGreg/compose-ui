import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  Alert,
  AlertAction,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from './alert'

describe('Alert', () => {
  it('renders with role="alert"', () => {
    render(<Alert>Content</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description text</AlertDescription>
      </Alert>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  describe('variants', () => {
    it('renders default variant', () => {
      render(<Alert variant='default'>Default</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-primary/10', 'text-primary')
    })

    it('renders destructive variant', () => {
      render(<Alert variant='destructive'>Destructive</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-destructive/10', 'text-destructive')
    })

    it('renders success variant', () => {
      render(<Alert variant='success'>Success</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-success/10', 'text-success')
    })

    it('renders warning variant', () => {
      render(<Alert variant='warning'>Warning</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-warning/10', 'text-warning')
    })

    it('renders info variant', () => {
      render(<Alert variant='info'>Info</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-info/10', 'text-info')
    })
  })

  describe('appearances', () => {
    it('renders default appearance', () => {
      render(
        <Alert variant='destructive' appearance='default'>
          Default
        </Alert>,
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-destructive/10', 'text-destructive')
    })

    it('renders outline appearance', () => {
      render(
        <Alert variant='destructive' appearance='outline'>
          Outline
        </Alert>,
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass(
        'border',
        'border-destructive/50',
        'bg-destructive/10',
        'text-destructive',
      )
    })

    it('renders filled appearance', () => {
      render(
        <Alert variant='destructive' appearance='filled'>
          Filled
        </Alert>,
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('bg-destructive', 'text-white')
    })
  })

  describe('sizes', () => {
    it('renders sm size', () => {
      render(<Alert size='sm'>Small</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('p-3', 'text-xs')
    })

    it('renders md size', () => {
      render(<Alert size='md'>Medium</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('p-4', 'text-sm')
    })

    it('renders lg size', () => {
      render(<Alert size='lg'>Large</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('p-5', 'text-base')
    })
  })

  it('merges custom className', () => {
    render(<Alert className='custom-class'>Custom</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('custom-class')
  })

  it('applies default variant, appearance, and size when not specified', () => {
    render(<Alert>Default</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('bg-primary/10', 'text-primary')
    expect(alert).toHaveClass('p-4', 'text-sm')
  })
})

describe('AlertContent', () => {
  it('renders children with space-y-1', () => {
    render(
      <AlertContent data-testid='content'>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Desc</AlertDescription>
      </AlertContent>,
    )
    const content = screen.getByTestId('content')
    expect(content).toHaveClass('flex-1', 'space-y-1')
  })

  it('has data-slot attribute', () => {
    render(<AlertContent data-testid='content'>Content</AlertContent>)
    expect(screen.getByTestId('content')).toHaveAttribute('data-slot', 'alert-content')
  })
})

describe('AlertIcon', () => {
  it('renders children', () => {
    render(<AlertIcon>icon</AlertIcon>)
    expect(screen.getByText('icon')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<AlertIcon data-testid='icon'>icon</AlertIcon>)
    expect(screen.getByTestId('icon')).toHaveAttribute('data-slot', 'alert-icon')
  })
})

describe('AlertTitle', () => {
  it('renders as h5', () => {
    render(<AlertTitle>Title</AlertTitle>)
    expect(screen.getByText('Title').tagName).toBe('H5')
  })

  it('has font-semibold class', () => {
    render(<AlertTitle>Title</AlertTitle>)
    expect(screen.getByText('Title')).toHaveClass('font-semibold')
  })
})

describe('AlertDescription', () => {
  it('renders children', () => {
    render(<AlertDescription>Description</AlertDescription>)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<AlertDescription data-testid='desc'>Description</AlertDescription>)
    expect(screen.getByTestId('desc')).toHaveAttribute('data-slot', 'alert-description')
  })
})

describe('AlertAction', () => {
  it('renders action content', () => {
    render(<AlertAction>Action</AlertAction>)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<AlertAction data-testid='action'>Action</AlertAction>)
    expect(screen.getByTestId('action')).toHaveAttribute('data-slot', 'alert-action')
  })
})

describe('AlertClose', () => {
  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const { user } = render(<AlertClose onClick={handleClick}>X</AlertClose>)
    await user.click(screen.getByText('X'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders as button with type="button"', () => {
    render(<AlertClose>X</AlertClose>)
    const button = screen.getByText('X')
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('has data-slot attribute', () => {
    render(<AlertClose>X</AlertClose>)
    expect(screen.getByText('X')).toHaveAttribute('data-slot', 'alert-close')
  })
})
