import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface DocLinksProps {
  component: string
}

export function DocLinks({ component }: DocLinksProps) {
  const docsUrl = `https://base-ui.com/react/components/${component}`
  const apiUrl = `https://base-ui.com/react/components/${component}#api-reference`

  return (
    <div className='flex items-center gap-2'>
      <Link
        href={docsUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
      >
        Docs
        <ArrowUpRight className='size-3.5' />
      </Link>
      <Link
        href={apiUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted'
      >
        API Reference
        <ArrowUpRight className='size-3.5' />
      </Link>
    </div>
  )
}
