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
import * as React from 'react'

const demoAlertDialog = AlertDialog.createHandle<{ itemName: string }>()

export default function ControlledMultipleExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 1' }}
          variant='destructive'
        >
          Delete Item 1
        </AlertDialogTrigger>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 2' }}
          variant='destructive'
        >
          Delete Item 2
        </AlertDialogTrigger>
        <AlertDialogTrigger
          handle={demoAlertDialog}
          payload={{ itemName: 'Item 3' }}
          variant='destructive'
        >
          Delete Item 3
        </AlertDialogTrigger>
      </div>

      <AlertDialogRoot handle={demoAlertDialog} open={open} onOpenChange={setOpen}>
        {({ payload: currentPayload }) => {
          const payload = currentPayload as { itemName: string } | undefined
          return (
            <AlertDialogPortal>
              <AlertDialogBackdrop />
              <AlertDialogPopup>
                <AlertDialogTitle>Delete item?</AlertDialogTitle>
                <AlertDialogDescription>
                  {payload && 'itemName' in payload
                    ? `Are you sure you want to delete ${payload.itemName}? This action cannot be undone.`
                    : 'This action cannot be undone. This will permanently delete the item.'}
                </AlertDialogDescription>
                <div className='mt-6 flex justify-end gap-2'>
                  <AlertDialogClose>Cancel</AlertDialogClose>
                  <AlertDialogClose variant='destructive'>Delete</AlertDialogClose>
                </div>
              </AlertDialogPopup>
            </AlertDialogPortal>
          )
        }}
      </AlertDialogRoot>
    </>
  )
}
