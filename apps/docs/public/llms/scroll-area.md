# Scroll Area

A native scroll container with custom scrollbars for consistent styling across browsers.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner } from '@lglab/compose-ui'
```

## Examples

### Vertical Scroll

```tsx
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function VerticalScrollExample() {
  return (
    <ScrollAreaRoot className='h-72 w-full rounded-md border'>
      <ScrollAreaViewport>
        <ScrollAreaContent className='p-4'>
          <div className='space-y-4'>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                nisi vel consectetur interdum, nisl nunc egestas nunc.
              </p>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}
```

### Horizontal Scroll

```tsx
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function HorizontalScrollExample() {
  return (
    <ScrollAreaRoot className='w-full rounded-md border'>
      <ScrollAreaViewport>
        <ScrollAreaContent className='p-4'>
          <div className='flex gap-4'>
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className='flex h-24 w-32 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium'
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}
```

### Both Scrollbars

```tsx
import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function BothScrollbarsExample() {
  return (
    <ScrollAreaRoot className='h-72 w-full rounded-md border'>
      <ScrollAreaViewport>
        <ScrollAreaContent className='p-4'>
          <div className='w-[800px] space-y-4'>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className='text-sm whitespace-nowrap'>
                {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vel
                consectetur nisl nunc egestas nunc.
              </p>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/scroll-area)
