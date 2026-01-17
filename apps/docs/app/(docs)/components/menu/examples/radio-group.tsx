'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  MenuArrow,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRadioItemLabel,
  MenuRoot,
  MenuTrigger,
} from '@lglab/compose-ui/menu'
import { Check, SunMoon } from 'lucide-react'
import * as React from 'react'

export default function RadioGroupExample() {
  const [theme, setTheme] = React.useState('system')

  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <SunMoon className='size-4' />
            Theme
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuGroup>
              <MenuGroupLabel>Theme</MenuGroupLabel>
              <MenuRadioGroup value={theme} onValueChange={setTheme}>
                <MenuRadioItem value='light'>
                  <MenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenuRadioItemIndicator>
                  <MenuRadioItemLabel>Light</MenuRadioItemLabel>
                </MenuRadioItem>
                <MenuRadioItem value='dark'>
                  <MenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenuRadioItemIndicator>
                  <MenuRadioItemLabel>Dark</MenuRadioItemLabel>
                </MenuRadioItem>
                <MenuRadioItem value='system'>
                  <MenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </MenuRadioItemIndicator>
                  <MenuRadioItemLabel>System</MenuRadioItemLabel>
                </MenuRadioItem>
              </MenuRadioGroup>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
