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
