import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { GroupAddon, GroupRoot } from './group'

describe('GroupRoot', () => {
  it('renders with default props', () => {
    render(
      <GroupRoot>
        <button>Button 1</button>
        <button>Button 2</button>
      </GroupRoot>,
    )
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
  })

  it('renders with role="group"', () => {
    render(
      <GroupRoot>
        <button>Button</button>
      </GroupRoot>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  describe('orientation', () => {
    it('renders horizontal orientation by default', () => {
      render(
        <GroupRoot data-testid='group'>
          <button>Button</button>
        </GroupRoot>,
      )
      const group = screen.getByTestId('group')
      expect(group).toHaveClass('inline-flex')
      expect(group).not.toHaveClass('flex-col')
    })

    it('renders vertical orientation', () => {
      render(
        <GroupRoot orientation='vertical' data-testid='group'>
          <button>Button</button>
        </GroupRoot>,
      )
      const group = screen.getByTestId('group')
      expect(group).toHaveClass('flex-col')
    })
  })

  it('merges custom className', () => {
    render(
      <GroupRoot className='custom-class' data-testid='group'>
        <button>Button</button>
      </GroupRoot>,
    )
    expect(screen.getByTestId('group')).toHaveClass('custom-class')
  })
})

describe('GroupAddon', () => {
  it('renders with default props', () => {
    render(<GroupAddon>Addon</GroupAddon>)
    expect(screen.getByText('Addon')).toBeInTheDocument()
  })

  it('renders with data-slot attribute', () => {
    render(<GroupAddon data-testid='addon'>Addon</GroupAddon>)
    expect(screen.getByTestId('addon')).toHaveAttribute('data-slot', 'group-addon')
  })

  describe('variants', () => {
    it('renders ghost variant by default', () => {
      render(<GroupAddon data-testid='addon'>Ghost</GroupAddon>)
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('border-border')
    })

    it('renders primary variant', () => {
      render(
        <GroupAddon variant='primary' data-testid='addon'>
          Primary
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('bg-primary', 'text-primary-foreground', 'border-primary')
    })

    it('renders secondary variant', () => {
      render(
        <GroupAddon variant='secondary' data-testid='addon'>
          Secondary
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass(
        'bg-secondary',
        'text-secondary-foreground',
        'border-secondary',
      )
    })

    it('renders destructive variant', () => {
      render(
        <GroupAddon variant='destructive' data-testid='addon'>
          Destructive
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('bg-destructive', 'text-white', 'border-destructive')
    })
  })

  describe('sizes', () => {
    it('renders default size by default', () => {
      render(<GroupAddon data-testid='addon'>Default</GroupAddon>)
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('h-9', 'px-3', 'text-sm')
    })

    it('renders sm size', () => {
      render(
        <GroupAddon size='sm' data-testid='addon'>
          Small
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('h-8', 'px-2.5', 'text-xs')
    })

    it('renders lg size', () => {
      render(
        <GroupAddon size='lg' data-testid='addon'>
          Large
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('h-10', 'px-3.5', 'text-base')
    })

    it('renders icon size', () => {
      render(
        <GroupAddon size='icon' data-testid='addon'>
          Icon
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('size-9')
    })

    it('renders icon-sm size', () => {
      render(
        <GroupAddon size='icon-sm' data-testid='addon'>
          Icon SM
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('size-8')
    })

    it('renders icon-lg size', () => {
      render(
        <GroupAddon size='icon-lg' data-testid='addon'>
          Icon LG
        </GroupAddon>,
      )
      const addon = screen.getByTestId('addon')
      expect(addon).toHaveClass('size-10')
    })
  })

  it('renders with border', () => {
    render(<GroupAddon data-testid='addon'>Addon</GroupAddon>)
    const addon = screen.getByTestId('addon')
    expect(addon).toHaveClass('border')
  })

  it('merges custom className', () => {
    render(<GroupAddon className='custom-class'>Addon</GroupAddon>)
    expect(screen.getByText('Addon')).toHaveClass('custom-class')
  })
})
