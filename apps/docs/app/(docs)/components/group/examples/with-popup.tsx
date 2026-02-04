'use client'

import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
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
import {
  Flag,
  Heart,
  Link2,
  MessageSquare,
  MoreHorizontal,
  Repeat2,
  Share2,
} from 'lucide-react'

export default function WithPopupExample() {
  return (
    <GroupRoot>
      <Button variant='outline'>
        <Heart />
        24
      </Button>
      <Button variant='outline'>
        <MessageSquare />
        12
      </Button>
      <Button variant='outline'>
        <Repeat2 />5
      </Button>
      <MenuRoot>
        <MenuTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <MoreHorizontal />
            </Button>
          )}
        />
        <MenuPortal>
          <MenuPositioner side='bottom' align='end'>
            <MenuPopup>
              <MenuArrow />
              <MenuItem>
                <Share2 />
                Share
              </MenuItem>
              <MenuItem>
                <Link2 />
                Copy Link
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <Flag />
                Report
              </MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    </GroupRoot>
  )
}
