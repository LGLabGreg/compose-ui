'use client'

import {
  Button,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { Info } from 'lucide-react'

export default function NoArrowExample() {
  return (
    <TooltipRoot>
      <TooltipTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Info className='size-4' />
            <span className='sr-only'>Information</span>
          </Button>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>Tooltip without arrow</TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
