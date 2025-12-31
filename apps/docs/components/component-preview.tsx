'use client'

import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'
import { CodeIcon, EyeIcon } from 'lucide-react'
import { type ReactNode } from 'react'

interface ComponentPreviewProps {
  /** The title/name of this example */
  title?: string
  /** The component preview to render */
  children: ReactNode
  /** Pre-rendered code block (server component) */
  codeBlock: ReactNode
}

export function ComponentPreview({ title, children, codeBlock }: ComponentPreviewProps) {
  return (
    <div className='space-y-2'>
      {title && <h2 className='font-medium'>{title}</h2>}

      <TabsRoot defaultValue='preview'>
        <TabsList>
          <TabsTab value='preview' className='gap-1.5' size='sm'>
            <EyeIcon className='size-3.5' />
            Preview
          </TabsTab>
          <TabsTab value='code' className='gap-1.5' size='sm'>
            <CodeIcon className='size-3.5' />
            Code
          </TabsTab>
          <TabsIndicator />
        </TabsList>
        <div className='rounded-lg border mt-2'>
          <TabsPanel value='preview'>
            <div className='p-6 pt-4'>{children}</div>
          </TabsPanel>
          <TabsPanel value='code'>
            <div className='max-h-[500px] overflow-auto'>{codeBlock}</div>
          </TabsPanel>
        </div>
      </TabsRoot>
    </div>
  )
}
