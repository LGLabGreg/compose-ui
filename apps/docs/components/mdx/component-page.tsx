import type { ReactNode } from 'react'

import { DocLinks } from '@/components/doc-links'

interface ExternalLink {
  label: string
  href: string
}

interface ComponentPageProps {
  /** The component title */
  title: string
  /** Brief description of the component */
  description: string
  /** Component name for DocLinks (e.g., 'tabs', 'dialog') */
  component: string
  /** Section for DocLinks URL routing */
  section?: 'components' | 'blocks'
  /** External links (e.g., Base UI API Reference, React Day Picker) */
  links?: ExternalLink[]
  /** The examples and content */
  children: ReactNode
}

export function ComponentPage({
  title,
  description,
  component,
  section,
  links,
  children,
}: ComponentPageProps) {
  return (
    <div className='p-6 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        <p className='mt-2'>{description}</p>
        <div className='mt-4'>
          <DocLinks component={component} section={section} links={links} />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6'>{children}</div>
    </div>
  )
}
