# Card

A flexible card component with support for media, headers, content sections, and footers. Supports both vertical and horizontal layouts with multiple variants.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardRoot,
  CardSection,
  CardTitle,
} from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
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
```

### Horizontal Layout

```tsx
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
```

### Split Layout

```tsx
import {
  Button,
  CardDescription,
  CardMedia,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui'

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
```

### Grid Stats

```tsx
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui'

export default function GridStatsCard() {
  const stats = [
    { label: 'Total Sales', value: '$12,345' },
    { label: 'Orders', value: '234' },
    { label: 'Customers', value: '1,234' },
    { label: 'Revenue', value: '$45,678' },
  ]

  return (
    <CardRoot className='w-full md:w-2/3 lg:w-1/2'>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 gap-4'>
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className='text-sm text-muted-foreground'>{stat.label}</p>
              <p className='text-lg font-semibold'>{stat.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </CardRoot>
  )
}
```

### Multi-Section

```tsx
import {
  Button,
  CardDescription,
  CardFooter,
  CardRoot,
  CardSection,
  CardTitle,
  Separator,
} from '@lglab/compose-ui'

export default function MultiSectionCard() {
  return (
    <CardRoot className='w-96 max-w-full'>
      <CardSection className='space-y-0.5'>
        <CardTitle>Event Details</CardTitle>
        <CardDescription>Annual Company Meetup</CardDescription>
      </CardSection>

      <Separator />

      <CardSection>
        <dl className='space-y-3'>
          <div>
            <dt className='text-sm font-semibold'>Date:</dt>
            <dd className='text-sm'>March 15, 2024</dd>
          </div>
          <div>
            <dt className='text-sm font-semibold'>Location:</dt>
            <dd className='text-sm'>San Francisco, CA</dd>
          </div>
          <div>
            <dt className='text-sm font-semibold'>Attendees:</dt>
            <dd className='text-sm'>150 people</dd>
          </div>
        </dl>
      </CardSection>

      <Separator />

      <CardFooter className='gap-2'>
        <Button size='sm'>Register</Button>
        <Button size='sm' variant='outline'>
          Learn More
        </Button>
      </CardFooter>
    </CardRoot>
  )
}
```

### Custom Heading Level

```tsx
import { CardDescription, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui'

export default function CardWithCustomHeading() {
  return (
    <CardRoot className='w-72'>
      <CardHeader>
        <CardTitle as='h2' className='text-xl'>
          Page Title Card
        </CardTitle>
        <CardDescription>Using h2 instead of the default h3.</CardDescription>
      </CardHeader>
    </CardRoot>
  )
}
```

### Variants

```tsx
import { CardRoot, CardTitle } from '@lglab/compose-ui'

export default function CardVariants() {
  return (
    <div className='flex gap-4'>
      <CardRoot variant='default' className='w-40 p-4'>
        <CardTitle className='text-sm'>Default</CardTitle>
      </CardRoot>
      <CardRoot variant='outline' className='w-40 p-4'>
        <CardTitle className='text-sm'>Outline</CardTitle>
      </CardRoot>
      <CardRoot variant='elevated' className='w-40 p-4'>
        <CardTitle className='text-sm'>Elevated</CardTitle>
      </CardRoot>
    </div>
  )
}
```

## Resources

- [Base UI Card Documentation](https://base-ui.com/react/components/card)
- [API Reference](https://base-ui.com/react/components/card#api-reference)
