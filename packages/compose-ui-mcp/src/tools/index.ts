import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerFindComponentsTool } from './find-components.js'
import { registerGetComponentTool } from './get-component.js'

export function registerTools(server: McpServer): void {
  registerFindComponentsTool(server)
  registerGetComponentTool(server)
}
