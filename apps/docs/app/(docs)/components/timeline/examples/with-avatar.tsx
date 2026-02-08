'use client'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@lglab/compose-ui/avatar'
import {
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineRoot,
  TimelineTime,
  TimelineTitle,
} from '@lglab/compose-ui/timeline'

export default function WithAvatarExample() {
  return (
    <TimelineRoot>
      <TimelineItem>
        <TimelineMarker>
          <AvatarRoot>
            <AvatarImage
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
              alt='Marcus Johnson'
            />
            <AvatarFallback>MJ</AvatarFallback>
          </AvatarRoot>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Marcus Johnson merged a pull request</TimelineTitle>
          <TimelineDescription>
            Refactored authentication module to support OAuth 2.0 providers.
          </TimelineDescription>
          <TimelineTime dateTime='2024-05-10T14:32'>2 hours ago</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker>
          <AvatarRoot>
            <AvatarImage
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80'
              alt='Sarah Chen'
            />
            <AvatarFallback>SC</AvatarFallback>
          </AvatarRoot>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Sarah Chen commented on an issue</TimelineTitle>
          <TimelineDescription>
            Suggested a fix for the date picker timezone handling.
          </TimelineDescription>
          <TimelineTime dateTime='2024-05-10T11:15'>5 hours ago</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker>
          <AvatarRoot>
            <AvatarImage
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80'
              alt='Alex Rivera'
            />
            <AvatarFallback>AR</AvatarFallback>
          </AvatarRoot>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Alex Rivera opened a pull request</TimelineTitle>
          <TimelineDescription>
            Added new chart components with responsive breakpoints.
          </TimelineDescription>
          <TimelineTime dateTime='2024-05-09T16:45'>Yesterday</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineMarker>
          <AvatarRoot>
            <AvatarImage
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80'
              alt='Emma Patel'
            />
            <AvatarFallback>EP</AvatarFallback>
          </AvatarRoot>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Emma Patel deployed to production</TimelineTitle>
          <TimelineDescription>
            Released v1.4.2 with accessibility improvements across all form components.
          </TimelineDescription>
          <TimelineTime dateTime='2024-05-08T09:00'>2 days ago</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
