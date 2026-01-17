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
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'

export default function SidesExample() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowUp className='size-4' />
              <span className='sr-only'>Top</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='top'>
            <TooltipPopup>
              <TooltipArrow />
              Top
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowDown className='size-4' />
              <span className='sr-only'>Bottom</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='bottom'>
            <TooltipPopup>
              <TooltipArrow />
              Bottom
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowLeft className='size-4' />
              <span className='sr-only'>Left</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='left'>
            <TooltipPopup>
              <TooltipArrow />
              Left
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowRight className='size-4' />
              <span className='sr-only'>Right</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='right'>
            <TooltipPopup>
              <TooltipArrow />
              Right
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
