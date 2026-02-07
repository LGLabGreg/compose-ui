'use client'

import Link from 'next/link'
import { type ReactNode, useEffect } from 'react'

import { useToc } from '@/components/use-toc'

interface ApiSectionProps {
  title: string
  description?: string
  children: ReactNode
}

export function ApiSection({ title, description, children }: ApiSectionProps) {
  const { registerItem } = useToc()
  const slug = title.toLowerCase().replace(/ /g, '-')

  useEffect(() => {
    registerItem({ title, slug, type: 'api' })
  }, [title, slug, registerItem])

  return (
    <div className='space-y-4'>
      <div>
        <h2 className='text-lg font-medium mb-2 scroll-mt-20' id={slug}>
          <Link href={`#${slug}`}>{title}</Link>
        </h2>
        {description && <p className='text-sm'>{description}</p>}
      </div>
      {children}
    </div>
  )
}
