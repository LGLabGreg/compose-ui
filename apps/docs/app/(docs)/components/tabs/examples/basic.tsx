import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'

export default function BasicExample() {
  return (
    <TabsRoot defaultValue='overview'>
      <TabsList>
        <TabsTab value='overview'>Overview</TabsTab>
        <TabsTab value='projects'>Projects</TabsTab>
        <TabsTab value='settings'>Settings</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value='overview'>
        <div className='rounded-md p-4'>
          <p className='text-sm'>
            This is the overview panel. Here you can see a summary of your account and
            recent activity.
          </p>
        </div>
      </TabsPanel>
      <TabsPanel value='projects'>
        <div className='rounded-md p-4'>
          <p className='text-sm'>
            View and manage your projects here. Create new projects or edit existing ones.
          </p>
        </div>
      </TabsPanel>
      <TabsPanel value='settings'>
        <div className='rounded-md p-4'>
          <p className='text-sm'>
            Configure your account settings, preferences, and notification options.
          </p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
