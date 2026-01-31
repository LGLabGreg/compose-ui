import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { readFile, readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const LLMS_DIR = resolve(__dirname, 'assets/llms')

interface ComponentInfo {
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

async function getComponentsList(): Promise<ComponentInfo[]> {
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

export function registerComponentsResource(server: McpServer): void {
  server.registerResource(
    'components',
    'compose-ui://components',
    {
      title: 'Compose UI Components',
      description: 'List of all Compose UI components with metadata',
      mimeType: 'application/json',
    },
    async () => ({
      contents: [
        {
          uri: 'compose-ui://components',
          mimeType: 'application/json',
          text: JSON.stringify(await getComponentsList(), null, 2),
        },
      ],
    }),
  )
}
