'use client'

import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { MoreVertical } from 'lucide-react'

export default function OpenOnHoverExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        openOnHover
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <MoreVertical className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner side='bottom'>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuSeparator />
            <MenuItem>Logout</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
