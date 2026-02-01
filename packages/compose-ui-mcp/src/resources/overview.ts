import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

const text = `# Compose UI

A React component library built on Base UI primitives with Tailwind CSS v4 styling.

## Key Principles
- Composition over configuration
- Base UI handles accessibility and behavior
- Tailwind CSS for styling
- TypeScript-first

## Using This MCP Server

To work with Compose UI components, use the available tools:

- \`compose-ui://components\`: List of available components
- \`compose-ui://components/{slug}\`: Documentation for a specific component
`

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
          text,
        },
      ],
    }),
  )
}
