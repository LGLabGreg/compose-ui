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
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '@lglab/compose-ui/menu'
import { ChevronRight, Share } from 'lucide-react'

export default function SubmenuExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <Share className='size-4' />
            Share
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>Copy Link</MenuItem>
            <MenuItem>Email Link</MenuItem>
            <MenuSeparator />
            <MenuSubmenuRoot>
              <MenuSubmenuTrigger>
                Social Media
                <ChevronRight className='size-4' />
              </MenuSubmenuTrigger>
              <MenuPortal>
                <MenuPositioner side='right' sideOffset={4}>
                  <MenuPopup>
                    <MenuItem>Twitter</MenuItem>
                    <MenuItem>Facebook</MenuItem>
                    <MenuItem>LinkedIn</MenuItem>
                    <MenuSubmenuRoot>
                      <MenuSubmenuTrigger>
                        More
                        <ChevronRight className='size-4' />
                      </MenuSubmenuTrigger>
                      <MenuPortal>
                        <MenuPositioner side='right' sideOffset={4}>
                          <MenuPopup>
                            <MenuItem>Reddit</MenuItem>
                            <MenuItem>Pinterest</MenuItem>
                            <MenuItem>Mastodon</MenuItem>
                          </MenuPopup>
                        </MenuPositioner>
                      </MenuPortal>
                    </MenuSubmenuRoot>
                  </MenuPopup>
                </MenuPositioner>
              </MenuPortal>
            </MenuSubmenuRoot>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
