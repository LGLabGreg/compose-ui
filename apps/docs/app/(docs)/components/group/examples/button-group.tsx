'use client'

import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import { Bookmark, Copy, Share } from 'lucide-react'

export default function ButtonGroupExample() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <GroupRoot>
        <Button variant='outline'>
          <Copy />
          Copy
        </Button>
        <Button variant='outline'>
          <Share />
          Share
        </Button>
        <Button variant='outline'>
          <Bookmark />
          Bookmark
        </Button>
      </GroupRoot>
      <GroupRoot>
        <Button variant='outline'>Copy</Button>
        <Button variant='outline'>Share</Button>
        <Button variant='outline'>Bookmark</Button>
      </GroupRoot>
      <GroupRoot>
        <Button variant='outline' size='icon'>
          <Copy />
        </Button>
        <Button variant='outline' size='icon'>
          <Share />
        </Button>
        <Button variant='outline' size='icon'>
          <Bookmark />
        </Button>
      </GroupRoot>
    </div>
  )
}
