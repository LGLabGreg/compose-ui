import { readFile, readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
// After build, assets are copied to dist/ alongside index.js
// In dev, we're in src/lib/ and assets are at ../../assets/llms
// At runtime (from dist/index.js), llms is at ./llms
const LLMS_DIR = resolve(__dirname, 'llms')

export interface ComponentInfo {
  name: string
  slug: string
  description: string
  documentationUri: string
}

export function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function parseMarkdownFile(content: string, slug: string): ComponentInfo {
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
    documentationUri: `compose-ui://components/${slug}`,
  }
}

export async function getComponentContent(slug: string): Promise<string | null> {
  try {
    const filePath = resolve(LLMS_DIR, `${slug}.md`)
    return await readFile(filePath, 'utf-8')
  } catch {
    return null
  }
}

export async function getComponentsList(): Promise<ComponentInfo[]> {
  try {
    const files = await readdir(LLMS_DIR)
    const mdFiles = files.filter((f) => f.endsWith('.md')).sort()

    const components: ComponentInfo[] = []

    for (const file of mdFiles) {
      const slug = file.replace('.md', '')
      const content = await readFile(resolve(LLMS_DIR, file), 'utf-8')
      components.push(parseMarkdownFile(content, slug))
    }

    return components
  } catch {
    return []
  }
}
