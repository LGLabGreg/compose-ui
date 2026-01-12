'use client'

import {
  Button,
  CardDescription,
  CardFooter,
  CardRoot,
  CardSection,
  CardTitle,
  Separator,
} from '@lglab/compose-ui'

export default function MultiSectionCard() {
  return (
    <CardRoot className='w-96 max-w-full'>
      <CardSection className='space-y-0.5'>
        <CardTitle>Event Details</CardTitle>
        <CardDescription>Annual Company Meetup</CardDescription>
      </CardSection>

      <Separator />

      <CardSection>
        <dl className='space-y-3'>
          <div>
            <dt className='text-sm font-semibold'>Date:</dt>
            <dd className='text-sm'>March 15, 2024</dd>
          </div>
          <div>
            <dt className='text-sm font-semibold'>Location:</dt>
            <dd className='text-sm'>San Francisco, CA</dd>
          </div>
          <div>
            <dt className='text-sm font-semibold'>Attendees:</dt>
            <dd className='text-sm'>150 people</dd>
          </div>
        </dl>
      </CardSection>

      <Separator />

      <CardFooter className='gap-2'>
        <Button size='sm'>Register</Button>
        <Button size='sm' variant='outline'>
          Learn More
        </Button>
      </CardFooter>
    </CardRoot>
  )
}
