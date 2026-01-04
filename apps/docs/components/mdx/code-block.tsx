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
      light: 'github-light-high-contrast',
      dark: 'github-dark-high-contrast',
    },
    defaultColor: false,
  })

  return (
    <div className='relative'>
      <CopyButton code={trimmedCode} />
      <div
        className='[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:pr-12 [&_pre]:text-sm [&_pre]:leading-relaxed'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
