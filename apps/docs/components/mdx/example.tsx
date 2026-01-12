'use client'

import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '@lglab/compose-ui'
import { CodeIcon, EyeIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ExampleProps {
  /** The title/name of this example */
  title?: string
  /** The component preview to render */
  children: ReactNode
  /** The code to display (syntax highlighted server-side) */
  codeBlock: ReactNode
}

export function Example({ title, children, codeBlock }: ExampleProps) {
  const slug = title ? title.toLowerCase().replace(/ /g, '-') : ''
  return (
    <div className='space-y-2'>
      {title && (
        <h2 className='text-lg font-medium mb-2 scroll-mt-20' id={slug}>
          <Link href={`#${slug}`}>{title}</Link>
        </h2>
      )}

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

        <TabsPanel className='rounded-lg border' value='preview'>
          <div className='p-6 flex justify-center'>{children}</div>
        </TabsPanel>
        <TabsPanel className='rounded-lg border' value='code'>
          <div className='max-h-[500px] overflow-auto'>{codeBlock}</div>
        </TabsPanel>
      </TabsRoot>
    </div>
  )
}
