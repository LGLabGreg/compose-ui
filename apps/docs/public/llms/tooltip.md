# Tooltip

A popup that appears when an element is hovered or focused, showing a hint for sighted users.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { Plus } from 'lucide-react'

export default function DefaultExample() {
  return (
    <TooltipRoot>
      <TooltipTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Plus className='size-4' />
            <span className='sr-only'>Add item</span>
          </Button>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>
            <TooltipArrow />
            Add item
          </TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
```

### Variants

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'

export default function VariantsExample() {
  return (
    <div className='flex items-center gap-2'>
      <TooltipRoot variant='default'>
        <TooltipTrigger render={(props) => <Button {...props}>Default</Button>} />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Default tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot variant='secondary'>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='secondary'>
              Secondary
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Secondary tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot variant='outline'>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline'>
              Outline
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Outline tooltip
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
```

### No Arrow

```tsx
import {
  Button,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { Info } from 'lucide-react'

export default function NoArrowExample() {
  return (
    <TooltipRoot>
      <TooltipTrigger
        render={(props) => (
          <Button {...props} variant='outline' size='icon'>
            <Info className='size-4' />
            <span className='sr-only'>Information</span>
          </Button>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>Tooltip without arrow</TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
```

### Sides

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'

export default function SidesExample() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowUp className='size-4' />
              <span className='sr-only'>Top</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='top'>
            <TooltipPopup>
              <TooltipArrow />
              Top
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowDown className='size-4' />
              <span className='sr-only'>Bottom</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='bottom'>
            <TooltipPopup>
              <TooltipArrow />
              Bottom
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowLeft className='size-4' />
              <span className='sr-only'>Left</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='left'>
            <TooltipPopup>
              <TooltipArrow />
              Left
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <ArrowRight className='size-4' />
              <span className='sr-only'>Right</span>
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner side='right'>
            <TooltipPopup>
              <TooltipArrow />
              Right
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
```

### Track Cursor

```tsx
import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'

export default function TrackCursorExample() {
  return (
    <TooltipRoot trackCursorAxis='both'>
      <TooltipTrigger
        render={(props) => (
          <div
            {...props}
            className='flex h-32 w-64 cursor-default items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-sm text-muted-foreground'
          >
            Hover anywhere in this area
          </div>
        )}
      />
      <TooltipPortal>
        <TooltipPositioner>
          <TooltipPopup>
            <TooltipArrow />
            Following your cursor
          </TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </TooltipRoot>
  )
}
```

### Delay

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { Clock } from 'lucide-react'

export default function DelayExample() {
  return (
    <div className='flex items-center gap-2'>
      <TooltipRoot>
        <TooltipTrigger
          delay={0}
          render={(props) => (
            <Button {...props} variant='outline'>
              <Clock className='size-4' />
              No delay
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Opens instantly
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger
          delay={1000}
          render={(props) => (
            <Button {...props} variant='outline'>
              <Clock className='size-4' />
              1s delay
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipPopup>
              <TooltipArrow />
              Opens after 1 second
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
```

### Provider

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import { Bold, Italic, Underline } from 'lucide-react'

export default function ProviderExample() {
  return (
    <TooltipProvider delay={200} closeDelay={0}>
      <div className='flex items-center gap-1'>
        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Bold className='size-4' />
                <span className='sr-only'>Bold</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Bold
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Italic className='size-4' />
                <span className='sr-only'>Italic</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Italic
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant='outline' size='icon'>
                <Underline className='size-4' />
                <span className='sr-only'>Underline</span>
              </Button>
            )}
          />
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Underline
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  )
}
```

### Anchor to Another Element

```tsx
import {
  Button,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from '@lglab/compose-ui'
import * as React from 'react'

export default function AnchorElementExample() {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

  return (
    <div className='flex items-center gap-2'>
      <span
        ref={setAnchor}
        className='rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground'
      >
        Anchor element
      </span>
      <TooltipRoot>
        <TooltipTrigger
          render={(props) => (
            <Button {...props} variant='outline'>
              Hover me
            </Button>
          )}
        />
        <TooltipPortal>
          <TooltipPositioner anchor={anchor}>
            <TooltipPopup>
              <TooltipArrow />
              Anchored to the span element
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </TooltipRoot>
    </div>
  )
}
```

## Resources

- [Base UI Tooltip Documentation](https://base-ui.com/react/components/tooltip)
- [API Reference](https://base-ui.com/react/components/tooltip#api-reference)
