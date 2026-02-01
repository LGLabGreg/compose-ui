import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import {
  getComponentContent,
  getComponentsList,
  slugToName,
} from '../lib/component-data.js'
import { fuzzySearch } from '../lib/fuzzy-match.js'
import { type SectionType, extractSections } from '../lib/markdown-parser.js'

const sectionTypes = [
  'overview',
  'installation',
  'import',
  'examples',
  'resources',
] as const

const inputSchema = {
  slug: z.string().describe('Component slug (e.g., "button", "alert-dialog")'),
  sections: z
    .array(z.enum(sectionTypes))
    .optional()
    .describe(
      'Filter sections: "overview", "installation", "import", "examples", "resources". Default: all.',
    ),
}

interface GetComponentSuccessResult {
  slug: string
  name: string
  found: true
  content: string
}

interface GetComponentNotFoundResult {
  slug: string
  found: false
  suggestions: Array<{ slug: string; name: string; score: number }>
  message: string
}

export function registerGetComponentTool(server: McpServer): void {
  server.registerTool(
    'get_component',
    {
      description:
        'Get documentation for a Compose UI component. Supports fuzzy matching if exact slug not found.',
      inputSchema,
    },
    async ({ slug, sections }) => {
      // Try exact match first
      const content = await getComponentContent(slug)

      if (content) {
        // Extract requested sections or return full content
        const filteredContent = extractSections(
          content,
          sections as SectionType[] | undefined,
        )

        const result: GetComponentSuccessResult = {
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
      const allComponents = await getComponentsList()
      const fuzzyResults = fuzzySearch(slug, allComponents, (c) => c.slug, 0.2)

      const suggestions = fuzzyResults.slice(0, 5).map((r) => ({
        slug: r.item.slug,
        name: r.item.name,
        score: Math.round(r.score * 100) / 100,
      }))

      const suggestionText =
        suggestions.length > 0
          ? `Did you mean '${suggestions[0].slug}'?`
          : 'No similar components found.'

      const result: GetComponentNotFoundResult = {
        slug,
        found: false,
        suggestions,
        message: `Component '${slug}' not found. ${suggestionText}`,
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
