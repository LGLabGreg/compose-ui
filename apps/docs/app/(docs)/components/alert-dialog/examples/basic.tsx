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
} from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger variant='destructive'>Discard draft</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You can&apos;t undo this action.
          </AlertDialogDescription>
          <div className='mt-6 flex justify-end gap-2'>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose variant='destructive'>Discard</AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  )
}
