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
import { AlertTriangle, CheckIcon, GitMerge, MessageSquare, X } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <TimelineRoot>
      <TimelineItem>
        <TimelineMarker variant='primary' icon={<GitMerge className='size-3' />} />
        <TimelineContent>
          <TimelineTitle>Pull Request Opened</TimelineTitle>
          <TimelineDescription>feat: add timeline component (#142)</TimelineDescription>
          <TimelineTime dateTime='2024-06-10T09:00'>9:00 AM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker icon={<MessageSquare className='size-3' />} />
        <TimelineContent>
          <TimelineTitle>Code Review</TimelineTitle>
          <TimelineDescription>
            2 comments from reviewers on styling approach.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-10T11:30'>11:30 AM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='destructive' icon={<X className='size-3' />} />
        <TimelineContent>
          <TimelineTitle>CI Failed</TimelineTitle>
          <TimelineDescription>
            Lint check failed due to unused import.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-10T12:00'>12:00 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='warning' icon={<AlertTriangle className='size-3' />} />
        <TimelineContent>
          <TimelineTitle>Changes Requested</TimelineTitle>
          <TimelineDescription>
            Reviewer requested minor refactoring of utility functions.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-10T14:15'>2:15 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker variant='success' icon={<CheckIcon className='size-3' />} />
        <TimelineContent>
          <TimelineTitle>Merged</TimelineTitle>
          <TimelineDescription>
            All checks passed. Merged into main by @developer.
          </TimelineDescription>
          <TimelineTime dateTime='2024-06-10T16:45'>4:45 PM</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
