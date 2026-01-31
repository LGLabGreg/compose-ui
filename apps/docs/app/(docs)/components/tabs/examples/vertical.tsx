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
