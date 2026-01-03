import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './scroll-area'

describe('ScrollArea', () => {
  it('renders content correctly', () => {
    render(
      <ScrollAreaRoot className='h-72 w-full'>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div>
              <p>First item</p>
              <p>Second item</p>
              <p>Third item</p>
            </div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='vertical'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>,
    )

    expect(screen.getByText('First item')).toBeInTheDocument()
    expect(screen.getByText('Second item')).toBeInTheDocument()
    expect(screen.getByText('Third item')).toBeInTheDocument()
  })

  it('renders vertical scrollbar by default', () => {
    const { container } = render(
      <ScrollAreaRoot className='h-72 w-full'>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div>Content</div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>,
    )

    const scrollbar = container.querySelector('[data-orientation="vertical"]')
    expect(scrollbar).toBeInTheDocument()
  })

  it('renders horizontal scrollbar when orientation is horizontal', () => {
    const { container } = render(
      <ScrollAreaRoot className='h-72 w-full'>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div>Content</div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='horizontal'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>,
    )

    const scrollbar = container.querySelector('[data-orientation="horizontal"]')
    expect(scrollbar).toBeInTheDocument()
  })
})
