# Menubar

A horizontal menu bar with dropdown menus for application commands and options.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { MenubarRoot, MenubarMenu, MenubarTrigger, MenubarPortal, MenubarPositioner, MenubarPopup, MenubarArrow, MenubarItem, MenubarSeparator, MenubarGroup, MenubarGroupLabel, MenubarRadioGroup, MenubarRadioItem, MenubarRadioItemIndicator, MenubarRadioItemLabel, MenubarCheckboxItem, MenubarCheckboxItemIndicator, MenubarCheckboxItemLabel, MenubarSubmenuTrigger, MenubarSubmenuRoot } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'

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
```

### With Icons

```tsx
import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'
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
```

### With Arrow

```tsx
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
```

### Submenu

```tsx
import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarSeparator,
  MenubarSubmenuRoot,
  MenubarSubmenuTrigger,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'
import { ChevronRight } from 'lucide-react'

export default function SubmenuExample() {
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
              <MenubarSubmenuRoot>
                <MenubarSubmenuTrigger>
                  Export
                  <ChevronRight className='size-4' />
                </MenubarSubmenuTrigger>
                <MenubarPortal>
                  <MenubarPositioner side='right' sideOffset={4}>
                    <MenubarPopup>
                      <MenubarItem>PDF</MenubarItem>
                      <MenubarItem>PNG</MenubarItem>
                      <MenubarItem>SVG</MenubarItem>
                    </MenubarPopup>
                  </MenubarPositioner>
                </MenubarPortal>
              </MenubarSubmenuRoot>
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
    </MenubarRoot>
  )
}
```

### Checkbox Items

```tsx
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
```

### Radio Group

```tsx
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
```

### Ghost

```tsx
import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'

export default function GhostExample() {
  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger variant='ghost'>File</MenubarTrigger>
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
        <MenubarTrigger variant='ghost'>Edit</MenubarTrigger>
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
        <MenubarTrigger variant='ghost'>View</MenubarTrigger>
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
  )
}
```

### Sizes

```tsx
import {
  MenubarItem,
  MenubarMenu,
  MenubarPopup,
  MenubarPortal,
  MenubarPositioner,
  MenubarRoot,
  MenubarTrigger,
} from '@lglab/compose-ui/menubar'
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
```

## Resources

- [Base UI](https://base-ui.com/react/components/menubar)
