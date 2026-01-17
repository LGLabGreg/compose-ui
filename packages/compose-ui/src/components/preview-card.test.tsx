import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from './preview-card'

describe('PreviewCard', () => {
  it('opens and displays content when hovering the trigger', async () => {
    const { user } = render(
      <PreviewCardRoot>
        <p>
          Visit{' '}
          <PreviewCardTrigger href='https://example.com'>Example Site</PreviewCardTrigger>
        </p>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup>
              <p>Preview content for example site</p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>,
    )

    expect(screen.queryByText('Preview content for example site')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('link', { name: 'Example Site' }))

    await waitFor(() => {
      expect(screen.getByText('Preview content for example site')).toBeInTheDocument()
    })
  })

  it('closes when moving mouse away from the trigger', async () => {
    const { user } = render(
      <PreviewCardRoot>
        <p>
          Visit{' '}
          <PreviewCardTrigger href='https://example.com'>Example Site</PreviewCardTrigger>
        </p>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup>
              <p>Preview content</p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>,
    )

    await user.hover(screen.getByRole('link', { name: 'Example Site' }))

    await waitFor(() => {
      expect(screen.getByText('Preview content')).toBeInTheDocument()
    })

    await user.unhover(screen.getByRole('link', { name: 'Example Site' }))

    await waitFor(() => {
      expect(screen.queryByText('Preview content')).not.toBeInTheDocument()
    })
  })

  it('renders trigger as an anchor element', () => {
    render(
      <PreviewCardRoot>
        <PreviewCardTrigger href='https://example.com'>Example Site</PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup>
              <p>Preview content</p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>,
    )

    const link = screen.getByRole('link', { name: 'Example Site' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('works as a controlled component', async () => {
    const onOpenChange = vi.fn()
    const ControlledPreviewCard = () => {
      const [open, setOpen] = React.useState(false)

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        onOpenChange(newOpen)
      }

      return (
        <PreviewCardRoot open={open} onOpenChange={handleOpenChange}>
          <p>
            Visit{' '}
            <PreviewCardTrigger href='https://example.com'>
              Example Site
            </PreviewCardTrigger>
          </p>
          <PreviewCardPortal>
            <PreviewCardPositioner>
              <PreviewCardPopup>
                <p>Controlled preview content</p>
              </PreviewCardPopup>
            </PreviewCardPositioner>
          </PreviewCardPortal>
        </PreviewCardRoot>
      )
    }

    const { user } = render(<ControlledPreviewCard />)

    expect(screen.queryByText('Controlled preview content')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('link', { name: 'Example Site' }))

    await waitFor(() => {
      expect(screen.getByText('Controlled preview content')).toBeInTheDocument()
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })

    await user.unhover(screen.getByRole('link', { name: 'Example Site' }))

    await waitFor(() => {
      expect(screen.queryByText('Controlled preview content')).not.toBeInTheDocument()
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })
  })
})
