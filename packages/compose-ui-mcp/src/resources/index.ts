import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerComponentDocResource, registerComponentsResource } from './components.js'
import { registerOverviewResource } from './overview.js'

export function registerResources(server: McpServer): void {
  registerOverviewResource(server)
  registerComponentsResource(server)
  registerComponentDocResource(server)
}
