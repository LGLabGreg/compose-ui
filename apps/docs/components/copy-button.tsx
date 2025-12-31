'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
  code: string
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className='absolute right-2 top-0 flex size-8 items-center justify-center rounded-md bg-muted/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground'
      aria-label={copied ? 'Copied' : 'Copy code'}
    >
      {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
    </button>
  )
}
