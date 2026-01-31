import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const LLMS_TXT_PATH = resolve(__dirname, 'assets/llms.txt')

async function getOverviewContent(): Promise<string> {
  try {
    return await readFile(LLMS_TXT_PATH, 'utf-8')
  } catch {
    return '# Compose UI\n\nUnable to load overview content. Please ensure llms.txt exists.'
  }
}

export function registerOverviewResource(server: McpServer): void {
  server.registerResource(
    'overview',
    'compose-ui://overview',
    {
      title: 'Compose UI Overview',
      description: 'Compose UI overview documentation',
      mimeType: 'text/plain',
    },
    async () => ({
      contents: [
        {
          uri: 'compose-ui://overview',
          mimeType: 'text/markdown',
          text: await getOverviewContent(),
        },
      ],
    }),
  )
}
