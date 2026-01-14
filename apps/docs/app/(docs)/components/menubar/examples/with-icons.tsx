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
import {
  Copy,
  EyeIcon,
  FileIcon,
  FolderOpen,
  Maximize,
  Printer,
  Redo,
  Save,
  Scissors,
  SquarePen,
  Undo,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

export default function WithIconsExample() {
  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>
          <FileIcon className='size-4' />
          File
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>
                <FileIcon className='size-4' />
                New
              </MenubarItem>
              <MenubarItem>
                <FolderOpen className='size-4' />
                Open
              </MenubarItem>
              <MenubarItem>
                <Save className='size-4' />
                Save
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Printer className='size-4' />
                Print
              </MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SquarePen className='size-4' />
          Edit
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>
                <Undo className='size-4' />
                Undo
              </MenubarItem>
              <MenubarItem>
                <Redo className='size-4' />
                Redo
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Scissors className='size-4' />
                Cut
              </MenubarItem>
              <MenubarItem>
                <Copy className='size-4' />
                Copy
              </MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <EyeIcon className='size-4' />
          View
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner>
            <MenubarPopup>
              <MenubarItem>
                <ZoomIn className='size-4' />
                Zoom In
              </MenubarItem>
              <MenubarItem>
                <ZoomOut className='size-4' />
                Zoom Out
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Maximize className='size-4' />
                Full Screen
              </MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>
  )
}
