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
import * as React from 'react'

export default function AnchorElementExample() {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

  return (
    <div className='flex items-center gap-2'>
      <span
        ref={setAnchor}
        className='rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground'
      >
        Anchor element
      </span>
      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline'>
              Hover me
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner anchor={anchor}>
            <TooltipPopup>
              <TooltipArrow />
              Anchored to the span element
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
