'use client'

import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
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
