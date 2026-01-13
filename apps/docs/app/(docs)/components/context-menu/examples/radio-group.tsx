'use client'

import {
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuRadioItemLabel,
  ContextMenuRoot,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function RadioGroupExample() {
  const [theme, setTheme] = React.useState('system')

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click to select theme
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Theme</ContextMenuGroupLabel>
              <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
                <ContextMenuRadioItem value='light'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>Light</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value='dark'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>Dark</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value='system'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>System</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
