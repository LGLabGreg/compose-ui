'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

export default function AppearancesExample() {
  return (
    <div className='flex flex-col gap-6'>
      {/* Default (solid) appearance */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Default (Solid)</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='default'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='default'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='default'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='default'>
            Success
          </Badge>
          <Badge variant='warning' appearance='default'>
            Warning
          </Badge>
          <Badge variant='info' appearance='default'>
            Info
          </Badge>
        </div>
      </div>

      {/* Light appearance */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Light</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='light'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='light'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='light'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='light'>
            Success
          </Badge>
          <Badge variant='warning' appearance='light'>
            Warning
          </Badge>
          <Badge variant='info' appearance='light'>
            Info
          </Badge>
        </div>
      </div>

      {/* Outline appearance */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Outline</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='outline'>
            Default
          </Badge>
          <Badge variant='secondary' appearance='outline'>
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='outline'>
            Destructive
          </Badge>
          <Badge variant='success' appearance='outline'>
            Success
          </Badge>
          <Badge variant='warning' appearance='outline'>
            Warning
          </Badge>
          <Badge variant='info' appearance='outline'>
            Info
          </Badge>
        </div>
      </div>

      {/* Ghost appearance */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Ghost</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='default' appearance='ghost'>
            <BadgeDot />
            Default
          </Badge>
          <Badge variant='secondary' appearance='ghost'>
            <BadgeDot />
            Secondary
          </Badge>
          <Badge variant='destructive' appearance='ghost'>
            <BadgeDot />
            Destructive
          </Badge>
          <Badge variant='success' appearance='ghost'>
            <BadgeDot />
            Success
          </Badge>
          <Badge variant='warning' appearance='ghost'>
            <BadgeDot />
            Warning
          </Badge>
          <Badge variant='info' appearance='ghost'>
            <BadgeDot />
            Info
          </Badge>
        </div>
      </div>
    </div>
  )
}
