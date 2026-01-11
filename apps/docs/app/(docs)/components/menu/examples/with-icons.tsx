'use client'

import {
  Button,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Copy, LogOut, MoreVertical, PenLine, Settings, Trash2, User } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <MoreVertical className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuItem>
              <User className='size-4' />
              Profile
            </MenuItem>
            <MenuItem>
              <Settings className='size-4' />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <PenLine className='size-4' />
              Edit
            </MenuItem>
            <MenuItem>
              <Copy className='size-4' />
              Duplicate
            </MenuItem>
            <MenuSeparator />
            <MenuItem className='text-destructive'>
              <Trash2 className='size-4' />
              Delete
            </MenuItem>
            <MenuItem>
              <LogOut className='size-4' />
              Logout
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
