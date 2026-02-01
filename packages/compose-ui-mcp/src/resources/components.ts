import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'

import { getComponentContent, getComponentsList } from '../lib/component-data.js'

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

export function registerComponentDocResource(server: McpServer): void {
  server.registerResource(
    'component-doc',
    new ResourceTemplate('compose-ui://components/{slug}', { list: undefined }),
    {
      title: 'Component Documentation',
      description: 'Full markdown documentation for a Compose UI component',
      mimeType: 'text/markdown',
    },
    async (uri, variables) => {
      const slug = variables.slug as string
      const content = await getComponentContent(slug)
      if (!content) {
        throw new Error(`Component not found: ${slug}`)
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
