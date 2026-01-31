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
