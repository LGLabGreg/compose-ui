# Popover

An accessible popup anchored to a button.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverBackdrop, PopoverPositioner, PopoverPopup, PopoverArrow, PopoverTitle, PopoverDescription, PopoverClose, PopoverViewport } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  Button,
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui'
import { Bell } from 'lucide-react'

export default function DefaultExample() {
  return (
    <PopoverRoot>
      <PopoverTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Bell className='size-4' aria-label='Notifications' />
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='space-y-0.5'>
            <PopoverArrow />
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
```

### Open on Hover

```tsx
import {
  Button,
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui'
import { Bell } from 'lucide-react'

export default function OpenOnHoverExample() {
  return (
    <PopoverRoot>
      <PopoverTrigger
        openOnHover
        delay={300}
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Bell className='size-4' aria-label='Notifications' />
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='space-y-0.5'>
            <PopoverArrow />
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>
              Hover over the bell icon to see this popover. It opens after a 300ms delay.
            </PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
```

### With Close Button

```tsx
import {
  Button,
  PopoverArrow,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui'
import { Bell } from 'lucide-react'

export default function WithCloseExample() {
  return (
    <PopoverRoot>
      <PopoverTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Bell className='size-4' aria-label='Notifications' />
          </Button>
        )}
      />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className='space-y-0.5'>
            <PopoverArrow />
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>
              You have 3 new notifications. Click the close button to dismiss this
              popover.
            </PopoverDescription>
            <div className='mt-4 flex justify-end'>
              <PopoverClose
                render={(props) => (
                  <Button {...props} variant='outline' size='sm'>
                    Close
                  </Button>
                )}
              />
            </div>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  )
}
```

### Sides

```tsx
import {
  Button,
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '@lglab/compose-ui'

const sides = ['left', 'bottom', 'top', 'right'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2 items-center'>
      {sides.map((side) => (
        <PopoverRoot key={side}>
          <PopoverTrigger
            render={(props) => (
              <Button {...props} variant='outline' className='capitalize'>
                {side}
              </Button>
            )}
          />
          <PopoverPortal>
            <PopoverPositioner side={side}>
              <PopoverPopup className='space-y-0.5'>
                <PopoverArrow />
                <PopoverTitle>Popover on {side}</PopoverTitle>
                <PopoverDescription>
                  This popover is positioned on the {side} side.
                </PopoverDescription>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        </PopoverRoot>
      ))}
    </div>
  )
}
```

## Resources

- [Base UI Popover Documentation](https://base-ui.com/react/components/popover)
- [API Reference](https://base-ui.com/react/components/popover#api-reference)
