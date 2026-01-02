'use client'

import { ArrowUpRight, Check, Copy, FileText, LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface DocLinksProps {
  component: string
  /** Base UI component name for DocLinks (e.g., 'tabs', 'dialog') */
  baseUiComponent?: string
}

export function DocLinks({ component, baseUiComponent }: DocLinksProps) {
  const [copied, setCopied] = useState(false)
  const [copying, setCopying] = useState(false)

  const baseUIDocsUrl = `https://base-ui.com/react/components/${baseUiComponent}`
  const baseUIAPIUrl = `https://base-ui.com/react/components/${baseUiComponent}#api-reference`
  const markdownUrl = `/components/${component}.md`

  const handleCopyMarkdown = async () => {
    try {
      setCopying(true)
      const response = await fetch(markdownUrl)
      if (!response.ok) {
        setCopying(false)
        throw new Error('Failed to fetch')
      }
      const markdown = await response.text()
      await navigator.clipboard.writeText(markdown)
      setCopying(false)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy markdown:', error)
    }
  }

  return (
    <div className='flex flex-wrap items-center gap-2'>
      {baseUiComponent && (
        <>
          <Link
            href={baseUIDocsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
          >
            Docs
            <ArrowUpRight className='size-3.5' />
          </Link>
          <Link
            href={baseUIAPIUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
          >
            API Reference
            <ArrowUpRight className='size-3.5' />
          </Link>
        </>
      )}
      <Link
        href={markdownUrl}
        target='_blank'
        className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
      >
        <FileText className='size-3.5' />
        View Markdown
      </Link>
      <button
        onClick={handleCopyMarkdown}
        className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
        title='Copy page content as Markdown for AI tools'
      >
        {copying ? (
          <>
            <LoaderCircle className='size-3.5 animate-spin' />
            Copying...
          </>
        ) : copied ? (
          <>
            <Check className='size-3.5' />
            Copied!
          </>
        ) : (
          <>
            <Copy className='size-3.5' />
            Copy Markdown
          </>
        )}
      </button>
    </div>
  )
}
