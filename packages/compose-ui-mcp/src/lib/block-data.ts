import { readFile, readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BLOCKS_DIR = resolve(__dirname, 'llms', 'blocks')

export interface BlockInfo {
  name: string
  slug: string
  description: string
  documentationUri: string
}

function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function parseMarkdownFile(content: string, slug: string): BlockInfo {
  const lines = content.split('\n')

  // Extract title from first # heading
  let name = slugToName(slug)
  for (const line of lines) {
    if (line.startsWith('# ')) {
      name = line.slice(2).trim()
      break
    }
  }

  // Extract description (first non-empty line after the heading)
  let description = ''
  let foundHeading = false
  for (const line of lines) {
    if (line.startsWith('# ')) {
      foundHeading = true
      continue
    }
    if (foundHeading && line.trim() !== '') {
      description = line.trim()
      break
    }
  }

  return {
    name,
    slug,
    description,
    documentationUri: `compose-ui://blocks/${slug}`,
  }
}

export async function getBlockContent(slug: string): Promise<string | null> {
  try {
    const filePath = resolve(BLOCKS_DIR, `${slug}.md`)
    return await readFile(filePath, 'utf-8')
  } catch {
    return null
  }
}

export async function getBlocksList(): Promise<BlockInfo[]> {
  try {
    const files = await readdir(BLOCKS_DIR)
    const mdFiles = files.filter((f) => f.endsWith('.md')).sort()

    const blocks: BlockInfo[] = []

    for (const file of mdFiles) {
      const slug = file.replace('.md', '')
      const content = await readFile(resolve(BLOCKS_DIR, file), 'utf-8')
      blocks.push(parseMarkdownFile(content, slug))
    }

    return blocks
  } catch {
    return []
  }
}
