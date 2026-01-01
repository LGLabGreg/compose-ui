'use client'

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
import { SettingsIcon } from 'lucide-react'
import * as React from 'react'

export default function ControlledDialogExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='flex items-center gap-4'>
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger variant='outline' className='gap-1.5'>
          <SettingsIcon className='size-4' />
          Settings
        </DialogTrigger>
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
                  <p className='text-sm'>Receive email updates about your account</p>
                </div>
                <div className='h-5 w-9 rounded-full bg-primary' />
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border p-4'>
                <div>
                  <p className='font-medium'>Marketing Emails</p>
                  <p className='text-sm'>Receive emails about new features and offers</p>
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
      <span className='text-sm'>Dialog is {open ? 'open' : 'closed'}</span>
    </div>
  )
}
