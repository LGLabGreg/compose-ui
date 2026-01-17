'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui/menu'

const sides = ['left', 'bottom', 'top', 'right'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {sides.map((side) => (
        <MenuRoot key={side}>
          <MenuTrigger
            render={(props) => (
              <Button {...props} variant='outline' className='capitalize'>
                {side}
              </Button>
            )}
          />
          <MenuPortal>
            <MenuPositioner side={side}>
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
      ))}
    </div>
  )
}
