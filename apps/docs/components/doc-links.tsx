'use client'

import { ArrowUpRight, Check, Copy, FileText, LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ExternalLink {
  label: string
  href: string
}

interface DocLinksProps {
  component: string
  links?: ExternalLink[]
}

export function DocLinks({ component, links }: DocLinksProps) {
  const [copied, setCopied] = useState(false)
  const [copying, setCopying] = useState(false)

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
      {links?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 rounded-md border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
        >
          {link.label}
          <ArrowUpRight className='size-3.5' />
        </Link>
      ))}
      <Link
        href={markdownUrl}
        target='_blank'
        className='inline-flex items-center gap-1 rounded-md border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
      >
        <FileText className='size-3.5' />
        View Markdown
      </Link>
      <button
        onClick={handleCopyMarkdown}
        className='inline-flex items-center gap-1 rounded-md border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
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
