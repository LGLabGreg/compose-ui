import { codeToHtml } from 'shiki'

import { CopyButton } from './copy-button'

interface CodeBlockProps {
  code: string
  language?: string
}

export async function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const trimmedCode = code.trim()
  const html = await codeToHtml(trimmedCode, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  })

  return (
    <div className='relative'>
      <CopyButton code={trimmedCode} />
      <div
        className='[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:pr-12 [&_pre]:pt-1 [&_pre]:text-sm [&_pre]:leading-relaxed [&_.shiki]:bg-zinc-50 [&_.shiki]:dark:bg-zinc-900'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
