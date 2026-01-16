'use client'

import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'

export default function TrackCursorExample() {
  return (
    <TooltipRoot trackCursorAxis='both'>
      <TooltipTrigger
        render={(props) => (
          <div
            {...props}
            className='flex h-32 w-64 cursor-default items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-sm text-muted-foreground'
          >
            Hover anywhere in this area
          </div>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>
            <TooltipArrow />
            Following your cursor
          </TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
