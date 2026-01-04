'use client'

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@lglab/compose-ui'

const demoAlertDialog = AlertDialog.createHandle()

export default function DetachedTriggersExample() {
  return (
    <>
      <AlertDialogTrigger handle={demoAlertDialog} variant='destructive'>
        Discard draft
      </AlertDialogTrigger>

      <AlertDialogRoot handle={demoAlertDialog}>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Discard draft?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            <div className='mt-6 flex justify-end gap-2'>
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogClose variant='destructive'>Discard</AlertDialogClose>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>
    </>
  )
}
