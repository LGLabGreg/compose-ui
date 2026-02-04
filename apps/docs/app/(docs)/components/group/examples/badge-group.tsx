'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import { Download } from 'lucide-react'

export default function BadgeGroupExample() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <GroupRoot>
        <Badge variant='secondary' appearance='outline'>
          React
        </Badge>
        <Badge variant='secondary' appearance='outline'>
          TypeScript
        </Badge>
        <Badge variant='secondary' appearance='outline'>
          Tailwind
        </Badge>
      </GroupRoot>
      <GroupRoot>
        <Badge variant='destructive' appearance='outline'>
          12 errors
        </Badge>
        <Button variant='outline' className='h-6 text-xs'>
          <Download className='size-3' />
          Report
        </Button>
      </GroupRoot>
    </div>
  )
}
