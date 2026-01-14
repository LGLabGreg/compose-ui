'use client'

import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarTrigger,
} from '@lglab/compose-ui'
import { EyeIcon, FileIcon, SquarePen } from 'lucide-react'

export default function SizesExample() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-wrap items-center gap-2'>
        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='sm'>File</MenubarTrigger>
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
            <MenubarTrigger size='sm'>Edit</MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>

        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='default'>File</MenubarTrigger>
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
            <MenubarTrigger size='default'>Edit</MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>

        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='lg'>File</MenubarTrigger>
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
            <MenubarTrigger size='lg'>Edit</MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>
      </div>
      <div className='flex flex-wrap items-center gap-2'>
        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='icon-sm'>
              <FileIcon className='size-3.5' />
            </MenubarTrigger>
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
            <MenubarTrigger size='icon-sm'>
              <SquarePen className='size-3.5' />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size='icon-sm'>
              <EyeIcon className='size-3.5' />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>
        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='icon'>
              <FileIcon />
            </MenubarTrigger>
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
            <MenubarTrigger size='icon'>
              <SquarePen />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size='icon'>
              <EyeIcon />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>
        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger size='icon-lg'>
              <FileIcon />
            </MenubarTrigger>
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
            <MenubarTrigger size='icon-lg'>
              <SquarePen />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size='icon-lg'>
              <EyeIcon />
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarPositioner>
                <MenubarPopup>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                </MenubarPopup>
              </MenubarPositioner>
            </MenubarPortal>
          </MenubarMenu>
        </MenubarRoot>
      </div>
    </div>
  )
}
