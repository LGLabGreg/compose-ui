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

export default function VariantsExample() {
  return (
    <div className='flex items-center gap-2'>
      <TooltipRoot variant='default'>
        <TooltipTrigger render={(props) => <Button {...props}>Default</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Default tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot variant='secondary'>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='secondary'>
              Secondary
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Secondary tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot variant='outline'>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline'>
              Outline
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Outline tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
