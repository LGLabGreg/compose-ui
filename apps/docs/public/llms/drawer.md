# Drawer

A panel that slides in from the edge of the screen, commonly used for navigation, filters, or supplementary content.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { DrawerRoot, DrawerTrigger, DrawerPortal, DrawerBackdrop, DrawerPopup, DrawerTitle, DrawerDescription, DrawerClose, DrawerHeader, DrawerContent, DrawerFooter } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
          <DrawerFooter className='flex justify-end'>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

### Sides

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'

const sides = ['top', 'right', 'bottom', 'left'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      {sides.map((side) => (
        <DrawerRoot key={side}>
          <DrawerTrigger className='capitalize'>{side}</DrawerTrigger>
          <DrawerPortal>
            <DrawerBackdrop />
            <DrawerPopup side={side}>
              <DrawerHeader>
                <DrawerTitle className='capitalize'>{side} Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the {side}.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerContent>
                <p>
                  Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
                  bibendum est aliquam mauris laoreet interdum.
                </p>
              </DrawerContent>
              <DrawerFooter className='flex justify-end'>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerPopup>
          </DrawerPortal>
        </DrawerRoot>
      ))}
    </div>
  )
}
```

### Custom size

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'

export default function SizeExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup className='w-1/2'>
          <DrawerHeader>
            <DrawerTitle>Custom Size</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
          <DrawerFooter className='flex justify-end'>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

### Close button

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'
import { X } from 'lucide-react'

export default function CloseButtonExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerClose
            aria-label='Close'
            size='icon-sm'
            className='absolute top-3 right-3'
          >
            <X className='size-4' />
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

### Scrollable

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

export default function ScrollableExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent className='flex-1 min-h-0'>
            <ScrollAreaRoot className='h-full'>
              <ScrollAreaViewport>
                <ScrollAreaContent>
                  <div className='space-y-4'>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <p key={i}>
                        Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit.
                        Nulla bibendum est aliquam mauris laoreet interdum.
                      </p>
                    ))}
                  </div>
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar orientation='vertical'>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollAreaRoot>
          </DrawerContent>
          <DrawerFooter className='flex justify-end'>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

### Controlled

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
} from '@lglab/compose-ui'
import { Button } from '@lglab/compose-ui'
import { SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

export default function ControlledExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant='outline'>
        <SlidersHorizontal />
        Filters
      </Button>
      <DrawerRoot open={open} onOpenChange={setOpen}>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>Drawer</DrawerTitle>
              <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
            </DrawerHeader>
            <DrawerContent>
              <p>
                Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
                bibendum est aliquam mauris laoreet interdum.
              </p>
            </DrawerContent>
            <DrawerFooter className='flex justify-end'>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerPopup>
        </DrawerPortal>
      </DrawerRoot>
    </>
  )
}
```

### Nested

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'

export default function NestedExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
          <DrawerFooter className='flex gap-2 justify-end'>
            <DrawerClose>Close</DrawerClose>
            <DrawerRoot>
              <DrawerTrigger>Nested drawer</DrawerTrigger>
              <DrawerPortal>
                <DrawerPopup>
                  <DrawerHeader>
                    <DrawerTitle>Nested drawer</DrawerTitle>
                    <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
                  </DrawerHeader>
                  <DrawerContent>
                    <p>
                      Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit.
                      Nulla bibendum est aliquam mauris laoreet interdum.
                    </p>
                  </DrawerContent>
                  <DrawerFooter className='flex justify-end'>
                    <DrawerClose>Close</DrawerClose>
                  </DrawerFooter>
                </DrawerPopup>
              </DrawerPortal>
            </DrawerRoot>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

### Footer

```tsx
import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'
import { Button } from '@lglab/compose-ui'

export default function FooterExample() {
  return (
    <DrawerRoot>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet</DrawerDescription>
          </DrawerHeader>
          <DrawerContent className='flex-1'>
            <p>
              Curabitur non dui rhoncus, cursus turpis fermentum, cursus elit. Nulla
              bibendum est aliquam mauris laoreet interdum.
            </p>
          </DrawerContent>
          <DrawerFooter className='flex gap-2 justify-end'>
            <DrawerClose>Cancel</DrawerClose>
            <Button variant='destructive'>Delete</Button>
          </DrawerFooter>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  )
}
```

## Resources

- [Base UI Drawer Documentation](https://base-ui.com/react/components/drawer)
- [API Reference](https://base-ui.com/react/components/drawer#api-reference)
