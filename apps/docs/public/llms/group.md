# Group

A generic container for visually connecting elements like inputs, buttons, and badges with a GroupAddon subcomponent for decorative prefixes/suffixes.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { GroupRoot, GroupAddon } from '@lglab/compose-ui'
```

## Examples

### Button Group

```tsx
import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import { Bookmark, Copy, Share } from 'lucide-react'

export default function ButtonGroupExample() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <GroupRoot>
        <Button variant='outline'>
          <Copy />
          Copy
        </Button>
        <Button variant='outline'>
          <Share />
          Share
        </Button>
        <Button variant='outline'>
          <Bookmark />
          Bookmark
        </Button>
      </GroupRoot>
      <GroupRoot>
        <Button variant='outline'>Copy</Button>
        <Button variant='outline'>Share</Button>
        <Button variant='outline'>Bookmark</Button>
      </GroupRoot>
      <GroupRoot>
        <Button variant='outline' size='icon'>
          <Copy />
        </Button>
        <Button variant='outline' size='icon'>
          <Share />
        </Button>
        <Button variant='outline' size='icon'>
          <Bookmark />
        </Button>
      </GroupRoot>
    </div>
  )
}
```

### Input Group

```tsx
import { GroupAddon, GroupRoot } from '@lglab/compose-ui/group'
import { Input } from '@lglab/compose-ui/input'
import { MailIcon, SearchIcon } from 'lucide-react'

export default function InputGroupExample() {
  return (
    <div className='space-y-4'>
      <div>
        <label className='text-sm font-medium mb-2 block'>Search Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>
            <SearchIcon />
          </GroupAddon>
          <Input placeholder='Search...' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Email Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>
            <MailIcon />
          </GroupAddon>
          <Input type='email' placeholder='you@example.com' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Username Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>@</GroupAddon>
          <Input placeholder='username' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>URL Input</label>
        <GroupRoot>
          <GroupAddon>https://</GroupAddon>
          <Input placeholder='example.com' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Currency Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>$</GroupAddon>
          <Input type='number' placeholder='100' className='w-32' />
          <GroupAddon>USD</GroupAddon>
        </GroupRoot>
      </div>
    </div>
  )
}
```

### Badge Group

```tsx
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
```

### Vertical

```tsx
import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import { LogOut, Settings, Trash, UserPen } from 'lucide-react'

export default function VerticalExample() {
  return (
    <GroupRoot orientation='vertical'>
      <Button variant='outline' className='justify-start'>
        <UserPen />
        Profile
      </Button>
      <Button variant='outline' className='justify-start'>
        <Settings />
        Settings
      </Button>
      <Button variant='outline' className='justify-start'>
        <LogOut />
        Logout
      </Button>
      <Button variant='outline' className='justify-start text-destructive'>
        <Trash />
        Delete
      </Button>
    </GroupRoot>
  )
}
```

### With Popup

```tsx
import { Button } from '@lglab/compose-ui/button'
import { GroupRoot } from '@lglab/compose-ui/group'
import {
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@lglab/compose-ui/menu'
import {
  Flag,
  Heart,
  Link2,
  MessageSquare,
  MoreHorizontal,
  Repeat2,
  Share2,
} from 'lucide-react'

export default function WithPopupExample() {
  return (
    <GroupRoot>
      <Button variant='outline'>
        <Heart />
        24
      </Button>
      <Button variant='outline'>
        <MessageSquare />
        12
      </Button>
      <Button variant='outline'>
        <Repeat2 />5
      </Button>
      <MenuRoot>
        <MenuTrigger
          render={(props) => (
            <Button {...props} variant='outline' size='icon'>
              <MoreHorizontal />
            </Button>
          )}
        />
        <MenuPortal>
          <MenuPositioner side='bottom' align='end'>
            <MenuPopup>
              <MenuArrow />
              <MenuItem>
                <Share2 />
                Share
              </MenuItem>
              <MenuItem>
                <Link2 />
                Copy Link
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <Flag />
                Report
              </MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    </GroupRoot>
  )
}
```

## Resources

- [Base UI Group Documentation](https://base-ui.com/react/components/group)
- [API Reference](https://base-ui.com/react/components/group#api-reference)
