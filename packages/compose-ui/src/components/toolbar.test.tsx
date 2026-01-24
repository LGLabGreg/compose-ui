import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
} from './toolbar'

describe('Toolbar', () => {
  it('renders a toolbar with buttons', () => {
    render(
      <ToolbarRoot>
        <ToolbarButton>Bold</ToolbarButton>
        <ToolbarButton>Italic</ToolbarButton>
      </ToolbarRoot>,
    )
    expect(screen.getByRole('toolbar')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Italic' })).toBeInTheDocument()
  })

  it('renders a toolbar separator', () => {
    render(
      <ToolbarRoot>
        <ToolbarButton>Bold</ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton>Italic</ToolbarButton>
      </ToolbarRoot>,
    )
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders a toolbar group', () => {
    render(
      <ToolbarRoot>
        <ToolbarGroup aria-label='Text formatting'>
          <ToolbarButton>Bold</ToolbarButton>
          <ToolbarButton>Italic</ToolbarButton>
        </ToolbarGroup>
      </ToolbarRoot>,
    )
    expect(screen.getByRole('group', { name: 'Text formatting' })).toBeInTheDocument()
  })

  it('renders a toolbar link', () => {
    render(
      <ToolbarRoot>
        <ToolbarLink href='#'>Help</ToolbarLink>
      </ToolbarRoot>,
    )
    expect(screen.getByRole('link', { name: 'Help' })).toBeInTheDocument()
  })

  it('renders a toolbar input', () => {
    render(
      <ToolbarRoot>
        <ToolbarInput aria-label='Search' placeholder='Search...' />
      </ToolbarRoot>,
    )
    expect(screen.getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
  })

  it('calls onClick handler when button is clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <ToolbarRoot>
        <ToolbarButton onClick={onClick}>Bold</ToolbarButton>
      </ToolbarRoot>,
    )
    await user.click(screen.getByRole('button', { name: 'Bold' }))
    expect(onClick).toHaveBeenCalled()
  })

  it('supports keyboard navigation between buttons', async () => {
    const { user } = render(
      <ToolbarRoot>
        <ToolbarButton>Bold</ToolbarButton>
        <ToolbarButton>Italic</ToolbarButton>
        <ToolbarButton>Underline</ToolbarButton>
      </ToolbarRoot>,
    )
    const boldButton = screen.getByRole('button', { name: 'Bold' })
    const italicButton = screen.getByRole('button', { name: 'Italic' })
    const underlineButton = screen.getByRole('button', { name: 'Underline' })

    boldButton.focus()
    expect(boldButton).toHaveFocus()

    await user.keyboard('[ArrowRight]')
    expect(italicButton).toHaveFocus()

    await user.keyboard('[ArrowRight]')
    expect(underlineButton).toHaveFocus()

    await user.keyboard('[ArrowLeft]')
    expect(italicButton).toHaveFocus()
  })

  it('disables button when disabled prop is set', async () => {
    const onClick = vi.fn()
    const { user } = render(
      <ToolbarRoot>
        <ToolbarButton disabled onClick={onClick}>
          Bold
        </ToolbarButton>
      </ToolbarRoot>,
    )
    const button = screen.getByRole('button', { name: 'Bold' })
    expect(button).toHaveAttribute('aria-disabled', 'true')
    await user.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('supports vertical orientation', () => {
    render(
      <ToolbarRoot orientation='vertical'>
        <ToolbarButton>Bold</ToolbarButton>
        <ToolbarButton>Italic</ToolbarButton>
      </ToolbarRoot>,
    )
    expect(screen.getByRole('toolbar')).toHaveAttribute('aria-orientation', 'vertical')
  })
})
