import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerFindBlocksTool } from './find-blocks.js'
import { registerFindComponentsTool } from './find-components.js'
import { registerGetBlockTool } from './get-block.js'
import { registerGetComponentTool } from './get-component.js'

export function registerTools(server: McpServer): void {
  registerFindBlocksTool(server)
  registerFindComponentsTool(server)
  registerGetBlockTool(server)
  registerGetComponentTool(server)
}
