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

export default function VerticalMediaCard() {
  return (
    <CardRoot className='w-80 max-w-full'>
      <CardMedia className='aspect-video rounded-t-lg'>
        <img
          src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80'
          alt='Product displayed on a desk with notebook and fruit'
        />
      </CardMedia>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>This is a description of the product.</CardDescription>
      </CardHeader>
      <CardFooter className='justify-end gap-2'>
        <Button size='sm' variant='outline'>
          Details
        </Button>
        <Button size='sm'>Add to Cart</Button>
      </CardFooter>
    </CardRoot>
  )
}
