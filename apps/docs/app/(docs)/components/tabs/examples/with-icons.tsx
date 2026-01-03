import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'
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
      <TabsPanel value='account'>
        <div className='rounded-md p-4'>
          <p>Manage your account details and profile information.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='projects'>
        <div className='rounded-md p-4'>
          <p>Browse and manage all your projects in one place.</p>
        </div>
      </TabsPanel>
      <TabsPanel value='settings'>
        <div className='rounded-md p-4'>
          <p>Customize your experience with various settings options.</p>
        </div>
      </TabsPanel>
    </TabsRoot>
  )
}
