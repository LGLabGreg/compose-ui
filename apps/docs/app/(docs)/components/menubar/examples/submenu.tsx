'use client'

import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarSubmenuRoot,
  MenubarSubmenuTrigger,
  MenubarTrigger,
} from '@lglab/compose-ui'
import { ChevronRight } from 'lucide-react'

export default function SubmenuExample() {
  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>New</MenubarItem>
              <MenubarItem>Open</MenubarItem>
              <MenubarItem>Save</MenubarItem>
              <MenubarSubmenuRoot>
                <MenubarSubmenuTrigger>
                  Export
                  <ChevronRight className='size-4' />
                </MenubarSubmenuTrigger>
                <MenubarPortal>
                  <MenubarPositioner side='right' sideOffset={4}>
                    <MenubarPopup>
                      <MenubarItem>PDF</MenubarItem>
                      <MenubarItem>PNG</MenubarItem>
                      <MenubarItem>SVG</MenubarItem>
                    </MenubarPopup>
                  </MenubarPositioner>
                </MenubarPortal>
              </MenubarSubmenuRoot>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>
  )
}
