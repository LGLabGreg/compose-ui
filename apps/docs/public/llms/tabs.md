# Tabs

A component for toggling between related panels on the same page with an animated indicator.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { TabsRoot, TabsList, TabsTab, TabsIndicator, TabsPanel } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'

export default function BasicExample() {
  return (
    <TabsRoot defaultValue='overview'>
      <TabsList>
        <TabsTab value='overview'>Overview</TabsTab>
        <TabsTab value='projects'>Projects</TabsTab>
        <TabsTab value='settings'>Settings</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value='overview' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>
            This is the overview panel. Here you can see a summary of your account and
            recent activity.
          </p>
        </div>
      </TabsPanel>
      <TabsPanel value='projects' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>
            View and manage your projects here. Create new projects or edit existing ones.
          </p>
        </div>
      </TabsPanel>
      <TabsPanel value='settings' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Configure your account settings, preferences, and notification options.</p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
```

### With Icons

```tsx
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'
import { FolderIcon, SettingsIcon, UserIcon } from 'lucide-react'

export default function WithIconsExample() {
  return (
    <TabsRoot defaultValue='account'>
      <TabsList>
        <TabsTab value='account' className='gap-1.5'>
          <UserIcon className='size-4' />
          Account
        </TabsTab>
        <TabsTab value='projects' className='gap-1.5'>
          <FolderIcon className='size-4' />
          Projects
        </TabsTab>
        <TabsTab value='settings' className='gap-1.5'>
          <SettingsIcon className='size-4' />
          Settings
        </TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value='account' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Manage your account details and profile information.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='projects' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Browse and manage all your projects in one place.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='settings' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Customize your experience with various settings options.</p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
```

### Custom style

```tsx
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'
import { FolderIcon, SettingsIcon, UserIcon } from 'lucide-react'

export default function LineExample() {
  return (
    <TabsRoot defaultValue='account'>
      <TabsList className='bg-transparent border-b'>
        <TabsTab value='account' className='gap-1.5'>
          <UserIcon className='size-4' />
          Account
        </TabsTab>
        <TabsTab value='projects' className='gap-1.5'>
          <FolderIcon className='size-4' />
          Projects
        </TabsTab>
        <TabsTab value='settings' className='gap-1.5'>
          <SettingsIcon className='size-4' />
          Settings
        </TabsTab>
        <TabsIndicator className='top-auto bottom-0 h-[2px] bg-primary rounded-none' />
      </TabsList>
      <TabsPanel value='account' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Manage your account details and profile information.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='projects' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Browse and manage all your projects in one place.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='settings' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>Customize your experience with various settings options.</p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
```

### Sizes

```tsx
import { TabsIndicator, TabsList, TabsRoot, TabsTab } from '@lglab/compose-ui/tabs'

export default function SizesExample() {
  return (
    <div className='space-y-4'>
      <div>
        <p className='mb-2 text-xs'>Small</p>
        <TabsRoot defaultValue='tab1'>
          <TabsList>
            <TabsTab value='tab1' size='sm'>
              Tab 1
            </TabsTab>
            <TabsTab value='tab2' size='sm'>
              Tab 2
            </TabsTab>
            <TabsTab value='tab3' size='sm'>
              Tab 3
            </TabsTab>
            <TabsIndicator />
          </TabsList>
        </TabsRoot>
      </div>
      <div>
        <p className='mb-2 text-xs'>Default</p>
        <TabsRoot defaultValue='tab1'>
          <TabsList>
            <TabsTab value='tab1'>Tab 1</TabsTab>
            <TabsTab value='tab2'>Tab 2</TabsTab>
            <TabsTab value='tab3'>Tab 3</TabsTab>
            <TabsIndicator />
          </TabsList>
        </TabsRoot>
      </div>
      <div>
        <p className='mb-2 text-xs'>Large</p>
        <TabsRoot defaultValue='tab1'>
          <TabsList>
            <TabsTab value='tab1' size='lg'>
              Tab 1
            </TabsTab>
            <TabsTab value='tab2' size='lg'>
              Tab 2
            </TabsTab>
            <TabsTab value='tab3' size='lg'>
              Tab 3
            </TabsTab>
            <TabsIndicator />
          </TabsList>
        </TabsRoot>
      </div>
    </div>
  )
}
```

### Disabled Tab

```tsx
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'

export default function DisabledExample() {
  return (
    <TabsRoot defaultValue='active'>
      <TabsList>
        <TabsTab value='active'>Active</TabsTab>
        <TabsTab value='disabled' disabled>
          Disabled
        </TabsTab>
        <TabsTab value='another'>Another Tab</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value='active' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>This tab is active. The middle tab is disabled and cannot be selected.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='disabled' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>You shouldn&apos;t see this content.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='another' className='text-sm'>
        <div className='rounded-md p-2'>
          <p>This is another active tab panel.</p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
```

### Vertical Orientation

```tsx
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@lglab/compose-ui/tabs'

export default function VerticalExample() {
  return (
    <TabsRoot defaultValue='general' orientation='vertical' className='flex-row gap-4'>
      <TabsList orientation='vertical'>
        <TabsTab value='general'>General</TabsTab>
        <TabsTab value='security'>Security</TabsTab>
        <TabsTab value='notifications'>Notifications</TabsTab>
        <TabsTab value='billing'>Billing</TabsTab>
        <TabsIndicator orientation='vertical' />
      </TabsList>
      <div className='flex-1 text-sm'>
        <TabsPanel value='general' className='mt-0'>
          <div className='rounded-md p-2'>
            <h3 className='font-medium'>General Settings</h3>
            <p className='mt-1 text-sm'>
              Configure general application settings and preferences.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value='security' className='mt-0'>
          <div className='rounded-md p-2'>
            <h3 className='font-medium'>Security Settings</h3>
            <p className='mt-1 text-sm'>
              Manage your security preferences, two-factor authentication, and sessions.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value='notifications' className='mt-0'>
          <div className='rounded-md p-2'>
            <h3 className='font-medium'>Notification Preferences</h3>
            <p className='mt-1 text-sm'>
              Control how and when you receive notifications.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value='billing' className='mt-0'>
          <div className='rounded-md p-2'>
            <h3 className='font-medium'>Billing Information</h3>
            <p className='mt-1 text-sm'>
              View and manage your billing details and payment methods.
            </p>
          </div>
        </TabsPanel>
      </div>
    </TabsRoot>
  )
}
```

## Resources

- [Base UI Tabs Documentation](https://base-ui.com/react/components/tabs)
- [API Reference](https://base-ui.com/react/components/tabs#api-reference)
