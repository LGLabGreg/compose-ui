'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

interface InlineCopyButtonProps {
  code: string
}

export function InlineCopyButton({ code }: InlineCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className='flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground'
      aria-label={copied ? 'Copied' : 'Copy code'}
    >
      {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
    </button>
  )
}
