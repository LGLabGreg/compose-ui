'use client'

import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui'

export default function DefaultExample() {
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
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Full Screen</MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>
  )
}
