import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import { TabsList, TabsPanel, TabsRoot, TabsTab } from './tabs'

describe('Tabs', () => {
  it('displays the correct tab panel when clicking tabs', async () => {
    const { user } = render(
      <TabsRoot defaultValue='tab1'>
        <TabsList>
          <TabsTab value='tab1'>Tab 1</TabsTab>
          <TabsTab value='tab2'>Tab 2</TabsTab>
          <TabsTab value='tab3'>Tab 3</TabsTab>
        </TabsList>
        <TabsPanel value='tab1'>Panel 1 Content</TabsPanel>
        <TabsPanel value='tab2'>Panel 2 Content</TabsPanel>
        <TabsPanel value='tab3'>Panel 3 Content</TabsPanel>
      </TabsRoot>,
    )

    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument()
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument()
    expect(screen.queryByText('Panel 3 Content')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    expect(screen.getByText('Panel 2 Content')).toBeInTheDocument()
    expect(screen.queryByText('Panel 1 Content')).not.toBeInTheDocument()
    expect(screen.queryByText('Panel 3 Content')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Tab 3' }))

    expect(screen.getByText('Panel 3 Content')).toBeInTheDocument()
    expect(screen.queryByText('Panel 1 Content')).not.toBeInTheDocument()
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument()
  })
})
