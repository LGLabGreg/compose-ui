import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarRootProps,
  AvatarStack,
} from './avatar'

describe('Avatar', () => {
  beforeEach(() => {
    Object.defineProperty(Image.prototype, 'onload', {
      get() {
        return this._onload
      },
      set(fn) {
        this._onload = fn
        if (this.complete) {
          setTimeout(() => fn?.(), 0)
        }
      },
      configurable: true,
    })

    Object.defineProperty(Image.prototype, 'complete', {
      get() {
        return this._complete ?? true
      },
      set(value) {
        this._complete = value
        if (value && this._onload) {
          setTimeout(() => this._onload(), 0)
        }
      },
      configurable: true,
    })
  })

  it('renders with image and fallback', async () => {
    render(
      <AvatarRoot>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Test Avatar'
        />
        <AvatarFallback>TA</AvatarFallback>
      </AvatarRoot>,
    )

    const image = await screen.findByAltText('Test Avatar')

    expect(image).toHaveAttribute(
      'src',
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80',
    )
  })

  it('displays fallback when image fails to load', async () => {
    render(
      <AvatarRoot>
        <AvatarImage src='invalid-url' alt='Test Avatar' />
        <AvatarFallback>TA</AvatarFallback>
      </AvatarRoot>,
    )

    const fallback = screen.getByText('TA')
    expect(fallback).toBeInTheDocument()
  })

  it('renders fallback when no image is provided', () => {
    render(
      <AvatarRoot>
        <AvatarFallback>AB</AvatarFallback>
      </AvatarRoot>,
    )

    const fallback = screen.getByText('AB')
    expect(fallback).toBeInTheDocument()
  })

  it.each([
    { size: 'sm', expectedClass: 'size-8' },
    { size: 'default', expectedClass: 'size-10' },
    { size: 'lg', expectedClass: 'size-12' },
  ])('applies size variant $size correctly', ({ size, expectedClass }) => {
    const { container } = render(
      <AvatarRoot size={size as AvatarRootProps['size']}>
        <AvatarFallback>{size}</AvatarFallback>
      </AvatarRoot>,
    )

    const avatar = container.querySelector('span')
    expect(avatar).toHaveClass(expectedClass)
  })
})

describe('AvatarStack', () => {
  it('renders as accessible list', () => {
    render(
      <AvatarStack aria-label='Project contributors'>
        <AvatarRoot>
          <AvatarFallback>SC</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>MJ</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>EW</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    const list = screen.getByRole('list', { name: 'Project contributors' })
    expect(list).toBeInTheDocument()
    expect(list.tagName).toBe('UL')
  })

  it('renders all avatars when maxVisible is not specified', () => {
    render(
      <AvatarStack aria-label='Team members'>
        <AvatarRoot>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>3</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('respects maxVisible prop', () => {
    render(
      <AvatarStack aria-label='Team members' maxVisible={2}>
        <AvatarRoot>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>3</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>4</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>5</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.queryByText('3')).not.toBeInTheDocument()
    expect(screen.queryByText('4')).not.toBeInTheDocument()
    expect(screen.queryByText('5')).not.toBeInTheDocument()
  })

  it('shows correct overflow count', () => {
    render(
      <AvatarStack aria-label='Team members' maxVisible={2}>
        <AvatarRoot>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>3</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>4</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>5</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    const overflowIndicator = screen.getByText('+3')
    expect(overflowIndicator).toBeInTheDocument()
  })

  it('does not show overflow indicator when all avatars are visible', () => {
    render(
      <AvatarStack aria-label='Team members' maxVisible={5}>
        <AvatarRoot>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>3</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
  })

  it('matches overflow indicator size to avatar size', () => {
    render(
      <AvatarStack aria-label='Team members' maxVisible={2}>
        <AvatarRoot size='lg'>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot size='lg'>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot size='lg'>
          <AvatarFallback>3</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    const overflowIndicator = screen.getByText('+1')
    expect(overflowIndicator).toBeInTheDocument()
    expect(overflowIndicator).toHaveClass('size-12')
  })

  it('uses default size for overflow when first avatar has no size prop', () => {
    render(
      <AvatarStack aria-label='Team members' maxVisible={1}>
        <AvatarRoot>
          <AvatarFallback>1</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarFallback>2</AvatarFallback>
        </AvatarRoot>
      </AvatarStack>,
    )

    const overflowIndicator = screen.getByText('+1')
    expect(overflowIndicator).toBeInTheDocument()
    expect(overflowIndicator).toHaveClass('size-10')
  })
})
