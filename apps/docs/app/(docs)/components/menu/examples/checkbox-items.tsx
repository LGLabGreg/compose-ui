'use client'

import {
  Button,
  MenuArrow,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuCheckboxItemLabel,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Check, Settings } from 'lucide-react'
import * as React from 'react'

export default function CheckboxItemsExample() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <Settings className='size-4' />
            View Options
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              <MenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </MenuCheckboxItemIndicator>
              <MenuCheckboxItemLabel>Status Bar</MenuCheckboxItemLabel>
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              <MenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </MenuCheckboxItemIndicator>
              <MenuCheckboxItemLabel>Activity Bar</MenuCheckboxItemLabel>
            </MenuCheckboxItem>
            <MenuSeparator />
            <MenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              <MenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </MenuCheckboxItemIndicator>
              <MenuCheckboxItemLabel>Panel</MenuCheckboxItemLabel>
            </MenuCheckboxItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
