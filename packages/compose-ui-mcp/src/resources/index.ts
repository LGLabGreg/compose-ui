import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerBlockDocResource, registerBlocksResource } from './blocks.js'
import { registerComponentDocResource, registerComponentsResource } from './components.js'
import { registerOverviewResource } from './overview.js'

export function registerResources(server: McpServer): void {
  registerOverviewResource(server)
  registerBlockDocResource(server)
  registerBlocksResource(server)
  registerComponentDocResource(server)
  registerComponentsResource(server)
}
