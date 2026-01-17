'use client'

import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRadioItemIndicator,
  MenubarRadioItemLabel,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function RadioGroupExample() {
  const [zoom, setZoom] = React.useState('100')

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
              <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
                <MenubarRadioItem value='50'>
                  <MenubarRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenubarRadioItemIndicator>
                  <MenubarRadioItemLabel>50%</MenubarRadioItemLabel>
                </MenubarRadioItem>
                <MenubarRadioItem value='75'>
                  <MenubarRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenubarRadioItemIndicator>
                  <MenubarRadioItemLabel>75%</MenubarRadioItemLabel>
                </MenubarRadioItem>
                <MenubarRadioItem value='100'>
                  <MenubarRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenubarRadioItemIndicator>
                  <MenubarRadioItemLabel>100%</MenubarRadioItemLabel>
                </MenubarRadioItem>
                <MenubarRadioItem value='125'>
                  <MenubarRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenubarRadioItemIndicator>
                  <MenubarRadioItemLabel>125%</MenubarRadioItemLabel>
                </MenubarRadioItem>
                <MenubarRadioItem value='150'>
                  <MenubarRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenubarRadioItemIndicator>
                  <MenubarRadioItemLabel>150%</MenubarRadioItemLabel>
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem>Full Screen</MenubarItem>
            </MenubarPopup>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>
  )
}
