import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

const text = `# Compose UI

A React component library built on Base UI primitives with Tailwind CSS v4 styling.

## Key Principles
- Composition over configuration
- Base UI handles accessibility and behavior
- Tailwind CSS for styling
- TypeScript-first

## Available Tools

Use these tools to access component documentation:

- **find_components**: Fuzzy search all components by name
- **get_component**: Get full documentation for a specific component (supports section filtering)

## Styling Guidelines

- Components are **pre-styled and ready to use** - do not add custom CSS, Tailwind classes, or inline styles
- Only add custom styling if the user explicitly requests it
- Use built-in variant props (e.g., \`variant="outline"\`, \`size="sm"\`) for different appearances
- Use specific import paths: \`import { Button } from '@lglab/compose-ui/button'\`

## Form Building

When building forms, **always use \`get_component({ slug: "form" })\`** to retrieve complete examples before writing any form code.

The Form docs include 5 integration patterns:
- Default (useState)
- useActionState
- Zod validation
- React Hook Form
- TanStack Form

Key patterns:
- \`FormRoot\` wraps the entire form
- \`FieldRoot\` wraps each field with \`FieldLabel\`, \`FieldControl\`, \`FieldDescription\`, \`FieldError\`
- \`FieldsetRoot\` groups related fields (radio groups, checkbox groups)
- Use \`FieldValidity\` for custom validation messages
- Use the \`errors\` prop on \`FormRoot\` for server-side validation
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
