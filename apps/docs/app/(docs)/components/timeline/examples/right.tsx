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

export default function RightExample() {
  return (
    <TimelineRoot position='right'>
      <TimelineItem>
        <TimelineMarker variant='success' />
        <TimelineContent>
          <TimelineTitle>Deployment Successful</TimelineTitle>
          <TimelineDescription>
            Production build deployed to all regions.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-15T14:30'>2:30 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='primary' />
        <TimelineContent>
          <TimelineTitle>Tests Passed</TimelineTitle>
          <TimelineDescription>
            All 142 integration tests passed successfully.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-15T14:25'>2:25 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>Build Started</TimelineTitle>
          <TimelineDescription>
            CI pipeline triggered by merge to main branch.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-15T14:20'>2:20 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
