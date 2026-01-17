'use client'

import {
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuCheckboxItemLabel,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui/context-menu'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function CheckboxItemsExample() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click to toggle options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Status Bar</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Activity Bar</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Panel</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
