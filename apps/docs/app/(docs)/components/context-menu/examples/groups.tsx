'use client'

import {
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui/context-menu'
import { Copy, FilePlus, FolderOpen, Save, Settings, User } from 'lucide-react'

export default function GroupsExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click for grouped options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuGroup>
              <ContextMenuGroupLabel>File</ContextMenuGroupLabel>
              <ContextMenuItem>
                <FilePlus className='size-4' />
                New File
              </ContextMenuItem>
              <ContextMenuItem>
                <FolderOpen className='size-4' />
                Open
              </ContextMenuItem>
              <ContextMenuItem>
                <Save className='size-4' />
                Save
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Edit</ContextMenuGroupLabel>
              <ContextMenuItem>
                <Copy className='size-4' />
                Copy
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Account</ContextMenuGroupLabel>
              <ContextMenuItem>
                <User className='size-4' />
                Profile
              </ContextMenuItem>
              <ContextMenuItem>
                <Settings className='size-4' />
                Settings
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
