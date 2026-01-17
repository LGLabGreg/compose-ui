'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui/tooltip'
import { Clock } from 'lucide-react'

export default function DelayExample() {
  return (
    <div className='flex items-center gap-2'>
      <TooltipRoot>
        <TooltipTrigger
          delay={0}
          render={(props) => (
            <Button {...props} variant='outline'>
              <Clock className='size-4' />
              No delay
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Opens instantly
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          delay={1000}
          render={(props) => (
            <Button {...props} variant='outline'>
              <Clock className='size-4' />
              1s delay
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Opens after 1 second
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
