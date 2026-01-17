'use client'

import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSubmenuRoot,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from '@lglab/compose-ui/context-menu'
import { ChevronRight } from 'lucide-react'

export default function SubmenuExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click for share options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSubmenuRoot>
              <ContextMenuSubmenuTrigger>
                Social Media
                <ChevronRight className='size-4' />
              </ContextMenuSubmenuTrigger>
              <ContextMenuPortal>
                <ContextMenuPositioner side='right' sideOffset={4}>
                  <ContextMenuPopup>
                    <ContextMenuItem>Twitter</ContextMenuItem>
                    <ContextMenuItem>Facebook</ContextMenuItem>
                    <ContextMenuItem>LinkedIn</ContextMenuItem>
                    <ContextMenuSubmenuRoot>
                      <ContextMenuSubmenuTrigger>
                        More
                        <ChevronRight className='size-4' />
                      </ContextMenuSubmenuTrigger>
                      <ContextMenuPortal>
                        <ContextMenuPositioner side='right' sideOffset={4}>
                          <ContextMenuPopup>
                            <ContextMenuItem>Reddit</ContextMenuItem>
                            <ContextMenuItem>Pinterest</ContextMenuItem>
                            <ContextMenuItem>Mastodon</ContextMenuItem>
                          </ContextMenuPopup>
                        </ContextMenuPositioner>
                      </ContextMenuPortal>
                    </ContextMenuSubmenuRoot>
                  </ContextMenuPopup>
                </ContextMenuPositioner>
              </ContextMenuPortal>
            </ContextMenuSubmenuRoot>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
