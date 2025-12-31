import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'

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
  )
}
