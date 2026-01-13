# Context Menu

A menu triggered by right-click or long press, rendering at the pointer position.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { ContextMenuRoot, ContextMenuTrigger, ContextMenuPortal, ContextMenuPositioner, ContextMenuPopup, ContextMenuArrow, ContextMenuItem, ContextMenuSeparator, ContextMenuGroup, ContextMenuGroupLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuRadioItemIndicator, ContextMenuRadioItemLabel, ContextMenuCheckboxItem, ContextMenuCheckboxItemIndicator, ContextMenuCheckboxItemLabel, ContextMenuSubmenuTrigger, ContextMenuSubmenuRoot } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui'

export default function DefaultExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Settings</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Logout</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

### With Icons

```tsx
import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { Copy, LogOut, PenLine, Settings, Trash2, User } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>
              <User className='size-4' />
              Profile
            </ContextMenuItem>
            <ContextMenuItem>
              <Settings className='size-4' />
              Settings
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <PenLine className='size-4' />
              Edit
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className='size-4' />
              Duplicate
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className='text-destructive'>
              <Trash2 className='size-4' />
              Delete
            </ContextMenuItem>
            <ContextMenuItem>
              <LogOut className='size-4' />
              Logout
            </ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

### Groups

```tsx
import {
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { Copy, FilePlus, FolderOpen, Save, Settings, User } from 'lucide-react'

export default function GroupsExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click for grouped options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuGroup>
              <ContextMenuGroupLabel>File</ContextMenuGroupLabel>
              <ContextMenuItem>
                <FilePlus className='size-4' />
                New File
              </ContextMenuItem>
              <ContextMenuItem>
                <FolderOpen className='size-4' />
                Open
              </ContextMenuItem>
              <ContextMenuItem>
                <Save className='size-4' />
                Save
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Edit</ContextMenuGroupLabel>
              <ContextMenuItem>
                <Copy className='size-4' />
                Copy
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Account</ContextMenuGroupLabel>
              <ContextMenuItem>
                <User className='size-4' />
                Profile
              </ContextMenuItem>
              <ContextMenuItem>
                <Settings className='size-4' />
                Settings
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

### Checkbox Items

```tsx
import {
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuCheckboxItemLabel,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function CheckboxItemsExample() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click to toggle options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Status Bar</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Activity Bar</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              <ContextMenuCheckboxItemIndicator>
                <Check className='size-3.5' />
              </ContextMenuCheckboxItemIndicator>
              <ContextMenuCheckboxItemLabel>Panel</ContextMenuCheckboxItemLabel>
            </ContextMenuCheckboxItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

### Radio Group

```tsx
import {
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuRadioItemLabel,
  ContextMenuRoot,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { Check } from 'lucide-react'
import * as React from 'react'

export default function RadioGroupExample() {
  const [theme, setTheme] = React.useState('system')

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click to select theme
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Theme</ContextMenuGroupLabel>
              <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
                <ContextMenuRadioItem value='light'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>Light</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value='dark'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>Dark</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value='system'>
                  <ContextMenuRadioItemIndicator>
                    <Check className='size-3.5' />
                  </ContextMenuRadioItemIndicator>
                  <ContextMenuRadioItemLabel>System</ContextMenuRadioItemLabel>
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

### Submenu

```tsx
import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSubmenuRoot,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from '@lglab/compose-ui'
import { ChevronRight } from 'lucide-react'

export default function SubmenuExample() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className='flex h-40 w-full sm:w-72 p-2 items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground text-center'>
        Right-click for share options
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSubmenuRoot>
              <ContextMenuSubmenuTrigger>
                Social Media
                <ChevronRight className='size-4' />
              </ContextMenuSubmenuTrigger>
              <ContextMenuPortal>
                <ContextMenuPositioner side='right' sideOffset={4}>
                  <ContextMenuPopup>
                    <ContextMenuItem>Twitter</ContextMenuItem>
                    <ContextMenuItem>Facebook</ContextMenuItem>
                    <ContextMenuItem>LinkedIn</ContextMenuItem>
                    <ContextMenuSubmenuRoot>
                      <ContextMenuSubmenuTrigger>
                        More
                        <ChevronRight className='size-4' />
                      </ContextMenuSubmenuTrigger>
                      <ContextMenuPortal>
                        <ContextMenuPositioner side='right' sideOffset={4}>
                          <ContextMenuPopup>
                            <ContextMenuItem>Reddit</ContextMenuItem>
                            <ContextMenuItem>Pinterest</ContextMenuItem>
                            <ContextMenuItem>Mastodon</ContextMenuItem>
                          </ContextMenuPopup>
                        </ContextMenuPositioner>
                      </ContextMenuPortal>
                    </ContextMenuSubmenuRoot>
                  </ContextMenuPopup>
                </ContextMenuPositioner>
              </ContextMenuPortal>
            </ContextMenuSubmenuRoot>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  )
}
```

## Resources

- [Base UI Context Menu Documentation](https://base-ui.com/react/components/context-menu)
- [API Reference](https://base-ui.com/react/components/context-menu#api-reference)
