# Dialog

A popup that opens on top of the entire page with a backdrop, commonly used for confirmations, forms, and important messages.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { DialogRoot, DialogTrigger, DialogPortal, DialogBackdrop, DialogPopup, DialogTitle, DialogDescription, DialogClose, DialogHeader, DialogFooter } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'

export default function BasicExample() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>You are all caught up. Good job!</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
```

### Trigger Variants

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'

export default function VariantsExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <DialogRoot>
        <DialogTrigger variant='default'>Default</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Default Variant</DialogTitle>
              <DialogDescription>Triggered with default button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='secondary'>Secondary</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Secondary Variant</DialogTitle>
              <DialogDescription>
                Triggered with secondary button style.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='outline'>Outline</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Outline Variant</DialogTitle>
              <DialogDescription>Triggered with outline button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger variant='ghost'>Ghost</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Ghost Variant</DialogTitle>
              <DialogDescription>Triggered with ghost button style.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </div>
  )
}
```

### Sizes

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'

export default function SizesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      <DialogRoot>
        <DialogTrigger>Small</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='sm'>
            <DialogHeader>
              <DialogTitle>Small Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Default</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Default Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Large</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='lg'>
            <DialogHeader>
              <DialogTitle>Large Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Extra Large</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='xl'>
            <DialogHeader>
              <DialogTitle>Extra Large Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Full Screen</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='full'>
            <DialogHeader>
              <DialogTitle>Full Screen Dialog</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>

      <DialogRoot>
        <DialogTrigger>Custom</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup className='w-1/2'>
            <DialogHeader>
              <DialogTitle>Custom Size</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </div>
  )
}
```

### With Form

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'
import { MailIcon } from 'lucide-react'
import * as React from 'react'

export default function FormDialogExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger className='gap-1.5'>
        <MailIcon className='size-4' />
        Contact Us
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Send a Message</DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            <div className='mt-4 space-y-4'>
              <div>
                <label htmlFor='email' className='mb-1.5 block text-sm font-medium'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  className='w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                />
              </div>
              <div>
                <label htmlFor='message' className='mb-1.5 block text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  placeholder='How can we help?'
                  rows={4}
                  className='w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose variant='ghost'>Cancel</DialogClose>
              <button
                type='submit'
                className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                Send Message
              </button>
            </DialogFooter>
          </form>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
```

### Destructive Action

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'
import { Trash2Icon } from 'lucide-react'

export default function DestructiveExample() {
  return (
    <DialogRoot>
      <DialogTrigger variant='outline' className='gap-1.5'>
        <Trash2Icon className='size-4' />
        Delete Account
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup size='sm'>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot be undone
              and all your data will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose variant='ghost'>Cancel</DialogClose>
            <DialogClose className='bg-destructive text-white hover:bg-destructive/90'>
              Delete
            </DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
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
} from '@lglab/compose-ui/drawer'
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

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
import { Button } from '@lglab/compose-ui/button'
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from '@lglab/compose-ui/dialog'
import { SettingsIcon } from 'lucide-react'
import * as React from 'react'

export default function ControlledDialogExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant='outline'>
        <SettingsIcon /> Settings
      </Button>
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Manage your account settings and preferences.
              </DialogDescription>
            </DialogHeader>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center justify-between rounded-lg border border-border p-4'>
                <div>
                  <p className='font-medium'>Email Notifications</p>
                  <p>Receive email updates about your account</p>
                </div>
                <div className='h-5 w-9 rounded-full bg-primary' />
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border p-4'>
                <div>
                  <p className='font-medium'>Marketing Emails</p>
                  <p>Receive emails about new features and offers</p>
                </div>
                <div className='h-5 w-9 rounded-full bg-muted' />
              </div>
            </div>
            <DialogFooter>
              <DialogClose variant='ghost'>Cancel</DialogClose>
              <DialogClose>Save Changes</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </>
  )
}
```

### Nested

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@lglab/compose-ui/dialog'

export default function NestedExample() {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogRoot>
              <DialogTrigger>Nested Dialog</DialogTrigger>
              <DialogPortal>
                <DialogBackdrop />
                <DialogPopup>
                  <DialogTitle>Nested Dialog</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    quos.
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </DialogRoot>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/dialog)
