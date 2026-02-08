'use client'

import {
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineRoot,
  TimelineSpacer,
  TimelineTime,
  TimelineTitle,
} from '@lglab/compose-ui/timeline'

export default function CenterExample() {
  return (
    <TimelineRoot position='center'>
      <TimelineItem>
        <TimelineContent>
          <TimelineTitle>Company Founded</TimelineTitle>
          <TimelineDescription>
            Started with a small team of three in a garage.
          </TimelineDescription>
          <TimelineTime dateTime='2020'>2020</TimelineTime>
        </TimelineContent>
        <TimelineMarker />
        <TimelineSpacer />
      </TimelineItem>

      <TimelineItem>
        <TimelineSpacer />
        <TimelineMarker variant='primary' />
        <TimelineContent>
          <TimelineTitle>Series A Funding</TimelineTitle>
          <TimelineDescription>
            Raised $5M to scale the product and grow the team.
          </TimelineDescription>
          <TimelineTime dateTime='2021'>2021</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <TimelineTitle>100K Users</TimelineTitle>
          <TimelineDescription>
            Reached the first major milestone in user adoption.
          </TimelineDescription>
          <TimelineTime dateTime='2022'>2022</TimelineTime>
        </TimelineContent>
        <TimelineMarker variant='success' />
        <TimelineSpacer />
      </TimelineItem>

      <TimelineItem>
        <TimelineSpacer />
        <TimelineMarker variant='primary' />
        <TimelineContent>
          <TimelineTitle>Global Expansion</TimelineTitle>
          <TimelineDescription>
            Launched in 12 new markets across Europe and Asia.
          </TimelineDescription>
          <TimelineTime dateTime='2023'>2023</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
