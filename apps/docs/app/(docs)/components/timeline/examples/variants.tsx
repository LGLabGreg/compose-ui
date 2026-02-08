'use client'

import {
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineRoot,
  TimelineTitle,
} from '@lglab/compose-ui/timeline'

export default function VariantsExample() {
  return (
    <TimelineRoot>
      <TimelineItem>
        <TimelineMarker variant='default' />
        <TimelineContent>
          <TimelineTitle>Default</TimelineTitle>
          <TimelineDescription>Neutral marker for standard events.</TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='primary' />
        <TimelineContent>
          <TimelineTitle>Primary</TimelineTitle>
          <TimelineDescription>Highlighted marker for key events.</TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='success' />
        <TimelineContent>
          <TimelineTitle>Success</TimelineTitle>
          <TimelineDescription>
            Indicates a completed or successful event.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='warning' />
        <TimelineContent>
          <TimelineTitle>Warning</TimelineTitle>
          <TimelineDescription>
            Highlights an event that needs attention.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='destructive' />
        <TimelineContent>
          <TimelineTitle>Destructive</TimelineTitle>
          <TimelineDescription>Signals an error or critical event.</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
