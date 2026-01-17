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

export default function OpenOnHoverExample() {
  return (
    <PopoverRoot>
      <PopoverTrigger
        openOnHover
        delay={300}
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
            <PopoverDescription>
              Hover over the bell icon to see this popover. It opens after a 300ms delay.
            </PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
