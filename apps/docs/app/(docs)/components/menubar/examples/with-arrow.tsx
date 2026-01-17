'use client'

import {
  MenubarArrow,
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'

export default function WithArrowExample() {
  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarArrow />
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
              <MenubarArrow />
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
