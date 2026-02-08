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

export default function AlternateExample() {
  return (
    <TimelineRoot position='alternate'>
      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>Application Submitted</TimelineTitle>
          <TimelineDescription>
            Your application was received and is under review.
          </TimelineDescription>
          <TimelineTime dateTime='2024-01-10'>January 10, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='primary' />
        <TimelineContent>
          <TimelineTitle>Phone Screen</TimelineTitle>
          <TimelineDescription>
            Initial call with the recruiting team completed.
          </TimelineDescription>
          <TimelineTime dateTime='2024-01-18'>January 18, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='success' />
        <TimelineContent>
          <TimelineTitle>Technical Interview</TimelineTitle>
          <TimelineDescription>
            Passed the technical assessment with positive feedback.
          </TimelineDescription>
          <TimelineTime dateTime='2024-01-25'>January 25, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='warning' />
        <TimelineContent>
          <TimelineTitle>Final Round</TimelineTitle>
          <TimelineDescription>
            On-site interviews with the engineering team scheduled.
          </TimelineDescription>
          <TimelineTime dateTime='2024-02-05'>February 5, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='success' />
        <TimelineContent>
          <TimelineTitle>Offer Extended</TimelineTitle>
          <TimelineDescription>
            Congratulations! An offer letter has been sent.
          </TimelineDescription>
          <TimelineTime dateTime='2024-02-12'>February 12, 2024</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
