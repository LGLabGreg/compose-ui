'use client'

import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import { LogOut, Settings, Trash, UserPen } from 'lucide-react'

export default function VerticalExample() {
  return (
    <GroupRoot orientation='vertical'>
      <Button variant='outline' className='justify-start'>
        <UserPen />
        Profile
      </Button>
      <Button variant='outline' className='justify-start'>
        <Settings />
        Settings
      </Button>
      <Button variant='outline' className='justify-start'>
        <LogOut />
        Logout
      </Button>
      <Button variant='outline' className='justify-start text-destructive'>
        <Trash />
        Delete
      </Button>
    </GroupRoot>
  )
}
