'use client'

import {
  Button,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Menu } from 'lucide-react'

export default function GroupsExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <Menu className='size-4' />
            Menu
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuGroup>
              <MenuGroupLabel>Account</MenuGroupLabel>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuGroupLabel>Support</MenuGroupLabel>
              <MenuItem>Help Center</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
