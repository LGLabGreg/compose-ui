'use client'

import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui/alert-dialog'

export default function MultipleTriggersExample() {
  return (
    <AlertDialogRoot>
      <div className='flex flex-wrap gap-2'>
        <AlertDialogTrigger variant='destructive'>Delete Item 1</AlertDialogTrigger>
        <AlertDialogTrigger variant='destructive'>Delete Item 2</AlertDialogTrigger>
        <AlertDialogTrigger variant='destructive'>Delete Item 3</AlertDialogTrigger>
      </div>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Delete item?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
          <div className='mt-6 flex justify-end gap-2'>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose variant='destructive'>Delete</AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  )
}
