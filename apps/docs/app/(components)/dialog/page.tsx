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
} from '@lglab/compose-ui'
import { Trash2Icon } from 'lucide-react'

import { CodeBlock } from '@/components/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { DocLinks } from '@/components/doc-links'

import { ControlledDialogExample, FormDialogExample } from './examples'

const basicCode = `import {
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
} from '@lglab/compose-ui'

<DialogRoot>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogPortal>
    <DialogBackdrop />
    <DialogPopup>
      <DialogHeader>
        <DialogTitle>Notifications</DialogTitle>
        <DialogDescription>
          You are all caught up. Good job!
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogPopup>
  </DialogPortal>
</DialogRoot>`

const sizesCode = `import { ... } from '@lglab/compose-ui'

{/* Small */}
<DialogRoot>
  <DialogTrigger size='sm'>Small</DialogTrigger>
  <DialogPortal>
    <DialogBackdrop />
    <DialogPopup size='sm'>
      <DialogTitle>Small Dialog</DialogTitle>
      <DialogDescription>This is a small dialog.</DialogDescription>
      <DialogFooter>
        <DialogClose size='sm'>Close</DialogClose>
      </DialogFooter>
    </DialogPopup>
  </DialogPortal>
</DialogRoot>

{/* Default */}
<DialogRoot>
  <DialogTrigger>Default</DialogTrigger>
  <DialogPortal>
    <DialogBackdrop />
    <DialogPopup>
      <DialogTitle>Default Dialog</DialogTitle>
      <DialogDescription>This is a default sized dialog.</DialogDescription>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogPopup>
  </DialogPortal>
</DialogRoot>

{/* Large */}
<DialogRoot>
  <DialogTrigger size='lg'>Large</DialogTrigger>
  <DialogPortal>
    <DialogBackdrop />
    <DialogPopup size='lg'>
      <DialogTitle>Large Dialog</DialogTitle>
      <DialogDescription>This is a large dialog with more space.</DialogDescription>
      <DialogFooter>
        <DialogClose size='lg'>Close</DialogClose>
      </DialogFooter>
    </DialogPopup>
  </DialogPortal>
</DialogRoot>`

const variantsCode = `import { ... } from '@lglab/compose-ui'

<DialogRoot>
  <DialogTrigger variant='default'>Default</DialogTrigger>
  ...
</DialogRoot>

<DialogRoot>
  <DialogTrigger variant='secondary'>Secondary</DialogTrigger>
  ...
</DialogRoot>

<DialogRoot>
  <DialogTrigger variant='outline'>Outline</DialogTrigger>
  ...
</DialogRoot>

<DialogRoot>
  <DialogTrigger variant='ghost'>Ghost</DialogTrigger>
  ...
</DialogRoot>`

const formCode = `import { ... } from '@lglab/compose-ui'
import * as React from 'react'

function ContactDialog() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <MailIcon className='size-4' />
        Contact Us
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Send a Message</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(false)
          }}>
            <div className='mt-4 space-y-4'>
              <input type='email' placeholder='Email' />
              <textarea placeholder='Message' />
            </div>
            <DialogFooter>
              <DialogClose variant='ghost'>Cancel</DialogClose>
              <button type='submit'>Send</button>
            </DialogFooter>
          </form>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}`

const destructiveCode = `import { ... } from '@lglab/compose-ui'

<DialogRoot>
  <DialogTrigger variant='outline'>
    <Trash2Icon className='size-4' />
    Delete Account
  </DialogTrigger>
  <DialogPortal>
    <DialogBackdrop />
    <DialogPopup size='sm'>
      <DialogHeader>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete your account? 
          This action cannot be undone.
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
</DialogRoot>`

const controlledCode = `import { ... } from '@lglab/compose-ui'
import * as React from 'react'

function ControlledDialog() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger>Settings</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Manage your account settings and preferences.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose variant='ghost'>Cancel</DialogClose>
            <DialogClose>Save Changes</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}`

export default function DialogComponent() {
  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Dialog</h1>
        <p className='mt-2 text-muted-foreground'>
          A popup that opens on top of the entire page with a backdrop, commonly used for
          confirmations, forms, and important messages.
        </p>
        <div className='mt-4'>
          <DocLinks component='dialog' />
        </div>
      </div>

      <div className='space-y-8'>
        {/* Basic example */}
        <ComponentPreview title='Basic' codeBlock={<CodeBlock code={basicCode} />}>
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
        </ComponentPreview>

        {/* Trigger variants */}
        <ComponentPreview
          title='Trigger Variants'
          codeBlock={<CodeBlock code={variantsCode} />}
        >
          <div className='flex flex-wrap gap-2'>
            <DialogRoot>
              <DialogTrigger variant='default'>Default</DialogTrigger>
              <DialogPortal>
                <DialogBackdrop />
                <DialogPopup>
                  <DialogHeader>
                    <DialogTitle>Default Variant</DialogTitle>
                    <DialogDescription>
                      Triggered with default button style.
                    </DialogDescription>
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
                    <DialogDescription>
                      Triggered with outline button style.
                    </DialogDescription>
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
                    <DialogDescription>
                      Triggered with ghost button style.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </DialogRoot>
          </div>
        </ComponentPreview>

        {/* Size variants */}
        <ComponentPreview title='Sizes' codeBlock={<CodeBlock code={sizesCode} />}>
          <div className='flex flex-wrap gap-2'>
            <DialogRoot>
              <DialogTrigger size='sm'>Small</DialogTrigger>
              <DialogPortal>
                <DialogBackdrop />
                <DialogPopup size='sm'>
                  <DialogHeader>
                    <DialogTitle>Small Dialog</DialogTitle>
                    <DialogDescription>
                      This is a compact dialog for quick interactions.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose size='sm'>Close</DialogClose>
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
                      This is the default sized dialog, suitable for most use cases.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </DialogRoot>

            <DialogRoot>
              <DialogTrigger size='lg'>Large</DialogTrigger>
              <DialogPortal>
                <DialogBackdrop />
                <DialogPopup size='lg'>
                  <DialogHeader>
                    <DialogTitle>Large Dialog</DialogTitle>
                    <DialogDescription>
                      This is a large dialog with more space for complex content like
                      forms or detailed information.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose size='lg'>Close</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </DialogRoot>
          </div>
        </ComponentPreview>

        {/* With form */}
        <ComponentPreview title='With Form' codeBlock={<CodeBlock code={formCode} />}>
          <FormDialogExample />
        </ComponentPreview>

        {/* Destructive action */}
        <ComponentPreview
          title='Destructive Action'
          codeBlock={<CodeBlock code={destructiveCode} />}
        >
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
                    Are you sure you want to delete your account? This action cannot be
                    undone and all your data will be permanently removed.
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
        </ComponentPreview>

        {/* Controlled */}
        <ComponentPreview
          title='Controlled'
          codeBlock={<CodeBlock code={controlledCode} />}
        >
          <ControlledDialogExample />
        </ComponentPreview>
      </div>
    </div>
  )
}
