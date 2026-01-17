'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui/popover'
import { Bell } from 'lucide-react'

export default function DefaultExample() {
  return (
    <PopoverRoot>
      <PopoverTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Bell className='size-4' aria-label='Notifications' />
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='space-y-0.5'>
            <PopoverArrow />
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
