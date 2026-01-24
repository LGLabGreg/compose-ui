'use client'

import { Badge, BadgeDot } from '@lglab/compose-ui/badge'

export default function CustomColorsExample() {
  return (
    <div className='flex flex-col gap-6'>
      {/* Default (solid) appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Default (Solid)</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='default'
            className='bg-purple-600 text-white'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-pink-500 text-white'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-indigo-600 text-white'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-teal-600 text-white'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='default'
            className='bg-amber-600 text-white'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Light appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Light</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='light'
            className='bg-purple-500/10 text-purple-600 dark:text-purple-400'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-pink-500/10 text-pink-600 dark:text-pink-400'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-teal-500/10 text-teal-600 dark:text-teal-400'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='light'
            className='bg-amber-500/10 text-amber-600 dark:text-amber-400'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Outline appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Outline</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='outline'
            className='border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
          >
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-pink-500 bg-pink-500/10 text-pink-600 dark:text-pink-400'
          >
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
          >
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
          >
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='outline'
            className='border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
          >
            Amber
          </Badge>
        </div>
      </div>

      {/* Ghost appearance with custom colors */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-medium text-muted-foreground'>Ghost</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-purple-600 dark:text-purple-400'
          >
            <BadgeDot />
            Purple
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-pink-600 dark:text-pink-400'
          >
            <BadgeDot />
            Pink
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-indigo-600 dark:text-indigo-400'
          >
            <BadgeDot />
            Indigo
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-teal-600 dark:text-teal-400'
          >
            <BadgeDot />
            Teal
          </Badge>
          <Badge
            variant='default'
            appearance='ghost'
            className='text-amber-600 dark:text-amber-400'
          >
            <BadgeDot />
            Amber
          </Badge>
        </div>
      </div>
    </div>
  )
}
