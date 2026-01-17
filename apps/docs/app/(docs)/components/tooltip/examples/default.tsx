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
import { Plus } from 'lucide-react'

export default function DefaultExample() {
  return (
    <TooltipRoot>
      <TooltipTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Plus className='size-4' />
            <span className='sr-only'>Add item</span>
          </Button>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>
            <TooltipArrow />
            Add item
          </TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
