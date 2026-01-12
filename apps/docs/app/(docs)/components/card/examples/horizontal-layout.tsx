'use client'

import {
  Button,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui'

export default function HorizontalLayoutCard() {
  return (
    <CardRoot className='w-fit flex flex-row'>
      <CardMedia className='w-30 rounded-l-lg'>
        <img
          src='https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80'
          alt='Grid of user avatars'
          className='aspect-square'
        />
      </CardMedia>
      <div className='flex flex-1 flex-col'>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>
            Member since 2024. Active contributor to the community.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-2'>
          <Button size='sm'>Follow</Button>
          <Button size='sm' variant='outline'>
            Message
          </Button>
        </CardFooter>
      </div>
    </CardRoot>
  )
}
