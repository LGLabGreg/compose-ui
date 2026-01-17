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

const sides = ['left', 'bottom', 'top', 'right'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2 items-center'>
      {sides.map((side) => (
        <PopoverRoot key={side}>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' className='capitalize'>
                {side}
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner side={side}>
              <PopoverPopup className='space-y-0.5'>
                <PopoverArrow />
                <PopoverTitle>Popover on {side}</PopoverTitle>
                <PopoverDescription>
                  This popover is positioned on the {side} side.
                </PopoverDescription>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>
      ))}
    </div>
  )
}
