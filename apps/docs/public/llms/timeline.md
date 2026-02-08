# Timeline

A composable timeline component for displaying chronological events with multiple layout positions, marker variants, and custom icons.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { TimelineRoot, TimelineItem, TimelineMarker, TimelineContent, TimelineSpacer, TimelineTitle, TimelineDescription, TimelineTime } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
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
```

### Variants

```tsx
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
```

### With Icons

```tsx
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
```

### With Custom Marker

```tsx
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
```

### Right Aligned

```tsx
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
```

### Alternate

```tsx
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
```

### Center

```tsx
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
```

