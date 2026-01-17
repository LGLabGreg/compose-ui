'use client'

import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui/context-menu'

export default function DefaultExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Settings</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Logout</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
