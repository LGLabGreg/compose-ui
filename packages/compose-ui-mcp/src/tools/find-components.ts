import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { getComponentsList } from '../lib/component-data.js'
import { fuzzySearch } from '../lib/fuzzy-match.js'

const inputSchema = {
  query: z
    .string()
    .optional()
    .describe('Fuzzy search query. Omit to list all components.'),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(50)
    .describe('Maximum number of results to return (default: 50)'),
}

interface FindComponentsResult {
  count: number
  components: Array<{
    slug: string
    name: string
    description: string
  }>
}

export function registerFindComponentsTool(server: McpServer): void {
  server.registerTool(
    'find_components',
    {
      description:
        'Find Compose UI components. Call without query to list all, or with query for fuzzy search.',
      inputSchema,
    },
    async ({ query, limit }) => {
      const allComponents = await getComponentsList()

      let components: Array<{ slug: string; name: string; description: string }>

      if (query) {
        // Fuzzy search on both name and slug
        const results = fuzzySearch(query, allComponents, (c) => `${c.name} ${c.slug}`)

        components = results.slice(0, limit ?? 50).map((r) => ({
          slug: r.item.slug,
          name: r.item.name,
          description: r.item.description,
        }))
      } else {
        // Return all components up to limit
        components = allComponents.slice(0, limit ?? 50).map((c) => ({
          slug: c.slug,
          name: c.name,
          description: c.description,
        }))
      }

      const result: FindComponentsResult = {
        count: components.length,
        components,
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  )
}
