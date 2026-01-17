# Preview Card

A card that displays contextual content when hovering a link.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { PreviewCardRoot, PreviewCardTrigger, PreviewCardPortal, PreviewCardBackdrop, PreviewCardPositioner, PreviewCardPopup, PreviewCardArrow } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function DefaultExample() {
  return (
    <p className='text-sm'>
      The{' '}
      <PreviewCardRoot>
        <PreviewCardTrigger href='https://en.wikipedia.org/wiki/Nile'>
          Nile
        </PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup className='space-y-2'>
              <PreviewCardArrow />
              <img
                src='https://images.unsplash.com/photo-1680356217112-dad9300ce49d?q=80&w=448&h=300'
                alt='Satellite image of the Nile'
                className='w-full rounded'
              />
              <p className='text-sm'>
                The Nile is a major north-flowing river in northeastern Africa. It is the
                longest river in Africa and is among the longest in the world.
              </p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>{' '}
      is the longest river in Africa.
    </p>
  )
}
```

### Custom Delay

```tsx
import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function WithDelayExample() {
  return (
    <p className='text-sm'>
      Read about{' '}
      <PreviewCardRoot>
        <PreviewCardTrigger
          href='https://en.wikipedia.org/wiki/Machine_learning'
          delay={300}
          closeDelay={200}
        >
          machine learning
        </PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup className='space-y-2'>
              <PreviewCardArrow />
              <p className='text-sm font-semibold'>Machine Learning</p>
              <p className='text-sm text-muted-foreground'>
                Machine learning is a branch of artificial intelligence that focuses on
                building applications that learn from data and improve their accuracy over
                time.
              </p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>{' '}
      to understand AI better.
    </p>
  )
}
```

### Sides

```tsx
import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function SidesExample() {
  const sides = ['top', 'right', 'bottom', 'left'] as const

  return (
    <div className='flex flex-wrap gap-4'>
      {sides.map((side) => (
        <PreviewCardRoot key={side}>
          <PreviewCardTrigger className='text-sm' href='#'>
            {side}
          </PreviewCardTrigger>
          <PreviewCardPortal>
            <PreviewCardPositioner side={side}>
              <PreviewCardPopup>
                <PreviewCardArrow />
                <p className='text-sm'>Preview card positioned on the {side}</p>
              </PreviewCardPopup>
            </PreviewCardPositioner>
          </PreviewCardPortal>
        </PreviewCardRoot>
      ))}
    </div>
  )
}
```

## Resources

- [Base UI Preview Card Documentation](https://base-ui.com/react/components/preview-card)
- [API Reference](https://base-ui.com/react/components/preview-card#api-reference)
