'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  EmptyActions,
  EmptyBackground,
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from '@lglab/compose-ui/empty'
import { Inbox } from 'lucide-react'

export default function WithBackgroundExample() {
  return (
    <EmptyRoot className='rounded-md border'>
      <EmptyBackground>
        <img
          alt=''
          className='relative aspect-video w-full object-cover opacity-20'
          src='https://images.unsplash.com/photo-1769548140010-a68eb02d8f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </EmptyBackground>
      <EmptyIcon className='bg-primary text-primary-foreground'>
        <Inbox />
      </EmptyIcon>
      <EmptyTitle>Your inbox is empty</EmptyTitle>
      <EmptyDescription>
        New messages will appear here when you receive them.
      </EmptyDescription>
      <EmptyActions>
        <Button>Compose message</Button>
      </EmptyActions>
    </EmptyRoot>
  )
}
