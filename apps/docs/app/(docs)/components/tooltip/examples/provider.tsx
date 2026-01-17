'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui/tooltip'
import { Bold, Italic, Underline } from 'lucide-react'

export default function ProviderExample() {
  return (
    <TooltipProvider delay={200} closeDelay={0}>
      <div className='flex items-center gap-1'>
        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Bold className='size-4' />
                <span className='sr-only'>Bold</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Bold
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Italic className='size-4' />
                <span className='sr-only'>Italic</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Italic
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Underline className='size-4' />
                <span className='sr-only'>Underline</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Underline
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  )
}
