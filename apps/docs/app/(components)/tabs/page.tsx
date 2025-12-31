import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'
import { FolderIcon, SettingsIcon, UserIcon } from 'lucide-react'

import { CodeBlock } from '@/components/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { DocLinks } from '@/components/doc-links'

const basicCode = `import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'

<TabsRoot defaultValue='overview'>
  <TabsList>
    <TabsTab value='overview'>Overview</TabsTab>
    <TabsTab value='projects'>Projects</TabsTab>
    <TabsTab value='settings'>Settings</TabsTab>
    <TabsIndicator />
  </TabsList>
  <TabsPanel value='overview'>
    <p>This is the overview panel.</p>
  </TabsPanel>
  <TabsPanel value='projects'>
    <p>View and manage your projects here.</p>
  </TabsPanel>
  <TabsPanel value='settings'>
    <p>Configure your account settings.</p>
  </TabsPanel>
</TabsRoot>`

const withIconsCode = `import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'
import { FolderIcon, SettingsIcon, UserIcon } from 'lucide-react'

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
  <TabsPanel value='account'>
    <p>Manage your account details.</p>
  </TabsPanel>
  <TabsPanel value='projects'>
    <p>Browse and manage all your projects.</p>
  </TabsPanel>
  <TabsPanel value='settings'>
    <p>Customize your experience.</p>
  </TabsPanel>
</TabsRoot>`

const sizesCode = `import { TabsIndicator, TabsList, TabsRoot, TabsTab } from '@lglab/compose-ui'

{/* Small */}
<TabsRoot defaultValue='tab1'>
  <TabsList>
    <TabsTab value='tab1' size='sm'>Tab 1</TabsTab>
    <TabsTab value='tab2' size='sm'>Tab 2</TabsTab>
    <TabsTab value='tab3' size='sm'>Tab 3</TabsTab>
    <TabsIndicator />
  </TabsList>
</TabsRoot>

{/* Default */}
<TabsRoot defaultValue='tab1'>
  <TabsList>
    <TabsTab value='tab1'>Tab 1</TabsTab>
    <TabsTab value='tab2'>Tab 2</TabsTab>
    <TabsTab value='tab3'>Tab 3</TabsTab>
    <TabsIndicator />
  </TabsList>
</TabsRoot>

{/* Large */}
<TabsRoot defaultValue='tab1'>
  <TabsList>
    <TabsTab value='tab1' size='lg'>Tab 1</TabsTab>
    <TabsTab value='tab2' size='lg'>Tab 2</TabsTab>
    <TabsTab value='tab3' size='lg'>Tab 3</TabsTab>
    <TabsIndicator />
  </TabsList>
</TabsRoot>`

const disabledCode = `import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'

<TabsRoot defaultValue='active'>
  <TabsList>
    <TabsTab value='active'>Active</TabsTab>
    <TabsTab value='disabled' disabled>Disabled</TabsTab>
    <TabsTab value='another'>Another Tab</TabsTab>
    <TabsIndicator />
  </TabsList>
  <TabsPanel value='active'>
    <p>This tab is active. The middle tab is disabled.</p>
  </TabsPanel>
  <TabsPanel value='another'>
    <p>This is another active tab panel.</p>
  </TabsPanel>
</TabsRoot>`

const verticalCode = `import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'

<TabsRoot
  defaultValue='general'
  orientation='vertical'
  className='flex-row gap-4'
>
  <TabsList orientation='vertical'>
    <TabsTab value='general'>General</TabsTab>
    <TabsTab value='security'>Security</TabsTab>
    <TabsTab value='notifications'>Notifications</TabsTab>
    <TabsTab value='billing'>Billing</TabsTab>
    <TabsIndicator orientation='vertical' />
  </TabsList>
  <div className='flex-1'>
    <TabsPanel value='general' className='mt-0'>
      <h3>General Settings</h3>
      <p>Configure general application settings.</p>
    </TabsPanel>
    <TabsPanel value='security' className='mt-0'>
      <h3>Security Settings</h3>
      <p>Manage your security preferences.</p>
    </TabsPanel>
    <TabsPanel value='notifications' className='mt-0'>
      <h3>Notification Preferences</h3>
      <p>Control how and when you receive notifications.</p>
    </TabsPanel>
    <TabsPanel value='billing' className='mt-0'>
      <h3>Billing Information</h3>
      <p>View and manage your billing details.</p>
    </TabsPanel>
  </div>
</TabsRoot>`

