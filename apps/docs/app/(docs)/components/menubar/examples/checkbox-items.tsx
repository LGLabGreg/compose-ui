'use client'

import {
  MenubarCheckboxItem,
  MenubarCheckboxItemIndicator,
  MenubarCheckboxItemLabel,
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function CheckboxItemsExample() {
  const [showToolbar, setShowToolbar] = React.useState(true)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [showStatusBar, setShowStatusBar] = React.useState(true)

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
              <MenubarCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
                <MenubarCheckboxItemIndicator>
                  <Check className='size-3.5' />
                </MenubarCheckboxItemIndicator>
                <MenubarCheckboxItemLabel>Show Toolbar</MenubarCheckboxItemLabel>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
                <MenubarCheckboxItemIndicator>
                  <Check className='size-3.5' />
                </MenubarCheckboxItemIndicator>
                <MenubarCheckboxItemLabel>Show Sidebar</MenubarCheckboxItemLabel>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                <MenubarCheckboxItemIndicator>
                  <Check className='size-3.5' />
                </MenubarCheckboxItemIndicator>
                <MenubarCheckboxItemLabel>Show Status Bar</MenubarCheckboxItemLabel>
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>
  )
}
