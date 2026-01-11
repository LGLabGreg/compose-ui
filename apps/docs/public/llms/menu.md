# Menu

A component that displays a list of options on a temporary surface.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { MenuRoot, MenuTrigger, MenuPortal, MenuPositioner, MenuPopup, MenuArrow, MenuItem, MenuSeparator, MenuGroup, MenuGroupLabel, MenuRadioGroup, MenuRadioItem, MenuRadioItemIndicator, MenuRadioItemLabel, MenuCheckboxItem, MenuCheckboxItemIndicator, MenuCheckboxItemLabel, MenuSubmenuTrigger, MenuSubmenuRoot } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { MoreVertical } from 'lucide-react'

export default function DefaultExample() {
  const handleLogout = () => false

  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <MoreVertical className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner side='bottom'>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuSeparator />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
```

### Open on Hover

```tsx
import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { MoreVertical } from 'lucide-react'

export default function OpenOnHoverExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        openOnHover
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <MoreVertical className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner side='bottom'>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuSeparator />
            <MenuItem>Logout</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
```

### Sides

```tsx
import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'

const sides = ['top', 'right', 'bottom', 'left'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {sides.map((side) => (
        <MenuRoot key={side}>
          <MenuTrigger
            render={(props) => (
              <Button {...props} variant='outline' className='capitalize'>
                {side}
              </Button>
            )}
          />
          <MenuPortal>
            <MenuPositioner side={side}>
              <MenuPopup>
                <MenuArrow />
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuSeparator />
                <MenuItem>Logout</MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </MenuRoot>
      ))}
    </div>
  )
}
```

### With Icons

```tsx
import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Copy, LogOut, MoreVertical, PenLine, Settings, Trash2, User } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <MoreVertical className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>
              <User className='size-4' />
              Profile
            </MenuItem>
            <MenuItem>
              <Settings className='size-4' />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <PenLine className='size-4' />
              Edit
            </MenuItem>
            <MenuItem>
              <Copy className='size-4' />
              Duplicate
            </MenuItem>
            <MenuSeparator />
            <MenuItem className='text-destructive'>
              <Trash2 className='size-4' />
              Delete
            </MenuItem>
            <MenuItem>
              <LogOut className='size-4' />
              Logout
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
```

### Groups

```tsx
import {
  Button,
  MenuArrow,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Menu } from 'lucide-react'

export default function GroupsExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <Menu className='size-4' />
            Menu
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuGroup>
              <MenuGroupLabel>Account</MenuGroupLabel>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuGroupLabel>Support</MenuGroupLabel>
              <MenuItem>Help Center</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
```

### Checkbox Items

```tsx
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
```

### Radio Group

```tsx
import {
  Button,
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
} from '@lglab/compose-ui'
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
```

### Submenu

```tsx
import {
  Button,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '@lglab/compose-ui'
import { ChevronRight, Share } from 'lucide-react'

export default function SubmenuExample() {
  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='gap-2'>
            <Share className='size-4' />
            Share
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuItem>Copy Link</MenuItem>
            <MenuItem>Email Link</MenuItem>
            <MenuSeparator />
            <MenuSubmenuRoot>
              <MenuSubmenuTrigger>
                Social Media
                <ChevronRight className='size-4' />
              </MenuSubmenuTrigger>
              <MenuPortal>
                <MenuPositioner side='right' sideOffset={4}>
                  <MenuPopup>
                    <MenuItem>Twitter</MenuItem>
                    <MenuItem>Facebook</MenuItem>
                    <MenuItem>LinkedIn</MenuItem>
                    <MenuSubmenuRoot>
                      <MenuSubmenuTrigger>
                        More
                        <ChevronRight className='size-4' />
                      </MenuSubmenuTrigger>
                      <MenuPortal>
                        <MenuPositioner side='right' sideOffset={4}>
                          <MenuPopup>
                            <MenuItem>Reddit</MenuItem>
                            <MenuItem>Pinterest</MenuItem>
                            <MenuItem>Mastodon</MenuItem>
                          </MenuPopup>
                        </MenuPositioner>
                      </MenuPortal>
                    </MenuSubmenuRoot>
                  </MenuPopup>
                </MenuPositioner>
              </MenuPortal>
            </MenuSubmenuRoot>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
```

## Resources

- [Base UI Menu Documentation](https://base-ui.com/react/components/menu)
- [API Reference](https://base-ui.com/react/components/menu#api-reference)