export default function TabsComponent() {
  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Tabs</h1>
        <p className='mt-2 text-muted-foreground'>
          A component for toggling between related panels on the same page with an
          animated indicator.
        </p>
        <div className='mt-4'>
          <DocLinks component='tabs' />
        </div>
      </div>

      <div className='space-y-8'>
        {/* Basic example */}
        <ComponentPreview title='Basic' codeBlock={<CodeBlock code={basicCode} />}>
          <TabsRoot defaultValue='overview'>
            <TabsList>
              <TabsTab value='overview'>Overview</TabsTab>
              <TabsTab value='projects'>Projects</TabsTab>
              <TabsTab value='settings'>Settings</TabsTab>
              <TabsIndicator />
            </TabsList>
            <TabsPanel value='overview'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  This is the overview panel. Here you can see a summary of your account
                  and recent activity.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='projects'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  View and manage your projects here. Create new projects or edit existing
                  ones.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='settings'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  Configure your account settings, preferences, and notification options.
                </p>
              </div>
            </TabsPanel>
          </TabsRoot>
        </ComponentPreview>

        {/* With icons */}
        <ComponentPreview
          title='With Icons'
          codeBlock={<CodeBlock code={withIconsCode} />}
        >
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
            <TabsPanel value='account'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  Manage your account details and profile information.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='projects'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  Browse and manage all your projects in one place.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='settings'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  Customize your experience with various settings options.
                </p>
              </div>
            </TabsPanel>
          </TabsRoot>
        </ComponentPreview>

        {/* Size variants */}
        <ComponentPreview title='Sizes' codeBlock={<CodeBlock code={sizesCode} />}>
          <div className='space-y-4'>
            <div>
              <p className='mb-2 text-xs text-muted-foreground'>Small</p>
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
              <p className='mb-2 text-xs text-muted-foreground'>Default</p>
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
              <p className='mb-2 text-xs text-muted-foreground'>Large</p>
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
        </ComponentPreview>

        {/* Disabled tabs */}
        <ComponentPreview
          title='Disabled Tab'
          codeBlock={<CodeBlock code={disabledCode} />}
        >
          <TabsRoot defaultValue='active'>
            <TabsList>
              <TabsTab value='active'>Active</TabsTab>
              <TabsTab value='disabled' disabled>
                Disabled
              </TabsTab>
              <TabsTab value='another'>Another Tab</TabsTab>
              <TabsIndicator />
            </TabsList>
            <TabsPanel value='active'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  This tab is active. The middle tab is disabled and cannot be selected.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='disabled'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  You shouldn&apos;t see this content.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value='another'>
              <div className='rounded-md p-4'>
                <p className='text-sm text-muted-foreground'>
                  This is another active tab panel.
                </p>
              </div>
            </TabsPanel>
          </TabsRoot>
        </ComponentPreview>

        {/* Vertical orientation */}
        <ComponentPreview
          title='Vertical Orientation'
          codeBlock={<CodeBlock code={verticalCode} />}
        >
          <TabsRoot
            defaultValue='general'
            orientation='vertical'
            className='flex-row gap-4'
          >
            <TabsList orientation='vertical'>
              <TabsTab value='general'>General</TabsTab>
              <TabsTab value='security'>Security</TabsTab>
              <TabsTab value='notifications'>Notifications</TabsTab>
              <TabsTab value='billing'>Billing</TabsTab>
              <TabsIndicator orientation='vertical' />
            </TabsList>
            <div className='flex-1'>
              <TabsPanel value='general' className='mt-0'>
                <div className='rounded-md p-4'>
                  <h3 className='font-medium'>General Settings</h3>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    Configure general application settings and preferences.
                  </p>
                </div>
              </TabsPanel>
              <TabsPanel value='security' className='mt-0'>
                <div className='rounded-md p-4'>
                  <h3 className='font-medium'>Security Settings</h3>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    Manage your security preferences, two-factor authentication, and
                    sessions.
                  </p>
                </div>
              </TabsPanel>
              <TabsPanel value='notifications' className='mt-0'>
                <div className='rounded-md p-4'>
                  <h3 className='font-medium'>Notification Preferences</h3>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    Control how and when you receive notifications.
                  </p>
                </div>
              </TabsPanel>
              <TabsPanel value='billing' className='mt-0'>
                <div className='rounded-md p-4'>
                  <h3 className='font-medium'>Billing Information</h3>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    View and manage your billing details and payment methods.
                  </p>
                </div>
              </TabsPanel>
            </div>
          </TabsRoot>
        </ComponentPreview>
      </div>
    </div>
  )
}
