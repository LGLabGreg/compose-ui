'use client'

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
