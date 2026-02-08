import { screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineRoot,
  TimelineSpacer,
  TimelineTime,
  TimelineTitle,
} from './timeline'

describe('TimelineRoot', () => {
  it('renders as ordered list with role="list"', () => {
    render(<TimelineRoot>items</TimelineRoot>)
    const list = screen.getByRole('list')
    expect(list.tagName).toBe('OL')
  })

  it('has data-slot attribute', () => {
    render(<TimelineRoot data-testid='timeline'>items</TimelineRoot>)
    expect(screen.getByTestId('timeline')).toHaveAttribute('data-slot', 'timeline')
  })

  it('renders with left position by default', () => {
    render(<TimelineRoot data-testid='timeline'>items</TimelineRoot>)
    expect(screen.getByTestId('timeline')).toHaveAttribute('data-position', 'left')
  })

  it('renders with right position', () => {
    render(
      <TimelineRoot data-testid='timeline' position='right'>
        items
      </TimelineRoot>,
    )
    expect(screen.getByTestId('timeline')).toHaveAttribute('data-position', 'right')
  })

  it('renders with alternate position', () => {
    render(
      <TimelineRoot data-testid='timeline' position='alternate'>
        items
      </TimelineRoot>,
    )
    expect(screen.getByTestId('timeline')).toHaveAttribute('data-position', 'alternate')
  })

  it('renders with center position', () => {
    render(
      <TimelineRoot data-testid='timeline' position='center'>
        items
      </TimelineRoot>,
    )
    expect(screen.getByTestId('timeline')).toHaveAttribute('data-position', 'center')
  })

  it('merges custom className', () => {
    render(
      <TimelineRoot data-testid='timeline' className='custom-class'>
        items
      </TimelineRoot>,
    )
    expect(screen.getByTestId('timeline')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLOListElement>()
    render(<TimelineRoot ref={ref}>items</TimelineRoot>)
    expect(ref.current).toBeInstanceOf(HTMLOListElement)
  })

  it('passes through additional props', () => {
    render(
      <TimelineRoot data-testid='timeline' aria-label='Project timeline'>
        items
      </TimelineRoot>,
    )
    expect(screen.getByTestId('timeline')).toHaveAttribute(
      'aria-label',
      'Project timeline',
    )
  })
})

describe('TimelineItem', () => {
  it('renders as list item', () => {
    render(
      <TimelineRoot>
        <TimelineItem>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(
      <TimelineRoot>
        <TimelineItem data-testid='item'>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveAttribute('data-slot', 'timeline-item')
  })

  it('has data-position="left" by default', () => {
    render(
      <TimelineRoot>
        <TimelineItem data-testid='item'>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveAttribute('data-position', 'left')
  })

  it('has data-position="right" when position is right', () => {
    render(
      <TimelineRoot position='right'>
        <TimelineItem data-testid='item'>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveAttribute('data-position', 'right')
  })

  it('alternates data-position in alternate mode', () => {
    render(
      <TimelineRoot position='alternate'>
        <TimelineItem data-testid='item-0'>First</TimelineItem>
        <TimelineItem data-testid='item-1'>Second</TimelineItem>
        <TimelineItem data-testid='item-2'>Third</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item-0')).toHaveAttribute('data-position', 'left')
    expect(screen.getByTestId('item-1')).toHaveAttribute('data-position', 'right')
    expect(screen.getByTestId('item-2')).toHaveAttribute('data-position', 'left')
  })

  it('alternates data-position in center mode', () => {
    render(
      <TimelineRoot position='center'>
        <TimelineItem data-testid='item-0'>First</TimelineItem>
        <TimelineItem data-testid='item-1'>Second</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item-0')).toHaveAttribute('data-position', 'left')
    expect(screen.getByTestId('item-1')).toHaveAttribute('data-position', 'right')
  })

  it('uses grid layout in center mode', () => {
    render(
      <TimelineRoot position='center'>
        <TimelineItem data-testid='item'>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveClass('grid')
  })

  it('reverses flex direction for right-side items', () => {
    render(
      <TimelineRoot position='right'>
        <TimelineItem data-testid='item'>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveClass('flex-row-reverse')
  })

  it('merges custom className', () => {
    render(
      <TimelineRoot>
        <TimelineItem data-testid='item' className='custom'>
          Item
        </TimelineItem>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('item')).toHaveClass('custom')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLLIElement>()
    render(
      <TimelineRoot>
        <TimelineItem ref={ref}>Item</TimelineItem>
      </TimelineRoot>,
    )
    expect(ref.current).toBeInstanceOf(HTMLLIElement)
  })
})

describe('TimelineMarker', () => {
  it('has data-slot attribute', () => {
    render(<TimelineMarker data-testid='marker' />)
    expect(screen.getByTestId('marker')).toHaveAttribute('data-slot', 'timeline-marker')
  })

  it('has role="status"', () => {
    render(<TimelineMarker />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders default variant', () => {
    render(<TimelineMarker data-testid='marker' />)
    expect(screen.getByTestId('marker')).toHaveClass('border-border', 'bg-background')
  })

  it('renders primary variant', () => {
    render(<TimelineMarker data-testid='marker' variant='primary' />)
    expect(screen.getByTestId('marker')).toHaveClass('border-primary', 'bg-primary')
  })

  it('renders success variant', () => {
    render(<TimelineMarker data-testid='marker' variant='success' />)
    expect(screen.getByTestId('marker')).toHaveClass('border-success', 'bg-success')
  })

  it('renders warning variant', () => {
    render(<TimelineMarker data-testid='marker' variant='warning' />)
    expect(screen.getByTestId('marker')).toHaveClass('border-warning', 'bg-warning')
  })

  it('renders destructive variant', () => {
    render(<TimelineMarker data-testid='marker' variant='destructive' />)
    expect(screen.getByTestId('marker')).toHaveClass(
      'border-destructive',
      'bg-destructive',
    )
  })

  it('renders with custom icon', () => {
    render(<TimelineMarker icon={<span>icon</span>} />)
    expect(screen.getByText('icon')).toBeInTheDocument()
  })

  it('has aria-label based on variant', () => {
    render(<TimelineMarker data-testid='marker' variant='success' />)
    expect(screen.getByTestId('marker')).toHaveAttribute('aria-label', 'Completed')
  })

  it('has default aria-label "Event"', () => {
    render(<TimelineMarker data-testid='marker' />)
    expect(screen.getByTestId('marker')).toHaveAttribute('aria-label', 'Event')
  })

  it('renders custom children instead of default marker', () => {
    render(
      <TimelineMarker data-testid='marker'>
        <span>Custom Avatar</span>
      </TimelineMarker>,
    )
    expect(screen.getByText('Custom Avatar')).toBeInTheDocument()
    expect(screen.getByTestId('marker')).toHaveAttribute('data-slot', 'timeline-marker')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('applies className to wrapper when children are provided', () => {
    render(
      <TimelineMarker data-testid='marker' className='custom-marker'>
        <span>Child</span>
      </TimelineMarker>,
    )
    expect(screen.getByTestId('marker')).toHaveClass('custom-marker')
  })

  it('renders connector line', () => {
    const { container } = render(<TimelineMarker />)
    const line = container.querySelector('[data-slot="timeline-line"]')
    expect(line).toBeInTheDocument()
    expect(line).toHaveAttribute('aria-hidden', 'true')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TimelineMarker ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toHaveAttribute('data-slot', 'timeline-marker')
  })
})

describe('TimelineContent', () => {
  it('has data-slot attribute', () => {
    render(
      <TimelineRoot>
        <TimelineContent data-testid='content'>Content</TimelineContent>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('content')).toHaveAttribute('data-slot', 'timeline-content')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <TimelineRoot>
        <TimelineContent ref={ref}>Content</TimelineContent>
      </TimelineRoot>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(
      <TimelineRoot>
        <TimelineContent data-testid='content' className='custom'>
          Content
        </TimelineContent>
      </TimelineRoot>,
    )
    expect(screen.getByTestId('content')).toHaveClass('custom')
  })
})

describe('TimelineSpacer', () => {
  it('has data-slot attribute', () => {
    render(<TimelineSpacer data-testid='spacer' />)
    expect(screen.getByTestId('spacer')).toHaveAttribute('data-slot', 'timeline-spacer')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TimelineSpacer ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('TimelineTitle', () => {
  it('renders as p element', () => {
    render(<TimelineTitle>Title</TimelineTitle>)
    expect(screen.getByText('Title').tagName).toBe('P')
  })

  it('has data-slot attribute', () => {
    render(<TimelineTitle>Title</TimelineTitle>)
    expect(screen.getByText('Title')).toHaveAttribute('data-slot', 'timeline-title')
  })

  it('has font-medium class', () => {
    render(<TimelineTitle>Title</TimelineTitle>)
    expect(screen.getByText('Title')).toHaveClass('font-medium')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<TimelineTitle ref={ref}>Title</TimelineTitle>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })
})

describe('TimelineDescription', () => {
  it('renders as p element', () => {
    render(<TimelineDescription>Desc</TimelineDescription>)
    expect(screen.getByText('Desc').tagName).toBe('P')
  })

  it('has data-slot attribute', () => {
    render(<TimelineDescription>Desc</TimelineDescription>)
    expect(screen.getByText('Desc')).toHaveAttribute('data-slot', 'timeline-description')
  })

  it('has muted text color', () => {
    render(<TimelineDescription>Desc</TimelineDescription>)
    expect(screen.getByText('Desc')).toHaveClass('text-muted-foreground')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<TimelineDescription ref={ref}>Desc</TimelineDescription>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })
})

describe('TimelineTime', () => {
  it('renders as time element', () => {
    render(<TimelineTime>10:30 AM</TimelineTime>)
    expect(screen.getByText('10:30 AM').tagName).toBe('TIME')
  })

  it('has data-slot attribute', () => {
    render(<TimelineTime>10:30 AM</TimelineTime>)
    expect(screen.getByText('10:30 AM')).toHaveAttribute('data-slot', 'timeline-time')
  })

  it('passes datetime attribute', () => {
    render(<TimelineTime dateTime='2024-01-15T10:30'>10:30 AM</TimelineTime>)
    expect(screen.getByText('10:30 AM')).toHaveAttribute('datetime', '2024-01-15T10:30')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLTimeElement>()
    render(<TimelineTime ref={ref}>10:30 AM</TimelineTime>)
    expect(ref.current).toBeInstanceOf(HTMLTimeElement)
  })
})

describe('Integration', () => {
  it('renders full timeline composition', () => {
    render(
      <TimelineRoot data-testid='timeline'>
        <TimelineItem>
          <TimelineMarker variant='success' />
          <TimelineContent>
            <TimelineTitle>Event 1</TimelineTitle>
            <TimelineDescription>First event description</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker variant='primary' />
          <TimelineContent>
            <TimelineTitle>Event 2</TimelineTitle>
            <TimelineDescription>Second event description</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>,
    )

    expect(screen.getByTestId('timeline')).toBeInTheDocument()
    expect(screen.getByText('Event 1')).toBeInTheDocument()
    expect(screen.getByText('Event 2')).toBeInTheDocument()
    expect(screen.getByText('First event description')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('renders with center position and spacer', () => {
    render(
      <TimelineRoot position='center'>
        <TimelineItem>
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
          <TimelineMarker />
          <TimelineSpacer />
        </TimelineItem>
      </TimelineRoot>,
    )

    expect(screen.getByText('Event')).toBeInTheDocument()
  })

  it('renders with time element', () => {
    render(
      <TimelineRoot>
        <TimelineItem>
          <TimelineMarker />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
            <TimelineTime dateTime='2024-01-15'>Jan 15</TimelineTime>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>,
    )

    expect(screen.getByText('Jan 15')).toHaveAttribute('datetime', '2024-01-15')
  })
})
