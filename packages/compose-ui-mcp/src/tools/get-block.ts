import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { getBlockContent, getBlocksList } from '../lib/block-data.js'
import { fuzzySearch } from '../lib/fuzzy-match.js'
import { type SectionType, extractSections } from '../lib/markdown-parser.js'

const sectionTypes = ['overview', 'examples'] as const

const inputSchema = {
  slug: z.string().describe('Block slug (e.g., "statistics")'),
  sections: z
    .array(z.enum(sectionTypes))
    .optional()
    .describe('Filter sections: "overview", "examples". Default: all.'),
}

interface GetBlockSuccessResult {
  slug: string
  name: string
  found: true
  content: string
}

interface GetBlockNotFoundResult {
  slug: string
  found: false
  suggestions: Array<{ slug: string; name: string; score: number }>
  message: string
}

function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function registerGetBlockTool(server: McpServer): void {
  server.registerTool(
    'get_block',
    {
      description:
        'Get documentation for a Compose UI block (pre-built dashboard pattern). Supports fuzzy matching if exact slug not found.',
      inputSchema,
    },
    async ({ slug, sections }) => {
      // Try exact match first
      const content = await getBlockContent(slug)

      if (content) {
        // Extract requested sections or return full content
        const filteredContent = extractSections(
          content,
          sections as SectionType[] | undefined,
        )

        const result: GetBlockSuccessResult = {
          slug,
          name: slugToName(slug),
          found: true,
          content: filteredContent || content,
        }

        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(result, null, 2),
            },
          ],
        }
      }

      // No exact match - try fuzzy matching
      const allBlocks = await getBlocksList()
      const fuzzyResults = fuzzySearch(slug, allBlocks, (b) => b.slug, 0.2)

      const suggestions = fuzzyResults.slice(0, 5).map((r) => ({
        slug: r.item.slug,
        name: r.item.name,
        score: Math.round(r.score * 100) / 100,
      }))

      const suggestionText =
        suggestions.length > 0
          ? `Did you mean '${suggestions[0].slug}'?`
          : 'No similar blocks found.'

      const result: GetBlockNotFoundResult = {
        slug,
        found: false,
        suggestions,
        message: `Block '${slug}' not found. ${suggestionText}`,
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
