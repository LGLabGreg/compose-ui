'use client'

import { Button } from '@lglab/compose-ui/button'
import { CardDescription, CardMedia, CardRoot, CardTitle } from '@lglab/compose-ui/card'

export default function SplitLayoutCard() {
  return (
    <CardRoot className='max-w-lg overflow-hidden flex flex-col md:flex-row'>
      <CardMedia className='aspect-video md:w-1/2 shrink-0'>
        <img
          src='https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80'
          alt='Open book on a wooden table'
          className='h-full object-cover'
        />
      </CardMedia>
      <div className='flex flex-1 flex-col justify-center p-6'>
        <CardTitle as='h2' className='text-xl text-primary'>
          Article Title
        </CardTitle>
        <CardDescription className='mt-2'>
          This is a longer description that provides context about the article content.
          Perfect for blog posts or news items.
        </CardDescription>
        <div className='mt-4 flex gap-2'>
          <Button size='sm'>Read Article</Button>
          <Button size='sm' variant='ghost'>
            Share
          </Button>
        </div>
      </div>
    </CardRoot>
  )
}
