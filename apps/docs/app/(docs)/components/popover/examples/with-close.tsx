'use client'

import {
  Button,
  PopoverArrow,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui'
import { Bell } from 'lucide-react'

export default function WithCloseExample() {
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
            <PopoverDescription>
              You have 3 new notifications. Click the close button to dismiss this
              popover.
            </PopoverDescription>
            <div className='mt-4 flex justify-end'>
              <PopoverClose
                render={(props) => (
                  <Button {...props} variant='outline' size='sm'>
                    Close
                  </Button>
                )}
              />
            </div>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
