import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { getBlocksList } from '../lib/block-data.js'
import { fuzzySearch } from '../lib/fuzzy-match.js'

const inputSchema = {
  query: z.string().optional().describe('Fuzzy search query. Omit to list all blocks.'),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(50)
    .describe('Maximum number of results to return (default: 50)'),
}

interface FindBlocksResult {
  count: number
  blocks: Array<{
    slug: string
    name: string
    description: string
  }>
}

export function registerFindBlocksTool(server: McpServer): void {
  server.registerTool(
    'find_blocks',
    {
      description:
        'Find Compose UI blocks (pre-built dashboard patterns). Call without query to list all, or with query for fuzzy search.',
      inputSchema,
    },
    async ({ query, limit }) => {
      const allBlocks = await getBlocksList()

      let blocks: Array<{ slug: string; name: string; description: string }>

      if (query) {
        // Fuzzy search on both name and slug
        const results = fuzzySearch(query, allBlocks, (b) => `${b.name} ${b.slug}`)

        blocks = results.slice(0, limit ?? 50).map((r) => ({
          slug: r.item.slug,
          name: r.item.name,
          description: r.item.description,
        }))
      } else {
        // Return all blocks up to limit
        blocks = allBlocks.slice(0, limit ?? 50).map((b) => ({
          slug: b.slug,
          name: b.name,
          description: b.description,
        }))
      }

      const result: FindBlocksResult = {
        count: blocks.length,
        blocks,
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
