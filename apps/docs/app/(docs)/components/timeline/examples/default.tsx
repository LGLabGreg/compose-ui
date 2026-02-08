'use client'

import {
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineRoot,
  TimelineTime,
  TimelineTitle,
} from '@lglab/compose-ui/timeline'

export default function DefaultExample() {
  return (
    <TimelineRoot>
      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>v1.0.0 Released</TimelineTitle>
          <TimelineDescription>
            Initial stable release with core components and documentation.
          </TimelineDescription>
          <TimelineTime dateTime='2024-03-01'>March 1, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>v1.1.0 Released</TimelineTitle>
          <TimelineDescription>
            Added Timeline, Empty, and DatePicker components.
          </TimelineDescription>
          <TimelineTime dateTime='2024-04-15'>April 15, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>v1.2.0 In Progress</TimelineTitle>
          <TimelineDescription>
            Working on data table improvements and new chart components.
          </TimelineDescription>
          <TimelineTime dateTime='2024-05-10'>May 10, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>v2.0.0 Planned</TimelineTitle>
          <TimelineDescription>
            Major update with design system overhaul and accessibility improvements.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
