import { promises as fs } from 'node:fs'
import path from 'node:path'

import { CodeBlock } from '@/components/mdx/code-block'

import { Example } from './example'

interface ExampleLoaderProps {
  filePath: string
  title?: string
  group?: string
  children: React.ReactNode
}

export async function ExampleLoader({
  filePath,
  title,
  group,
  children,
}: ExampleLoaderProps) {
  const absolutePath = path.resolve(process.cwd(), filePath)
  const source = await fs.readFile(absolutePath, 'utf-8')

  return (
    <Example title={title} group={group} codeBlock={<CodeBlock code={source} />}>
      {children}
    </Example>
  )
}
