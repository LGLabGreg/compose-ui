import type { ReactNode } from 'react'

interface DocPageProps {
  /** The page title */
  title: string
  /** Brief description of the page */
  description: string
  /** The page content */
  children: ReactNode
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className='p-6 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        <p className='mt-2'>{description}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}
