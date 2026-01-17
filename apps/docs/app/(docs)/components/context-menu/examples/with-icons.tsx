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
import { Copy, LogOut, PenLine, Settings, Trash2, User } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>
              <User className='size-4' />
              Profile
            </ContextMenuItem>
            <ContextMenuItem>
              <Settings className='size-4' />
              Settings
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <PenLine className='size-4' />
              Edit
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className='size-4' />
              Duplicate
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className='text-destructive'>
              <Trash2 className='size-4' />
              Delete
            </ContextMenuItem>
            <ContextMenuItem>
              <LogOut className='size-4' />
              Logout
            </ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
