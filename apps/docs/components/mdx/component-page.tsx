import type { ReactNode } from 'react'

import { DocLinks } from '@/components/doc-links'

interface ComponentPageProps {
  /** The component title */
  title: string
  /** Brief description of the component */
  description: string
  /** Component name for DocLinks (e.g., 'tabs', 'dialog') */
  component: string
  /** Base UI component name for DocLinks (e.g., 'tabs', 'dialog') */
  baseUiComponent: string
  /** The examples and content */
  children: ReactNode
}

export function ComponentPage({
  title,
  description,
  component,
  baseUiComponent,
  children,
}: ComponentPageProps) {
  return (
    <div className='p-6 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        <p className='mt-2'>{description}</p>
        <div className='mt-4'>
          <DocLinks component={component} baseUiComponent={baseUiComponent} />
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>{children}</div>
    </div>
  )
}
