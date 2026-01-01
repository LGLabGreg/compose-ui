import { TabsIndicator, TabsList, TabsRoot, TabsTab } from '@lglab/compose-ui'

export default function SizesExample() {
  return (
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
  )
}
