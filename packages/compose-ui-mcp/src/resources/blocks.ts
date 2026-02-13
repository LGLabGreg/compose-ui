import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'

import { getBlockContent, getBlocksList } from '../lib/block-data.js'

export function registerBlocksResource(server: McpServer): void {
  server.registerResource(
    'blocks',
    'compose-ui://blocks',
    {
      title: 'Compose UI Blocks',
      description: 'List of all Compose UI blocks with metadata',
      mimeType: 'application/json',
    },
    async () => ({
      contents: [
        {
          uri: 'compose-ui://blocks',
          mimeType: 'application/json',
          text: JSON.stringify(await getBlocksList(), null, 2),
        },
      ],
    }),
  )
}

export function registerBlockDocResource(server: McpServer): void {
  server.registerResource(
    'block-doc',
    new ResourceTemplate('compose-ui://blocks/{slug}', { list: undefined }),
    {
      title: 'Block Documentation',
      description: 'Full markdown documentation for a Compose UI block',
      mimeType: 'text/markdown',
    },
    async (uri, variables) => {
      const slug = variables.slug as string
      const content = await getBlockContent(slug)
      if (!content) {
        throw new Error(`Block not found: ${slug}`)
      }
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      }
    },
  )
}
