'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  EmptyActions,
  EmptyDescription,
  EmptyIcon,
  EmptyRoot,
  EmptyTitle,
} from '@lglab/compose-ui/empty'
import { Rocket } from 'lucide-react'

export default function DefaultExample() {
  return (
    <EmptyRoot>
      <EmptyIcon size='lg'>
        <Rocket />
      </EmptyIcon>
      <EmptyTitle>Welcome to your dashboard</EmptyTitle>
      <EmptyDescription>
        Get started by creating your first project. It only takes a few minutes to set up.
      </EmptyDescription>
      <EmptyActions>
        <Button variant='outline'>Read docs</Button>
        <Button>Create project</Button>
      </EmptyActions>
    </EmptyRoot>
  )
}
